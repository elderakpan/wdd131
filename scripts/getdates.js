// Set current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date dynamically
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// Scroll reveal for cards
const cards = document.querySelectorAll(".card, .project-card");

const revealCards = () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }
    });
};

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);