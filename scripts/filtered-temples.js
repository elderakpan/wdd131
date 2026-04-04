// scripts/filtered-temples.js

// Array of temple objects
const temples = [{
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893",
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
}, {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919",
    area: 42100,
    imageUrl: "images/laie-hawaii-temple.jpg"
}, {
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923",
    area: 88000,
    imageUrl: "images/cardston-alberta-temple.jpg"
}, {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41000,
    imageUrl: "images/rome-italy-temple.jpg"
}, {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017",
    area: 44000,
    imageUrl: "images/paris-france-temple.jpg"
}, {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    imageUrl: "images/accra-ghana-temple.jpg"
}, {
    templeName: "Lagos Nigeria Temple",
    location: "Lagos, Nigeria",
    dedicated: "2025",
    area: 12000,
    imageUrl: "images/lagos-nigeria-temple.jpg"
}, {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888",
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
}, {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, USA",
    dedicated: "2015",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
}]; // DOM elements
const container = document.getElementById("temple-container");
const homeBtn = document.getElementById("home");
const oldBtn = document.getElementById("old");
const newBtn = document.getElementById("new");
const largeBtn = document.getElementById("large");
const smallBtn = document.getElementById("small");

// Function to display temples
function displayTemples(templeArray) {
    container.innerHTML = ""; // Clear container
    templeArray.forEach(temple => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.name;
        img.loading = "lazy";

        const figcaption = document.createElement("figcaption");
        const name = document.createElement("h3");
        name.textContent = temple.name;
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        figcaption.appendChild(name);
        figcaption.appendChild(location);
        figcaption.appendChild(dedicated);
        figcaption.appendChild(area);

        figure.appendChild(img);
        figure.appendChild(figcaption);

        container.appendChild(figure);
    });
}

// Initial display
displayTemples(temples);

// Filter functions
homeBtn.addEventListener("click", () => displayTemples(temples));
oldBtn.addEventListener("click", () => displayTemples(temples.filter(t => t.dedicated < 1900)));
newBtn.addEventListener("click", () => displayTemples(temples.filter(t => t.dedicated > 2000)));
largeBtn.addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
smallBtn.addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

// Footer year & last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;