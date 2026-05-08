function renderProjects(projects = projectsData) {

    const projectContainer =
        document.getElementById("projects-container");

    const countDisplay =
        document.getElementById("project-count");

    if (!projectContainer) {

        console.log("Projects Container Not Found");

        return;

    }

    // CLEAR OLD PROJECTS

    projectContainer.innerHTML = "";

    // PROJECT COUNT

    if (countDisplay) {

        countDisplay.innerHTML = `

            <span class="text-slate-500 font-medium">

                Showing
                <span class="font-bold text-blue-600">
                    ${projects.length}
                </span>

                project${projects.length !== 1 ? "s" : ""}

            </span>

        `;

    }

    // EMPTY STATE

    if (projects.length === 0) {

        projectContainer.innerHTML = `

            <div class="col-span-full text-center py-20">

                <div class="text-6xl mb-6">
                    🔍
                </div>

                <h3 class="text-3xl font-bold text-slate-700 mb-4">

                    No Projects Found

                </h3>

                <p class="text-slate-500">

                    Try searching with different keywords

                </p>

            </div>

        `;

        return;

    }

    // RENDER PROJECTS

    projects.forEach((project) => {

        const card = document.createElement("div");

        card.className = `

            group
            project-card
            bg-white
            rounded-3xl
            overflow-hidden
            border
            border-slate-200
            shadow-sm
            hover:shadow-2xl
            hover:-translate-y-3
            transition-all
            duration-500
            h-full
            flex
            flex-col

        `;

        card.innerHTML = `

            <div class="p-8 flex flex-col flex-1">

                <div class="flex items-start justify-between gap-4 mb-6">

                    <p
                        class="text-blue-600 font-bold uppercase tracking-wider text-sm">

                        ${project.category}

                    </p>

                    <span
                        class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">

                        ${project.status}

                    </span>

                </div>

                <h3
                    class="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition duration-300">

                    ${project.name}

                </h3>

                <p
                    class="text-slate-500 leading-relaxed mb-6 flex-1">

                    ${project.description}

                </p>

                <div class="flex flex-wrap gap-3 mt-auto">

                    ${project.technologies.map((tech) => `

                        <span
                            class="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-300">

                            ${tech}

                        </span>

                    `).join("")}

                </div>

            </div>

        `;

        projectContainer.appendChild(card);

    });

}

renderProjects();