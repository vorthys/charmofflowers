/* Charm of Flowers — interakce
   Bez závislostí. Vše funguje i bez JS, script jen přidává komfort. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- rok v patičce ---- */
  var rok = document.getElementById('rok');
  if (rok) rok.textContent = new Date().getFullYear();

  /* ---- mobilní menu ---- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- hlavička a mobilní výzva k volání ---- */
  var head = document.querySelector('.site-head');
  var callbar = document.getElementById('callbar');
  var hero = document.querySelector('.hero');

  var onScroll = function () {
    var y = window.scrollY;
    if (head) head.classList.toggle('is-stuck', y > 8);
    if (callbar && hero) {
      /* číslo nabídneme až za heroem — nahoře je tlačítko i tak vidět,
         a nad patičkou by lišta překrývala kontakty */
      var past = y > hero.offsetHeight * .8;
      var atEnd = y + window.innerHeight > document.body.scrollHeight - 160;
      callbar.classList.toggle('is-on', past && !atEnd);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---- aktivní položka navigace ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-here', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- potvrzení po odeslání formuláře (návrat z FormSubmit) ---- */
  var formOk = document.getElementById('formOk');
  if (formOk && new URLSearchParams(location.search).get('sent') === '1') {
    formOk.hidden = false;
    var u = new URL(location.href);
    u.searchParams.delete('sent');
    history.replaceState(null, '', u);
  }

  /* ---- FAQ: otevřená vždy jen jedna otázka ---- */
  var faq = document.getElementById('faq');
  if (faq) {
    faq.addEventListener('toggle', function (e) {
      if (e.target.open) {
        faq.querySelectorAll('details[open]').forEach(function (d) {
          if (d !== e.target) d.open = false;
        });
      }
    }, true);
  }

  /* ---- odhalování bloků při scrollu ---- */
  var revealables = document.querySelectorAll(
    '.sec__head, .card, .tier, .pricelist, .shot, .review, .reviews__cta, ' +
    '.story__photo, .story__text, .faq__item, .form, .info, .contact__map'
  );

  if (!reduce && 'IntersectionObserver' in window) {
    var shown = false;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.style.transitionDelay = Math.min(i * 70, 350) + 'ms';
        el.classList.add('is-in');
        shown = true;
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    revealables.forEach(function (el) {
      el.classList.add('rv');
      io.observe(el);
    });

    /* Pojistka: kdyby observer z jakéhokoli důvodu nikdy nespustil,
       obsah se po chvíli odkryje sám. Radši žádná animace než
       neviditelná stránka. */
    setTimeout(function () {
      if (shown) return;
      io.disconnect();
      revealables.forEach(function (el) { el.classList.remove('rv'); });
    }, 2500);
  }

  /* ---- lightbox ---- */
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
  var opener = null;
  var at = 0;

  if (lb && lbImg && shots.length) {
    var show = function (i) {
      at = (i + shots.length) % shots.length;
      var src = shots[at].querySelector('img');
      lbImg.src = src.currentSrc || src.src;
      lbImg.alt = src.alt;
      lbCap.textContent = src.alt;
    };

    var open = function (i) {
      opener = document.activeElement;
      show(i);
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      /* vynutíme přepočet layoutu, aby přechod naskočil i tam,
         kde je requestAnimationFrame přiškrcený (např. na pozadí) */
      void lb.offsetWidth;
      lb.classList.add('is-open');
      document.getElementById('lbX').focus();
    };

    var close = function () {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      var done = function () {
        lb.hidden = true;
        lbImg.src = '';
      };
      reduce ? done() : setTimeout(done, 300);
      if (opener) opener.focus();
    };

    shots.forEach(function (b, i) {
      b.addEventListener('click', function () { open(i); });
    });

    document.getElementById('lbX').addEventListener('click', close);
    document.getElementById('lbPrev').addEventListener('click', function () { show(at - 1); });
    document.getElementById('lbNext').addEventListener('click', function () { show(at + 1); });

    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lb__fig')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(at - 1);
      else if (e.key === 'ArrowRight') show(at + 1);
      else if (e.key === 'Tab') {
        /* jednoduchá past na fokus uvnitř dialogu */
        var f = lb.querySelectorAll('button');
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
})();
