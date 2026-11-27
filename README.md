# Raskas Sai Karthik — Developer Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://raskas-portfolio.vercel.app)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-2ea44f?style=for-the-badge&logo=github)](https://raskassaikarthik07-droid.github.io/Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

A high-performance, fluid 60fps interactive portfolio for **Raskas Sai Karthik**, second-year Computer Science Engineering undergraduate at **KL University, Hyderabad** (Roll No: `2510030295`, CGPA: `9.6`). Built with modern geometric typography, dark obsidian/charcoal surfaces, acid-lime (`#A5FF50`) accents, and responsive layout scaling across all devices.

---

## 🌐 Live Deployments

- **Production (Vercel):** [https://raskas-portfolio.vercel.app](https://raskas-portfolio.vercel.app)
- **Mirror (GitHub Pages):** [https://raskassaikarthik07-droid.github.io/Portfolio/](https://raskassaikarthik07-droid.github.io/Portfolio/)
- **1-Page ATS Resume PDF:** [Download Resume PDF](https://raskas-portfolio.vercel.app/public/resume.pdf)

---

## 👨‍💻 Candidate Overview

- **Name:** Raskas Sai Karthik
- **Role:** Computer Science Engineer & Systems Builder
- **Current Standing:** 2nd-Year B.Tech CSE at KL University Hyderabad (Roll No: `2510030295`, **CGPA: 9.6**)
- **Location:** Hyderabad, Telangana, India
- **Phone:** `+91 9494681618`
- **Email:** [raskas.saikarthik07@gmail.com](mailto:raskas.saikarthik07@gmail.com)
- **LinkedIn:** [linkedin.com/in/raskas-sai-karthik-7b3746378](https://www.linkedin.com/in/raskas-sai-karthik-7b3746378/)
- **GitHub:** [@raskassaikarthik07-droid](https://github.com/raskassaikarthik07-droid)

---

## 🎓 Academic Credentials & Standing

| Institution | Degree / Board | Duration | Score / Grade |
| :--- | :--- | :--- | :--- |
| **KL University (KLEF)** | B.Tech in Computer Science & Engineering | Jun 2025 – Present | **CGPA: 9.6** (Active 2nd Year) |
| **Narayana Junior College** | Board of Intermediate Education (MPC) | 2023 – 2025 | **89% Distinction** |
| **Little Flower High School** | Secondary School Certificate (SSC) | 2011 – 2023 | **9.7 / 10 CGPA** |

---

## 🏆 Industry Certifications & Job Simulations

1. **Building Agentic AI Applications with Large Language Models** — *NVIDIA*
2. **Data Analytics Job Simulation** — *Deloitte / Forage*
3. **Introduction to Generative AI Studio** — *Technical Credential*
4. **ReactJS for Beginners** — *Frontend Certification*

---

## ⚡ Core Technical Skills

- **Languages:** C, Java SE (OOP / Custom Data Structures), Python, TypeScript, JavaScript (ES6+), SQL
- **Frameworks & Web:** React 19, Next.js, Tailwind CSS, HTML5 Canvas API, RESTful APIs, FastAPI
- **Systems & Data:** Data Structures & Algorithms (Basic DSA), Machine Learning (ML), Data Analysis, MySQL, PostgreSQL, Vector Databases
- **AI & Cloud Tools:** Agentic LLM Orchestration, Generative AI Tools, Git & GitHub, Vercel CI/CD, VS Code, Linux CLI
- **Hardware & IoT:** ESP32 Microcontrollers, Arduino IDE, Analog/Digital Sensor Telemetry
- **Non-Technical:** Technical Communication, Structured Decision Making, Collaborative Teamwork

---

## 🚀 Verified GitHub Repositories & Deployments

| Project | Description | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **MovieRecommend Platform** | AI-driven movie discovery with sub-100ms genre search and predictive matching. | TypeScript, React, Next.js, Tailwind CSS, Vercel | [Live App](https://movierecommend-pi.vercel.app) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/movierecommend) |
| **Structviz** | Interactive 60fps canvas visualizer for Stacks, Queues, and Linked Lists. | JavaScript, HTML5 Canvas, GitHub Pages | [Live App](https://raskassaikarthik07-droid.github.io/Structviz/) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/Structviz) |
| **RehabVision Physio** | In-browser computer vision kinematics computing joint flexion angles via webcam. | TypeScript, Computer Vision, Canvas, GitHub Pages | [Live App](https://raskassaikarthik07-droid.github.io/Rehabvision_physio/) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/Rehabvision_physio) |
| **GreenLeaf Botanical** | E-commerce botanical store with event-driven cart arithmetic and drawer UI. | JavaScript, CSS Grid, LocalStorage, GitHub Pages | [Live App](https://raskassaikarthik07-droid.github.io/plants/) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/plants) |
| **SkyBook Flight Booking** | Commercial flight reservation portal with SVG aircraft cabin seat selection. | React 19, Tailwind CSS v4, Amadeus API | [GitHub](https://github.com/raskassaikarthik07-droid/flight) |
| **Space Mission Control** | High-reliability aerospace mission telemetry dispatch engine in pure Java. | Java SE, Custom Data Structures (LinkedList, Stack, Queue) | [GitHub](https://github.com/raskassaikarthik07-droid/Space-mission-control) |

---

## ✨ Features & Architecture Highlights

1. **Fluid 90–95% Hero Section:**
   - Spans 90–95% of desktop viewports with balanced two-column distribution, live status pill, interactive perspective selector, and custom vector code workstation.
2. **ATS Resume Viewer & Active Blob Downloader:**
   - Single source of truth in typed `src/data/resume.ts`.
   - In-modal high-fidelity document paper preview.
   - One-click native file download as `Karthik_Resume.pdf` via in-memory Blob streams.
   - Dedicated `@media print` stylesheet isolating the white resume page with zero dark theme bleed or overflow clipping.
3. **Command Palette (`Ctrl / Cmd + K`):**
   - Instant keyboard navigation across sections, verified projects, resume viewer, social profiles, and CLI terminal.
4. **Interactive CLI Terminal (`Ctrl + ~`):**
   - Built-in developer terminal supporting `about`, `projects`, `skills`, `resume`, `journey`, `whoami`, `contact`, `clear`, and `coffee`.
5. **Interactive Project Case Studies:**
   - Filterable catalog with in-depth modals breaking down architectural problem, solution, tech stack, challenges, and measured impact.
6. **Continuous Deployment Pipeline:**
   - Zero-configuration Vercel deployment synced automatically with GitHub commits to `main`.

---

## 📂 Project Structure

```text
Portfolio/
├── .github/                 # GitHub workflows & configuration
├── css/
│   └── styles.css           # 60fps GPU transitions, dark/lime tokens & @media print
├── data/
│   ├── portfolio-data.js    # Centralized portfolio content & terminal command map
│   └── resume-data.js       # Browser mirror of typed resume configuration
├── js/
│   ├── main.js              # Application entrypoint & scroll observers
│   └── modules/
│       ├── case-study-modal.js # Project deep-dive modal viewer
│       ├── command-palette.js  # Cmd+K keyboard palette
│       ├── particles-bg.js     # Ambient 60fps canvas particles
│       ├── playground.js       # Interactive algorithmic visualizer
│       ├── resume-modal.js     # ATS document viewer, print & blob downloader
│       └── terminal.js         # Interactive retro-modern CLI
├── public/
│   └── resume.pdf           # Generated 1-page ATS-friendly PDF
├── scripts/
│   └── generate_resume_pdf.py # Python ReportLab 1-page ATS PDF builder
├── src/
│   └── data/
│       └── resume.ts        # Typed TypeScript single source of truth
├── index.html               # Semantic HTML5 layout with Tailwind CSS
├── vercel.json              # Vercel deployment, static routing & PDF headers
├── package.json             # Project metadata & helper scripts
└── README.md                # Comprehensive documentation
```

---

## 🛠️ Local Development

### 1. Run Local HTTP Server
```bash
# Using Python 3:
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### 2. Regenerate 1-Page ATS Resume PDF
```bash
python scripts/generate_resume_pdf.py
```

### 3. Deploy to Vercel
```bash
npx vercel --prod
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
