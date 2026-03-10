// scripts/getdates.js

// Function to display the current year in the footer
function displayCurrentYear() {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        const now = new Date();
        yearSpan.textContent = now.getFullYear();
    }
}

// Function to display the last modified date
function displayLastModified() {
    const lastModifiedPara = document.getElementById('lastModified');
    if (lastModifiedPara) {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastModifiedPara.textContent = `Last Updated: ${lastModified.toLocaleDateString('en-US', options)}`;
    }
}

// Function to add a greeting under the <h1>
function displayGreeting() {
    const h1 = document.querySelector('main h1');
    if (h1) {
        const greeting = document.createElement('p');
        greeting.textContent = "Hello! Welcome to my WDD 131 course landing page.";
        greeting.style.fontStyle = "italic"; // optional styling
        h1.insertAdjacentElement('afterend', greeting);
    }
}

// Run all functions after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentYear();
    displayLastModified();
    displayGreeting();
});