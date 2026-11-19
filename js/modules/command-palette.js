/**
 * Command Palette Module (Ctrl/Cmd + K)
 * Instant search, keyboard navigation, and quick jump actions
 */

(function () {
  let isOpen = false;
  let activeIndex = 0;
  let searchResults = [];

  const initCommandPalette = () => {
    const modal = document.getElementById('command-palette-modal');
    const input = document.getElementById('palette-search-input');
    const list = document.getElementById('palette-results-list');
    const openBtns = document.querySelectorAll('.open-palette-btn');
    const closeBtn = document.getElementById('palette-close-btn');

    if (!modal || !input || !list) return;

    // Define search items pool
    const actionsPool = [
      // Sections
      { title: "Home / Hero", category: "Navigation", icon: "fa-solid fa-house", action: () => scrollToId('hero') },
      { title: "About Editorial", category: "Navigation", icon: "fa-solid fa-user", action: () => scrollToId('about') },
      { title: "Featured Projects", category: "Navigation", icon: "fa-solid fa-code", action: () => scrollToId('projects') },
      { title: "Skills Universe", category: "Navigation", icon: "fa-solid fa-microchip", action: () => scrollToId('skills') },
      { title: "The Playground (Labs)", category: "Navigation", icon: "fa-solid fa-flask", action: () => scrollToId('playground') },
      { title: "Journey & Education", category: "Navigation", icon: "fa-solid fa-graduation-cap", action: () => scrollToId('journey') },
      { title: "Direct Contact", category: "Navigation", icon: "fa-solid fa-envelope", action: () => scrollToId('contact') },

      // Verified Projects
      { title: "Project: MovieRecommend (Vercel Live)", category: "Projects", icon: "fa-solid fa-film", action: () => window.open('https://movierecommend-pi.vercel.app', '_blank') },
      { title: "Project: Structviz DS Visualizer (Live)", category: "Projects", icon: "fa-solid fa-layer-group", action: () => window.open('https://raskassaikarthik07-droid.github.io/Structviz/', '_blank') },
      { title: "Project: RehabVision AI (Live)", category: "Projects", icon: "fa-solid fa-heart-pulse", action: () => window.open('https://raskassaikarthik07-droid.github.io/Rehabvision_physio/', '_blank') },
      { title: "Project: GreenLeaf Store (Live)", category: "Projects", icon: "fa-solid fa-seedling", action: () => window.open('https://raskassaikarthik07-droid.github.io/plants/', '_blank') },
      { title: "Project: SkyBook Flight Booking", category: "Projects", icon: "fa-solid fa-plane", action: () => window.open('https://github.com/raskassaikarthik07-droid/flight', '_blank') },
      { title: "Project: Space Mission Control", category: "Projects", icon: "fa-solid fa-shuttle-space", action: () => window.open('https://github.com/raskassaikarthik07-droid/Space-mission-control', '_blank') },

      // Interactive Tools
      { title: "Open Interactive Terminal (CLI)", category: "Tools", icon: "fa-solid fa-terminal", action: () => window.openTerminal && window.openTerminal() },
      { title: "Send Direct Email", category: "Actions", icon: "fa-solid fa-paper-plane", action: () => window.location.href = 'mailto:raskas.saikarthik07@gmail.com' },
      { title: "Copy Email Address", category: "Actions", icon: "fa-regular fa-copy", action: () => copyEmail() },
      { title: "Visit GitHub Profile", category: "External", icon: "fa-brands fa-github", action: () => window.open('https://github.com/raskassaikarthik07-droid', '_blank') },
      { title: "Visit LinkedIn Profile", category: "External", icon: "fa-brands fa-linkedin", action: () => window.open('https://www.linkedin.com/in/raskas-sai-karthik-7b3746378/', '_blank') }
    ];

    const copyEmail = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText('raskas.saikarthik07@gmail.com');
        if (window.showPortfolioToast) window.showPortfolioToast('Copied raskas.saikarthik07@gmail.com to clipboard');
      }
    };

    const scrollToId = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const openPalette = () => {
      isOpen = true;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('palette-active');
        input.value = '';
        input.focus();
        renderResults('');
      }, 10);
    };

    const closePalette = () => {
      isOpen = false;
      modal.classList.remove('palette-active');
      setTimeout(() => modal.classList.add('hidden'), 200);
    };

    const renderResults = (query) => {
      const q = query.toLowerCase().trim();
      searchResults = actionsPool.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q)
      );

      activeIndex = 0;
      list.innerHTML = '';

      if (searchResults.length === 0) {
        list.innerHTML = `
          <div class="p-6 text-center text-xs font-mono text-slate-500">
            No matching actions found for "${query}". Try 'project', 'about', or 'contact'.
          </div>
        `;
        return;
      }

      searchResults.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = `palette-item flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer text-xs transition-all ${index === 0 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-300 hover:bg-slate-800/60'}`;
        itemEl.innerHTML = `
          <div class="flex items-center gap-3">
            <i class="${item.icon} text-sm w-4 text-center ${index === 0 ? 'text-cyan-400' : 'text-slate-400'}"></i>
            <span class="font-medium">${item.title}</span>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">${item.category}</span>
        `;

        itemEl.addEventListener('click', () => {
          item.action();
          closePalette();
        });

        list.appendChild(itemEl);
      });
    };

    const updateActiveItem = (newIndex) => {
      const items = list.querySelectorAll('.palette-item');
      if (items.length === 0) return;

      if (newIndex < 0) newIndex = items.length - 1;
      if (newIndex >= items.length) newIndex = 0;

      activeIndex = newIndex;

      items.forEach((el, idx) => {
        if (idx === activeIndex) {
          el.className = 'palette-item flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer text-xs transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40';
          el.scrollIntoView({ block: 'nearest' });
        } else {
          el.className = 'palette-item flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer text-xs transition-all text-slate-300 hover:bg-slate-800/60';
        }
      });
    };

    // Keyboard bindings
    window.addEventListener('keydown', (e) => {
      // Toggle with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) closePalette();
        else openPalette();
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closePalette();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        updateActiveItem(activeIndex + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        updateActiveItem(activeIndex - 1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchResults[activeIndex]) {
          searchResults[activeIndex].action();
          closePalette();
        }
      }
    });

    input.addEventListener('input', (e) => {
      renderResults(e.target.value);
    });

    openBtns.forEach(btn => btn.addEventListener('click', openPalette));
    if (closeBtn) closeBtn.addEventListener('click', closePalette);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePalette();
    });

    window.openCommandPalette = openPalette;
  };

  document.addEventListener('DOMContentLoaded', initCommandPalette);
})();
