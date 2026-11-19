/**
 * Interactive Terminal Module
 * Toggleable hacker CLI with command parser, history, and easter eggs
 */

(function () {
  const initTerminal = () => {
    const modal = document.getElementById('terminal-modal');
    const input = document.getElementById('term-input');
    const output = document.getElementById('term-output');
    const closeBtn = document.getElementById('term-close-btn');
    const clearBtn = document.getElementById('term-clear-btn');
    const openBtns = document.querySelectorAll('.open-terminal-btn');

    if (!modal || !input || !output) return;

    let commandHistory = [];
    let historyIndex = -1;

    const commands = window.PORTFOLIO_DATA?.terminalCommands || {};

    const openTerminal = () => {
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('terminal-active');
        input.focus();
        output.scrollTop = output.scrollHeight;
      }, 10);
    };

    const closeTerminal = () => {
      modal.classList.remove('terminal-active');
      setTimeout(() => modal.classList.add('hidden'), 200);
    };

    const printOutput = (cmdText, responseText, isHtml = false) => {
      const entry = document.createElement('div');
      entry.className = 'term-entry mb-3 leading-relaxed';

      if (cmdText) {
        entry.innerHTML = `
          <div class="flex items-center gap-2 text-cyan-400 font-bold mb-1">
            <span class="text-slate-500">karthik@klh-cse:~$</span>
            <span>${escapeHtml(cmdText)}</span>
          </div>
        `;
      }

      const resDiv = document.createElement('div');
      resDiv.className = 'text-slate-300 font-mono text-xs whitespace-pre-wrap pl-2 border-l border-slate-800';
      if (isHtml) resDiv.innerHTML = responseText;
      else resDiv.textContent = responseText;

      entry.appendChild(resDiv);
      output.appendChild(entry);
      output.scrollTop = output.scrollHeight;
    };

    const escapeHtml = (str) => {
      return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
      );
    };

    const executeCommand = (cmd) => {
      const cleanCmd = cmd.trim().toLowerCase();
      if (!cleanCmd) return;

      commandHistory.push(cmd.trim());
      historyIndex = commandHistory.length;

      if (cleanCmd === 'clear') {
        output.innerHTML = '';
        return;
      }

      if (cleanCmd === 'github') {
        window.open('https://github.com/raskassaikarthik07-droid', '_blank');
        printOutput(cmd, `Opened GitHub profile in new tab: https://github.com/raskassaikarthik07-droid`);
        return;
      }

      if (cleanCmd === 'linkedin') {
        window.open('https://www.linkedin.com/in/raskas-sai-karthik-7b3746378/', '_blank');
        printOutput(cmd, `Opened LinkedIn profile in new tab.`);
        return;
      }

      if (cleanCmd === 'time-machine') {
        printOutput(cmd, `Opening Project Time Machine...`);
        closeTerminal();
        if (window.openProjectCaseStudy) window.openProjectCaseStudy('structviz');
        return;
      }

      if (commands[cleanCmd]) {
        printOutput(cmd, commands[cleanCmd]);
      } else {
        printOutput(cmd, `bash: command not found: "${cmd}". Type 'help' for available commands.`);
      }
    };

    // Input keyboard listener
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = input.value;
        input.value = '';
        executeCommand(cmd);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0) {
          if (historyIndex > 0) historyIndex--;
          input.value = commandHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          input.value = commandHistory[historyIndex] || '';
        } else {
          historyIndex = commandHistory.length;
          input.value = '';
        }
      }
    });

    // Global toggle shortcut: Ctrl + ~ or Esc to close
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        if (modal.classList.contains('terminal-active')) closeTerminal();
        else openTerminal();
      } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeTerminal();
      }
    });

    openBtns.forEach(btn => btn.addEventListener('click', openTerminal));
    if (closeBtn) closeBtn.addEventListener('click', closeTerminal);
    if (clearBtn) clearBtn.addEventListener('click', () => { output.innerHTML = ''; });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeTerminal();
    });

    window.openTerminal = openTerminal;
  };

  document.addEventListener('DOMContentLoaded', initTerminal);
})();
