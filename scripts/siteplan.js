// PAGE LOAD MESSAGE
window.addEventListener("load", () => {
    console.log("Advanced Site Loaded ✅");
});

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const revealSections = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSections);
revealSections();

// TOGGLE BUTTON (INTERACTION)
document.querySelectorAll("section").forEach(section => {
    const btn = document.createElement("button");
    btn.textContent = "Hide Content";

    section.appendChild(btn);

    btn.addEventListener("click", () => {
        const content = section.querySelectorAll("p, ul");

        content.forEach(item => {
            item.style.display =
                item.style.display === "none" ? "block" : "none";
        });

        btn.textContent =
            btn.textContent === "Hide Content" ?
            "Show Content" :
            "Hide Content";
    });
});

// ACTIVE NAV LINK (if you add nav)
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});