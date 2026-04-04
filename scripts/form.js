document.addEventListener("DOMContentLoaded", () => {

    const products = [
        { id: "p1", name: "Laptop" },
        { id: "p2", name: "Smartphone" },
        { id: "p3", name: "Tablet" },
        { id: "p4", name: "Smart Watch" }
    ];

    const select = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent =
        "Last Modified: " + document.lastModified;
});