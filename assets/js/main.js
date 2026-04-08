document.addEventListener("DOMContentLoaded", function () {
  // ===== Scroll reveal observer =====
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

  // ===== Active nav link tracking =====
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const navSections = [];

  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) navSections.push({ id, el: section, link });
  });

  if (navSections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = navSections.find((s) => s.el === entry.target);
          if (!match) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            match.link.classList.add("active");
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" },
    );

    navSections.forEach((s) => navObserver.observe(s.el));
  }

  // ===== Section scroll parallax =====
  const heroContent = document.querySelector(".hero-content");
  const heroSection = document.querySelector(".hero-section");
  const scrollHint = document.querySelector(".scroll-hint");
  const allSections = document.querySelectorAll(".section");

  var ticking = false;

  function updateParallax() {
    var scrollY = window.scrollY;
    var viewH = window.innerHeight;

    // Hero parallax
    if (heroContent && heroSection) {
      var heroH = heroSection.offsetHeight;
      if (scrollY < heroH) {
        var p = scrollY / heroH;
        var opacity = 1 - p * 1.5;
        var ty = scrollY * 0.35;
        var sc = 1 - p * 0.08;
        heroContent.style.transform =
          "translateY(" + ty + "px) scale(" + sc + ")";
        heroContent.style.opacity = Math.max(0, opacity);
        if (scrollHint) scrollHint.style.opacity = Math.max(0, 0.5 - p * 2);
      }
    }

    // Content sections: fade + shift based on distance from viewport center.
    // Scrolling up reverses naturally since it's position-based.
    for (var i = 0; i < allSections.length; i++) {
      var sec = allSections[i];
      var rect = sec.getBoundingClientRect();
      var center = rect.top + rect.height / 2;
      var offset = (center - viewH / 2) / (viewH * 0.8);
      offset = Math.max(-1, Math.min(1, offset));

      var absFade = Math.abs(offset);
      var fadeOpacity = 1 - absFade * 0.6;
      var translateY = offset * 30;
      var scale = 1 - absFade * 0.03;

      sec.style.transform =
        "translateY(" + translateY + "px) scale(" + scale + ")";
      sec.style.opacity = Math.max(0, fadeOpacity);
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );

  // Position sections correctly on load
  requestAnimationFrame(updateParallax);

  // ===== Marble background: device tilt reactivity (mobile only) =====
  var marbleLayer = document.querySelector(".marble-layer");
  if (!marbleLayer) return;

  var reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!reducedMotion && window.DeviceOrientationEvent) {
    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var damping = 0.012;

    window.addEventListener(
      "deviceorientation",
      function (e) {
        if (e.gamma !== null && e.beta !== null) {
          targetX = Math.max(-1, Math.min(1, e.gamma / 30));
          targetY = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
        }
      },
      { passive: true },
    );

    function animateMarble() {
      currentX += (targetX - currentX) * damping;
      currentY += (targetY - currentY) * damping;

      var shiftX = currentX * 20;
      var shiftY = currentY * 16;
      marbleLayer.style.translate = shiftX + "px " + shiftY + "px";

      requestAnimationFrame(animateMarble);
    }

    animateMarble();
  }
});
