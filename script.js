// Highlight the active navigation link based on the current page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.textDecoration = "underline";
            link.style.color = "#333";
        } else {
            link.style.textDecoration = "none";
            link.style.color = "#007bff";
        }
    });
});