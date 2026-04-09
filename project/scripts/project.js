const places = [{
        name: "Zuma Rock",
        category: "nature",
        imageUrl: "images/zuma-rock.jpg",
        location: "Abuja"
    },
    {
        name: "Obudu Mountain Resort",
        category: "nature",
        imageUrl: "images/obudu.jpg",
        location: "Cross River"
    },
    {
        name: "Lekki Conservation Centre",
        category: "nature",
        imageUrl: "images/lekki.jpg",
        location: "Lagos"
    },
    {
        name: "Lagos City",
        category: "city",
        imageUrl: "images/lagos.jpg",
        location: "Lagos"
    },
    {
        name: "Abuja City",
        category: "city",
        imageUrl: "images/abuja.jpg",
        location: "FCT"
    },
    {
        name: "Kano City",
        category: "city",
        imageUrl: "images/kano.jpg",
        location: "Kano"
    }
];

const container = document.getElementById("places");

function displayPlaces(placeList) {
    container.innerHTML = "";

    placeList.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${place.imageUrl}" alt="${place.name}" loading="lazy">
            <h3>${place.name}</h3>
            <p>${place.location}</p>
        `;

        container.appendChild(card);
    });
}

function filterPlaces(category) {
    if (category === "all") {
        displayPlaces(places);
    } else {
        const filtered = places.filter(place => place.category === category);
        displayPlaces(filtered);
    }
}

// LOAD ALL ON PAGE LOAD
displayPlaces(places);