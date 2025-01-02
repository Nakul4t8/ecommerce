// Fetch user data from localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Update the profile page with stored data
if (userData) {
    document.getElementById('display-username').textContent = userData.username || 'John Doe';
    document.getElementById('display-email').textContent = userData.email || 'johndoe@example.com';
    document.getElementById('display-phone').textContent = userData.phone || '+1 234 567 890';
    document.getElementById('display-address').textContent = userData.address || '123 Main Street, Cityville, USA';
}
// On page load, check if there's a saved profile picture in localStorage and update the profile image
window.addEventListener("load", function() {
    const savedImage = localStorage.getItem("profilePicture");
    if (savedImage) {
        const profileImage = document.getElementById("profile-image");
        profileImage.src = savedImage;
    }
});

