document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#ffebcc"; // light orange highlight
            box.style.borderColor = "#ff8c00"; // orange border
        });

        box.addEventListener("mouseout", () => {
            if (box.classList.contains('header-box') || box.classList.contains('footer-box')) {
                box.style.backgroundColor = "#006400";
                box.style.color = "white";
            } else if (box.classList.contains('hero-box')) {
                box.style.backgroundColor = "#ff8c00";
                box.style.color = "white";
            } else {
                box.style.backgroundColor = "#e8f5e9";
                box.style.color = "#333";
            }
            box.style.borderColor = "#333";
        });
    });
});