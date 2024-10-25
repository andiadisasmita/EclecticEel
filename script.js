document.addEventListener('DOMContentLoaded', function() {
    // Home logo animation 
    function initializeLogoAnimation() {
        const logo = document.getElementById("logo-home");
        if (logo) {
            console.log("Logo animation initialized.");
        }
    }

    // About Us Slideshow
    function initializeSlideshow() {
        const slides = document.querySelectorAll('.slideshow');
        let currentSlide = 0;
        
        if (slides.length > 0) {
            slides.forEach(slide => (slide.style.display = 'none')); // Hide all slides initially
            slides[currentSlide].style.display = 'block'; // Show the first slide

            setInterval(function() {
                slides[currentSlide].style.display = 'none'; // Hide current slide
                currentSlide = (currentSlide + 1) % slides.length; // Move to next slide
                slides[currentSlide].style.display = 'block'; // Show the next slide
            }, 1700);
        }
    }

    // Contact Us Form - Show/hide "other reasons" input field based on selection
    function initializeContactForm() {
        const reasonSelect = document.getElementById('reason');
        const otherReasonField = document.getElementById('other-reason');

        if (reasonSelect && otherReasonField) {
            otherReasonField.style.display = 'none'; // Hide initially
            reasonSelect.addEventListener('change', function() {
                otherReasonField.style.display = this.value === 'other' ? 'block' : 'none';
            });
        }
    }

    // Login Form - Show form on button click
    function initializeLoginForm() {
        const loginForm = document.getElementById('login-form');
        const loginNowButton = document.getElementById('login-now');

        if (loginForm && loginNowButton) {
            loginForm.style.display = 'none'; // Initially hide the form
            loginNowButton.addEventListener('click', function() {
                loginForm.style.display = 'block';
                loginNowButton.style.display = 'none';
            });
        }
    }

    // Initialize 
    initializeLogoAnimation();
    initializeSlideshow();
    initializeContactForm();
    initializeLoginForm();
});

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

