on
document.addEventListener("DOMContentLoaded", () => {
            const cards = document.querySelectorAll(".temple-card");
            const navLinks = document.querySelectorAll("nav a");

            navLinks.forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const filter = link.textContent.toLowerCase();

                    cards.forEach(card => {
                        card.style.display = "block"; // reset
                        if (filter === "home") return; // show all
                        if (!card.dataset.age.includes(filter) && !card.dataset.size.includes(filter)) {
                            card.style.display = "none";
                        }
                    });
                });
            });