// js/main.js - Add scroll reveal and image rotation

document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animation
  const sections = document.querySelectorAll(".content-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // Image rotation
  const images = document.querySelectorAll('.profile-image');
  let currentIndex = 0;

  function rotateImages() {
    images.forEach(img => img.classList.remove('active'));
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

  // Start with first image active
  images[0].classList.add('active');

  // Rotate images every 5 seconds
  setInterval(rotateImages, 5000);

  // Smooth scrolling for navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
  });
});