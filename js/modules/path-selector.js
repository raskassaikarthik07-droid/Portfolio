/**
 * "Choose Your Path" Selector Module
 * Tailors visual emphasis for Recruiters, Explorers, and Collaborators without hiding content
 */

(function () {
  const initPathSelector = () => {
    const container = document.getElementById('path-selector-container');
    const pathSummary = document.getElementById('path-active-summary');
    if (!container) return;

    const paths = window.PORTFOLIO_DATA?.paths || [];
    let currentPath = 'all';

    const renderPaths = () => {
      container.innerHTML = paths.map(p => `
        <button type="button" class="path-btn px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${p.id === currentPath ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/20' : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white'}" data-path="${p.id}">
          <span class="opacity-60 text-[10px] mr-1">${p.badge}</span> ${p.label}
        </button>
      `).join('');

      container.querySelectorAll('.path-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const pathId = btn.getAttribute('data-path');
          setPath(pathId);
        });
      });
    };

    const setPath = (pathId) => {
      currentPath = pathId;
      renderPaths();

      const pObj = paths.find(p => p.id === pathId);
      if (pathSummary && pObj) {
        pathSummary.innerHTML = `
          <div class="inline-flex items-center gap-2 text-xs font-mono text-slate-300">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Mode active: <strong class="text-cyan-300 font-semibold">${pObj.label}</strong> &mdash; ${pObj.summary}</span>
          </div>
        `;
      }

      // Remove existing emphasis classes
      document.querySelectorAll('.path-highlight').forEach(el => {
        el.classList.remove('path-highlight', 'ring-1', 'ring-cyan-500/40', 'bg-cyan-950/20');
      });

      if (pathId === 'recruiter') {
        // Highlight Education, Verified Projects, and Contact
        document.querySelectorAll('#education .glass-card, #projects .glass-card, #contact .glass-card').forEach(el => {
          el.classList.add('path-highlight', 'ring-1', 'ring-cyan-500/40');
        });
      } else if (pathId === 'explorer') {
        // Highlight Playground, Time Machine, and Skills
        document.querySelectorAll('#playground .glass-card, #skills .glass-card').forEach(el => {
          el.classList.add('path-highlight', 'ring-1', 'ring-cyan-500/40');
        });
      } else if (pathId === 'collaborator') {
        // Highlight GitHub repos, terminal, and code architecture
        document.querySelectorAll('#projects .project-card, .terminal-preview-card').forEach(el => {
          el.classList.add('path-highlight', 'ring-1', 'ring-cyan-500/40');
        });
      }
    };

    renderPaths();
    setPath('all');
  };

  document.addEventListener('DOMContentLoaded', initPathSelector);
})();
