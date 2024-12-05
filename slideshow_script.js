let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Event listeners for buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Initialize slideshow
showSlide(slideIndex);

// Auto-play slideshow
setInterval(nextSlide, 5000);
