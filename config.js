let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 5000);  

// Toggle sidebar
const toggleBtn = document.getElementById('sidebarToggle');
const sidebar   = document.querySelector('.sidebar');
const body      = document.body;
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    body.classList.toggle('sidebar-hidden');
});