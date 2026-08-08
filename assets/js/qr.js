/* Charm of Flowers — QR platba (SPD, český standard „QR Platba")
   Vše se počítá v prohlížeči návštěvníka: žádný server, žádná
   třetí strana, číslo účtu neopouští stránku jinak než v QR kódu.
   Kód kreslí qrcode.js (Kazuhiko Arase, MIT) — knihovna je u nás
   doma v assets/js, nikam se pro ni nechodí. */
(function () {
  'use strict';

  var IBAN = 'CZ9408000000005391596093';   /* 5391596093/0800, Česká spořitelna */
  var ZALOHA = 500;                        /* minimální záloha dle klientky */

  var $ = function (id) { return document.getElementById(id); };
  var box = $('qrBox');
  if (!box || typeof qrcode !== 'function') return;

  /* SPD snese jen ASCII — diakritiku shodíme, ať to banky přečtou */
  function ascii(s) {
    return String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\x20-\x7E]/g, '')
      .replace(/\*/g, ' ')
      .toUpperCase()
      .slice(0, 60)
      .trim();
  }

  function payload(amount, msg) {
    var p = 'SPD*1.0*ACC:' + IBAN;
    if (amount > 0) p += '*AM:' + amount.toFixed(2);
    p += '*CC:CZK';
    var m = ascii(msg);
    if (m) p += '*MSG:' + m;
    return p;
  }

  /* vrací <img> s QR kódem; typeNumber 0 = automatická velikost */
  function draw(text, cell) {
    var qr = qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    return { html: qr.createImgTag(cell || 6, 0), qr: qr };
  }

  var amountEl = $('qrAmount');
  var msgEl = $('qrMsg');
  var outEl = $('qrOut');
  var dlEl = $('qrDownload');
  var lastQr = null;

  function render() {
    var amount = parseFloat(String(amountEl.value).replace(',', '.'));
    if (!isFinite(amount) || amount <= 0) amount = 0;
    var text = payload(amount, msgEl.value);
    var made = draw(text, 6);
    lastQr = made.qr;
    box.innerHTML = made.html;
    var img = box.querySelector('img');
    if (img) {
      img.alt = 'QR platba ' + (amount ? amount.toFixed(2) + ' CZK' : '');
      img.removeAttribute('width'); img.removeAttribute('height');
    }
    outEl.textContent = amount
      ? amount.toLocaleString('cs-CZ', { minimumFractionDigits: 0 }) + ' Kč'
      : '—';
    dlEl.dataset.amount = amount ? String(amount) : '';

    /* SPD unese jen latinku — kdyby někdo psal azbukou, zpráva by
       z kódu tiše vypadla. Radši to řekneme nahlas. Oba texty jsou
       v HTML (a tím i ve slovníku), přepínáme jen viditelnost. */
    var hint = $('qrMsgHint');
    var warn = $('qrMsgWarn');
    if (hint && warn) {
      var typed = msgEl.value.trim();
      var lost = typed.length > 0 && ascii(typed).length < Math.ceil(typed.length / 2);
      hint.hidden = lost;
      warn.hidden = !lost;
    }
  }

  /* stažení jako PNG — pro tisk u pokladny i pro poslání do direktu */
  dlEl.addEventListener('click', function (e) {
    e.preventDefault();
    if (!lastQr) return;
    var cells = lastQr.getModuleCount();
    var scale = Math.max(8, Math.ceil(1024 / cells));
    var pad = 4 * scale;
    var size = cells * scale + pad * 2;
    var cv = document.createElement('canvas');
    cv.width = cv.height = size;
    var ctx = cv.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#102713';
    for (var r = 0; r < cells; r++) {
      for (var c = 0; c < cells; c++) {
        if (lastQr.isDark(r, c)) ctx.fillRect(pad + c * scale, pad + r * scale, scale, scale);
      }
    }
    var a = document.createElement('a');
    a.href = cv.toDataURL('image/png');
    a.download = 'charm-of-flowers-qr-' + (dlEl.dataset.amount || 'platba') + '-kc.png';
    a.click();
  });

  /* rychlé částky */
  document.querySelectorAll('[data-amount]').forEach(function (b) {
    if (b === dlEl) return;
    b.addEventListener('click', function () {
      amountEl.value = b.getAttribute('data-amount');
      render();
      amountEl.focus();
    });
  });

  amountEl.addEventListener('input', render);
  msgEl.addEventListener('input', render);
  document.addEventListener('langchange', render);

  amountEl.value = ZALOHA;
  render();

  /* pro ověření ve vývoji: window.__qrPayload() vrátí aktuální řetězec */
  window.__qrPayload = function () {
    var a = parseFloat(String(amountEl.value).replace(',', '.'));
    return payload(isFinite(a) ? a : 0, msgEl.value);
  };
  window.__qrMatrix = function () {
    if (!lastQr) return null;
    var n = lastQr.getModuleCount(), rows = [];
    for (var r = 0; r < n; r++) {
      var s = '';
      for (var c = 0; c < n; c++) s += lastQr.isDark(r, c) ? '1' : '0';
      rows.push(s);
    }
    return rows;
  };
})();
