/* -------------- CARRUSEL --------------- */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}
setInterval(showNextSlide, 5000);

/* -------------- BOTONES & LAYOUT --------------- */
const navBtn      = document.getElementById("navToggle");     // ⌄  (solo móvil)
const sidebarBtn  = document.getElementById("sidebarToggle"); // ☰
const topNav      = document.querySelector(".top-nav");
const sidebar     = document.querySelector(".sidebar");
const body        = document.body;

/* -------- Menú superior desplegable (solo móvil) -------- */
navBtn.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    topNav.classList.toggle("show-menu"); // actúa sobre CSS @media
  }
});

/* -------- Sidebar: móvil vs. escritorio -------- */
sidebarBtn.addEventListener("click", () => {
  const mobile = window.matchMedia("(max-width: 768px)").matches;

  if (mobile) {
    /* MÓVIL: desliza sidebar dentro/fuera */
    sidebar.classList.toggle("show"); // .show controla display o transform
  } else {
    /* ESCRITORIO: colapsa/expande */
    sidebar.classList.toggle("collapsed");
    body.classList.toggle("sidebar-hidden"); // si usas margen en CSS
  }
});
