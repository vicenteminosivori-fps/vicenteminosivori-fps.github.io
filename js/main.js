(() => {
  'use strict';

  /* Extensión de las imágenes. Si usas .jpg, cambia SOLO esta línea: 'jpg' */
  const IMG_EXT = 'webp';

  if (IMG_EXT !== 'webp') {
    document.querySelectorAll('img[src^="img/"]').forEach(img => {
      img.src = img.getAttribute('src').replace(/\.webp$/, '.' + IMG_EXT);
    });
  }

  const LABEL_OPEN = 'Ver proyecto +';
  const LABEL_CLOSE = 'Cerrar \u2212';

  document.querySelectorAll('.trigger').forEach(btn => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const pill = btn.querySelector('.pill');
    if (!panel) return;

    // Precarga las imágenes del panel al acercarse (hover/foco/toque) para que se vean al abrir
    const preload = () => panel.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
    ['pointerenter', 'focus', 'touchstart'].forEach(ev => btn.addEventListener(ev, preload, { once: true, passive: true }));

    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
      if (pill) pill.textContent = open ? LABEL_CLOSE : LABEL_OPEN;
      if (open) preload();
    });
  });
})();
