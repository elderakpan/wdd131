


document.addEventListener("DOMContentLoaded", function () {

    // output the current year
    document.getElementById("currentyear").textContent =
        new Date().getFullYear();

    // output the last modified date
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;

});