// Menu Toggle for Mobile View
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Search Functionality (if needed)
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const branches = document.querySelectorAll(".branch-card");

        branches.forEach(branch => {
            const branchName = branch.querySelector("h3").textContent.toLowerCase();
            if (branchName.includes(query)) {
                branch.style.display = "block";
            } else {
                branch.style.display = "none";
            }
        });
    });
}
