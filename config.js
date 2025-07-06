let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 5000);  
