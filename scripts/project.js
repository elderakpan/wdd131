// FIX: correct IDs (remove spaces from HTML too!)

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values
const temp = 30; // °C
const wind = 8; // km/h

// Wind chill function (metric)
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// Check conditions
let windChill = "N/A";

if (temp <= 10 && wind > 4.8) {
    windChill = calculateWindChill(temp, wind) + " °C";
}

console.log("Wind Chill:", windChill);