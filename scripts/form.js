// PRODUCT ARRAY (REQUIRED)
const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smart TV" },
    { id: "p5", name: "Refrigerator" }
];

// POPULATE SELECT
const select = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // REQUIRED
    option.textContent = product.name; // REQUIRED
    select.appendChild(option);
});

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;