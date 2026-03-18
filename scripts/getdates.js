// getdates.js

// Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last Modified Date
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified.toLocaleString('en-US', options)}`;