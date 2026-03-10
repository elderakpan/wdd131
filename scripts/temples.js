document.addEventListener("DOMContentLoaded", () => {
    // Dynamic current year
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Last modified
    const lastModifiedP = document.getElementById("lastModified");
    if (lastModifiedP) lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;

    // Hamburger toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            hamburger.innerHTML = navMenu.classList.contains("open") ? "&times;" : "&#9776;";
        });
    }
});