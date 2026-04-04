document.addEventListener("DOMContentLoaded", () => {
    // Populate product select dynamically
    const products = [
        { id: "p1", name: "Laptop" },
        { id: "p2", name: "Smartphone" },
        { id: "p3", name: "Tablet" },
        { id: "p4", name: "Smart Watch" }
    ];

    const select = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    // Footer Year & Last Modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Star rating hover effect
    const starInputs = document.querySelectorAll('input[name="rating"]');
    starInputs.forEach((input, idx) => {
        input.addEventListener('change', () => {
            starInputs.forEach((s, i) => {
                const label = document.querySelector(`label[for="${s.id}"]`);
                label.style.color = i <= idx ? '#e76f51' : '#ccc';
            });
        });
    });
});