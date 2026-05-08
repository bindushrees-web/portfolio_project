let selectedSort = "default";

function initProjectSort() {

    const sortSelect =
        document.getElementById("project-sort");

    if (!sortSelect) return;

    // PROFESSIONAL UI STYLING

    sortSelect.classList.add(
        "bg-white",
        "border",
        "border-slate-200",
        "rounded-2xl",
        "px-5",
        "py-4",
        "shadow-sm",
        "focus:outline-none",
        "focus:ring-4",
        "focus:ring-blue-100",
        "focus:border-blue-500",
        "transition-all",
        "duration-300",
        "font-semibold",
        "text-slate-700",
        "cursor-pointer"
    );

    // SORT CHANGE

    sortSelect.addEventListener("change", () => {

        selectedSort = sortSelect.value;

        applyFilters();

    });

}

// SORT FUNCTION

function sortProjects(projects) {

    let sortedProjects = [...projects];

    switch (selectedSort) {

        case "name-asc":

            sortedProjects.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            break;

        case "name-desc":

            sortedProjects.sort((a, b) =>
                b.name.localeCompare(a.name)
            );

            break;

        case "frontend":

            sortedProjects = sortedProjects.filter(project =>
                project.category.toLowerCase().includes("frontend")
            );

            break;

        case "backend":

            sortedProjects = sortedProjects.filter(project =>
                project.category.toLowerCase().includes("backend")
            );

            break;

        case "ai":

            sortedProjects = sortedProjects.filter(project => {

                const category =
                    project.category.toLowerCase();

                return (
                    category.includes("ai") ||
                    category.includes("artificial") ||
                    category.includes("nlp")
                );

            });

            break;

        default:

            break;

    }

    return sortedProjects;

}

initProjectSort();