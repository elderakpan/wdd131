// Static values
const temp = 30; // Temperature in °C
const windSpeed = 10; // Wind speed in km/h

// Function to calculate wind chill
function calculateWindChill(t, s) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

// Determine if wind chill is applicable
let windChill = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
}

// Update HTML
document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = windSpeed;
document.getElementById("windChill").textContent = windChill;

// Update footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;