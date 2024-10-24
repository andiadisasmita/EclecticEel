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