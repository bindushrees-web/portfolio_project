let selectedCategory = "All";

function initProjectFilter() {

    const filterContainer = document.getElementById("project-filters");

    if (!filterContainer) return;

    filterContainer.innerHTML = "";

    const categories = [
        "All",
        "Frontend",
        "Backend",
        "Full Stack",
        "AI"
    ];

    categories.forEach((category) => {

        const btn = document.createElement("button");

        btn.textContent = category;

        // PROFESSIONAL BUTTON UI

        btn.className = `

            filter-btn
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition-all
            duration-300
            border
            border-slate-200
            bg-white
            text-slate-700
            hover:shadow-lg
            hover:-translate-y-1
            hover:border-blue-500

        `;

        // ACTIVE BUTTON

        if (category === "All") {

            btn.classList.remove(
                "bg-white",
                "text-slate-700",
                "border-slate-200"
            );

            btn.classList.add(
                "bg-gradient-to-r",
                "from-blue-600",
                "to-indigo-700",
                "text-white",
                "shadow-lg"
            );

        }

        // CLICK EVENT

        btn.addEventListener("click", () => {

            selectedCategory = category;

            // RESET ALL BUTTONS

            document.querySelectorAll(".filter-btn").forEach((button) => {

                button.classList.remove(
                    "bg-gradient-to-r",
                    "from-blue-600",
                    "to-indigo-700",
                    "text-white",
                    "shadow-lg"
                );

                button.classList.add(
                    "bg-white",
                    "text-slate-700",
                    "border-slate-200"
                );

            });

            // ACTIVATE SELECTED BUTTON

            btn.classList.remove(
                "bg-white",
                "text-slate-700",
                "border-slate-200"
            );

            btn.classList.add(
                "bg-gradient-to-r",
                "from-blue-600",
                "to-indigo-700",
                "text-white",
                "shadow-lg"
            );

            applyFilters();

        });

        filterContainer.appendChild(btn);

    });

}

function applyFilters() {

    let result = [...projectsData];

    const searchInput = document.getElementById("project-search");

    const searchText =
        searchInput.value.toLowerCase().trim();

    // SEARCH FILTER

    if (searchText) {

        result = result.filter((project) =>

            project.name.toLowerCase().includes(searchText) ||

            project.description.toLowerCase().includes(searchText) ||

            project.category.toLowerCase().includes(searchText) ||

            project.technologies.some((tech) =>
                tech.toLowerCase().includes(searchText)
            )

        );

    }

    // CATEGORY FILTER

    if (selectedCategory !== "All") {

        result = result.filter((project) => {

            const category =
                project.category.toLowerCase();

            if (selectedCategory === "Frontend") {

                return category.includes("frontend");

            }

            if (selectedCategory === "Backend") {

                return category.includes("backend");

            }

            if (selectedCategory === "Full Stack") {

                return (
                    category.includes("full stack") ||
                    category.includes("fullstack")
                );

            }

            if (selectedCategory === "AI") {

                return (
                    category.includes("ai") ||
                    category.includes("artificial") ||
                    category.includes("vision") ||
                    category.includes("nlp")
                );

            }

            return true;

        });

    }

    // PROJECT COUNT

    const countDisplay =
        document.getElementById("project-count");

    if (countDisplay) {

        countDisplay.innerHTML = `

            <span class="text-slate-500 font-medium">

                Showing
                <span class="font-bold text-blue-600">
                    ${result.length}
                </span>
                project${result.length !== 1 ? "s" : ""}

            </span>

        `;

    }

    // SORT PROJECTS

    if (typeof sortProjects === "function") {
        result = sortProjects(result);
    }

    // RENDER PROJECTS

    renderProjects(result);

}

initProjectFilter();