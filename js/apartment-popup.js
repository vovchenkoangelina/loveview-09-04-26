export function initApartmentPopup() {
  const openBtn = document.querySelector('.apartments__button');
  const popup = document.getElementById('layouts-popup');

  if (!openBtn || !popup) return;

  const closeBtn = popup.querySelector('[data-popup-close]');
  const overlay = popup.querySelector('.popup__overlay');

  const swiperEl = popup.querySelector('.layouts-popup__slider');
  const currentEl = popup.querySelector('.layouts-popup__current');
  const totalEl = popup.querySelector('.layouts-popup__total');

  const nextBtn = popup.querySelector('.layouts-popup__arrow--next');
  const prevBtn = popup.querySelector('.layouts-popup__arrow--prev');

  let swiper;

  function openPopup() {
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';

    initSwiper();
  }

  function closePopup() {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';

    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  function initSwiper() {
    if (swiper) return;

    swiper = new Swiper(swiperEl, {
      loop: true,
navigation: { nextEl: popup.querySelector('.layouts-popup__arrow--next'), prevEl: popup.querySelector('.layouts-popup__arrow--prev'), },
      on: {
        init(swiper) {
          updateFraction(swiper);
        },
        slideChange(swiper) {
          updateFraction(swiper);
        }
      }
    });

    totalEl.textContent = swiper.slides.length - swiper.loopedSlides * 2;
  }

  function updateFraction(swiper) {
    currentEl.textContent = swiper.realIndex + 1;
  }

  openBtn.addEventListener('click', openPopup);
  closeBtn.addEventListener('click', closePopup);

  popup.addEventListener('click', (e) => {
    if (e.target === popup || e.target === overlay) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });
}