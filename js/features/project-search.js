function initProjectSearch() {

    const searchInput =
        document.getElementById("project-search");

    if (!searchInput) return;

    // PROFESSIONAL INPUT STYLING

    searchInput.classList.add(
        "bg-white",
        "border",
        "border-slate-200",
        "rounded-2xl",
        "px-6",
        "py-4",
        "w-full",
        "max-w-xl",
        "shadow-sm",
        "focus:outline-none",
        "focus:ring-4",
        "focus:ring-blue-100",
        "focus:border-blue-500",
        "transition-all",
        "duration-300",
        "text-slate-700",
        "placeholder:text-slate-400"
    );

    // SEARCH ICON WRAPPER

    const wrapper = document.createElement("div");

    wrapper.className =
        "relative flex justify-center";

    // INSERT WRAPPER

    searchInput.parentNode.insertBefore(
        wrapper,
        searchInput
    );

    wrapper.appendChild(searchInput);

    // SEARCH ICON

    const icon = document.createElement("span");

    icon.innerHTML = "🔍";

    icon.className = `

        absolute
        left-6
        top-1/2
        -translate-y-1/2
        text-slate-400
        text-lg

    `;

    wrapper.appendChild(icon);

    // ADD LEFT PADDING FOR ICON

    searchInput.classList.add("pl-14");

    // LIVE SEARCH

    searchInput.addEventListener("input", () => {

        applyFilters();

    });

    // ENTER KEY SUPPORT

    searchInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            applyFilters();

        }

    });

}

initProjectSearch();