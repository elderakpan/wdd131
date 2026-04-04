// ✅ TEMPLE ARRAY (correct structure)
const temples = [{
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893",
        area: 253000,
        imageUrl: "images/salt-lake-temple.jpg"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: "1919",
        area: 42100,
        imageUrl: "images/laie-hawaii-temple.jpg"
    },
    {
        templeName: "Cardston Alberta Temple",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923",
        area: 88000,
        imageUrl: "images/cardston-alberta-temple.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019",
        area: 41000,
        imageUrl: "images/rome-italy-temple.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017",
        area: 44000,
        imageUrl: "images/paris-france-temple.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Lagos Nigeria Temple",
        location: "Lagos, Nigeria",
        dedicated: "2025",
        area: 12000,
        imageUrl: "images/lagos-nigeria-temple.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, USA",
        dedicated: "1888",
        area: 74792,
        imageUrl: "images/manti-utah-temple.jpg"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, USA",
        dedicated: "2015",
        area: 96630,
        imageUrl: "images/payson-utah-temple.jpg"
    }
];


// ✅ DISPLAY FUNCTION (FIXED)
function displayTemples(templeList) {
    const container = document.getElementById("temple-container");

    // clear before display
    container.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        container.appendChild(card);
    });
}


// ✅ FILTER BUTTONS (ALL FIXED)
document.getElementById("home").addEventListener("click", () => {
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.getElementById("new").addEventListener("click", () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
});

document.getElementById("large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
});


// ✅ FOOTER (MATCHES YOUR HTML)
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;



// ✅ LOAD ALL ON START
displayTemples(temples);