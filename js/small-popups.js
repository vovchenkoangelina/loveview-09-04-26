export function initSmallPopups() {
  const popups = document.querySelectorAll('.popup');

  // Открытие (делегирование)
const DESKTOP_WIDTH = 1200;

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-popup-open]');
  if (!trigger) return;

  // проверка ширины
  if (window.innerWidth > DESKTOP_WIDTH) return;

  const popupId = trigger.dataset.popupOpen;
  const popup = document.querySelector(`#${popupId}`);

  if (popup) {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
});

  // Закрытие по кнопке
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-popup-close]')) {
      const popup = e.target.closest('.popup');
      closePopup(popup);
    }
  });

  // Закрытие по оверлею
  popups.forEach(popup => {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopup(popup);
      }
    });
  });

  // ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      popups.forEach(popup => closePopup(popup));
    }
  });

  function closePopup(popup) {
    if (!popup) return;

    popup.classList.remove('active');

    setTimeout(() => {
      document.body.style.overflow = '';
    }, 400);
  }
}