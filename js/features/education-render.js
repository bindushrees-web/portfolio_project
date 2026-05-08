function renderEducation() {

    const container = document.getElementById("education-container");

    if (!container) return;

    container.innerHTML = "";

    // MAIN TIMELINE

    const timeline = document.createElement("div");

    timeline.className =
        "relative border-l-4 border-blue-500 ml-4 space-y-12";

    educationData.forEach((item, index) => {

        const card = document.createElement("div");

        card.className =
            "relative pl-10 group";

        card.innerHTML = `

            <!-- TIMELINE DOT -->

            <div
                class="absolute -left-[18px] top-6 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-[6px] border-white shadow-lg group-hover:scale-110 transition duration-300">
            </div>

            <!-- CARD -->

            <div
                class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                <!-- TOP -->

                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-5">

                    <div>

                        <span
                            class="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">

                            ${item.type}

                        </span>

                        <h3
                            class="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">

                            ${item.degree}

                        </h3>

                        <p
                            class="text-lg font-semibold text-slate-600">

                            ${item.institute}

                        </p>

                    </div>

                    <div class="lg:text-right">

                        <p
                            class="text-blue-600 font-bold text-lg mb-2">

                            ${item.year}

                        </p>

                        <span
                            class="inline-block bg-slate-100 text-slate-700 px-5 py-2 rounded-xl font-semibold">

                            ${item.score}

                        </span>

                    </div>

                </div>

                <!-- DESCRIPTION -->

                <p
                    class="text-slate-500 leading-relaxed">

                    ${item.description}

                </p>

            </div>

        `;

        timeline.appendChild(card);

    });

    container.appendChild(timeline);

}

renderEducation();