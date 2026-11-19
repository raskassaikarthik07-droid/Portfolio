/**
 * Case Study & Project Time Machine Module
 * Deep-dive case studies with interactive stage switching
 */

(function () {
  const initCaseStudyModal = () => {
    const modal = document.getElementById('case-study-modal');
    const closeBtn = document.getElementById('case-study-close-btn');
    if (!modal) return;

    let currentProject = null;
    let activeStageIndex = 0;

    const openCaseStudy = (projectId) => {
      const data = window.PORTFOLIO_DATA?.projects?.find(p => p.id === projectId);
      if (!data) return;

      currentProject = data;
      activeStageIndex = 0;

      // Populate Modal Content
      document.getElementById('cs-title').textContent = data.title;
      document.getElementById('cs-tagline').textContent = data.tagline;
      document.getElementById('cs-problem').textContent = data.caseStudy.problem;
      document.getElementById('cs-idea').textContent = data.caseStudy.idea;
      document.getElementById('cs-approach').textContent = data.caseStudy.approach;
      document.getElementById('cs-results').textContent = data.caseStudy.results;

      // Tech tags
      const techContainer = document.getElementById('cs-tech-tags');
      if (techContainer) {
        techContainer.innerHTML = data.caseStudy.technologies.map(t => `
          <span class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-700/80 text-cyan-300">${t}</span>
        `).join('');
      }

      // Challenges & Solutions
      const challengeContainer = document.getElementById('cs-challenges-list');
      if (challengeContainer) {
        challengeContainer.innerHTML = data.caseStudy.challenges.map((c, i) => `
          <li class="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <div class="font-semibold text-rose-300 flex items-center gap-2 mb-1">
              <i class="fa-solid fa-triangle-exclamation text-[10px]"></i> Challenge: ${c}
            </div>
            <div class="text-emerald-300 flex items-center gap-2 pl-4 border-l border-emerald-500/40 mt-1.5">
              <i class="fa-solid fa-check text-[10px]"></i> Solution: ${data.caseStudy.solutions[i] || 'Engineered custom algorithmic solution.'}
            </div>
          </li>
        `).join('');
      }

      // Links
      const liveBtn = document.getElementById('cs-live-link');
      const repoBtn = document.getElementById('cs-repo-link');

      if (liveBtn) {
        if (data.isLive) {
          liveBtn.href = data.liveUrl;
          liveBtn.style.display = 'inline-flex';
          liveBtn.querySelector('span').textContent = `Launch Webhost (${data.deploymentHost})`;
        } else {
          liveBtn.style.display = 'none';
        }
      }

      if (repoBtn) {
        repoBtn.href = data.repoUrl;
      }

      // Initialize Time Machine Stages
      renderTimeMachine();

      // Show Modal
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      }, 10);
    };

    const renderTimeMachine = () => {
      const container = document.getElementById('cs-timemachine-stages');
      const detailContainer = document.getElementById('cs-timemachine-detail');
      if (!container || !detailContainer || !currentProject) return;

      const stages = currentProject.timeMachine;

      // Render Stage Pills
      container.innerHTML = stages.map((st, idx) => `
        <button type="button" class="tm-stage-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${idx === activeStageIndex ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'}" data-index="${idx}">
          <span class="opacity-60 text-[10px] mr-1">0${idx+1}.</span> ${st.stage}
        </button>
      `).join('');

      // Add Click Listeners to Stage Pills
      container.querySelectorAll('.tm-stage-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          activeStageIndex = parseInt(btn.getAttribute('data-index'), 10);
          renderTimeMachine();
        });
      });

      // Render Active Stage Detail
      const activeStage = stages[activeStageIndex];
      detailContainer.innerHTML = `
        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col gap-2 transition-all duration-300">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-2">
              <i class="fa-solid fa-clock-rotate-left text-[11px]"></i> Stage 0${activeStageIndex + 1}: ${activeStage.label}
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Archived Milestone</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${activeStage.description}</p>
        </div>
      `;
    };

    const closeModal = () => {
      modal.classList.remove('modal-active');
      document.body.style.overflow = '';
      setTimeout(() => modal.classList.add('hidden'), 200);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Attach to triggers
    document.querySelectorAll('.view-case-study-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-project-id');
        openCaseStudy(id);
      });
    });

    window.openProjectCaseStudy = openCaseStudy;
  };

  document.addEventListener('DOMContentLoaded', initCaseStudyModal);
})();
