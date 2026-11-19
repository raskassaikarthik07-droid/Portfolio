/**
 * The Playground: Isolated Creative Lab Experiments
 * 1. Gravitational Particle Field
 * 2. Interactive DS Stack & Queue Visualizer
 * 3. Cosmic Harmonic Wave Synthesizer
 */

(function () {
  const initPlayground = () => {
    initParticleField();
    initDSSandbox();
    initCosmicWave();
    initPlaygroundTabs();
  };

  /* --------------------------------------------------------------------------
     PLAYGROUND TABS SWITCHER
     -------------------------------------------------------------------------- */
  const initPlaygroundTabs = () => {
    const tabs = document.querySelectorAll('.pg-tab-btn');
    const panes = document.querySelectorAll('.pg-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');

        tabs.forEach(t => {
          t.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
          t.classList.add('text-slate-400', 'border-transparent');
        });
        tab.classList.remove('text-slate-400', 'border-transparent');
        tab.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');

        panes.forEach(p => {
          if (p.id === target) {
            p.classList.remove('hidden');
          } else {
            p.classList.add('hidden');
          }
        });
      });
    });
  };

  /* --------------------------------------------------------------------------
     EXPERIMENT 1: GRAVITATIONAL PARTICLE FIELD
     -------------------------------------------------------------------------- */
  const initParticleField = () => {
    const canvas = document.getElementById('pg-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    let particleCount = 45;
    let gravityStrength = 1.2;
    let mouse = { x: -1000, y: -1000, active: false };
    let isVisible = false;
    let animId = null;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1.5,
          color: ['#38bdf8', '#818cf8', '#ec4899', '#34d399'][Math.floor(Math.random() * 4)]
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    canvas.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    // Touch support
    canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - r.left;
        mouse.y = e.touches[0].clientY - r.top;
        mouse.active = true;
      }
    }, { passive: true });

    canvas.addEventListener('touchend', () => {
      mouse.active = false;
    });

    // Interactive slider controls
    const countSlider = document.getElementById('pg-pcount-slider');
    const gravSlider = document.getElementById('pg-grav-slider');
    const resetBtn = document.getElementById('pg-reset-particles');

    if (countSlider) {
      countSlider.addEventListener('input', (e) => {
        particleCount = parseInt(e.target.value, 10);
        document.getElementById('pg-pcount-val').textContent = particleCount;
        initParticles();
      });
    }

    if (gravSlider) {
      gravSlider.addEventListener('input', (e) => {
        gravityStrength = parseFloat(e.target.value);
        document.getElementById('pg-grav-val').textContent = gravityStrength + 'x';
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        initParticles();
      });
    }

    const loop = () => {
      if (!isVisible) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Draw background coordinate grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw mouse gravity radius
      if (mouse.active) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 70, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Update & Draw particles
      particles.forEach(p => {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150 && dist > 5) {
            const force = ((150 - dist) / 150) * 0.15 * gravityStrength;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Bounce on boundaries
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Connections between nearby particles
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[j].x - particles[i].x, particles[j].y - particles[i].y);
          if (dist < 65) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / 65)})`;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(loop);
    };

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animId) loop();
        else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      }, { threshold: 0.1 });
      obs.observe(canvas);
    } else {
      isVisible = true;
      loop();
    }
  };

  /* --------------------------------------------------------------------------
     EXPERIMENT 2: INTERACTIVE DS STACK & QUEUE VISUALIZER
     -------------------------------------------------------------------------- */
  const initDSSandbox = () => {
    const stackContainer = document.getElementById('pg-ds-stack');
    const logBox = document.getElementById('pg-ds-log');
    const pushBtn = document.getElementById('pg-ds-push');
    const popBtn = document.getElementById('pg-ds-pop');
    const peekBtn = document.getElementById('pg-ds-peek');
    const clearBtn = document.getElementById('pg-ds-clear');
    const inputVal = document.getElementById('pg-ds-input');

    if (!stackContainer || !pushBtn) return;

    let stack = [42, 88, 17];
    const MAX_STACK = 7;

    const log = (msg, type = 'info') => {
      if (!logBox) return;
      const color = type === 'error' ? 'text-rose-400' : (type === 'success' ? 'text-emerald-400' : 'text-cyan-300');
      const time = new Date().toLocaleTimeString().split(' ')[0];
      logBox.innerHTML = `<div><span class="text-slate-500 font-mono">[${time}]</span> <span class="${color}">${msg}</span></div>` + logBox.innerHTML;
    };

    const render = () => {
      stackContainer.innerHTML = '';
      if (stack.length === 0) {
        stackContainer.innerHTML = `
          <div class="h-44 flex flex-col items-center justify-center text-xs font-mono text-slate-500 border border-dashed border-slate-800 rounded-xl">
            <i class="fa-solid fa-inbox text-lg mb-1 opacity-50"></i>
            Stack is Empty (NULL)
          </div>
        `;
        return;
      }

      // Render items from top to bottom
      stack.slice().reverse().forEach((val, revIdx) => {
        const actualIdx = stack.length - 1 - revIdx;
        const isTop = revIdx === 0;
        const item = document.createElement('div');
        item.className = `p-3 rounded-xl border flex items-center justify-between text-xs font-mono transition-all transform animate-fadeIn ${isTop ? 'bg-cyan-950/50 border-cyan-500/60 text-cyan-300 shadow-md shadow-cyan-500/10' : 'bg-slate-900/70 border-slate-800 text-slate-300'}`;
        item.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="text-[10px] text-slate-500">Node[${actualIdx}]</span>
            <span class="font-bold text-sm ${isTop ? 'text-cyan-300' : 'text-white'}">${val}</span>
          </div>
          ${isTop ? '<span class="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/40">TOP &larr;</span>' : '<span class="text-[10px] text-slate-600">&darr; pointer</span>'}
        `;
        stackContainer.appendChild(item);
      });
    };

    pushBtn.addEventListener('click', () => {
      if (stack.length >= MAX_STACK) {
        log(`StackOverflowError: Maximum memory bound (${MAX_STACK}) reached.`, 'error');
        return;
      }
      const val = parseInt(inputVal?.value, 10) || Math.floor(Math.random() * 90 + 10);
      stack.push(val);
      log(`PUSH operation: Successfully added ${val} to TOP. (Size: ${stack.length})`, 'success');
      render();
      if (inputVal) inputVal.value = '';
    });

    popBtn.addEventListener('click', () => {
      if (stack.length === 0) {
        log(`StackUnderflowError: Cannot POP from empty stack.`, 'error');
        return;
      }
      const popped = stack.pop();
      log(`POP operation: Removed element ${popped} from TOP. (Size: ${stack.length})`, 'success');
      render();
    });

    peekBtn.addEventListener('click', () => {
      if (stack.length === 0) {
        log(`PEEK: Stack is currently empty.`, 'error');
        return;
      }
      const top = stack[stack.length - 1];
      log(`PEEK inspection: Current TOP value is ${top} at index [${stack.length - 1}].`, 'info');
    });

    clearBtn.addEventListener('click', () => {
      stack = [];
      log(`CLEAR operation: Deallocated all stack nodes.`, 'info');
      render();
    });

    render();
    log(`Initialized DS Memory Engine: Structviz Sandbox active.`, 'info');
  };

  /* --------------------------------------------------------------------------
     EXPERIMENT 3: COSMIC HARMONIC WAVE SYNTHESIZER
     -------------------------------------------------------------------------- */
  const initCosmicWave = () => {
    const canvas = document.getElementById('pg-wave-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let freq = 0.02;
    let amp = 35;
    let speed = 0.04;
    let time = 0;
    let isVisible = false;
    let animId = null;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    // Slider Controls
    const freqSlider = document.getElementById('pg-wave-freq');
    const ampSlider = document.getElementById('pg-wave-amp');
    const speedSlider = document.getElementById('pg-wave-speed');

    if (freqSlider) {
      freqSlider.addEventListener('input', (e) => {
        freq = parseFloat(e.target.value);
        document.getElementById('pg-wave-freq-val').textContent = freq.toFixed(3);
      });
    }

    if (ampSlider) {
      ampSlider.addEventListener('input', (e) => {
        amp = parseFloat(e.target.value);
        document.getElementById('pg-wave-amp-val').textContent = amp.toFixed(0) + 'px';
      });
    }

    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        speed = parseFloat(e.target.value);
        document.getElementById('pg-wave-speed-val').textContent = speed.toFixed(2);
      });
    }

    const draw = () => {
      if (!isVisible) return;
      time += speed;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cy = h * 0.5;

      ctx.clearRect(0, 0, w, h);

      // Draw Center Baseline
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Render 3 Harmonic Waves with Phase Offsets
      const waves = [
        { color: 'rgba(56, 189, 248, 0.8)', offset: 0, scale: 1 },
        { color: 'rgba(129, 140, 248, 0.6)', offset: Math.PI * 0.35, scale: 0.75 },
        { color: 'rgba(236, 72, 153, 0.45)', offset: Math.PI * 0.7, scale: 0.5 }
      ];

      waves.forEach(wave => {
        ctx.beginPath();
        for (let x = 0; x < w; x += 3) {
          const y = cy + Math.sin(x * freq + time + wave.offset) * (amp * wave.scale)
                      + Math.cos(x * freq * 0.5 - time * 0.5) * (amp * 0.25 * wave.scale);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animId) draw();
        else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      }, { threshold: 0.1 });
      obs.observe(canvas);
    } else {
      isVisible = true;
      draw();
    }
  };

  document.addEventListener('DOMContentLoaded', initPlayground);
})();
