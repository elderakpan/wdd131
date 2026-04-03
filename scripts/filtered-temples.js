const temples = [{
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: 1893,
        area: 253000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-lds-2.jpg"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: 1919,
        area: 42100,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-lds-8.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: 2004,
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-lds-9.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: 2017,
        area: 44000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-lds-3.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: 1980,
        area: 53000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-lds-4.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: 2019,
        area: 40000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-lds-10.jpg"
    },
    {
        templeName: "Logan Utah Temple",
        location: "Logan, Utah, USA",
        dedicated: 1884,
        area: 119000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-lds-3.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, USA",
        dedicated: 1888,
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-lds-3.jpg"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, USA",
        dedicated: 2015,
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-lds-12.jpg"
    }
];

const container = document.getElementById("temple-container");

function displayTemples(templeList) {
    container.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/300x200?text=Temple'">
        `;

        container.appendChild(card);
    });
}

// FILTER BUTTONS
document.getElementById("home").addEventListener("click", () => displayTemples(temples));

document.getElementById("old").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.dedicated < 1900));
});

document.getElementById("new").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.dedicated > 2000));
});

document.getElementById("large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
});

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// INITIAL LOAD
displayTemples(temples);