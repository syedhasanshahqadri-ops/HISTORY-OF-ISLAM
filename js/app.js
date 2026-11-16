/* ==========================================================
   HISTORY OF ISLAM | hub site
   - English / Urdu switch (key "lang"), light / dark (key "theme")
   - The same two keys are used by the three archives, so the
     reader's choice carries across the whole site.
   ========================================================== */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- safe storage ---------- */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- Urdu text (English lives in the HTML) ---------- */
  var UR = {
    brand: "تاریخِ اسلام",
    navHome: "ہوم", navEras: "ادوار", navTime: "ٹائم لائن", navAbout: "تعارف", navInstall: "انسٹال",
    langLabel: "زبان", themeToLight: "روشن موڈ میں تبدیل کریں", themeToDark: "گہرے موڈ میں تبدیل کریں", menuLabel: "مینو",
    eyebrow: "دو لسانی تاریخی آرکائیو",
    h1: "تاریخِ <span class=\"gold\">اسلام</span>",
    lead: "خلفائے راشدین سے آخری عثمانی سلطان تک، اسلام کی عظیم خلافتوں اور سلطنتوں کا سفر۔ حکمران، فتوحات، خاندان اور میراث، اردو اور انگریزی میں۔",
    cta1: "ادوار دیکھیں", cta2: "ٹائم لائن دیکھیں",
    st1: "آرکائیوز", st2: "حکمران", st3: "سالوں پر محیط", st4: "زبانیں",
    erasEyebrow: "تین آرکائیوز", erasTitle: "ایک دور منتخب کیجیے",
    erasSub: "ہر آرکائیو ایک مکمل الگ ویب سائٹ ہے، جس میں حکمرانوں کا تعارف، حصوں میں تلاش اور مکمل اردو و انگریزی متن موجود ہے۔",
    c1era: "<span dir=\"ltr\">632 – 661</span> عیسوی", c1t: "خلافتِ راشدہ", c1k: "خلفائے راشدین",
    c1d: "چار خلفائے راشدین اور حضرت حسن بن علی رضی اللہ عنہم: ان کی زندگی، فتوحات، خاندان اور میراث۔ ماخذ: تاریخ الخلفاء، امام جلال الدین سیوطی۔",
    c1n: "5 خلفاء",
    c2era: "<span dir=\"ltr\">661 – 750</span> عیسوی", c2t: "خلافتِ بنو امیہ", c2k: "دمشق کے خلفاء",
    c2d: "دمشق کے چودہ اموی خلفاء: ان کی زندگی، فتوحات، خاندان اور میراث۔ ماخذ: سیوطی، طبری اور ابنِ کثیر۔",
    c2n: "14 خلفاء",
    c3era: "تقریباً <span dir=\"ltr\">1299 – 1922</span> عیسوی", c3t: "سلطنتِ عثمانیہ", c3k: "آلِ عثمان کے سلاطین",
    c3d: "سلطنتِ عثمانیہ کے چھتیس سلاطین، عثمان اول سے محمد ششم تک: ان کی زندگی، جنگیں، خاندان اور میراث۔",
    c3n: "36 سلاطین",
    biling: "اردو اور انگریزی", open: "آرکائیو کھولیں",
    tlEyebrow: "تسلسلِ تاریخ", tlTitle: "صدیوں کا سفر", circa: "تقریباً",
    t1: "حضرت ابوبکر صدیق رضی اللہ عنہ سے خلافتِ راشدہ کا آغاز۔",
    t2: "حضرت امیر معاویہ رضی اللہ عنہ سے بنو امیہ کی خلافت کا آغاز۔",
    t3: "مروان ثانی کے ساتھ اموی دور کا اختتام۔",
    t4: "عثمان اول سے عثمانی سلاطین کے سلسلے کا آغاز۔",
    t5: "محمد ششم کے ساتھ سلطنت کا اختتام۔",
    abEyebrow: "منصوبے کے بارے میں", abTitle: "پڑھنے، تلاش کرنے اور شیئر کرنے کے لیے",
    f1t: "دو زبانیں", f1d: "ہر آرکائیو اردو اور انگریزی دونوں میں پڑھا جا سکتا ہے، اردو کے لیے جمیل نوری نستعلیق رسم الخط کے ساتھ۔",
    f2t: "ہر حکمران کی تلاش", f2d: "نام سے حکمران تلاش کریں، پھر ان کے تعارف میں جنگیں، وفات، بیٹے، بیٹیاں اور مزید ڈھونڈیں۔",
    f3t: "روشن اور گہرا موڈ", f3d: "روشن پارچمنٹ یا گہرے آدھی رات کے تھیم میں پڑھیں۔ آپ کا انتخاب تمام آرکائیوز میں برقرار رہتا ہے۔",
    ftag: "تاریخِ اسلام: ایک دو لسانی تاریخی آرکائیو۔", top: "اوپر جائیں",
    insEyebrow: "آف لائن رسائی", insTitle: "ایپ انسٹال کیجیے",
    insDesc: "تاریخِ اسلام کو اپنے فون، ٹیبلٹ یا کمپیوٹر پر انسٹال کیجیے۔ انسٹال کے بعد تینوں آرکائیوز انٹرنیٹ کے بغیر کھلتے ہیں۔",
    insBtn: "ایپ انسٹال کریں", insDone: "اس ڈیوائس پر انسٹال ہے", installLabel: "ایپ انسٹال کریں",
    offPrep: "آف لائن کاپی تیار ہو رہی ہے...", offReady: "آف لائن استعمال کے لیے تیار", offNone: "اس براؤزر میں آف لائن موڈ دستیاب نہیں۔",
    mTitle: "اپنے ڈیوائس پر انسٹال کیجیے",
    mAndroid: "اینڈرائیڈ یا کمپیوٹر (کروم، ایج): براؤزر مینو کھولیں اور انسٹال ایپ یا ہوم اسکرین میں شامل کریں منتخب کیجیے۔",
    mIos: "آئی فون یا آئی پیڈ (سفاری): شیئر کا بٹن دبائیں، پھر ہوم اسکرین میں شامل کریں منتخب کیجیے۔",
    mClose: "بند کریں"
  };
  var TITLE = { en: "History of Islam | تاریخِ اسلام", ur: "تاریخِ اسلام | History of Islam" };

  /* ---------- state ---------- */
  var lang = store.get("lang") === "ur" ? "ur" : "en";
  var theme = store.get("theme") === "light" ? "light" : "dark";

  var i18nEls = [].slice.call(document.querySelectorAll("[data-i18n]"));
  var labelEls = [].slice.call(document.querySelectorAll("[data-i18n-label]"));
  i18nEls.forEach(function (el) { el.setAttribute("data-en", el.innerHTML); });
  labelEls.forEach(function (el) { el.setAttribute("data-en-label", el.getAttribute("aria-label")); });
  var EN_LABELS = { themeToLight: "Switch to light mode", themeToDark: "Switch to dark mode", installLabel: "Install app" };
  var EN_STATE = { offPrep: "Preparing offline copy...", offReady: "Ready to use offline", offNone: "Offline mode is not available in this browser.", insDone: "Installed on this device" };

  function applyLang(animate) {
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");
    i18nEls.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.innerHTML = lang === "ur" && UR[k] != null ? UR[k] : el.getAttribute("data-en");
    });
    applyTheme(false);
    [].forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    var seg = document.querySelector(".seg");
    if (seg) seg.setAttribute("aria-label", lang === "ur" ? UR.langLabel : "Language");
    var burger = document.getElementById("burger");
    if (burger) burger.setAttribute("aria-label", lang === "ur" ? UR.menuLabel : "Menu");
    var ib = document.getElementById("installBtn");
    if (ib) ib.setAttribute("aria-label", lang === "ur" ? UR.installLabel : EN_LABELS.installLabel);
    document.title = TITLE[lang];
    if (animate) {
      var m = document.querySelector("main");
      m.classList.remove("lang-fade"); void m.offsetWidth; m.classList.add("lang-fade");
    }
  }

  function applyTheme(save) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeBtn");
    var key = theme === "dark" ? "themeToLight" : "themeToDark";
    if (btn) btn.setAttribute("aria-label", lang === "ur" ? UR[key] : EN_LABELS[key]);
    var meta = document.querySelector("meta[name=theme-color]");
    if (meta) meta.setAttribute("content", theme === "dark" ? "#10131D" : "#F6F1E5");
    if (save) store.set("theme", theme);
  }

  [].forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
    b.addEventListener("click", function () {
      var next = b.getAttribute("data-lang");
      if (next === lang) return;
      lang = next; store.set("lang", lang); applyLang(true);
    });
  });
  document.getElementById("themeBtn").addEventListener("click", function () {
    theme = theme === "dark" ? "light" : "dark"; applyTheme(true);
  });

  /* ---------- geometry helpers ---------- */
  function starPts(n, R, r, rot) {
    var p = [];
    for (var i = 0; i < n * 2; i++) {
      var a = (rot || 0) + i * Math.PI / n - Math.PI / 2, d = i % 2 ? r : R;
      p.push((Math.cos(a) * d).toFixed(2) + "," + (Math.sin(a) * d).toFixed(2));
    }
    return p.join(" ");
  }
  // small decorative stars (brand mark, ornaments)
  [].forEach.call(document.querySelectorAll("svg[data-star]"), function (svg) {
    var a = svg.getAttribute("data-star").split(",").map(Number);
    svg.innerHTML = "<polygon points=\"" + starPts(a[0], a[1], a[2], a[3]) + "\"/><circle r=\"2\" fill=\"currentColor\" style=\"fill:var(--accent);stroke:none\"/>";
  });

  /* ---------- hero emblem ---------- */
  (function emblem() {
    var el = document.getElementById("emblem");
    if (!el) return;
    var dots = "";
    for (var i = 0; i < 12; i++) {
      var a = i * Math.PI / 6;
      dots += "<circle cx=\"" + (Math.cos(a) * 268).toFixed(1) + "\" cy=\"" + (Math.sin(a) * 268).toFixed(1) + "\" r=\"3.2\" style=\"fill:var(--emb-line)\"/>";
    }
    var sq = function (rot) {
      var q = [];
      for (var k = 0; k < 4; k++) { var an = rot + k * Math.PI / 2 - Math.PI / 4; q.push((Math.cos(an) * 66).toFixed(2) + "," + (Math.sin(an) * 66).toFixed(2)); }
      return "<polygon points=\"" + q.join(" ") + "\" fill=\"rgba(255,255,255,.05)\" stroke=\"#F6E7BE\" stroke-opacity=\".9\" stroke-width=\"2\" stroke-linejoin=\"round\"/>";
    };
    el.innerHTML =
      "<svg viewBox=\"-300 -300 600 600\" role=\"img\" aria-label=\"\">" +
      "<defs>" +
      "<radialGradient id=\"halo\"><stop offset=\"0\" stop-color=\"#D2B77E\" stop-opacity=\".55\"/><stop offset=\"1\" stop-color=\"#D2B77E\" stop-opacity=\"0\"/></radialGradient>" +
      "<linearGradient id=\"orb\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#F3D98F\"/><stop offset=\".26\" stop-color=\"#9a8052\"/><stop offset=\".5\" stop-color=\"#1d3170\"/><stop offset=\".8\" stop-color=\"#0F1C3F\"/><stop offset=\"1\" stop-color=\"#10131D\"/></linearGradient>" +
      "<radialGradient id=\"hi\" cx=\".78\" cy=\".14\" r=\".55\"><stop offset=\"0\" stop-color=\"#9CC2FF\" stop-opacity=\".85\"/><stop offset=\"1\" stop-color=\"#9CC2FF\" stop-opacity=\"0\"/></radialGradient>" +
      "</defs>" +
      "<circle r=\"210\" fill=\"url(#halo)\" class=\"breath\"/>" +
      "<g class=\"spin\"><circle r=\"288\" style=\"fill:none;stroke:var(--emb-line);stroke-opacity:.5;stroke-width:2.6;stroke-dasharray:1 10;stroke-linecap:round\"/></g>" +
      "<circle r=\"268\" style=\"fill:none;stroke:var(--emb-line);stroke-opacity:.35\"/>" + dots +
      "<g class=\"spin rev\"><polygon points=\"" + starPts(16, 258, 212, 0) + "\" style=\"fill:none;stroke:var(--emb-line);stroke-opacity:.55;stroke-width:1.2;stroke-linejoin:round\"/></g>" +
      "<g class=\"spin fast\">" +
      "<polygon points=\"" + starPts(8, 212, 150, 0) + "\" style=\"fill:rgba(210,183,126,.06);stroke:var(--emb-line);stroke-opacity:.9;stroke-width:1.6;stroke-linejoin:round\"/>" +
      "<polygon points=\"" + starPts(8, 212, 150, Math.PI / 8) + "\" style=\"fill:none;stroke:var(--emb-line2);stroke-opacity:.9;stroke-width:1.3;stroke-linejoin:round\"/>" +
      "</g>" +
      "<circle r=\"142\" style=\"fill:none;stroke:var(--emb-line);stroke-opacity:.45\"/>" +
      "<g class=\"breath\"><circle r=\"122\" fill=\"url(#orb)\" stroke=\"rgba(255,255,255,.22)\" stroke-width=\"1.5\"/>" +
      "<circle r=\"122\" fill=\"url(#hi)\"/></g>" +
      "<g class=\"spin rev fast\">" + sq(0) + sq(Math.PI / 4) + "</g>" +
      "<circle r=\"16\" fill=\"#F6E7BE\" fill-opacity=\".9\"/><circle r=\"7\" fill=\"#10131D\"/>" +
      "</svg>";

    // pointer parallax (fine pointers only)
    var hero = document.getElementById("home");
    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches && hero) {
      hero.addEventListener("pointermove", function (e) {
        var r = hero.getBoundingClientRect();
        el.style.setProperty("--px", ((e.clientX - r.left) / r.width - .5).toFixed(3));
        el.style.setProperty("--py", ((e.clientY - r.top) / r.height - .5).toFixed(3));
      });
    }
  })();

  /* ---------- floating sparks ---------- */
  (function sparks() {
    var box = document.getElementById("sparks");
    if (!box) return;
    var n = window.innerWidth < 700 ? 14 : 28, html = "";
    for (var i = 0; i < n; i++) {
      var s = (2 + Math.random() * 3).toFixed(1);
      html += "<i class=\"spark\" style=\"left:" + (Math.random() * 100).toFixed(1) + "%;top:" + (40 + Math.random() * 60).toFixed(1) +
        "%;width:" + s + "px;height:" + s + "px;animation-duration:" + (7 + Math.random() * 9).toFixed(1) + "s;animation-delay:-" + (Math.random() * 12).toFixed(1) + "s\"></i>";
    }
    box.innerHTML = html;
  })();

  /* ---------- card artwork (pure SVG, one pattern per era) ---------- */
  (function cardArt() {
    var numerals = ["I", "II", "III"];
    var tile = [
      // I   : eight-pointed stars
      "<polygon points=\"" + starPts(8, 23, 14, 0) + "\" transform=\"translate(28 28)\"/><circle cx=\"0\" cy=\"0\" r=\"3\"/><circle cx=\"56\" cy=\"0\" r=\"3\"/><circle cx=\"0\" cy=\"56\" r=\"3\"/><circle cx=\"56\" cy=\"56\" r=\"3\"/>",
      // II  : interlaced circles
      "<circle cx=\"0\" cy=\"0\" r=\"28\"/><circle cx=\"56\" cy=\"0\" r=\"28\"/><circle cx=\"0\" cy=\"56\" r=\"28\"/><circle cx=\"56\" cy=\"56\" r=\"28\"/><circle cx=\"28\" cy=\"28\" r=\"28\"/>",
      // III : six-pointed stars in a lattice
      "<polygon points=\"" + starPts(6, 25, 14.5, 0) + "\" transform=\"translate(28 28)\"/><path d=\"M0 0L56 56M56 0L0 56\"/>"
    ];
    var bg = [
      "<linearGradient id=\"bg0\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#0F1C3F\"/><stop offset=\"1\" stop-color=\"#526A87\"/></linearGradient>",
      "<linearGradient id=\"bg1\" x1=\"1\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#0F1C3F\"/><stop offset=\"1\" stop-color=\"#10131D\"/></linearGradient>",
      "<linearGradient id=\"bg2\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#C2A56A\"/><stop offset=\".55\" stop-color=\"#0F1C3F\"/><stop offset=\"1\" stop-color=\"#10131D\"/></linearGradient>"
    ];
    var glow = [
      "<radialGradient id=\"gl0\" cx=\".5\" cy=\".5\" r=\".5\"><stop offset=\"0\" stop-color=\"#D2B77E\" stop-opacity=\".35\"/><stop offset=\"1\" stop-color=\"#D2B77E\" stop-opacity=\"0\"/></radialGradient>",
      "<radialGradient id=\"gl1\" cx=\".15\" cy=\"1\" r=\".8\"><stop offset=\"0\" stop-color=\"#D2B77E\" stop-opacity=\".55\"/><stop offset=\"1\" stop-color=\"#D2B77E\" stop-opacity=\"0\"/></radialGradient>",
      "<radialGradient id=\"gl2\" cx=\".85\" cy=\".1\" r=\".7\"><stop offset=\"0\" stop-color=\"#526A87\" stop-opacity=\".75\"/><stop offset=\"1\" stop-color=\"#526A87\" stop-opacity=\"0\"/></radialGradient>"
    ];
    [].forEach.call(document.querySelectorAll(".card[data-art]"), function (card) {
      var i = +card.getAttribute("data-art");
      card.querySelector(".art").innerHTML =
        "<svg viewBox=\"0 0 400 200\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><defs>" +
        bg[i] + glow[i] +
        "<pattern id=\"pt" + i + "\" width=\"56\" height=\"56\" patternUnits=\"userSpaceOnUse\"><g fill=\"none\" stroke=\"#D2B77E\" stroke-opacity=\".42\" stroke-width=\"1\" stroke-linejoin=\"round\">" + tile[i] + "</g></pattern>" +
        "<radialGradient id=\"fd" + i + "\" cx=\".5\" cy=\".5\" r=\".62\"><stop offset=\"0\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\".12\"/></radialGradient>" +
        "<mask id=\"mk" + i + "\"><rect width=\"400\" height=\"200\" fill=\"url(#fd" + i + ")\"/></mask></defs>" +
        "<rect width=\"400\" height=\"200\" fill=\"url(#bg" + i + ")\"/>" +
        "<rect width=\"400\" height=\"200\" fill=\"url(#gl" + i + ")\"/>" +
        "<rect width=\"400\" height=\"200\" fill=\"url(#pt" + i + ")\" mask=\"url(#mk" + i + ")\"/>" +
        "<g transform=\"translate(200 100)\">" +
        "<circle r=\"70\" fill=\"rgba(16,19,29,.55)\" stroke=\"#D2B77E\" stroke-opacity=\".55\"/>" +
        "<g class=\"spin\"><polygon points=\"" + starPts(8, 64, 44, 0) + "\" fill=\"none\" stroke=\"#D2B77E\" stroke-opacity=\".9\" stroke-width=\"1.3\" stroke-linejoin=\"round\"/>" +
        "<polygon points=\"" + starPts(8, 64, 44, Math.PI / 8) + "\" fill=\"none\" stroke=\"#8FA9C8\" stroke-opacity=\".8\" stroke-width=\"1\" stroke-linejoin=\"round\"/></g>" +
        "<circle r=\"36\" fill=\"#10131D\" fill-opacity=\".78\" stroke=\"#D2B77E\" stroke-opacity=\".8\"/>" +
        "<text y=\"2\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#F2E3B8\" style=\"font-family:Lora,Georgia,serif;font-weight:700;font-size:" + (i === 2 ? 28 : 34) + "px\">" + numerals[i] + "</text>" +
        "</g></svg>";
    });
  })();

  /* ---------- card spotlight + tilt ---------- */
  (function cards() {
    var fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    var calm = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    [].forEach.call(document.querySelectorAll(".card"), function (c) {
      c.addEventListener("pointermove", function (e) {
        var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        c.style.setProperty("--my", (y * 100).toFixed(1) + "%");
        if (fine && !calm && window.innerWidth > 1020) {
          c.style.transform = "perspective(1000px) rotateX(" + ((.5 - y) * 5).toFixed(2) + "deg) rotateY(" + ((x - .5) * 7).toFixed(2) + "deg) translateY(-8px)";
        }
      });
      c.addEventListener("pointerleave", function () { c.style.transform = ""; });
    });
  })();

  /* ---------- reveal on scroll + counters ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  function countUp(el) {
    var target = +el.getAttribute("data-count"), sep = el.getAttribute("data-sep");
    var fmt = function (n) { return sep ? n.toLocaleString("en-US") : String(n); };
    if (reduce) { el.textContent = fmt(target); return; }
    var t0 = null, dur = 1700;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * e));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = [].slice.call(document.querySelectorAll("[data-count]"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .14, rootMargin: "0px 0px -6% 0px" });
    [].forEach.call(document.querySelectorAll(".reveal"), function (el, i) {
      el.style.setProperty("--d", ((i % 3) * 0.12).toFixed(2) + "s"); io.observe(el);
    });
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); } });
    }, { threshold: .6 });
    counters.forEach(function (c) { co.observe(c); });
  } else {
    [].forEach.call(document.querySelectorAll(".reveal"), function (el) { el.classList.add("in"); });
    counters.forEach(countUp);
  }

  /* ---------- scroll progress + scroll-spy ---------- */
  var bar = document.getElementById("progress"), ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ")";
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  var links = [].slice.call(document.querySelectorAll(".nav a"));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["home", "eras", "timeline", "about", "install"].forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("burger"), nav = document.getElementById("nav");
  function closeMenu() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("click", function (e) { if (!nav.contains(e.target)) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  window.addEventListener("resize", function () { if (window.innerWidth > 860) closeMenu(); });

  /* ---------- install + offline ---------- */
  (function pwa() {
    var iBtn = document.getElementById("installBtn"), iMain = document.getElementById("installMain");
    var offText = document.getElementById("offText"), offBox = document.getElementById("offStatus");
    var modal = document.getElementById("modal"), mClose = document.getElementById("mClose");
    var deferred = null;
    var standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
    var installed = standalone;

    function setState(key) {
      offText.setAttribute("data-i18n", key);
      offText.setAttribute("data-en", EN_STATE[key]);
      offText.innerHTML = lang === "ur" ? UR[key] : EN_STATE[key];
      offBox.setAttribute("data-state", key === "offReady" || key === "insDone" ? "ready" : key === "offNone" ? "none" : "prep");
    }
    var swReady = false;
    function refresh() {
      if (installed) { iBtn.hidden = true; iMain.hidden = true; setState("insDone"); return; }
      iBtn.hidden = false; iMain.hidden = false;
      setState(swReady ? "offReady" : (offBox.getAttribute("data-state") === "none" ? "offNone" : "offPrep"));
    }
    function openModal() { modal.hidden = false; mClose.focus(); }
    function closeModal() { modal.hidden = true; }
    function install() {
      if (deferred) {
        var d = deferred; deferred = null;
        d.prompt();
        if (d.userChoice) d.userChoice.then(function (c) { if (c && c.outcome === "accepted") { installed = true; refresh(); } });
      } else { openModal(); }
    }
    iBtn.addEventListener("click", install);
    iMain.addEventListener("click", install);
    mClose.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });
    window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; });
    window.addEventListener("appinstalled", function () { installed = true; deferred = null; refresh(); });

    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("sw.js").catch(function () { offBox.setAttribute("data-state", "none"); refresh(); });
      });
      navigator.serviceWorker.ready.then(function () { swReady = true; refresh(); });
    } else {
      offBox.setAttribute("data-state", "none");
    }
    refresh();
    // re-render the status line whenever the language changes
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.addEventListener("click", function () { setTimeout(refresh, 0); }); });
  })();

  /* ---------- go ---------- */
  applyLang(false);
})();
