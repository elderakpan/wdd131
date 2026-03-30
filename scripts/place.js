// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;


// WEATHER VALUES (example data)
const temperature = 30; // °C
const windSpeed = 10; // km/h

// DISPLAY VALUES
document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;


// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    // Formula only works if temp <= 10°C and wind > 4.8 km/h
    if (temp <= 10 && speed > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(2);
    } else {
        return "N/A";
    }
}

// DISPLAY WIND CHILL
document.getElementById("windchill").textContent =
    calculateWindChill(temperature, windSpeed);