const showPlacesBtn = document.getElementById("showPlaces");

if (showPlacesBtn) {

    const places = [{
            name: "Zuma Rock",
            image: "images/zuma-rock.jpg"
        },
        {
            name: "Olumo Rock",
            image: "images/olumo-rock.jpg"
        },
        {
            name: "Lekki Conservation Centre",
            image: "images/lekki.jpg"
        },
        {
            name: "Obudu Mountain Resort",
            image: "images/obudu.jpg"
        },
        {
            name: "Yankari National Park",
            image: "images/yankari.jpg"
        }
    ];

    showPlacesBtn.addEventListener("click", () => {

        const cards = places.map(place => `
            <div class="card">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                <h3>${place.name}</h3>
            </div>
        `).join("");

        document.getElementById("placesList").innerHTML = cards;
    });
}