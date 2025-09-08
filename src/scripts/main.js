'use strict';

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const menuToggle = document.querySelector('.icon--menu');
  const menuClose = document.querySelector('.icon--close');
  const body = document.body;

  // Open menu
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.add('menu--open');
    body.classList.add('menu-open');
    body.style.overflow = 'hidden'; // Prevent body scroll
  });

  // Close menu
  menuClose.addEventListener('click', function(e) {
    e.preventDefault();
    closeMenu();
  });

  // Close menu when clicking outside
  menu.addEventListener('click', function(e) {
    if (e.target === menu) {
      closeMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('menu--open')) {
      closeMenu();
    }
  });

  function closeMenu() {
    menu.classList.remove('menu--open');
    body.classList.remove('menu-open');
    body.style.overflow = ''; // Restore body scroll
  }
});
