/**
 * Resume Modal & Access Points Module
 * Handles opening/closing the resume viewer modal, print handling,
 * and subtle feedback when downloading Karthik_Resume.pdf
 */

(function () {
  const initResumeModal = () => {
    const modal = document.getElementById('resume-viewer-modal');
    const closeBtn = document.getElementById('resume-close-btn');
    const printBtn = document.getElementById('resume-print-btn');
    const paperContainer = document.getElementById('resume-paper-container');
    const downloadBtns = document.querySelectorAll('a[download="Karthik_Resume.pdf"]');

    if (!modal) return;

    // Populate Paper Container with Data from window.RESUME_DATA
    const renderResumeContent = () => {
      const data = window.RESUME_DATA;
      if (!data || !paperContainer) return;

      paperContainer.innerHTML = `
        <!-- Resume Header -->
        <div class="border-b-2 border-[#111111] pb-4">
          <h1 class="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight uppercase">${data.contact.name}</h1>
          <p class="font-bold text-xs sm:text-sm text-[#444444] mt-0.5">${data.contact.role}</p>
          <div class="mt-2 text-[11px] sm:text-xs text-[#555555] flex flex-wrap gap-x-3 gap-y-1 font-mono">
            <span>${data.contact.location}</span>
            ${data.contact.phone ? `<span>&bull;</span><a href="tel:${data.contact.phone.replace(/\s+/g, '')}" class="text-[#111111] font-semibold">${data.contact.phone}</a>` : ''}
            <span>&bull;</span>
            <a href="mailto:${data.contact.email}" class="text-[#111111] underline font-semibold">${data.contact.email}</a>
            <span>&bull;</span>
            <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="text-[#111111] underline">LinkedIn</a>
            <span>&bull;</span>
            <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" class="text-[#111111] underline">GitHub</a>
            <span>&bull;</span>
            <a href="${data.contact.portfolio}" target="_blank" rel="noopener noreferrer" class="text-[#111111] underline">Portfolio</a>
          </div>
        </div>

        <!-- Summary -->
        <div>
          <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] border-b border-[#D5D5D5] pb-1 mb-2">Professional Summary</h2>
          <p class="text-xs leading-relaxed text-[#333333]">${data.summary}</p>
        </div>

        <!-- Education -->
        <div>
          <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] border-b border-[#D5D5D5] pb-1 mb-3">Education</h2>
          <div class="space-y-3">
            ${data.education.map(edu => `
              <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs">
                  <span class="font-bold text-[#111111]">${edu.institution}</span>
                  <span class="font-mono text-[11px] text-[#666666]">${edu.duration} &bull; ${edu.location}</span>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs mt-0.5">
                  <span class="italic text-[#444444]">${edu.degree}</span>
                  <span class="font-semibold text-[#111111]">${edu.scoreOrGrade}</span>
                </div>
                ${edu.details ? `
                  <ul class="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-[#444444]">
                    ${edu.details.map(d => `<li>${d}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Technical Skills -->
        <div>
          <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] border-b border-[#D5D5D5] pb-1 mb-2.5">Technical Skills</h2>
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-1.5 text-xs">
            <div class="sm:col-span-4 font-bold text-[#111111]">Languages:</div>
            <div class="sm:col-span-8 text-[#333333]">${data.skills.languages.join(', ')}</div>
            
            <div class="sm:col-span-4 font-bold text-[#111111]">Web &amp; Frameworks:</div>
            <div class="sm:col-span-8 text-[#333333]">${data.skills.frameworksAndWeb.join(', ')}</div>
            
            <div class="sm:col-span-4 font-bold text-[#111111]">Systems &amp; Databases:</div>
            <div class="sm:col-span-8 text-[#333333]">${data.skills.systemsAndDatabases.join(', ')}</div>
            
            <div class="sm:col-span-4 font-bold text-[#111111]">Tools &amp; Cloud:</div>
            <div class="sm:col-span-8 text-[#333333]">${data.skills.toolsAndPlatforms.join(', ')}</div>
            
            <div class="sm:col-span-4 font-bold text-[#111111]">Hardware &amp; IoT:</div>
            <div class="sm:col-span-8 text-[#333333]">${data.skills.hardwareAndIoT.join(', ')}</div>
            ${data.skills.nonTechnical ? `
              <div class="sm:col-span-4 font-bold text-[#111111]">Non-Technical Skills:</div>
              <div class="sm:col-span-8 text-[#333333]">${data.skills.nonTechnical.join(', ')}</div>
            ` : ''}
          </div>
        </div>

        <!-- Engineering Projects -->
        <div>
          <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] border-b border-[#D5D5D5] pb-1 mb-3">Key Engineering Projects</h2>
          <div class="space-y-3">
            ${data.projects.map(proj => `
              <div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs">
                  <span class="font-bold text-[#111111]">${proj.title}</span>
                  <span class="font-mono text-[11px] text-[#666666]">
                    ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="underline hover:text-black">Live App</a> &bull; ` : ''}
                    <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="underline hover:text-black">GitHub</a>
                  </span>
                </div>
                <div class="text-[11px] text-[#555555] font-mono">${proj.technologies.join(' &bull; ')}</div>
                <ul class="list-disc list-inside mt-1 space-y-0.5 text-[11px] text-[#444444]">
                  ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Certifications & Honors -->
        <div>
          <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] border-b border-[#D5D5D5] pb-1 mb-2">Certifications &amp; Honors</h2>
          <div class="space-y-1.5 text-xs">
            ${data.certifications.map(c => `
              <div>
                <span class="font-bold text-[#111111]">&bull; ${c.title}:</span>
                <span class="text-[#333333]"> ${c.issuer} (${c.date}, <b>${c.credential}</b>). ${c.description}</span>
              </div>
            `).join('')}
            <div>
              <span class="font-bold text-[#111111]">&bull; Academic Honors:</span>
              <span class="text-[#333333]"> Distinction with 89% in Higher Secondary Board Exams (MPC) and 9.7/10 GPA in SSC.</span>
            </div>
          </div>
        </div>
      `;
    };

    // Open Modal
    const openResume = () => {
      renderResumeContent();
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      }, 10);
    };

    // Close Modal
    const closeResume = () => {
      modal.classList.remove('modal-active');
      document.body.style.overflow = '';
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 200);
    };

    // Print Handler
    const printResume = () => {
      window.print();
    };

    window.openResumeModal = openResume;
    window.closeResumeModal = closeResume;
    window.printResume = printResume;

    // Attach click listeners to all open resume buttons
    document.querySelectorAll('.open-resume-btn, .open-resume-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openResume();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeResume);
    if (printBtn) printBtn.addEventListener('click', printResume);

    // Backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeResume();
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeResume();
      }
    });

    // Subtle feedback on download
    downloadBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.showPortfolioToast) {
          window.showPortfolioToast('Downloading Karthik_Resume.pdf (ATS-friendly PDF)...');
        }
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initResumeModal);
  } else {
    initResumeModal();
  }
})();
