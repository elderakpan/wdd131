// INCREMENT REVIEW COUNTER
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