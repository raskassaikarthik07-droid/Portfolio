/**
 * Cosmic Background Particle Canvas
 * Lightweight 60fps ambient background with strict performance caps
 */

(function () {
  const initParticlesBg = () => {
    // Respect user motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = document.getElementById('hero-cosmic-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const isMobile = window.innerWidth < 768;
    const maxParticles = isMobile ? 18 : 36;
    let particles = [];
    let isVisible = false;
    let animId = null;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.8,
          alpha: Math.random() * 0.4 + 0.2
        });
      }
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    const draw = () => {
      if (!isVisible) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Draw faint constellation lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[j].x - particles[i].x, particles[j].y - particles[i].y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(165, 255, 80, ${0.12 * (1 - dist / 110)})`;
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 255, 80, ${p.alpha * 0.7})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    // Pause when hero is not visible
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animId) draw();
        else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      }, { threshold: 0.05 });
      observer.observe(canvas.parentElement);
    } else {
      isVisible = true;
      draw();
    }
  };

  document.addEventListener('DOMContentLoaded', initParticlesBg);
})();
