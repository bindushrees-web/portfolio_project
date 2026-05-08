// const contactForm = document.getElementById("contact-form");

// const formMessage = document.getElementById("form-message");

// const submitBtn = document.getElementById("submit-btn");

// contactForm.addEventListener("submit", async function (e) {

//     e.preventDefault();

//     formMessage.textContent = "";

//     submitBtn.disabled = true;

//     submitBtn.textContent = "Sending...";

//     const formData = {

//         name: document.getElementById("contact-name").value,

//         email: document.getElementById("contact-email").value,

//         message: document.getElementById("contact-message").value

//     };

//     try {

//         const response = await fetch("https://formspree.io/f/xqenlnll", {

//             method: "POST",

//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },

//             body: JSON.stringify(formData)

//         });

//         if (response.ok) {

//             formMessage.textContent = "Message sent successfully!";

//             formMessage.classList.remove("text-red-500");

//             formMessage.classList.add("text-green-600");

//             contactForm.reset();

//         }

//         else {

//             formMessage.textContent = "Failed to send message.";

//             formMessage.classList.remove("text-green-600");

//             formMessage.classList.add("text-red-500");

//         }

//     }

//     catch (error) {

//         console.log(error);

//         formMessage.textContent = "Network error.";

//         formMessage.classList.remove("text-green-600");

//         formMessage.classList.add("text-red-500");

//     }

//     submitBtn.disabled = false;

//     submitBtn.textContent = "Submit";

// });

const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");

const submitBtn = document.getElementById("submit-btn");

contactForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    formMessage.textContent = "";

    submitBtn.disabled = true;

    submitBtn.textContent = "Sending...";

    const formData = {

        name: document.getElementById("contact-name").value,

        email: document.getElementById("contact-email").value,

        message: document.getElementById("contact-message").value

    };

    try {

        const response = await fetch("https://formspree.io/f/xqenlnll", {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify(formData)

        });

        if (response.ok) {

            formMessage.textContent = "Message sent successfully!";

            formMessage.classList.add("text-green-600");

            contactForm.reset();

        }

        else {

            formMessage.textContent = "Failed to send message.";

            formMessage.classList.add("text-red-500");

        }

    }

    catch (error) {

        formMessage.textContent = "Network error.";

        formMessage.classList.add("text-red-500");

    }

    submitBtn.disabled = false;

    submitBtn.textContent = "Send Message";

});