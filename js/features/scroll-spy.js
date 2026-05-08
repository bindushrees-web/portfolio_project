function initScrollProgress() {

    const progressBar =
        document.getElementById("scroll-progress");

    if (!progressBar) return;

    // PROFESSIONAL STYLING

    progressBar.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "h-[5px]",
        "z-[9999]",
        "rounded-r-full",
        "bg-gradient-to-r",
        "from-blue-500",
        "via-indigo-500",
        "to-purple-600",
        "shadow-lg",
        "shadow-blue-500/40",
        "transition-all",
        "duration-150"
    );

    // INITIAL WIDTH

    progressBar.style.width = "0%";

    // UPDATE ON SCROLL

    window.addEventListener("scroll", () => {

        const scrollTop =
            window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const scrollPercent =
            (scrollTop / scrollHeight) * 100;

        // UPDATE WIDTH

        progressBar.style.width =
            `${scrollPercent}%`;

        // OPTIONAL GLOW EFFECT

        if (scrollPercent > 5) {

            progressBar.style.opacity = "1";

        }

        else {

            progressBar.style.opacity = "0.8";

        }

    });

}

initScrollProgress();