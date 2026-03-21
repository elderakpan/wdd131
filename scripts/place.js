// Static weather data
const temp = 30; // °C
const windSpeed = 10; // km/h

// Calculate wind chill if applicable
function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16));
    } else {
        return "N/A";
    }
}

// Display wind chill
document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);

// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;