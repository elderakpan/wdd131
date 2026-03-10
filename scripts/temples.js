// scripts/temples.js

// Dynamic footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedPara = document.getElementById('lastModified');

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedPara) {
        const lastModified = new Date(document.lastModified);
        lastModifiedPara.textContent = `Last Updated: ${lastModified.toLocaleDateString()}`;
    }

    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const ul = navMenu.querySelector('ul');
            if (ul.style.display === 'flex') {
                ul.style.display = 'none';
            } else {
                ul.style.display = 'flex';
            }
        });
    }
});