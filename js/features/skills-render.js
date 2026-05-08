function renderSkills() {

    const container =
        document.getElementById("skills-container");

    if (!container) return;

    container.innerHTML = "";

    // MAIN WRAPPER

    const bigBox = document.createElement("div");

    bigBox.className = `

        bg-white
        border
        border-slate-200
        rounded-[2rem]
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-500
        p-8
        lg:p-14
        w-full
        max-w-7xl
        mx-auto

    `;

    // SECTION HEADER

    const heading = document.createElement("div");

    heading.className =
        "text-center mb-14";

    heading.innerHTML = `
        <p
            class="text-slate-500 max-w-2xl mx-auto leading-relaxed">

            Modern technologies and development tools used for building scalable,
            responsive, and high-performance applications.

        </p>

    `;

    bigBox.appendChild(heading);

    // GRID

    const grid = document.createElement("div");

    grid.className = `

        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8

    `;

    // UNIQUE CATEGORIES

    const categories = [
        ...new Set(
            skillsData.map(skill => skill.category)
        )
    ];

    categories.forEach((category) => {

        // CATEGORY CARD

        const section = document.createElement("div");

        section.className = `

            group
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-8
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500

        `;

        // CATEGORY HEADER

        const title = document.createElement("div");

        title.className =
            "flex items-center justify-between mb-8";

        title.innerHTML = `

            <h3
                class="text-2xl font-bold text-slate-800">

                ${category}

            </h3>

            <div
                class="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl shadow-lg">

                ${category.charAt(0)}

            </div>

        `;

        // SKILLS LIST

        const skillList = document.createElement("div");

        skillList.className =
            "flex flex-wrap gap-4";

        // FILTER SKILLS

        const filteredSkills =
            skillsData.filter(
                skill => skill.category === category
            );

        // RENDER BADGES

        filteredSkills.forEach((skill) => {

            const badge =
                document.createElement("span");

            badge.textContent =
                skill.name;

            badge.className = `

                px-5
                py-3
                rounded-2xl
                bg-slate-100
                text-slate-700
                font-semibold
                text-sm
                border
                border-slate-200
                hover:bg-gradient-to-r
                hover:from-blue-600
                hover:to-indigo-700
                hover:text-white
                hover:shadow-lg
                hover:scale-105
                transition-all
                duration-300
                cursor-default

            `;

            skillList.appendChild(badge);

        });

        section.appendChild(title);

        section.appendChild(skillList);

        grid.appendChild(section);

    });

    bigBox.appendChild(grid);

    container.appendChild(bigBox);

}

renderSkills();