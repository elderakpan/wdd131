// GET DATA FROM URL
const params = new URLSearchParams(window.location.search);

// DISPLAY VALUES
document.getElementById("product").textContent = params.get("product") || "N/A";

document.getElementById("rating").textContent =
    params.get("rating") ? params.get("rating") + " ☆" : "N/A";

document.getElementById("date").textContent =
    params.get("installDate") || "N/A";

// FEATURES (checkboxes)
const features = params.getAll("features");
document.getElementById("features").textContent =
    features.length > 0 ? features.join(", ") : "None";

// REVIEW TEXT
document.getElementById("review").textContent =
    params.get("reviewText") || "No review provided";

// NAME
document.getElementById("name").textContent =
    params.get("userName") || "Anonymous";


// ✅ REQUIRED: REVIEW COUNTER (VERY IMPORTANT)
let count = localStorage.getItem("reviewCount");

if (!count) {
    count = 0;
}

count++;

localStorage.setItem("reviewCount", count);

// DISPLAY COUNT
document.getElementById("count").textContent = count;


// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();