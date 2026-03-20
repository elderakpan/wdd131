// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values
const temp = 8; // °C
const windSpeed = 10; // km/h

// Wind Chill Function (ONE LINE)
function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * v ** 0.16 + 0.3965 * t * v ** 0.16;
}

// Conditions check
let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;