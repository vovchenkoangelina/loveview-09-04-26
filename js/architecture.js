export function initArchitectureParallax() {
  const section = document.querySelector('.architecture');
  const img = document.querySelector('.architecture__img');
  const content = document.querySelector('.architecture__content');

  if (!section || !img || !content) return;

  const isDesktop = () =>
    window.matchMedia('(min-width: 769px)').matches;

  let ticking = false;

  function getProgress(rect, vh) {
    return Math.min(
      1,
      Math.max(0, (vh - rect.top) / (vh * 0.8))
    );
  }

  function update() {
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
    if (!isDesktop()) return;

    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);

  update();
}