// Get form elements
const saveButton = document.getElementById('save-button');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');

// Save data to localStorage when the Save button is clicked
saveButton.addEventListener('click', () => {
    const userData = {
        username: usernameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value
    };

    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Changes saved successfully!');
});
// When a new profile picture is selected
document.getElementById("profile-picture").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Update the preview image
            const preview = document.getElementById("preview-image");
            preview.src = e.target.result;
            
            // Save the image in localStorage
            localStorage.setItem("profilePicture", e.target.result);
        };
        
        reader.readAsDataURL(file);
    }
});

// On page load, check if there's a saved profile picture in localStorage and update the profile preview
window.addEventListener("load", function() {
    const savedImage = localStorage.getItem("profilePicture");
    if (savedImage) {
        const preview = document.getElementById("preview-image");
        preview.src = savedImage;
    }
});

