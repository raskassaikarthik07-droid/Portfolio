/**
 * Skills Universe Module
 * Interactive Node Constellation Graph & Inspector Panel
 */

(function () {
  const initSkillsUniverse = () => {
    const canvas = document.getElementById('skills-canvas');
    const inspector = document.getElementById('skills-inspector');
    const filterContainer = document.getElementById('skills-category-filters');
    const mobileList = document.getElementById('skills-mobile-pills');

    if (!canvas || !inspector) return;

    const ctx = canvas.getContext('2d');
    const skills = window.PORTFOLIO_DATA?.skillsUniverse || [];
    let activeSkill = skills[0] || null;
    let hoveredSkill = null;
    let selectedCategory = 'All';
    let animationFrameId = null;
    let isVisible = false;

    // Palette mapping per category
    const categoryColors = {
      'Languages': '#38bdf8',  // Cyan
      'Frontend': '#818cf8',   // Indigo
      'AI / ML': '#ec4899',     // Pink
      'Databases': '#a855f7',   // Purple
      'Hardware': '#10b981',    // Emerald
      'Tools': '#f59e0b'        // Amber
    };

    // Resize canvas safely
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Render Inspector Details
    const updateInspector = (skill) => {
      if (!skill) return;
      activeSkill = skill;

      document.getElementById('si-name').textContent = skill.name;
      document.getElementById('si-category').textContent = skill.category;
      document.getElementById('si-level').textContent = skill.level;
      document.getElementById('si-desc').textContent = skill.description;

      const badge = document.getElementById('si-badge');
      if (badge) {
        badge.style.borderColor = categoryColors[skill.category] || '#38bdf8';
        badge.style.color = categoryColors[skill.category] || '#38bdf8';
      }

      // Related projects
      const projContainer = document.getElementById('si-projects');
      if (projContainer) {
        projContainer.innerHTML = skill.relatedProjects.map(p => `
          <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
            <i class="fa-solid fa-code-branch mr-1 text-cyan-400"></i> ${p}
          </span>
        `).join('');
      }

      // Paired tools
      const pairedContainer = document.getElementById('si-paired');
      if (pairedContainer) {
        pairedContainer.innerHTML = skill.pairedWith.map(t => `
          <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
            ${t}
          </span>
        `).join('');
      }
    };

    // Render Mobile / Accessible Pill List
    const renderMobileList = () => {
      if (!mobileList) return;
      const filtered = selectedCategory === 'All' 
        ? skills 
        : skills.filter(s => s.category === selectedCategory);

      mobileList.innerHTML = filtered.map(s => {
        const color = categoryColors[s.category] || '#38bdf8';
        return `
          <button type="button" class="skill-node-btn p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex flex-col gap-1 text-left transition-all" data-id="${s.id}">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-white font-mono">${s.name}</span>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded" style="background: ${color}20; color: ${color}; border: 1px solid ${color}40;">${s.level}</span>
            </div>
            <p class="text-[11px] text-slate-400 line-clamp-1">${s.description}</p>
          </button>
        `;
      }).join('');

      mobileList.querySelectorAll('.skill-node-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const found = skills.find(s => s.id === id);
          if (found) updateInspector(found);
        });
      });
    };

    // Render Category Filter Buttons
    const renderFilters = () => {
      if (!filterContainer) return;
      const categories = ['All', 'Languages', 'Frontend', 'AI / ML', 'Databases', 'Hardware', 'Tools'];

      filterContainer.innerHTML = categories.map(cat => `
        <button type="button" class="skills-filter-btn px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${cat === selectedCategory ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white border border-transparent'}" data-cat="${cat}">
          ${cat}
        </button>
      `).join('');

      filterContainer.querySelectorAll('.skills-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedCategory = btn.getAttribute('data-cat');
          renderFilters();
          renderMobileList();
        });
      });
    };

    // Canvas Draw Loop (60fps optimized)
    let time = 0;
    const draw = () => {
      if (!isVisible) return;
      time += 0.015;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Draw subtle orbital rings
      const cx = w * 0.5;
      const cy = h * 0.5;
      [w * 0.22, w * 0.36, w * 0.46].forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 + idx * 0.01})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Filtered skills list
      const visibleSkills = selectedCategory === 'All'
        ? skills
        : skills.filter(s => s.category === selectedCategory);

      // Draw constellation connections
      ctx.lineWidth = 1;
      for (let i = 0; i < visibleSkills.length; i++) {
        for (let j = i + 1; j < visibleSkills.length; j++) {
          const s1 = visibleSkills[i];
          const s2 = visibleSkills[j];
          const x1 = (s1.coords.x / 100) * w + Math.sin(time + i) * 3;
          const y1 = (s1.coords.y / 100) * h + Math.cos(time + i) * 3;
          const x2 = (s2.coords.x / 100) * w + Math.sin(time + j) * 3;
          const y2 = (s2.coords.y / 100) * h + Math.cos(time + j) * 3;

          const dist = Math.hypot(x2 - x1, y2 - y1);
          if (dist < w * 0.32) {
            const alpha = (1 - dist / (w * 0.32)) * 0.18;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      visibleSkills.forEach((s, idx) => {
        const x = (s.coords.x / 100) * w + Math.sin(time + idx) * 3;
        const y = (s.coords.y / 100) * h + Math.cos(time + idx) * 3;
        const isHovered = hoveredSkill?.id === s.id;
        const isActive = activeSkill?.id === s.id;
        const color = categoryColors[s.category] || '#38bdf8';

        // Outer glow on active/hover
        if (isHovered || isActive) {
          ctx.beginPath();
          ctx.arc(x, y, 16, 0, Math.PI * 2);
          ctx.fillStyle = `${color}25`;
          ctx.fill();
        }

        // Main Node Core
        ctx.beginPath();
        ctx.arc(x, y, isActive ? 7 : (isHovered ? 6 : 4.5), 0, Math.PI * 2);
        ctx.fillStyle = isActive ? '#ffffff' : color;
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Node Label
        ctx.font = `${isActive ? '600 11px' : '500 10px'} "Fira Code", monospace`;
        ctx.fillStyle = isActive ? '#ffffff' : (isHovered ? '#38bdf8' : '#94a3b8');
        ctx.fillText(s.name, x + 10, y + 3.5);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Interactive pointer detection on canvas
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const w = rect.width;
      const h = rect.height;

      const visibleSkills = selectedCategory === 'All'
        ? skills
        : skills.filter(s => s.category === selectedCategory);

      let found = null;
      for (const s of visibleSkills) {
        const sx = (s.coords.x / 100) * w;
        const sy = (s.coords.y / 100) * h;
        if (Math.hypot(mx - sx, my - sy) < 20) {
          found = s;
          break;
        }
      }

      hoveredSkill = found;
      canvas.style.cursor = found ? 'pointer' : 'default';
      if (found) updateInspector(found);
    });

    canvas.addEventListener('click', () => {
      if (hoveredSkill) updateInspector(hoveredSkill);
    });

    // Pause animation when offscreen
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animationFrameId) {
          draw();
        } else if (!isVisible && animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }, { threshold: 0.1 });
      obs.observe(canvas);
    } else {
      isVisible = true;
      draw();
    }

    // Init
    updateInspector(skills[0]);
    renderFilters();
    renderMobileList();
  };

  document.addEventListener('DOMContentLoaded', initSkillsUniverse);
})();
