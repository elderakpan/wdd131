// Display current year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Display last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

// Wind Chill Calculation
const temp = parseFloat(document.querySelector("#temp").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);
const windChill = document.querySelector("#windchill");

function calculateWindChill(t, s) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
}

// Check conditions for wind chill
if (temp <= 10 && wind > 4.8) {
    windChill.textContent = calculateWindChill(temp, wind) + " °C";
} else {
    windChill.textContent = "N/A";
}