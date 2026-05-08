// main.js

document.addEventListener("DOMContentLoaded", () => {

    // LOADER EFFECT

    document.body.classList.add(
        "opacity-0",
        "transition-opacity",
        "duration-700"
    );

    setTimeout(() => {

        document.body.classList.remove("opacity-0");

    }, 200);

    // RENDER SECTIONS

    renderProjects();

    renderSkills();

    renderEducation();

    // INITIALIZE FEATURES

    initModal();

    initContactValidation();

    initThemeToggle();

    initScrollProgress();

    initScrollSpy();

    initBackToTop();

    initProjectFilter();

    initProjectSearch();

    initProjectSort();

    initTypingAnimation();

    initGreeting();

    initGeolocation();

    // APPLY FILTERS

    applyFilters();

    // SMOOTH SCROLL FOR NAV LINKS

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    // ACTIVE NAVBAR ON SCROLL

    const navbar =
        document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "shadow-2xl",
                "backdrop-blur-xl",
                "bg-white/90"
            );

        }

        else {

            navbar.classList.remove(
                "shadow-2xl",
                "backdrop-blur-xl",
                "bg-white/90"
            );

        }

    });

    // ANIMATE SECTIONS ON SCROLL

    const sections =
        document.querySelectorAll("section");

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0"
                        );

                        entry.target.classList.remove(
                            "opacity-0",
                            "translate-y-10"
                        );

                    }

                });

            },

            {
                threshold: 0.1
            }

        );

    sections.forEach((section) => {

        section.classList.add(
            "opacity-0",
            "translate-y-10",
            "transition-all",
            "duration-700"
        );

        observer.observe(section);

    });

    console.log(
        "%cPortfolio Loaded Successfully 🚀",
        "color: #2563eb; font-size: 16px; font-weight: bold;"
    );

});