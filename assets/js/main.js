/**
 * buckspense.online - Premium Interactive Scripting
 * Handles sticky nav styling, mobile menu toggles, mockup details, and modern scroll hooks.
 */

document.addEventListener('DOMContentLoaded', () => {
  setupStickyHeader();
  setupMobileNav();
  setupActiveNavigation();
  animateDashboardMockup();
  setupCopyrightYear();
  setupFeedbackForm();
});

/**
 * Sticky Header Transition on Scroll
 */
function setupStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Initial check on load, then bind to scroll event
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Responsive Mobile Navigation Drawer
 */
function setupMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  
  if (!toggleBtn || !siteNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    
    // Toggle hamburger icon between open/close symbols
    toggleBtn.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });

  // Close nav on clicking links or outer clicks
  document.addEventListener('click', (e) => {
    if (!siteNav.contains(e.target) && !toggleBtn.contains(e.target) && siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
      toggleBtn.innerHTML = '&#9776;';
    }
  });
}

/**
 * Highlight Currently Active Navigation Page
 */
function setupActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentPath.endsWith(linkHref) || (currentPath === '/' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Animate the Dashboard Showcase Mockup elements dynamically
 */
function animateDashboardMockup() {
  const bars = document.querySelectorAll('.chart-bar');
  if (!bars.length) return;

  // Define target heights for mockup bars representing expenses/savings
  const targetHeights = ['40%', '70%', '55%', '90%', '65%', '85%', '95%'];

  // Trigger animations with a staggered intro effect
  setTimeout(() => {
    bars.forEach((bar, index) => {
      if (targetHeights[index]) {
        bar.style.height = targetHeights[index];
      }
    });
  }, 300);
}

/**
 * Set Dynamic Dynamic Copyright Year in Footer
 */
function setupCopyrightYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Handle Feedback & Enquiry Form Submission
 */
function setupFeedbackForm() {
  const form = document.getElementById('feedback-form');
  const successOverlay = document.getElementById('success-overlay');
  
  if (!form || !successOverlay) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent standard page redirect

    // Collect inputs
    const name = document.getElementById('feedback-name').value;
    const email = document.getElementById('feedback-email').value;
    const subject = document.getElementById('feedback-subject').value;
    const message = document.getElementById('feedback-message').value;

    // Simulate enquiry handling payload
    console.log('--- Feedback Received ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('Support destination: buckspense@gmail.com');
    console.log('-------------------------');

    // Show success overlay card
    successOverlay.classList.add('show');

    // Automatically dismiss success window after 5 seconds and reset form
    setTimeout(() => {
      successOverlay.classList.remove('show');
      form.reset();
    }, 5000);
  });
}
