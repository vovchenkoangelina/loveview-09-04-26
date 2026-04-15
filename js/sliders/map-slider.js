export function initMapSlider() {
    const button = document.querySelector('.map__button');
const track = document.querySelector('.map__slider-track');
const slides = document.querySelectorAll('.map__slide');

let index = 0;

button.addEventListener('click', () => {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * 100}%)`;
  console.log("да");
});
}