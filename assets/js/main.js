/* Charm of Flowers — interakce
   Bez závislostí. Vše podstatné funguje i bez JS, script přidává komfort:
   menu, lightbox, FAQ, formulář, katalog z JSON, chat. */
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

  /* ---- stín hlavičky ---- */
  var head = document.querySelector('.site-head');
  var onScroll = function () {
    if (head) head.classList.toggle('is-stuck', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- aktivní položka navigace (jen kotvy na téže stránce) ---- */
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

  /* ---- chat ---- */
  var chatFab = document.getElementById('chatFab');
  var chatPanel = document.getElementById('chatPanel');
  if (chatFab && chatPanel) {
    var chatSet = function (open) {
      chatPanel.hidden = !open;
      chatFab.setAttribute('aria-expanded', String(open));
    };
    chatFab.addEventListener('click', function () { chatSet(chatPanel.hidden); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !chatPanel.hidden) { chatSet(false); chatFab.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (!chatPanel.hidden && !e.target.closest('.chat')) chatSet(false);
    });

    /* ---- živý chat (Smartsupp) ----
       Skript se stahuje AŽ na kliknutí. Do té doby web neukládá žádné
       cookie třetí strany, takže nepotřebuje lištu souhlasu — návštěvník
       si chat vyžádá sám. Vlastní bublina Smartsuppu je skrytá
       (hideWidget), aby v rohu nebyly dvě. */
    var liveBtn = document.getElementById('liveChat');
    if (liveBtn) {
      var ssLoaded = false;
      liveBtn.addEventListener('click', function () {
        if (!ssLoaded) {
          ssLoaded = true;
          liveBtn.classList.add('is-loading');
          setTimeout(function () { liveBtn.classList.remove('is-loading'); }, 2500);

          window._smartsupp = window._smartsupp || {};
          window._smartsupp.key = '0f089ed21494eb556856f382d2873d177853118b';
          window._smartsupp.hideWidget = true;
          window._smartsupp.color = '#102713';
          window._smartsupp.privacyNoticeEnabled = true;

          (function (d) {
            var s, c, o = window.smartsupp = function () { o._.push(arguments); };
            o._ = [];
            s = d.getElementsByTagName('script')[0];
            c = d.createElement('script');
            c.type = 'text/javascript'; c.charset = 'utf-8'; c.async = true;
            c.src = 'https://www.smartsuppchat.com/loader.js?';
            s.parentNode.insertBefore(c, s);
          })(document);

          window.smartsupp('language', document.documentElement.lang === 'uk' ? 'uk' : 'cs');
          /* Až návštěvník chat zavře, schováme i bublinu Smartsuppu —
             jinak by sedla přesně na naši a naše kanály by byly nedostupné. */
          window.smartsupp('on', 'messenger_close', function () { window.smartsupp('chat:hide'); });
        }

        window.smartsupp('chat:show');
        window.smartsupp('chat:open');
        chatSet(false);
      });
    }
  }

  /* ---- katalog z JSON ----
     Data (položky i filtry) žijí v assets/data/katalog.json,
     upravují se v admin.html. Tady se jen skládá HTML. */
  var katEl = document.getElementById('kat');
  var filtersEl = document.getElementById('filters');
  if (katEl && katEl.getAttribute('data-src')) {
    var katData = null;
    var active = { cena: 'all', prilezitost: 'all' };

    var lang = function () { return document.documentElement.lang === 'uk' ? 'uk' : 'cs'; };
    var esc = function (s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    };

    var TAGS = { season: 'tagSeason', wedding: 'tagWedding', box: 'tagBox', decor: 'tagDecor' };
    /* překlady mimo slovník i18n — malé UI katalogu */
    var UI = {
      cs: { all: 'Vše', cta: 'Chci tuhle', want: 'Mám zájem o: ', empty: 'Tomuhle filtru zatím nic neodpovídá — zkuste jiný, nebo nám napište.' },
      uk: { all: 'Усі', cta: 'Хочу цей', want: 'Мене цікавить: ', empty: 'Під цей фільтр поки нічого не підходить — спробуйте інший або напишіть нам.' }
    };
    var TAG_TX = {
      tagSeason: { cs: 'Sezónní', uk: 'Сезонний' },
      tagWedding: { cs: 'Svatební', uk: 'Весільний' },
      tagBox: { cs: 'Box', uk: 'Коробка' },
      tagDecor: { cs: 'Výzdoba', uk: 'Оформлення' }
    };

    var matches = function (item) {
      if (item.always) return true;
      var okCena = active.cena === 'all' || item.tier === active.cena;
      var okOcc = active.prilezitost === 'all' ||
        (item.occasions || []).indexOf(active.prilezitost) !== -1;
      return okCena && okOcc;
    };

    var renderChips = function () {
      if (!filtersEl || !katData) return;
      var L = lang();
      ['cena', 'prilezitost'].forEach(function (group) {
        var box = filtersEl.querySelector('[data-group="' + group + '"]');
        if (!box) return;
        var mk = function (id, label) {
          var on = active[group] === id;
          return '<button class="chip' + (on ? ' is-on' : '') + '" type="button" data-f="' + esc(id) + '" aria-pressed="' + on + '">' + esc(label) + '</button>';
        };
        var html = mk('all', UI[L].all);
        (katData.filters[group] || []).forEach(function (f) { html += mk(f.id, f[L] || f.cs); });
        box.innerHTML = html;
      });
    };

    var renderCards = function () {
      if (!katData) return;
      var L = lang();
      var html = '';
      var shown = 0;
      katData.items.forEach(function (it, i) {
        if (it.visible === false) return;
        var vis = matches(it);
        if (vis) shown++;
        var name = (it.name && (it.name[L] || it.name.cs)) || '';
        var flowers = (it.flowers && (it.flowers[L] || it.flowers.cs)) || '';
        var price = (it.price && (it.price[L] || it.price.cs)) || '';
        var alt = (it.alt && (it.alt[L] || it.alt.cs)) || '';
        var tagKey = TAGS[it.tag];
        var tag = tagKey ? '<span class="kat-item__tag">' + esc(TAG_TX[tagKey][L]) + '</span>' : '';
        var cta = './?kytice=' + encodeURIComponent(name) + '#kontakt';

        var photo;
        if (it.img) {
          photo =
            (function () {
              var b = esc(it.img);
              var W = it.w || 1000;
              var sizes = '(max-width: 620px) 46vw, (max-width: 1000px) 45vw, 280px';
              var has480 = W > 500;
              var wsrc = has480 ? b + '-480.webp 480w, ' + b + '.webp ' + W + 'w' : b + '.webp';
              var jsrc = has480 ? ' srcset="' + b + '-480.jpg 480w, ' + b + '.jpg ' + W + 'w" sizes="' + sizes + '"' : '';
              return '<figure class="kat-item__photo">' + tag +
                '<picture><source type="image/webp" srcset="' + wsrc + '"' + (has480 ? ' sizes="' + sizes + '"' : '') + '>' +
                '<img src="' + b + '.jpg"' + jsrc +
                (it.w ? ' width="' + it.w + '" height="' + it.h + '"' : '') +
                ' loading="lazy" decoding="async" alt="' + esc(alt) + '"></picture></figure>';
            })();
        } else {
          photo =
            '<div class="kat-item__photo kat-item__orn" aria-hidden="true">' +
            '<svg class="orn" focusable="false"><use href="#orn-tulip"/></svg></div>';
        }

        html +=
          '<article class="kat-item' + (it.img ? '' : ' kat-item--fl') + (vis ? '' : ' is-hidden') + '" data-i="' + i + '">' +
          photo +
          '<div class="kat-item__body">' +
          '<h3 class="kat-item__t">' + esc(name) + '</h3>' +
          '<p class="kat-item__f">' + esc(flowers) + '</p>' +
          '<div class="kat-item__row">' +
          '<span class="kat-item__price">' + esc(price) + '</span>' +
          '<a class="kat-item__go" href="' + esc(cta) + '">' + esc(UI[L].cta) + '</a>' +
          '</div></div></article>';
      });
      html += '<p class="kat-note kat-note--empty"' + (shown ? ' hidden' : '') + '>' + esc(UI[L].empty) + '</p>';
      katEl.innerHTML = html;
    };

    var renderAll = function () { renderChips(); renderCards(); };

    /* Filtrovani drive prestavelo celou mrizku pres innerHTML: fotky se
       nacitaly znovu a pod nimi probleskavala prazdna dlazdice. Karty
       uz pritom umi tridu is-hidden, takze staci prepnout ji — DOM
       zustava, fotky zustavaji nactene a nemizi ani fokus. */
    var applyFilter = function () {
      if (!katData) return;
      var shown = 0;
      katEl.querySelectorAll('.kat-item').forEach(function (el) {
        var it = katData.items[+el.getAttribute('data-i')];
        if (!it) return;
        var vis = matches(it);
        el.classList.toggle('is-hidden', !vis);
        if (vis) shown++;
      });
      var empty = katEl.querySelector('.kat-note--empty');
      if (empty) empty.hidden = shown > 0;
    };

    var syncChips = function () {
      if (!filtersEl) return;
      ['cena', 'prilezitost'].forEach(function (group) {
        var box = filtersEl.querySelector('[data-group="' + group + '"]');
        if (!box) return;
        box.querySelectorAll('.chip').forEach(function (ch) {
          var on = ch.getAttribute('data-f') === active[group];
          ch.classList.toggle('is-on', on);
          ch.setAttribute('aria-pressed', String(on));
        });
      });
    };

    if (filtersEl) {
      filtersEl.addEventListener('click', function (e) {
        var chip = e.target.closest('.chip');
        if (!chip) return;
        var group = chip.closest('[data-group]').getAttribute('data-group');
        active[group] = chip.getAttribute('data-f');
        syncChips();
        applyFilter();
      });
    }

    document.addEventListener('langchange', renderAll);

    fetch(katEl.getAttribute('data-src'))
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) { katData = d; renderAll(); })
      .catch(function () {
        katEl.innerHTML = '<p class="kat-note">Katalog se nepodařilo načíst. Aktuální nabídku najdete na ' +
          '<a href="https://www.instagram.com/charmofflowers.cz/">Instagramu</a>, ' +
          'nebo zavolejte +420 723 477 375.</p>';
      });
  }

  /* ---- galerie z Instagramu ----
     assets/data/instagram.json plní denně GitHub Action; dokud
     neexistuje, zůstává statická galerie. Dlaždice vedou na posty. */
  var galGrid = document.getElementById('grid');
  if (galGrid) {
    var escIg = function (s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    };
    fetch('assets/data/instagram.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.posts || !d.posts.length) return;
        var upd = document.getElementById('igUpd');
        if (upd && d.updated) {
          var dt = new Date(d.updated);
          var t = document.getElementById('igUpdDate');
          if (t && !isNaN(dt)) t.textContent = dt.getDate() + '. ' + (dt.getMonth() + 1) + '. ' + dt.getFullYear();
          upd.hidden = false;
        }
        galGrid.innerHTML = d.posts.slice(0, 6).map(function (p) {
          var b = escIg(p.img);
          var sz = '(max-width: 760px) 46vw, 31vw';
          var w = p.w || 0;
          var has480 = w > 500;
          var ws = has480 ? b + '-480.webp 480w, ' + b + '.webp ' + w + 'w' : b + '.webp';
          var js = has480 ? ' srcset="' + b + '-480.jpg 480w, ' + b + '.jpg ' + w + 'w" sizes="' + sz + '"' : '';
          return '<a class="shot shot--ig" href="' + escIg(p.permalink) + '" target="_blank" rel="noopener">' +
            '<picture><source type="image/webp" srcset="' + ws + '"' + (has480 ? ' sizes="' + sz + '"' : '') + '>' +
            '<img src="' + b + '.jpg"' + js + ' loading="lazy" decoding="async" alt="' + escIg(p.alt) + '"></picture></a>';
        }).join('');
      })
      .catch(function () { /* statická galerie zůstává */ });
  }

  /* ---- předvyplnění poptávky z katalogu (?kytice=…) ---- */
  var msgField = document.getElementById('f-msg');
  var wanted = new URLSearchParams(location.search).get('kytice');
  if (msgField && wanted) {
    var d = document.documentElement.lang === 'uk' ? 'Мене цікавить: ' : 'Mám zájem o: ';
    if (!msgField.value) msgField.value = d + wanted + '\n';
    var u2 = new URL(location.href);
    u2.searchParams.delete('kytice');
    history.replaceState(null, '', u2);
  }

  /* ---- potvrzení po odeslání formuláře (návrat z FormSubmit) ---- */
  var formOk = document.getElementById('formOk');
  if (formOk && new URLSearchParams(location.search).get('sent') === '1') {
    formOk.hidden = false;
    var u = new URL(location.href);
    u.searchParams.delete('sent');
    history.replaceState(null, '', u);
  }

  /* ---- dojezd na kotvu z adresy (#kontakt) ----
     i18n.js i blok výše volají history.replaceState kvůli ?lang / ?kytice
     a prohlížeč tím zruší svůj vlastní skok na kotvu. Doskočíme sami. */
  if (location.hash.length > 1) {
    var anchor = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (anchor) {
      requestAnimationFrame(function () {
        anchor.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      });
    }
  }

  /* ---- FAQ: otevřená vždy jen jedna otázka ---- */
  var faq = document.getElementById('faq');
  if (faq) {
    faq.addEventListener('toggle', function (e) {
      if (!e.target.open) return;
      /* Zavření ostatních otázek ubere výšku nad tou otevřenou a ta
         uskočí pod prstem — na telefonu o 137 px. Držíme ji proto
         na místě: změříme, kde byla, a o rozdíl posuneme stránku. */
      var head = e.target.querySelector('summary') || e.target;
      var before = head.getBoundingClientRect().top;
      faq.querySelectorAll('details[open]').forEach(function (dd) {
        if (dd !== e.target) dd.open = false;
      });
      var shift = head.getBoundingClientRect().top - before;
      /* scrollBy tu neposouva (dedi plynule scroll-behavior a v nekterych
         prohlizecich se zahodi) — absolutni skok bez animace je spolehlivy */
      if (shift) window.scrollTo({ top: window.scrollY + shift, behavior: 'instant' });
    }, true);
  }

  /* ---- pozadí v pohybu se zastaví, jakmile zmizí z obrazovky ----
     stín v hero i světlo v tmavé sekci jinak běží pořád dokola
     i o deset obrazovek níž — zbytečně ubírají baterku na mobilu */
  var moving = document.querySelectorAll('.hero__shadow, .sec--green .sec__light');
  if (!reduce && moving.length && 'IntersectionObserver' in window) {
    var mo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        en.target.style.animationPlayState = en.isIntersecting ? 'running' : 'paused';
      });
    }, { rootMargin: '120px' });
    moving.forEach(function (el) { mo.observe(el); });
  }

  /* ---- odhalování bloků při scrollu ---- */
  var revealables = document.querySelectorAll(
    '.sec__head, .card, .tier, .pricelist, .shot, .review, .reviews__cta, ' +
    '.story__photo, .story__text, .faq__item, .form, .info, .contact__map, .step'
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

    /* Pojistka: kdyby observer nikdy nespustil, obsah se odkryje sám. */
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
      lbCap.textContent = src.alt + ' (' + (at + 1) + ' / ' + shots.length + ')';
    };

    var open = function (i) {
      opener = document.activeElement;
      show(i);
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      void lb.offsetWidth;
      lb.classList.add('is-open');
      document.getElementById('lbX').focus();
    };

    var close = function () {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
      var done = function () { lb.hidden = true; lbImg.src = ''; };
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
        var f = lb.querySelectorAll('button');
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
})();
