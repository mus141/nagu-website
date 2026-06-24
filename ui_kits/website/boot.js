/* NAGU boot — loading screen + page-transition wipe.
   Plain JS, loaded with `defer` in <head> so it runs before the in-browser
   Babel compile, covering the blank/compiling gap. No build step. */
(function () {
  var d = document, root = d.documentElement;
  root.classList.add("js-on");

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LOGO = "../../assets/logos/Nagu-Logo-Secondary.png";

  /* ---------- build the loader overlay immediately ---------- */
  var loader = d.createElement("div");
  loader.className = "nw-loader";
  loader.setAttribute("role", "progressbar");
  loader.setAttribute("aria-label", "Loading NAGU");
  loader.innerHTML =
    '<div class="nw-loader-center">' +
      '<img class="nw-loader-logo" src="' + LOGO + '" alt="NAGU">' +
      '<div class="nw-loader-jp">読み込み中 · LOADING</div>' +
    '</div>' +
    '<div class="nw-loader-pct"><span class="nw-loader-num">0</span><span class="nw-loader-sign">%</span></div>' +
    '<div class="nw-loader-bar"><div class="nw-loader-fill"></div></div>';

  function mount() {
    if (d.body && !d.body.contains(loader)) d.body.appendChild(loader);
  }
  if (d.body) mount(); else d.addEventListener("DOMContentLoaded", mount);

  var fill = loader.querySelector(".nw-loader-fill");
  var num = loader.querySelector(".nw-loader-num");
  var pct = 0, done = false, start = Date.now();
  var MIN_MS = 3000;   // minimum on-screen loading time (~3s)

  function set(p) {
    p = Math.max(0, Math.min(100, Math.round(p)));
    if (fill) fill.style.width = p + "%";
    if (num) num.textContent = p;
  }

  /* drive the bar from elapsed time so it climbs steadily to ~95% across
     MIN_MS, then snaps to 100 when both content is ready and time is up */
  var tick = setInterval(function () {
    if (done) return;
    var p = (Date.now() - start) / MIN_MS * 95;       // 0 -> 95 over MIN_MS
    if (p > 95) p = 95;
    if (p > pct) { pct = p; set(pct); }
  }, 60);

  function contentReady() {
    var c = d.getElementById("page") || d.getElementById("site");
    return !!(c && c.children.length > 0);
  }

  function reveal() {
    if (done) return; done = true;
    clearInterval(tick);
    set(100);
    setTimeout(function () {
      loader.classList.add("is-out");                 // slides up, red bar sweeps the page
      window.dispatchEvent(new Event("nagu:revealed"));
      setTimeout(function () { loader.style.display = "none"; }, 650);
    }, 220);
  }

  function whenReady() {
    var elapsed = Date.now() - start;
    if (contentReady() && elapsed > MIN_MS) return reveal();
    if (elapsed > MIN_MS + 7000) return reveal();    // safety net
    setTimeout(whenReady, 80);
  }
  whenReady();

  /* ---------- page-transition wipe on internal links ---------- */
  function isInternal(a) {
    if (!a) return false;
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#") return false;
    if (a.target && a.target !== "_self") return false;
    if (a.hasAttribute("download")) return false;
    if (/^(https?:|mailto:|tel:)/i.test(href)) return false;   // external / non-page
    return /\.html(\?|#|$)/.test(href) || href === "" ;
  }

  d.addEventListener("click", function (e) {
    if (reduce || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest("a");
    if (!isInternal(a)) return;
    var href = a.getAttribute("href");
    e.preventDefault();
    // bring the overlay back down from the top to cover, then navigate
    loader.style.display = "";
    loader.classList.remove("is-out");
    loader.classList.add("is-leaving");
    void loader.offsetWidth;                          // reflow
    loader.classList.remove("is-leaving");            // animates translateY(-100%) -> 0
    if (num) num.textContent = "";                    // hide stale % during the wipe
    if (fill) fill.style.width = "100%";
    setTimeout(function () { window.location.href = href; }, 460);
  }, true);

  // restore on bfcache back-nav so the overlay never stays stuck covering
  window.addEventListener("pageshow", function (ev) {
    if (ev.persisted) { loader.classList.add("is-out"); loader.style.display = "none"; }
  });

  /* ---------- fit the fixed-1440 home to the viewport ----------
     The homepage hero/sections are a fixed 1440px comp; on smaller screens
     they ran off both edges. `zoom` scales layout (not just paint) so the whole
     comp shrinks to fit with no horizontal overflow and no leftover space.
     Inner pages are fluid and unaffected (no .nw-home-fit element). */
  function fitHome() {
    var wrap = d.querySelector(".nw-home-fit");
    if (!wrap) return;
    var vw = d.documentElement.clientWidth;
    wrap.style.zoom = Math.min(1, vw / 1440);
  }
  var fitTries = 0;
  function fitPoll() { fitHome(); if (++fitTries < 40 && !d.querySelector(".nw-home-fit")) setTimeout(fitPoll, 100); }
  fitPoll();
  window.addEventListener("load", fitHome);
  window.addEventListener("resize", fitHome);
  window.addEventListener("nagu:revealed", fitHome);
})();
