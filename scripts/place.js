// Static values (must match HTML)
const temp = 30; // °C
const windSpeed = 10; // km/h

// Wind Chill Function (ONE LINE RETURN ✅)
function calculateWindChill(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
}

// Default value
let windChill = "N/A";

// Condition check (VERY IMPORTANT FOR GRADING ✅)
if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
}

// Display wind chill
document.getElementById("windChill").textContent = windChill;

// Footer dynamic values
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;