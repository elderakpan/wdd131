document.addEventListener("DOMContentLoaded", ( // Clear Review Counter Button
    const clearBtn = document.getElementById("clearCounter"); clearBtn.addEventListener("click", () => {
        localStorage.removeItem("reviewCount");
        document.getElementById("reviewCount").textContent = 0;
        alert("Review counter has been reset!");
    });) => {

    // Populate Product Select Options dynamically
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

    // Footer year & last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Review Counter: display current total
    let count = localStorage.getItem("reviewCount");
    if (!count) count = 0;
    document.getElementById("reviewCount").textContent = count;

    // Amazon-style Interactive Stars
    const starInputs = document.querySelectorAll('fieldset input[type="radio"]');
    const starLabels = document.querySelectorAll('fieldset input[type="radio"] + label');

    function updateStars(selectedIdx) {
        starLabels.forEach((label, idx) => {
            label.style.color = idx <= selectedIdx ? '#e76f51' : '#ccc';
        });
    }

    starLabels.forEach((label, idx) => {
        label.addEventListener('mouseenter', () => updateStars(idx));
        label.addEventListener('mouseleave', () => {
            const checkedIdx = Array.from(starInputs).findIndex(input => input.checked);
            updateStars(checkedIdx);
        });
        label.addEventListener('click', () => {
            starInputs[idx].checked = true;
            updateStars(idx);
        });
    });

});