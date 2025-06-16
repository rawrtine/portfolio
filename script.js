document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    const scrollToSection = (selector) => {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("href").replace("#", "").toLowerCase();

            switch (target) {
                case "home":
                    scrollToSection(".header");
                    break;
                case "about":
                    scrollToSection(".self");
                    break;
                case "projects":
                    scrollToSection(".project");
                    break;
                case "contact":
                    scrollToSection(".contact-container");
                    break;
            }

            navLinks.classList.remove("active");
        });
    });
});

document.querySelector("#project-one").addEventListener("click", () => {
    window.open("Garibay_MA6/Sports.html", "_blank"); 
});

document.querySelector("#project-two").addEventListener("click", () => {
    window.open("Garibay_FA1/webpage.html", "_blank"); 
});

document.querySelector("#project-three").addEventListener("click", () => {
    window.open("Garibay_FA2/form.html", "_blank"); 
});