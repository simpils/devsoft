document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you for contacting Simpils! We will get back to you soon."
        );

        contactForm.reset();

    });


    // Close mobile navbar after clicking a link

    const navLinks = document.querySelectorAll(".nav-link");

    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (navbarCollapse.classList.contains("show")) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });

});
