import { initHeaderMenu } from './header.js';
import { initPerksSlider } from './sliders/perks-slider.js';
import { initHeroScroll } from './hero.js';
import { initSmallPopups } from './small-popups.js';
import { initMapPopup } from './map-popup.js';
import { initMapSlider } from './sliders/map-slider.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderMenu();
  initHeroScroll();
  initPerksSlider();
  initSmallPopups();
  initMapPopup(); 
  initMapSlider();
});