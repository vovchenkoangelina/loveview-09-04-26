export function initMapPopup() {
  const popup = document.getElementById('map-popup');
  if (!popup) return;

  const openBtn = document.querySelector('[data-popup-open="map-popup"]');
  const closeBtns = popup.querySelectorAll('[data-popup-close]');

  openBtn?.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closePopup);
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  function closePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }
}