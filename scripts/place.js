// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values
const temp = 30;
const wind = 10;

// Wind chill function
function calculateWindChill(t, w) {
    return (t <= 10 && w > 4.8) ?
        Math.round(13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)) + " °C" :
        "N/A";
}

// Display result
document.getElementById("windChill").textContent = calculateWindChill(temp, wind);