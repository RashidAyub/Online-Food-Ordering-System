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

// =====================================================
// MENU CATEGORY FILTER
// =====================================================
const tabButtons = document.querySelectorAll('.tab-btn');
const menuCards = document.querySelectorAll('.menu-card');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Filter menu items
    menuCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        // Re-trigger AOS animation
        card.classList.add('aos-animate');
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// =====================================================
// CART FUNCTIONALITY
// =====================================================
const btnCart = document.querySelector('.btn-cart');
const cartModal = document.getElementById('cart-modal');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItemsContainer = document.getElementById('cart-items');
const cartFooter = document.getElementById('cart-footer');
const cartTotalPrice = document.getElementById('cart-total-price');
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

// Open cart
btnCart.addEventListener('click', () => {
  cartModal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

// Close cart
function closeCart() {
  cartModal.classList.remove('open');
  document.body.style.overflow = 'auto';
}

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Add to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    
    addItemToCart(name, price);
    
    // Visual feedback
    button.innerHTML = '<i class="fas fa-check"></i> Added';
    button.style.background = '#10b981';
    
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-plus"></i> Add to Cart';
      button.style.background = '';
    }, 1500);
  });
});

function addItemToCart(name, price) {
  // Check if item already exists
  const existingItem = cartItems.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ name, price, quantity: 1 });
  }
  
  updateCart();
}

function updateCart() {
  updateCartCount();
  
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-basket"></i>
        <p>Your cart is empty</p>
        <a href="#menu" class="btn btn-primary" onclick="closeCart()">Browse Menu</a>
      </div>
    `;
    cartFooter.style.display = 'none';
  } else {
    let itemsHTML = '';
    let total = 0;
    
    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      itemsHTML += `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
          </div>
          <div class="cart-item-actions">
            <span class="cart-item-price">$${itemTotal.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})" class="btn-remove">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `;
    });
    
    cartItemsContainer.innerHTML = itemsHTML;
    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    cartFooter.style.display = 'block';
  }
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// =====================================================
// CHECKOUT
// =====================================================
const btnCheckout = document.querySelector('.btn-checkout');

if (btnCheckout) {
  btnCheckout.addEventListener('click', () => {
    if (cartItems.length > 0) {
      alert('Order placed successfully! Total: ' + cartTotalPrice.textContent + '\n\nThank you for ordering from Food Paradise!');
      cartItems = [];
      updateCart();
      closeCart();
    }
  });
}

// =====================================================
// STATISTICS COUNTER ANIMATION
// =====================================================
const statNumbers = document.querySelectorAll('.stat-number');
let counterStarted = false;

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const updateCounter = () => {
    current += increment;
    
    if (current < target) {
      element.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  };

  updateCounter();
}

// Intersection Observer for Statistics
const statsSection = document.querySelector('.statistics');

if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterStarted) {
        counterStarted = true;
        statNumbers.forEach(stat => {
          animateCounter(stat);
        });
      }
    });
  }, {
    threshold: 0.5
  });

  statsObserver.observe(statsSection);
}

// =====================================================
// FAQ ACCORDION
// =====================================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// =====================================================
// PRICING BUTTON HANDLERS
// =====================================================
const pricingButtons = document.querySelectorAll('.pricing-btn');

pricingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.closest('.pricing-card').querySelector('h3').textContent;
    alert(`You selected the ${plan}!\n\nThis feature will redirect to the subscription page. Thank you for choosing Food Paradise!`);
  });
});

// =====================================================
// CONTACT FORM
// =====================================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    alert(`Thank you, ${name}!\n\nYour message has been received. We'll get back to you at ${email} as soon as possible.`);
    
    contactForm.reset();
  });
}

// =====================================================
// NEWSLETTER FORM
// =====================================================
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    alert(`Success!\n\nThank you for subscribing to our newsletter. We've sent a confirmation email to ${email}.`);
    
    newsletterForm.reset();
  });
}

