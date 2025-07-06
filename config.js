/* -------------- CARRUSEL --------------- */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}
setInterval(showNextSlide, 5000);

/* -------------- SIDEBAR + TOPNAV --------------- */
const toggleBtn = document.getElementById("sidebarToggle");
const sidebar   = document.querySelector(".sidebar");
const topNav    = document.querySelector(".top-nav");
const body      = document.body;

toggleBtn.addEventListener("click", () => {
  const mobile = window.matchMedia("(max-width: 768px)").matches;

  if (mobile) {
    /* MÓVIL: deslizar sidebar + desplegar menú */
    sidebar.classList.toggle("show");     // sidebar: display none ↔ flex
    topNav.classList.toggle("show-menu"); // nav:    display none ↔ block
  } else {
    /* ESCRITORIO: colapsar/expandir sidebar */
    sidebar.classList.toggle("collapsed");
    body.classList.toggle("sidebar-hidden"); // por si ajustas margen en CSS
  }
});
