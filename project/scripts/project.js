// scripts/main.js
if (darkMode === "enabled") {
    document.body.classList.add("dark");
}

const toggles = document.querySelectorAll("#darkToggle");
toggles.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

// FORM
const form = document.querySelector("#contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        localStorage.setItem("username", name);

        document.querySelector("#message").textContent = `Thanks ${name}!`;
    });
}

// GREETING
const greeting = document.querySelector("#greeting");
if (greeting) {
    const hour = new Date().getHours();

    let message = "";
    if (hour < 12) message = "Good Morning";
    else if (hour < 18) message = "Good Afternoon";
    else message = "Good Evening";

    const savedUser = localStorage.getItem("username");
    greeting.textContent = savedUser ? `${message}, ${savedUser}` : message;
}

// SCROLL ANIMATION
function observeCards() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    cards.forEach(card => observer.observe(card));
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
    displayFoods(foods);
});