(() => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileNavigation = document.querySelector("[data-mobile-navigation]");

  const closeMenu = () => {
    if (!menuButton || !mobileNavigation) return;
    mobileNavigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Navigation öffnen");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = mobileNavigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Navigation schließen" : "Navigation öffnen");
  });

  mobileNavigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener(
    "scroll",
    () => header?.classList.toggle("is-scrolled", window.scrollY > 24),
    { passive: true },
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal-item").forEach((item) => observer.observe(item));
})();
