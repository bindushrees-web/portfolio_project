function initTypingAnimation() {

    const element =
        document.getElementById("typing-text");

    if (!element) return;

    // PROFESSIONAL ROLES

    const roles = [

        "Full Stack Developer",

        "MERN Stack Developer",

        "AI & NLP Enthusiast",

        "Software Engineer",

        "Frontend Developer"

    ];

    let roleIndex = 0;

    let charIndex = 0;

    let isDeleting = false;

    // STYLING

    element.classList.add(
        "text-2xl",
        "lg:text-4xl",
        "font-bold",
        "leading-relaxed",
        "min-h-[70px]",
        "flex",
        "items-center",
        "justify-center",
        "lg:justify-start"
    );

    // TYPING CURSOR

    const cursor = document.createElement("span");

    cursor.textContent = "|";

    cursor.className = `

        ml-2
        text-blue-600
        animate-pulse

    `;

    element.appendChild(cursor);

    // TYPE EFFECT

    function typeEffect() {

        const currentRole =
            roles[roleIndex];

        // UPDATE CHARACTER INDEX

        if (isDeleting) {

            charIndex--;

        }

        else {

            charIndex++;

        }

        // CREATE GRADIENT TEXT

        element.innerHTML = `

            <span
                class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">

                ${currentRole.slice(0, charIndex)}

            </span>

            <span
                class="ml-2 text-blue-600 animate-pulse">

                |

            </span>

        `;

        // SPEED CONTROL

        let speed =
            isDeleting ? 40 : 90;

        // FULL WORD TYPED

        if (
            !isDeleting &&
            charIndex === currentRole.length
        ) {

            speed = 1800;

            isDeleting = true;

        }

        // WORD FULLY DELETED

        else if (
            isDeleting &&
            charIndex === 0
        ) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

            speed = 500;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}

initTypingAnimation();