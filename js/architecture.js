export function initArchitectureParallax() {
  const section = document.querySelector('.architecture');
  const img = document.querySelector('.architecture__img');
  const content = document.querySelector('.architecture__content');

  if (!section || !img || !content) return;

  const mq = window.matchMedia('(min-width: 1701px)');

  let ticking = false;

  function getProgress(rect, vh) {
    return Math.min(
      1,
      Math.max(0, (vh - rect.top) / (vh * 0.8))
    );
  }

  function update() {
    if (!mq.matches) return;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    const progress = getProgress(rect, vh);

    const imgMove = progress * 160;
    const contentMove = progress * 280;

    img.style.transform = `translate3d(0, ${imgMove}px, 0)`;
    content.style.transform = `translate3d(0, ${contentMove}px, 0)`;

    ticking = false;
  }

  function onScroll() {
    if (!mq.matches) return;

    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function reset() {
    img.style.transform = '';
    content.style.transform = '';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (!mq.matches) reset();
    update();
  });

  mq.addEventListener?.('change', (e) => {
    if (!e.matches) reset();
    else update();
  });

  update();
}