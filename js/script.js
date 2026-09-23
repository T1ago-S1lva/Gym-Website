```javascript
/* =========================================================
   ALEX SILVA — PERSONAL TRAINER
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTS
  ========================= */

  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  const year = document.getElementById("year");


  /* =========================
     MOBILE MENU
  ========================= */

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle("active");

      const icon = menuToggle.querySelector("i");

      if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

      } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      }

    });


    /* Close menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

      });

    });

  }


  /* =========================
     HEADER ON SCROLL
  ========================= */

  const handleScroll = () => {

    if (!header) return;

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();


  /* =========================
     CURRENT YEAR
  ========================= */

  if (year) {

    year.textContent = new Date().getFullYear();

  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(
    ".service-card, .process-step, .section-image, .intro-content"
  );

  revealElements.forEach(element => {

    element.classList.add("reveal");

  });


  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );


  revealElements.forEach(element => {

    observer.observe(element);

  });


  /* =========================
     SMOOTH SCROLL
  ========================= */

  const anchorLinks = document.querySelectorAll(
    'a[href^="#"]'
  );


  anchorLinks.forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const headerHeight = header
        ? header.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  /* =========================
     CLOSE MOBILE MENU
     WHEN CLICKING OUTSIDE
  ========================= */

  document.addEventListener("click", event => {

    if (!navMenu || !menuToggle) return;

    const clickedInsideMenu =
      navMenu.contains(event.target);

    const clickedButton =
      menuToggle.contains(event.target);

    if (
      navMenu.classList.contains("active") &&
      !clickedInsideMenu &&
      !clickedButton
    ) {

      navMenu.classList.remove("active");

      const icon = menuToggle.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });


  /* =========================
     ESC KEY
     CLOSE MOBILE MENU
  ========================= */

  document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    if (!navMenu || !menuToggle) return;

    navMenu.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });


  /* =========================
     IMAGE ERROR HANDLING
  ========================= */

  const images = document.querySelectorAll("img");

  images.forEach(image => {

    image.addEventListener("error", () => {

      image.style.display = "none";

    });

  });


  /* =========================
     BUTTON LOADING EFFECT
  ========================= */

  const primaryButtons = document.querySelectorAll(
    ".btn-primary"
  );

  primaryButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

      const icon = button.querySelector("i");

      if (icon) {
        icon.style.transform = "translateX(4px)";
      }

    });

    button.addEventListener("mouseleave", () => {

      const icon = button.querySelector("i");

      if (icon) {
        icon.style.transform = "translateX(0)";
      }

    });

  });

});
```
