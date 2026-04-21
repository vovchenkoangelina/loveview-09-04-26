import { initHeaderMenu } from './header.js';
import { initPerksSlider } from './sliders/perks-slider.js';
import { initHeroScroll } from './hero.js';
import { initSmallPopups } from './small-popups.js';
import { initMapPopup } from './map-popup.js';
import { initMapSlider } from './sliders/map-slider.js';
import { initLaviewSliders } from './sliders/laview-slider.js';
// import { initBeachesSlider } from './sliders/beaches-slider.js';

// import { initRoofSlider } from './sliders/roof-slider.js';
import { initInfrastructureAccordion } from './infrastructure.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderMenu();
  initHeroScroll();
  initPerksSlider();
  initSmallPopups();
  initMapPopup(); 
  initMapSlider();
  initLaviewSliders();
  // initBeachesSlider();

  // initRoofSlider();
  initInfrastructureAccordion();
});