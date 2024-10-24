// Home logo animation
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo-home");
});

// About Us Slideshow
const slides = document.querySelectorAll('.slideshow');
let currentSlide = 0;

function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';
    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Show the next slide
    slides[currentSlide].style.display = 'block';
}
// Change the slide every 1.7 seconds
setInterval(showNextSlide, 1700);

// Service Offer Manual Slideshow
const serviceSlides = document.querySelectorAll('.service-offer-slide');
let currentServiceSlide = 0;

// Function to show the slide at the given index
function showSlide(index) {
    // Loop through all slides and hide them
    serviceSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Display the slide at the new index
    serviceSlides[index].classList.add('active');
}

// Function to navigate to the next or previous slide
function changeSlide(step) {
    currentServiceSlide = (currentServiceSlide + step + serviceSlides.length) % serviceSlides.length;
    showSlide(currentServiceSlide);
}

// Initial display of the first slide
showSlide(currentServiceSlide);

// Add event listeners to the navigation buttons
document.getElementById('prev-slide').addEventListener('click', () => changeSlide(-1));
document.getElementById('next-slide').addEventListener('click', () => changeSlide(1));

// Contact us Form - hide/show other reasons input field
document.addEventListener('DOMContentLoaded', function() {
    const reasonSelect = document.getElementById('reason');
    const otherReasonField = document.getElementById('other-reason');

    // Add event listener for the "reason" dropdown change
    reasonSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            otherReasonField.style.display = 'block'; // Show the "other reason" field
        } else {
            otherReasonField.style.display = 'none'; // Hide it otherwise
        }
    });
});

// Login Form 
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const loginButton = document.querySelector('.login');

    // Initially hide the form
    loginForm.style.display = 'none';

    // Toggle the form when "Login Now" button is clicked
    loginButton.addEventListener('click', function() {
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
        }
    });
});
