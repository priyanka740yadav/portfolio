// ================= PARTICLE BACKGROUND =================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#06b6d4"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5,
            random: false
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#06b6d4",
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 140,

                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});


// ================= NAVBAR SHADOW ON SCROLL =================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});


// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".skill-box, .project-card, .timeline-content, .stat-box, .card"
);

revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", function () {

    revealElements.forEach(function (element) {

        const position =
            element.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";
        }

    });

});


// ================= SMOOTH BUTTON HOVER =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "translateY(0) scale(1)";

    });

});


// ================= PROJECT CARD GLOW EFFECT =================

const cards = document.querySelectorAll(".project-card");

cards.forEach(function (card) {

    card.addEventListener("mousemove", function (e) {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(6,182,212,0.15),
            white 40%)`;

    });

    card.addEventListener("mouseleave", function () {

        card.style.background = "white";

    });

});


// ================= CUSTOM CURSOR EFFECT =================

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", function (e) {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ================= CURSOR CSS FROM JS =================

const style = document.createElement("style");

style.innerHTML = `

.custom-cursor{

    width:20px;
    height:20px;

    border:2px solid #06b6d4;

    border-radius:50%;

    position:fixed;

    pointer-events:none;

    transform:translate(-50%, -50%);

    transition:0.1s ease;

    z-index:9999;

    backdrop-filter:blur(2px);
}

`;

document.head.appendChild(style);