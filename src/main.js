const track = document.querySelector(".slider-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

//Slider
let position = 0;

function getCardWidth() {
  const card = document.querySelector(".receta-card");
  return card.offsetWidth;
}

function getMaxPosition() {
  const container = document.querySelector(".slider-track");
  const cards = document.querySelectorAll(".receta-card");

  const visibleCards = Math.floor(container.offsetWidth / getCardWidth());

  return -(cards.length - visibleCards) * getCardWidth();
}

//Accion al hacer clik para pasar las cards -
nextBtn.addEventListener("click", () => {

  const maxPosition = getMaxPosition();

  if (position > maxPosition) {
    position -= getCardWidth();
    track.style.transform = `translateX(${position}px)`;
  }

});

//Accion al hacer clik para pasar las cards +
prevBtn.addEventListener("click", () => {

  if (position < 0) {
    position += getCardWidth();
    track.style.transform = `translateX(${position}px)`;
  }

});