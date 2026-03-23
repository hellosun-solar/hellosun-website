/* HelloSun Solar — Mobile Navigation */
(function () {
  'use strict';

  var hamburger = document.querySelector('.hamburger');
  var navLinks  = document.querySelector('.nav-links');
  var overlay   = document.querySelector('.nav-overlay');
  if (!hamburger || !navLinks) return;

  function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close when a nav link is tapped
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Close menu on resize above breakpoint
  var mq = window.matchMedia('(min-width: 1025px)');
  mq.addEventListener('change', function (e) {
    if (e.matches) closeMenu();
  });
})();
