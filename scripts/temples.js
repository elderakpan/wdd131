// Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("hide");

    if (navMenu.classList.contains("hide")) {
        hamburger.textContent = "\u2630"; // ☰
    } else {
        hamburger.textContent = "\u2715"; // ✕
    }
});