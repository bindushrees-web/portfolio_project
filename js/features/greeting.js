function initGreeting() {

    const greetingElement = document.getElementById("greeting");

    if (!greetingElement) return;

    const hour = new Date().getHours();

    let greeting = "";

    let emoji = "";

    let gradient = "";

    // TIME-BASED GREETING

    if (hour < 12) {

        greeting = "Good Morning";

        emoji = "☀️";

        gradient = "from-yellow-400 to-orange-500";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon";

        emoji = "🌤️";

        gradient = "from-blue-400 to-cyan-500";

    }

    else {

        greeting = "Good Evening";

        emoji = "🌙";

        gradient = "from-indigo-500 to-purple-600";

    }

    // PROFESSIONAL GREETING UI

    greetingElement.innerHTML = `

        <div
            class="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 shadow-sm animate-pulse">

            <div
                class="w-10 h-10 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-white text-lg shadow-md">

                ${emoji}

            </div>

            <div class="text-left">

                <p class="text-slate-800 font-bold text-lg">

                    ${greeting}

                </p>

                <p class="text-slate-500 text-sm">

                    Welcome to my portfolio

                </p>

            </div>

        </div>

    `;

}

initGreeting();