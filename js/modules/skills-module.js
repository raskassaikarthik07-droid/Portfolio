/**
 * Skills Module: "Things I build with."
 * Grouped interactive tags/tiles (no fake percentage bars)
 * Displays description, verified projects, and paired tools on hover/click
 */

(function () {
  const initSkillsModule = () => {
    const skills = window.PORTFOLIO_DATA?.skillsUniverse || [];
    const container = document.getElementById('skills-grouped-container');
    const detailCard = document.getElementById('skill-detail-card');
    if (!container || !detailCard || skills.length === 0) return;

    let activeSkill = skills[0];

    // Category mapping
    const categories = [
      { id: 'All', label: 'All Capabilities' },
      { id: 'Languages', label: 'Languages' },
      { id: 'Frontend', label: 'Frontend' },
      { id: 'AI / ML', label: 'AI & Vision' },
      { id: 'Databases', label: 'Databases' },
      { id: 'Hardware', label: 'IoT & Hardware' },
      { id: 'Tools', label: 'Dev Tools' }
    ];

    let currentCategory = 'All';

    // Render category filters
    const filterContainer = document.getElementById('skills-category-tabs');
    if (filterContainer) {
      filterContainer.innerHTML = categories.map((cat, idx) => `
        <button type="button" class="skills-cat-btn px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${idx === 0 ? 'bg-[#A5FF50] text-[#111111] font-bold shadow-md shadow-[#A5FF50]/20' : 'bg-[#17181E] border border-[#262833] text-neutral-400 hover:text-white hover:border-neutral-500'}" data-category="${cat.id}">
          ${cat.label}
        </button>
      `).join('');

      filterContainer.querySelectorAll('.skills-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentCategory = btn.getAttribute('data-category');
          filterContainer.querySelectorAll('.skills-cat-btn').forEach(b => {
            b.className = 'skills-cat-btn px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 bg-[#17181E] border border-[#262833] text-neutral-400 hover:text-white hover:border-neutral-500';
          });
          btn.className = 'skills-cat-btn px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 bg-[#A5FF50] text-[#111111] font-bold shadow-md shadow-[#A5FF50]/20';
          renderSkillsGrid();
        });
      });
    }

    // Render Detail Card
    const updateDetailCard = (skill) => {
      if (!skill) return;
      activeSkill = skill;

      const nameEl = document.getElementById('sd-name');
      const catEl = document.getElementById('sd-category');
      const levelEl = document.getElementById('sd-level');
      const descEl = document.getElementById('sd-desc');
      const projectsEl = document.getElementById('sd-projects');
      const toolsEl = document.getElementById('sd-tools');

      if (nameEl) nameEl.textContent = skill.name;
      if (catEl) catEl.textContent = skill.category;
      if (levelEl) levelEl.textContent = skill.level;
      if (descEl) descEl.textContent = skill.description;

      if (projectsEl) {
        projectsEl.innerHTML = (skill.relatedProjects || []).map(p => `
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-[#17181E] border border-[#262833] text-white">
            <span class="w-1.5 h-1.5 rounded-full bg-[#A5FF50]"></span>
            <span>${p}</span>
          </span>
        `).join('');
      }

      if (toolsEl) {
        toolsEl.innerHTML = (skill.pairedWith || []).map(t => `
          <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300">
            ${t}
          </span>
        `).join('');
      }

      // Highlight active pill in grid
      container.querySelectorAll('.skill-interactive-tile').forEach(tile => {
        if (tile.getAttribute('data-id') === skill.id) {
          tile.classList.add('border-[#A5FF50]', 'bg-[#17181E]', 'shadow-lg', 'shadow-[#A5FF50]/15');
          tile.classList.remove('border-neutral-800', 'bg-neutral-950/70');
        } else {
          tile.classList.remove('border-[#A5FF50]', 'bg-[#17181E]', 'shadow-lg', 'shadow-[#A5FF50]/15');
          tile.classList.add('border-neutral-800', 'bg-neutral-950/70');
        }
      });
    };

    // Render Interactive Grid
    const renderSkillsGrid = () => {
      const filtered = currentCategory === 'All' 
        ? skills 
        : skills.filter(s => s.category.toLowerCase().includes(currentCategory.toLowerCase()) || currentCategory.toLowerCase().includes(s.category.toLowerCase()));

      container.innerHTML = filtered.map(skill => {
        const isActive = skill.id === activeSkill?.id;
        return `
          <div class="skill-interactive-tile p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${isActive ? 'border-[#A5FF50] bg-[#17181E] shadow-lg shadow-[#A5FF50]/15' : 'border-neutral-800/80 bg-neutral-950/70 hover:border-neutral-700 hover:bg-[#14151C]'}" data-id="${skill.id}">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono uppercase tracking-wider text-neutral-500 group-hover:text-neutral-400">${skill.category}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-[#A5FF50] border border-neutral-800">${skill.level}</span>
              </div>
              <h4 class="font-display font-bold text-base text-white group-hover:text-[#A5FF50] transition-colors">${skill.name}</h4>
              <p class="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">${skill.description}</p>
            </div>
            
            <div class="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span class="flex items-center gap-1 group-hover:text-[#A5FF50] transition-colors">
                <span>View Details</span>
                <i class="fa-solid fa-arrow-right text-[9px]"></i>
              </span>
              <span>${skill.relatedProjects?.length || 0} projects</span>
            </div>
          </div>
        `;
      }).join('');

      // Add click & hover listeners
      container.querySelectorAll('.skill-interactive-tile').forEach(tile => {
        const skillId = tile.getAttribute('data-id');
        const skillObj = skills.find(s => s.id === skillId);

        tile.addEventListener('mouseenter', () => {
          updateDetailCard(skillObj);
        });

        tile.addEventListener('click', () => {
          updateDetailCard(skillObj);
        });
      });
    };

    renderSkillsGrid();
    updateDetailCard(skills[0]);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSkillsModule);
  } else {
    initSkillsModule();
  }
})();
