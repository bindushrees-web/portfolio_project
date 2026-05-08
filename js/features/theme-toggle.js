function initThemeToggle() {

    const toggleBtn =
        document.getElementById("theme-toggle");

    const body = document.body;

    if (!toggleBtn) return;

    // LOAD SAVED THEME

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    // APPLY SAVED THEME

    if (savedTheme === "dark") {

        enableDarkTheme();

    }

    else {

        enableLightTheme();

    }

    // TOGGLE EVENT

    toggleBtn.addEventListener("click", () => {

        if (body.classList.contains("dark-mode")) {

            enableLightTheme();

        }

        else {

            enableDarkTheme();

        }

    });

    // DARK MODE

    function enableDarkTheme() {

        body.classList.add(
            "dark-mode",
            "bg-slate-950",
            "text-white"
        );

        body.classList.remove(
            "bg-white",
            "text-slate-800"
        );

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        // BUTTON UI

        toggleBtn.innerHTML = `

            <span class="flex items-center gap-2">

                🌙

                <span>
                    Dark
                </span>

            </span>

        `;

        toggleBtn.className = `

            bg-gradient-to-r
            from-slate-800
            to-black
            text-white
            px-5
            py-3
            rounded-2xl
            shadow-lg
            hover:scale-105
            hover:shadow-2xl
            transition-all
            duration-300
            font-semibold
            border
            border-slate-700

        `;

        // NAVBAR

        const navbar =
            document.querySelector("nav");

        if (navbar) {

            navbar.classList.remove(
                "bg-white/80",
                "border-slate-200"
            );

            navbar.classList.add(
                "bg-slate-900/80",
                "border-slate-700"
            );

        }

        // SECTIONS

        document.querySelectorAll("section")
            .forEach(section => {

                section.classList.add(
                    "bg-slate-950",
                    "text-white"
                );

            });

    }

    // LIGHT MODE

    function enableLightTheme() {

        body.classList.remove(
            "dark-mode",
            "bg-slate-950",
            "text-white"
        );

        body.classList.add(
            "bg-white",
            "text-slate-800"
        );

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        // BUTTON UI

        toggleBtn.innerHTML = `

            <span class="flex items-center gap-2">

                ☀️

                <span>
                    Light
                </span>

            </span>

        `;

        toggleBtn.className = `

            bg-gradient-to-r
            from-blue-500
            to-indigo-600
            text-white
            px-5
            py-3
            rounded-2xl
            shadow-lg
            hover:scale-105
            hover:shadow-2xl
            transition-all
            duration-300
            font-semibold

        `;

        // NAVBAR

        const navbar =
            document.querySelector("nav");

        if (navbar) {

            navbar.classList.remove(
                "bg-slate-900/80",
                "border-slate-700"
            );

            navbar.classList.add(
                "bg-white/80",
                "border-slate-200"
            );

        }

        // SECTIONS

        document.querySelectorAll("section")
            .forEach(section => {

                section.classList.remove(
                    "bg-slate-950",
                    "text-white"
                );

            });

    }

}

initThemeToggle();