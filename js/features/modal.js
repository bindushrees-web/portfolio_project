// modal.js

function initModal() {

    const modal =
        document.getElementById("contact-modal");

    const modalContent =
        document.getElementById("modal-content");

    const openBtn =
        document.getElementById("modal-trigger");

    const navBtn =
        document.getElementById("nav-contact-btn");

    const closeBtn =
        document.getElementById("modal-close");

    const cancelBtn =
        document.getElementById("form-cancel");

    // SAFETY CHECK

    if (
        !modal ||
        !modalContent ||
        !openBtn ||
        !navBtn ||
        !closeBtn ||
        !cancelBtn
    ) return;

    // OPEN MODAL

    function openModal() {

        // SHOW MODAL

        modal.classList.remove("hidden");

        // PREVENT BODY SCROLL

        document.body.style.overflow = "hidden";

        // ANIMATION

        setTimeout(() => {

            modal.classList.remove("opacity-0");

            modal.classList.add("opacity-100");

            modalContent.classList.remove(
                "scale-95",
                "opacity-0",
                "translate-y-10"
            );

            modalContent.classList.add(
                "scale-100",
                "opacity-100",
                "translate-y-0"
            );

        }, 10);

    }

    // CLOSE MODAL

    function closeModal() {

        modal.classList.remove("opacity-100");

        modal.classList.add("opacity-0");

        modalContent.classList.remove(
            "scale-100",
            "opacity-100",
            "translate-y-0"
        );

        modalContent.classList.add(
            "scale-95",
            "opacity-0",
            "translate-y-10"
        );

        setTimeout(() => {

            modal.classList.add("hidden");

            // ENABLE BODY SCROLL

            document.body.style.overflow = "auto";

        }, 300);

    }

    // OPEN EVENTS

    openBtn.addEventListener(
        "click",
        openModal
    );

    navBtn.addEventListener(
        "click",
        openModal
    );

    // CLOSE EVENTS

    closeBtn.addEventListener(
        "click",
        closeModal
    );

    cancelBtn.addEventListener(
        "click",
        closeModal
    );

    // CLOSE WHEN CLICKING OUTSIDE

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeModal();

        }

    });

    // ESC KEY CLOSE

    document.addEventListener("keydown", (e) => {

        if (
            e.key === "Escape" &&
            !modal.classList.contains("hidden")
        ) {

            closeModal();

        }

    });

    // PROFESSIONAL MODAL UI

    modal.classList.add(
        "transition-all",
        "duration-300",
        "opacity-0"
    );

    modalContent.classList.add(
        "transition-all",
        "duration-300",
        "scale-95",
        "opacity-0",
        "translate-y-10",
        "bg-white/95",
        "backdrop-blur-xl",
        "border",
        "border-slate-200",
        "shadow-2xl"
    );

}

initModal();