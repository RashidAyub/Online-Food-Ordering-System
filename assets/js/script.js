// =====================================================
// FOOD PARADISE - Main JavaScript
// =====================================================

// Initialize AOS Animation
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-out-cubic'
});

// =====================================================
// NAVBAR - Sticky & Scroll Effects
// =====================================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// =====================================================
// MOBILE MENU TOGGLE
// =====================================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// =====================================================
// SMOOTH SCROLL & ACTIVE LINK
// =====================================================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Add active class to clicked link
    link.classList.add('active');
    
    // Close mobile menu
    navMenu.classList.remove('open');
  });
});

// =====================================================
// INTERSECTION OBSERVER - Update Active Link on Scroll
// =====================================================
const sections = document.querySelectorAll('section[id]');

const observerOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// =====================================================
// CART FUNCTIONALITY (Placeholder)
// =====================================================
let cartItems = [];
const cartCount = document.querySelector('.cart-count');

function updateCartCount() {
  cartCount.textContent = cartItems.length;
}

// =====================================================
// CONSOLE GREETING
// =====================================================
console.log('%c🍕 Food Paradise - Online Food Ordering System', 'color: #ff6b35; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, JavaScript', 'color: #2c3e50; font-size: 12px;');
