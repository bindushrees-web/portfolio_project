function initBackToTop() {
    const btn = document.getElementById("back-to-top");

    if (!btn) return;

    // INITIAL STATE

    btn.classList.add(
        "opacity-0",
        "invisible",
        "scale-90",
        "transition-all",
        "duration-300"
    );

    // SHOW / HIDE ON SCROLL

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            btn.classList.remove(
                "opacity-0",
                "invisible",
                "scale-90"
            );

            btn.classList.add(
                "opacity-100",
                "visible",
                "scale-100"
            );

        }

        else {

            btn.classList.remove(
                "opacity-100",
                "visible",
                "scale-100"
            );

            btn.classList.add(
                "opacity-0",
                "invisible",
                "scale-90"
            );

        }

    });

    // SCROLL TO TOP

    btn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

initBackToTop();