// Temple Data Array
const temples = [{
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893",
        area: 253000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: "1919",
        area: 42000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg"
    },
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004",
        area: 17500,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg"
    },
    {
        name: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005",
        area: 11500,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019",
        area: 41000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980",
        area: 53000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple.jpg"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017",
        area: 44000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg"
    },
    {
        name: "Freiberg Germany Temple",
        location: "Freiberg, Germany",
        dedicated: "1985",
        area: 21000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple.jpg"
    },
    {
        name: "Manila Philippines Temple",
        location: "Manila, Philippines",
        dedicated: "1984",
        area: 26600,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple.jpg"
    }
];

// Display Temples
function displayTemples(filteredTemples) {
    const container = document.querySelector(".temple-cards");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// Filter Function
function filterTemples(type) {
    let filtered = temples;

    if (type === "old") {
        filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
    } else if (type === "new") {
        filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
    } else if (type === "large") {
        filtered = temples.filter(t => t.area > 90000);
    } else if (type === "small") {
        filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
}

// Navigation Events
document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.dataset.filter;
            filterTemples(filter);
        });
    });

    // Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Last Modified
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;
});