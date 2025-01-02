// Toggle functionality for User and Admin links
document.addEventListener("DOMContentLoaded", () => {
    const userToggle = document.getElementById("user-toggle");
    const userContent = document.getElementById("user-content");
    const adminToggle = document.getElementById("admin-toggle");
    const adminContent = document.getElementById("admin-content");

    // Initially hide the toggle content
    userContent.style.display = "none";
    adminContent.style.display = "none";

    // User Toggle
    userToggle.addEventListener("click", (event) => {
        event.preventDefault();
        userContent.style.display = userContent.style.display === "none" ? "block" : "none";
    });

    // Admin Toggle
    adminToggle.addEventListener("click", (event) => {
        event.preventDefault();
        adminContent.style.display = adminContent.style.display === "none" ? "block" : "none";
    });
});
