// Fade-in animation on scroll
const fadeIns = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.3, // When 30% of the section is visible
    }
);

fadeIns.forEach((section) => {
    observer.observe(section);
});

// Programming Language Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".language-slideshow img");

function showNextSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
    });
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds


// Automatic Certificate Slideshow
let currentIndex = 0;
const certificates = document.querySelectorAll(".certificate-slider img");

function showNextCertificate() {
    certificates[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % certificates.length;
    certificates[currentIndex].classList.add("active");
}

setInterval(showNextCertificate, 3000); // Change image every 3 seconds
