(function () {
  'use strict';

  var galleries = document.querySelectorAll('[data-paper-gallery]');
  if (!galleries.length) return;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  galleries.forEach(function (gallery) {
    var track = gallery.querySelector('.paper-gallery-track');
    var slides = Array.from(gallery.querySelectorAll('[data-gallery-slide]'));
    var previous = gallery.querySelector('[data-gallery-prev]');
    var next = gallery.querySelector('[data-gallery-next]');
    var count = gallery.querySelector('[data-gallery-count]');
    var current = 0;

    function sync() {
      var position = track.getBoundingClientRect().left;
      var closest = Infinity;
      slides.forEach(function (slide, index) {
        var distance = Math.abs(slide.getBoundingClientRect().left - position);
        if (distance < closest) { closest = distance; current = index; }
      });
      previous.disabled = current === 0;
      next.disabled = current === slides.length - 1;
      var label = (current + 1) + ' / ' + slides.length;
      if (count.textContent !== label) count.textContent = label;
    }

    function step(direction) {
      var target = Math.max(0, Math.min(slides.length - 1, current + direction));
      track.scrollTo({ left: slides[target].offsetLeft - slides[0].offsetLeft,
        behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }

    previous.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });
    track.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); step(event.key === 'ArrowLeft' ? -1 : 1);
      }
    });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', function () {
      track.scrollTo({ left: slides[current].offsetLeft - slides[0].offsetLeft, behavior: 'instant' });
      sync();
    });
    gallery.querySelector('.paper-gallery-controls').hidden = false;
    sync();
  });

  // Native dialog supplies keyboard focus management and Escape-to-close.
  // Without dialog support, each thumbnail still links to its original image.
  var dialog = document.createElement('dialog');
  if (typeof dialog.showModal !== 'function') return;
  dialog.className = 'figure-lightbox';
  dialog.setAttribute('aria-labelledby', 'figure-lightbox-title');
  dialog.innerHTML = '<div class="figure-lightbox-heading"><h2 id="figure-lightbox-title"></h2>' +
    '<button type="button" class="figure-lightbox-close" aria-label="Close enlarged figure">×</button></div>' +
    '<div class="figure-lightbox-body"><img alt=""></div>' +
    '<p class="figure-lightbox-caption"></p><div class="figure-lightbox-links">' +
    '<button type="button" class="figure-lightbox-zoom" aria-pressed="false">Zoom in</button>' +
    '<a class="figure-lightbox-original" target="_blank" rel="noopener">Open full-size image ↗</a>' +
    '<a class="figure-lightbox-source" target="_blank" rel="noopener">View in paper ↗</a></div>';
  document.body.appendChild(dialog);
  var image = dialog.querySelector('img');
  var opener = null;
  var zoomButton = dialog.querySelector('.figure-lightbox-zoom');
  var imageBody = dialog.querySelector('.figure-lightbox-body');
  function resetZoom() {
    dialog.classList.remove('is-zoomed');
    zoomButton.setAttribute('aria-pressed', 'false');
    zoomButton.textContent = 'Zoom in';
    imageBody.scrollLeft = 0;
    imageBody.scrollTop = 0;
  }
  zoomButton.addEventListener('click', function () {
    var zoomed = dialog.classList.toggle('is-zoomed');
    zoomButton.setAttribute('aria-pressed', String(zoomed));
    zoomButton.textContent = zoomed ? 'Fit to window' : 'Zoom in';
  });

  document.querySelectorAll('[data-gallery-expand]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      resetZoom();
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      dialog.querySelector('h2').textContent = link.dataset.figureTitle;
      dialog.querySelector('.figure-lightbox-caption').textContent = link.dataset.figureCaption;
      dialog.querySelector('.figure-lightbox-original').href = link.href;
      dialog.querySelector('.figure-lightbox-source').href = link.dataset.figureSource;
      dialog.showModal();
      document.body.classList.add('figure-dialog-open');
    });
  });
  dialog.querySelector('.figure-lightbox-close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', function () {
    document.body.classList.remove('figure-dialog-open');
    resetZoom();
    if (opener) opener.focus({ preventScroll: true });
  });
}());
