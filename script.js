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

// Services Slide
let currentSlide = 0;
const slides = document.getElementsByClassName("service-offer-slide");

// Function to show the next or previous slide
function showSlide(index) {
    // Loop the slides if index goes beyond the number of slides
    if (index >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop back to the last slide
    } else {
        currentSlide = index;
    }

    // Hide all slides and remove the 'active' class
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Show the active slide by adding the 'active' class
    slides[currentSlide].classList.add('active');
}

// Function to change the slide
function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Initial setup: Display the first slide as active
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide); // Start with the first slide
});