// =====================================================
// SCROLL TO TOP BUTTON
// =====================================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// =====================================================
// STEP 7: ENHANCED INTERACTIONS & ANIMATIONS
// =====================================================

// Lazy Loading Images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Enhanced Cart Count Animation
function updateCartCount() {
  const count = cartItems.length;
  cartCount.textContent = count;
  
  if (count > 0) {
    cartCount.style.animation = 'none';
    setTimeout(() => {
      cartCount.style.animation = 'pulse 0.5s ease';
    }, 10);
  }
}

// Smooth Reveal on Scroll for Elements
const revealElements = document.querySelectorAll('.service-card, .menu-card, .testimonial-card, .pricing-card, .info-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// Parallax Effect for Hero and Statistics
function parallaxEffect() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero, .statistics');
  
  parallaxElements.forEach(el => {
    const speed = 0.5;
    el.style.backgroundPositionY = -(scrolled * speed) + 'px';
  });
}

if (window.innerWidth > 768) {
  window.addEventListener('scroll', parallaxEffect);
}

// Navbar Background Blur on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  } else {
    navbar.style.backdropFilter = 'none';
    navbar.style.backgroundColor = 'transparent';
  }
});

// Add Ripple Effect to Buttons
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
  ripple.classList.add('ripple');

  const existingRipple = button.getElementsByClassName('ripple')[0];
  if (existingRipple) {
    existingRipple.remove();
  }

  button.appendChild(ripple);
}

document.querySelectorAll('.btn, .btn-add-cart, .tab-btn').forEach(button => {
  button.addEventListener('click', createRipple);
});

// Touch Swipe for Mobile Menu Tabs
const menuTabsContainer = document.querySelector('.menu-tabs');
if (menuTabsContainer && window.innerWidth <= 768) {
  let isDown = false;
  let startX;
  let scrollLeft;

  menuTabsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - menuTabsContainer.offsetLeft;
    scrollLeft = menuTabsContainer.scrollLeft;
  });

  menuTabsContainer.addEventListener('mouseleave', () => {
    isDown = false;
  });

  menuTabsContainer.addEventListener('mouseup', () => {
    isDown = false;
  });

  menuTabsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - menuTabsContainer.offsetLeft;
    const walk = (x - startX) * 2;
    menuTabsContainer.scrollLeft = scrollLeft - walk;
  });
}

// Performance Monitoring
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`%c⚡ Page Load Time: ${pageLoadTime}ms`, 'color: #10b981; font-weight: bold; font-size: 14px;');
  }
});

// Disable Right Click on Images (Optional - can be removed if not needed)
// document.querySelectorAll('img').forEach(img => {
//   img.addEventListener('contextmenu', (e) => e.preventDefault());
// });

// Add to Cart with Animation
document.querySelectorAll('.btn-add-cart').forEach(button => {
  button.addEventListener('click', function(e) {
    // Visual feedback with icon change
    const originalHTML = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i> Added!';
    this.style.background = '#10b981';
    
    // Create floating animation
    const rect = this.getBoundingClientRect();
    const floatingIcon = document.createElement('div');
    floatingIcon.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    floatingIcon.style.cssText = `
      position: fixed;
      left: ${rect.left}px;
      top: ${rect.top}px;
      font-size: 24px;
      color: var(--primary);
      pointer-events: none;
      z-index: 9999;
      animation: floatToCart 1s ease-out forwards;
    `;
    document.body.appendChild(floatingIcon);
    
    setTimeout(() => {
      floatingIcon.remove();
    }, 1000);
    
    setTimeout(() => {
      this.innerHTML = originalHTML;
      this.style.background = '';
    }, 1500);
  });
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
  @keyframes floatToCart {
    to {
      transform: translateY(-100px) scale(0);
      opacity: 0;
    }
  }
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
  }
  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

console.log('%c🎨 All animations and interactions loaded successfully!', 'color: #ff6b35; font-weight: bold; font-size: 14px;');
