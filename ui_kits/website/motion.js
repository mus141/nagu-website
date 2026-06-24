/* NAGU motion — smooth scroll (Lenis) + scroll-reveal stagger.
   Loaded as the LAST text/babel script so it runs AFTER React has rendered
   (#page / #site populated). Reduced-motion safe: bails out entirely. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  /* ---------- smooth, slightly slow momentum scroll ---------- */
  if (window.Lenis) {
    try {
      var lenis = new window.Lenis({
        duration: 1.25,                                  // slow + dynamic
        easing: function (t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }, // easeOutExpo
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      window.__nwLenis = lenis;
      // keep the loader from leaving a scroll-locked state
      window.addEventListener("nagu:revealed", function () { lenis.start(); });
      // smooth in-page anchor jumps (e.g. #reminder, #join)
      document.addEventListener("click", function (e) {
        var a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return;
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -80, duration: 1.4 }); }
      });
    } catch (err) { /* native scroll is the fallback */ }
  }

  /* ---------- scroll-reveal: stagger section content into view ---------- */
  if (!("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("nw-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

  function tag(el, idx) {
    el.classList.add("nw-reveal");
    el.style.transitionDelay = (Math.min(idx, 9) * 60) + "ms";
    io.observe(el);
  }

  function scan() {
    document.querySelectorAll(".nw-section").forEach(function (sec) {
      var c = sec.querySelector(":scope > .nw-container");
      if (!c || c.dataset.nwScanned) return;
      c.dataset.nwScanned = "1";
      Array.prototype.slice.call(c.children).forEach(function (child, i) {
        if (child.classList.contains("nw-grid")) {
          // stagger the cards/items within a grid
          Array.prototype.slice.call(child.children).forEach(function (item, j) { tag(item, j); });
        } else {
          tag(child, i);
        }
      });
    });
  }

  scan();
  // re-scan once more in case a page renders content slightly late
  setTimeout(scan, 300);

  // failsafe: never let reveal leave content hidden — force-reveal everything
  // still pending after a few seconds (covers any missed IntersectionObserver).
  setTimeout(function () {
    document.querySelectorAll(".nw-reveal:not(.nw-in)").forEach(function (el) { el.classList.add("nw-in"); });
  }, 3500);
})();
