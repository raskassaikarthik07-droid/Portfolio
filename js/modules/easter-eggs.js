/**
 * Subtle Easter Eggs & Desktop Polish Module
 * 1. Multi-click Monogram secret
 * 2. Konami Code Terminal unlocker
 * 3. Desktop-only magnetic button micro-interaction
 */

(function () {
  const initEasterEggs = () => {
    initLogoSecret();
    initKonamiCode();
    initDesktopMagneticButtons();
  };

  // 1. Monogram Multi-click Secret
  const initLogoSecret = () => {
    const logo = document.getElementById('brand-logo');
    if (!logo) return;

    let clickCount = 0;
    let timer = null;

    logo.addEventListener('click', (e) => {
      clickCount++;
      clearTimeout(timer);
      timer = setTimeout(() => { clickCount = 0; }, 2200);

      if (clickCount === 5) {
        clickCount = 0;
        if (window.showPortfolioToast) {
          window.showPortfolioToast('✨ Secret Unlocked: Cosmic Monogram! Welcome to Sai Karthik\'s Creative Lab.');
        }
        logo.classList.add('animate-bounce');
        setTimeout(() => logo.classList.remove('animate-bounce'), 1000);
      }
    });
  };

  // 2. Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)
  const initKonamiCode = () => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let keyIndex = 0;

    window.addEventListener('keydown', (e) => {
      // Don't intercept when user is typing in inputs/textareas
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const expectedKey = konamiCode[keyIndex];
      if (e.key.toLowerCase() === expectedKey.toLowerCase()) {
        keyIndex++;
        if (keyIndex === konamiCode.length) {
          keyIndex = 0;
          if (window.openTerminal) {
            window.openTerminal();
            if (window.showPortfolioToast) {
              window.showPortfolioToast('🎮 KONAMI CODE DETECTED: Terminal Godmode Activated.');
            }
          }
        }
      } else {
        keyIndex = 0;
      }
    });
  };

  // 3. Desktop-Only Magnetic Buttons
  const initDesktopMagneticButtons = () => {
    // Check if device supports true hover (desktop)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const magneticTargets = document.querySelectorAll('.magnetic-target');

    magneticTargets.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  };

  document.addEventListener('DOMContentLoaded', initEasterEggs);
})();
