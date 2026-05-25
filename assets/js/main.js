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
  const submitBtn = document.getElementById('feedback-submit-btn');
  
  if (!form || !successOverlay || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent standard page redirect

    // Set interactive loading state on button
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(form);

    // Send HTTP POST request to Web3Forms API
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      const resJson = await response.json();
      if (response.status === 200 && resJson.success) {
        // Success: Trigger visual popup overlay
        successOverlay.classList.add('show');
        form.reset();

        // Stagger dismiss timer for 5 seconds
        setTimeout(() => {
          successOverlay.classList.remove('show');
        }, 5000);
      } else {
        console.error('Web3Forms Server Error:', resJson);
        alert('Oops! ' + (resJson.message || 'Error occurred while sending message. Please try again.'));
      }
    })
    .catch((error) => {
      console.error('Network Dispatch Error:', error);
      alert('Network error occurred. Please check your connection and try again.');
    })
    .finally(() => {
      // Restore button text and disabled status
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    });
  });
}
