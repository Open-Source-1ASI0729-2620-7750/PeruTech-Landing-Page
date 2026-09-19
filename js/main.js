(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");

  if (menuToggle && navigation) {
    const closeMenu = () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    });

    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const currentYear = document.querySelector("[data-current-year]");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-35% 0px -55%" });
    sections.forEach((section) => observer.observe(section));
  }
})();
