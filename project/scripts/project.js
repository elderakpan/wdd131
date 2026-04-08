document.addEventListener("DOMContentLoaded", () => {

    // Tourist Places
    const placesData = [
        { name: "Zuma Rock", type: "nature", image: "images/zuma-rock.jpg" },
        { name: "Olumo Rock", type: "nature", image: "images/olumo-rock.jpg" },
        { name: "Lekki Conservation Centre", type: "nature", image: "images/lekki-conservation.jpg" },
        { name: "Lagos", type: "city", image: "images/lagos.jpg" },
        { name: "Abuja", type: "city", image: "images/abuja.jpg" },
        { name: "Kano", type: "city", image: "images/kano.jpg" }
    ];

    const placesContainer = document.getElementById("places");

    function displayPlaces(list) {
        if (!placesContainer) return;
        placesContainer.innerHTML = "";
        list.forEach(place => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
        <img src="${place.image}" alt="${place.name}" loading="lazy">
        <h3>${place.name}</h3>
      `;
            placesContainer.appendChild(card);
        });
    }

    window.filterPlaces = (type) => {
        if (type === "all") displayPlaces(placesData);
        else displayPlaces(placesData.filter(p => p.type === type));
    };

    displayPlaces(placesData);

    // Visit Counter
    const visitBtn = document.getElementById("visitBtn");
    const visitMsg = document.getElementById("visitMsg");
    if (visitBtn && visitMsg) {
        let visits = localStorage.getItem("visits") ? parseInt(localStorage.getItem("visits")) : 0;
        visitMsg.textContent = `Visits: ${visits}`;
        visitBtn.addEventListener("click", () => {
            visits++;
            localStorage.setItem("visits", visits);
            visitMsg.textContent = `Visits: ${visits}`;
        });
    }

    // Dark Mode
    const darkBtn = document.getElementById("darkMode");
    if (darkBtn) darkBtn.addEventListener("click", () => document.body.classList.toggle("dark"));

    // Contact Form
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            document.getElementById("formMsg").textContent = "Message sent successfully!";
            form.reset();
        });
    }

});