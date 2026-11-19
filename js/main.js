/**
 * Portfolio Interactive System - Raskas Sai Karthik
 * High-performance 60fps animations, IntersectionObserver reveals, and micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloaderAndHero();
  initScrollReveal();
  initStaggerWaterfall();
  initNavbarBehavior();
  initSpotlightCards();
  initProjectFilters();
  initContactForm();
  initBackToTop();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. PRELOADER & HERO STAGGERED ENTRANCE
   -------------------------------------------------------------------------- */
function initPreloaderAndHero() {
  const preloader = document.getElementById('preloader');

  const launchEntrance = () => {
    if (!preloader || preloader.classList.contains('loaded')) return;
    
    // Add loaded class to smoothly fade out preloader
    preloader.classList.add('loaded');

    // Trigger hero staggered entrance animation
    setTimeout(() => {
      document.body.classList.add('page-loaded');
    }, 150);
  };

  // Trigger when all resources load
  window.addEventListener('load', () => {
    setTimeout(launchEntrance, 100);
  });

  // Safe fallback so the page is never locked
  setTimeout(launchEntrance, 1200);
}

/* --------------------------------------------------------------------------
   2. SCROLL-TRIGGERED SECTION REVEAL (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback if browser lacks IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   3. STAGGERED WATERFALL CARDS & BADGES REVEAL
   -------------------------------------------------------------------------- */
function initStaggerWaterfall() {
  const staggerGroups = document.querySelectorAll('.stagger-group');

  if (!('IntersectionObserver' in window)) {
    staggerGroups.forEach(group => group.classList.add('is-visible'));
    return;
  }

  const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -30px 0px',
    threshold: 0.1
  });

  staggerGroups.forEach(group => staggerObserver.observe(group));
}

/* --------------------------------------------------------------------------
   4. STICKY NAVBAR & ACTIVE SECTION HIGHLIGHTS (SMART HIDE/REVEAL)
   -------------------------------------------------------------------------- */
function initNavbarBehavior() {
  const navbar = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  let ticking = false;
  let lastScrollY = window.scrollY;

  // Sticky navbar blur and smart hide-on-scroll-down / reveal-on-scroll-up
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;

        // Frosted glass background
        if (currentY > 30) {
          navbar.classList.add('nav-scrolled');
        } else {
          navbar.classList.remove('nav-scrolled');
        }

        // Hide on scroll down, reveal on scroll up
        if (currentY > 160 && currentY > lastScrollY) {
          navbar.classList.add('nav-hidden');
        } else {
          navbar.classList.remove('nav-hidden');
        }

        lastScrollY = currentY <= 0 ? 0 : currentY;
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Active section indicator using IntersectionObserver
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      }
    );

    sections.forEach(sec => navObserver.observe(sec));
  }
}

// Global Toast Notification Helper
window.showPortfolioToast = (msg) => {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  if (!toast) return;
  if (toastMessage) toastMessage.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
};

/* --------------------------------------------------------------------------
   5. INTERACTIVE SPOTLIGHT HOVER FOR GLASSMORPHISM CARDS
   -------------------------------------------------------------------------- */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   6. INTERACTIVE PROJECT FILTERING
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button state
      filterButtons.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
        b.classList.add('text-slate-400', 'border-transparent');
      });
      btn.classList.remove('text-slate-400', 'border-transparent');
      btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');

      // Filter project cards with scale and fade transition
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const isLive = card.getAttribute('data-live') === 'true';
        const matches = (filter === 'all') || 
                        (category === filter) || 
                        (filter === 'live' && isLive);

        if (matches) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. CONTACT SECTION INTERACTIONS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  const showToast = (msg) => {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  };

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'raskas.saikarthik07@gmail.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email copied to clipboard: ' + email);
        }).catch(() => {
          showToast('Email: ' + email);
        });
      } else {
        showToast('Email: ' + email);
      }
    });
  }
}

/* --------------------------------------------------------------------------
   8. BACK-TO-TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const bttButton = document.getElementById('back-to-top');
  if (!bttButton) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      bttButton.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      bttButton.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      bttButton.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      bttButton.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  }, { passive: true });

  bttButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   9. MOBILE MENU TOGGLE
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      mobileMenu.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => mobileMenu.classList.add('open'), 10);
    }
  };

  menuBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      setTimeout(() => mobileMenu.classList.add('hidden'), 200);
    });
  });
}
