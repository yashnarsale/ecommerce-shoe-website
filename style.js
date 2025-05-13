
const navMenu = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Select all the images in the image gallery
const images = document.querySelectorAll('.about_small_image img');

// Add an event listener to each image to update the main image
images.forEach((image) => {
    image.addEventListener('click', () => {
        const mainImage = document.getElementById('imagebox');
        mainImage.src = image.src;
    });
});

// Select the login form and its fields
const loginForm = document.querySelector('.login_form form');
const usernameField = document.querySelector('.username');
const passwordField = document.querySelector('.password input');

// Add an event listener to the login form to validate the fields
loginForm.addEventListener('submit', (e) => {
    if (usernameField.value.trim() === '' || passwordField.value.trim() === '') {
        alert('Please fill in all fields.');
        e.preventDefault();
    }
});

// Select the newsletter subscription form and its field
const newsletterForm = document.querySelector('.search_bar');
const emailField = newsletterForm.querySelector('input');

// Add an event listener to the newsletter subscription form to validate the email address
newsletterForm.addEventListener('submit', (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailField.value.trim())) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});