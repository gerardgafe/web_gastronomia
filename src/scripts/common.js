import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/styles.scss";

const btn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  // Usar 20% de la altura para que funcione bien en distintos dispositivos
  const scrollThreshold = window.innerHeight * 0.1;
  btn.style.display = window.scrollY > scrollThreshold ? "block" : "none";
});

// Accion del scroll al hacer clic
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});