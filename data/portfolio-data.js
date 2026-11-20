/**
 * CENTRALIZED PORTFOLIO CONFIG & DATA
 * Single Source of Truth for Raskas Sai Karthik's Portfolio
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Raskas Sai Karthik",
    role: "Computer Science Engineer & Systems Builder",
    headline: "I BUILD THINGS THAT MATTER.",
    subheadline: "Crafting resilient full-stack systems, intelligent computer vision architectures, and interactive visual algorithms.",
    bio: "Second-year Computer Science Engineering student at KL University, Hyderabad (CGPA: 9.6, Roll No: 2510030295). Passionate about technology, machine learning, data analysis, front-end development, and AI tools. Focused on building practical solutions and turning ideas into useful applications.",
    email: "raskas.saikarthik07@gmail.com",
    phone: "+91 9494681618",
    github: "https://github.com/raskassaikarthik07-droid",
    githubUsername: "raskassaikarthik07-droid",
    linkedin: "https://www.linkedin.com/in/raskas-sai-karthik-7b3746378/",
    university: "KL University, Hyderabad (KLH)",
    department: "Computer Science & Engineering",
    rollNumber: "2510030295",
    cgpa: "9.6",
    year: "2025 – 2029 (B.Tech)",
    location: "Hyderabad, Telangana, India",
    statusBadge: "Available for Summer Internships & Research",
    availability: "Immediate / Summer 2025-2026",
    focus: "Machine Learning, Agentic AI, Computer Vision & Interactive Web Systems",
    lastUpdated: "November 2026"
  },

  status: {
    state: "ONLINE",
    node: "KLH-CSE-NODE-01",
    currentFocus: "Applied Computer Vision (RehabVision) & Interactive Algorithmic Tooling (Structviz)",
    learning: "High-Throughput Microservice Gateways & WebAssembly (Wasm)",
    seeking: "Software Engineering & Data Systems Internships"
  },

  paths: [
    {
      id: "all",
      badge: "00",
      label: "Default View",
      summary: "Full balanced view of engineering, creative lab, and academic achievements."
    },
    {
      id: "recruiter",
      badge: "01",
      label: "Recruiter Focus",
      summary: "Highlights formal education, verified projects, core competencies, and immediate contact paths."
    },
    {
      id: "explorer",
      badge: "02",
      label: "Creative Explorer",
      summary: "Spotlights the interactive Playground, Project Time Machine, and Creative Visualizer."
    },
    {
      id: "collaborator",
      badge: "03",
      label: "Open Collaborator",
      summary: "Emphasizes GitHub source code, system architectures, API designs, and hacker terminal."
    }
  ],

  projects: [
    {
      id: "movierecommend",
      title: "MovieRecommend Platform",
      tagline: "AI-Driven Algorithmic Movie Recommendation Engine",
      category: "web",
      tags: ["TypeScript", "React", "Next.js", "TailwindCSS", "Vercel"],
      liveUrl: "https://movierecommend-pi.vercel.app",
      repoUrl: "https://github.com/raskassaikarthik07-droid/movierecommend",
      isLive: true,
      deploymentHost: "Vercel",
      summary: "Algorithmic movie discovery and curation platform built with TypeScript and modern component architecture. Features genre clustering, predictive suggestions, and dynamic media views.",
      caseStudy: {
        problem: "Modern streaming libraries suffer from choice paralysis where users spend an average of 18 minutes searching before watching content.",
        idea: "Create an instantaneous, lightweight recommendation interface with instant semantic genre clustering, visual previews, and high-performance client-side filtering.",
        approach: "Architected using TypeScript and modular components with strict typing, utilizing responsive layout grids, responsive search indexes, and continuous Vercel edge deployment.",
        technologies: ["TypeScript", "React 19", "Tailwind CSS", "Vercel CI/CD", "REST API integration"],
        challenges: [
          "Eliminating rendering lag during real-time multi-genre search queries.",
          "Ensuring responsive media card grids across viewports down to 320px mobile."
        ],
        solutions: [
          "Implemented debounced query inputs and virtualized card rendering.",
          "Engineered fluid CSS clamp and auto-fit grid units for zero layout shift."
        ],
        results: "Successfully deployed on Vercel with sub-100ms client search latency and 100% mobile responsive score."
      },
      timeMachine: [
        {
          stage: "IDEA",
          label: "Concept & Scope",
          description: "Identified algorithmic movie filtering challenge; mapped out minimal UI wireframe and user flow."
        },
        {
          stage: "DESIGN",
          label: "Interface & Tokens",
          description: "Established obsidian dark aesthetic, card aspect ratios (16:9 & 2:3), and typography hierarchy in Figma/code."
        },
        {
          stage: "DEVELOPMENT",
          label: "Architecture & Data",
          description: "Built TypeScript client state, responsive search filtering, and robust error boundaries."
        },
        {
          stage: "FINAL",
          label: "Production Release",
          description: "Live on Vercel with edge caching, automated GitHub CI/CD, and cross-browser verification."
        }
      ]
    },
    {
      id: "structviz",
      title: "Structviz: DS Visualizer",
      tagline: "Interactive Graphical Engine for Data Structures & Algorithms",
      category: "web",
      tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Algorithms", "GitHub Pages"],
      liveUrl: "https://raskassaikarthik07-droid.github.io/Structviz/",
      repoUrl: "https://github.com/raskassaikarthik07-droid/Structviz",
      isLive: true,
      deploymentHost: "GitHub Pages",
      summary: "Educational visual learning platform designed for computer science students to master Stacks, Queues, and pointer manipulations step-by-step with 100% clarity.",
      caseStudy: {
        problem: "Abstract computational structures (push/pop stacks, FIFO queues, pointer shifts) are difficult to grasp purely from static textbooks and console logs.",
        idea: "Build an interactive browser sandbox where students physically observe memory allocation, element queuing, stack overflows, and pointer movements in real time.",
        approach: "Leveraged pure vanilla JavaScript and canvas graphics to avoid heavy framework overhead, providing instantaneous visual state transitions and student-friendly controls.",
        technologies: ["JavaScript (ES6+)", "HTML5 Graphics", "CSS Micro-Animations", "GitHub Pages"],
        challenges: [
          "Synchronizing animated step transitions with underlying data structure state arrays.",
          "Preventing stack graphics from clipping when users push dozens of continuous elements."
        ],
        solutions: [
          "Created a tick-based animation scheduler that queues visual state changes safely.",
          "Added dynamic container auto-scaling and scroll containment with clear stack limits."
        ],
        results: "Active online educational tool deployed on GitHub Pages used by university peers for foundational DSA prep."
      },
      timeMachine: [
        {
          stage: "IDEA",
          label: "Academic Need",
          description: "Recognized peer difficulties understanding array-backed vs. linked stack dynamics in college lectures."
        },
        {
          stage: "DESIGN",
          label: "Visual Metaphor",
          description: "Designed stacked block containers, directional velocity arrows, and color-coded status badges (Active, Top, Bottom)."
        },
        {
          stage: "DEVELOPMENT",
          label: "Core State Logic",
          description: "Implemented push, pop, peek, and clear operations with atomic graphical updates."
        },
        {
          stage: "FINAL",
          label: "Educational Launch",
          description: "Deployed to GitHub Pages; verified smooth step-by-step interactive animations."
        }
      ]
    },
    {
      id: "rehabvision",
      title: "RehabVision AI Platform",
      tagline: "Computer Vision Tele-Rehabilitation & Kinematic Tracking",
      category: "ai",
      tags: ["TypeScript", "Computer Vision", "Pose Tracking", "Kinematics", "GitHub Pages"],
      liveUrl: "https://raskassaikarthik07-droid.github.io/Rehabvision_physio/",
      repoUrl: "https://github.com/raskassaikarthik07-droid/Rehabvision_physio",
      isLive: true,
      deploymentHost: "GitHub Pages",
      summary: "Clinical AI-assisted movement tracking, computer vision posture analysis, and rehabilitation monitoring platform designed for telerehabilitation and kinematic feedback.",
      caseStudy: {
        problem: "Patients undergoing physical therapy at home lack real-time feedback on joint angles, leading to improper exercise execution or repeated strain.",
        idea: "Build an accessible browser-based computer vision tracker that monitors key skeletal landmarks and provides real-time angular feedback without specialized sensor suits.",
        approach: "Utilized lightweight browser-based computer vision pipelines to analyze joint vectors, calculate degrees of flexion/extension, and alert users to posture deviations.",
        technologies: ["TypeScript", "Computer Vision Models", "Kinematic Mathematics", "HTML5 Video / Canvas", "GitHub Pages"],
        challenges: [
          "Computing accurate multi-joint angles at 30+ fps in low-power browser environments.",
          "Providing meaningful visual cues without cluttering the patient's video stream."
        ],
        solutions: [
          "Vectorized dot-product angle calculations to run in microseconds per frame.",
          "Designed clean minimal HUD overlays with dynamic green/amber/red posture thresholds."
        ],
        results: "Fully deployed tele-rehabilitation platform on GitHub Pages complete with clinical disclaimer and movement metrics."
      },
      timeMachine: [
        {
          stage: "IDEA",
          label: "Clinical Vision",
          description: "Researched how computer vision landmark detection could reduce physical therapy relapse rates."
        },
        {
          stage: "DESIGN",
          label: "HUD & Landmark UI",
          description: "Created non-intrusive geometric joint overlays and real-time range-of-motion gauges."
        },
        {
          stage: "DEVELOPMENT",
          label: "Mathematical Engine",
          description: "Programmed joint trigonometry, posture angle trackers, and exercise repetition counters."
        },
        {
          stage: "FINAL",
          label: "Clinical Showcase",
          description: "Published to GitHub Pages; live prototype accessible on any webcam-enabled device."
        }
      ]
    },
    {
      id: "plants",
      title: "GreenLeaf Botanical Store",
      tagline: "Modern E-Commerce Experience for Plants & Artisan Pots",
      category: "web",
      tags: ["JavaScript", "CSS3 Flex/Grid", "E-Commerce", "Responsive UI", "GitHub Pages"],
      liveUrl: "https://raskassaikarthik07-droid.github.io/plants/",
      repoUrl: "https://github.com/raskassaikarthik07-droid/plants",
      isLive: true,
      deploymentHost: "GitHub Pages",
      summary: "Modern botanical plant and ceramic pot storefront featuring categorized botany catalogues, interactive shopping cart management, aesthetic product showcases, and mobile-first design.",
      caseStudy: {
        problem: "Plant shoppers often struggle with fragmented websites with cluttered interfaces and sluggish cart updates on mobile devices.",
        idea: "Build a breezy, nature-inspired e-commerce storefront with instant client-side cart calculations, botanical filtering, and smooth drawer interactions.",
        approach: "Engineered responsive CSS layouts, accessible product modals, real-time item counter arithmetic, and LocalStorage persistence for user selections.",
        technologies: ["JavaScript", "Semantic HTML5", "Custom CSS Grid Architecture", "GitHub Pages"],
        challenges: [
          "Maintaining persistent cart quantity updates without full-page reloads.",
          "Optimizing multi-item image rendering for smooth mobile scrolling."
        ],
        solutions: [
          "Built an event-driven pub/sub cart state manager in vanilla JavaScript.",
          "Implemented progressive image loading with reserved aspect-ratio frames."
        ],
        results: "Live on GitHub Pages with 100% fluid checkout flow and seamless mobile cart responsiveness."
      },
      timeMachine: [
        {
          stage: "IDEA",
          label: "Retail Concept",
          description: "Planned an uncluttered, modern plant and lifestyle pot retail catalog."
        },
        {
          stage: "DESIGN",
          label: "Earth Tone Palette",
          description: "Crafted modern botanical color schemes with emerald accents and crisp typography."
        },
        {
          stage: "DEVELOPMENT",
          label: "Cart & Catalogue",
          description: "Implemented product category filters, cart quantity increments, and total calculations."
        },
        {
          stage: "FINAL",
          label: "Storefront Live",
          description: "Deployed to GitHub Pages; verified zero horizontal overflow on all screen sizes."
        }
      ]
    },
    {
      id: "flight",
      title: "SkyBook Flight Booking",
      tagline: "Commercial-Grade Airline Reservation & Ticketing Architecture",
      category: "web",
      tags: ["React 19", "Tailwind CSS v4", "Amadeus API", "Framer Motion", "Vite"],
      liveUrl: "https://github.com/raskassaikarthik07-droid/flight",
      repoUrl: "https://github.com/raskassaikarthik07-droid/flight",
      isLive: false,
      deploymentHost: "GitHub Source Repository",
      summary: "Commercial-grade flight booking web application powered by React 19, Tailwind CSS v4, and Amadeus API flight search. Includes interactive aircraft seat maps, fare tiers, and digital boarding pass export.",
      caseStudy: {
        problem: "Airline booking workflows are notoriously complex, with disjointed transitions between flight selection, seat allocation, and baggage add-ons.",
        idea: "Develop an end-to-end booking platform with cohesive state management, live API flight telemetry with demo fallback, and celebratory digital ticket issuance.",
        approach: "Leveraged modern React 19 architecture with Tailwind CSS v4, integrating interactive SVG cabin seat maps, multi-step validation forms, and printable boarding passes.",
        technologies: ["React 19", "Tailwind CSS v4", "Framer Motion", "Amadeus API", "Vite"],
        challenges: [
          "Handling API rate limits gracefully during real-time flight availability lookups.",
          "Engineering an interactive 2D cabin seat map with instant pricing feedback per seat tier."
        ],
        solutions: [
          "Built a seamless fallback demo generator that mimics real live airline telemetry when API quotas cap.",
          "Created an SVG matrix with hover states and instantaneous add-on recalculations."
        ],
        results: "Production-ready open source commercial booking codebase published on GitHub."
      },
      timeMachine: [
        {
          stage: "IDEA",
          label: "Booking Spec",
          description: "Architected complete multi-stage flight booking pipeline for hackathon rigor."
        },
        {
          stage: "DESIGN",
          label: "Cabin Layout UI",
          description: "Designed 3-3 passenger aircraft cabin layout, fare comparison tables, and digital boarding pass card."
        },
        {
          stage: "DEVELOPMENT",
          label: "API & State",
          description: "Connected Amadeus flight search with fallback simulator; added confetti celebrations."
        },
        {
          stage: "FINAL",
          label: "Open Source Codebase",
          description: "Clean GitHub repository with comprehensive README and deployment configurations."
        }
      ]
    },
    {
      id: "space-mission",
      title: "Space Mission Control",
      tagline: "High-Reliability Spacecraft Mission & Crew Architecture in Java",
      category: "java",
      tags: ["Java SE", "Linked Lists", "Emergency Stacks", "Priority Queues", "OOP"],
      liveUrl: "https://github.com/raskassaikarthik07-droid/Space-mission-control",
      repoUrl: "https://github.com/raskassaikarthik07-droid/Space-mission-control",
      isLive: false,
      deploymentHost: "GitHub Source Repository",
      summary: "Java mission management architecture implementing custom Linked Lists (CrewList), Emergency Stacks, and priority Mission Queues for astronaut flight crew telemetry and contingency dispatch.",
      caseStudy: {
        problem: "Mission-critical aerospace systems demand deterministic, zero-dependency data structures for crew assignments and emergency abort procedures.",
        idea: "Implement a bespoke, pure object-oriented Java system demonstrating handwritten linked nodes, LIFO emergency rollbacks, and FIFO launch mission queues.",
        approach: "Wrote pure Java classes from scratch without utilizing java.util collection wrappers, ensuring absolute transparency and algorithmic predictability in every operation.",
        technologies: ["Java SE", "Custom Data Structures (LinkedList, Stack, Queue)", "OOP Design Patterns", "Unit Testing"],
        challenges: [
          "Preventing memory leaks and dangling node pointers during astronaut emergency removals.",
          "Maintaining strict FIFO ordering across interleaved priority mission launches."
        ],
        solutions: [
          "Implemented rigorous two-pointer node traversal and garbage collector-friendly detachment.",
          "Engineered atomic enqueue and dequeue operations with boundary check protections."
        ],
        results: "Verified algorithmic codebase with 100% test scenario passes for crew safety and queue integrity."
      },
      timeMachine: [
        {
          stage: "IDEA",
          label: "Architectural Goal",
          description: "Conceived a mission command architecture to practice advanced bespoke Java pointer mechanics."
        },
        {
          stage: "DESIGN",
          label: "OOP Class Hierarchy",
          description: "Structured Astronaut, AstronautNode, CrewList, EmergencyStack, and MissionQueue classes."
        },
        {
          stage: "DEVELOPMENT",
          label: "Algorithmic Logic",
          description: "Handcrafted pointer manipulations, bounds checking, and terminal reporting formatters."
        },
        {
          stage: "FINAL",
          label: "Robust Release",
          description: "Documented repository on GitHub demonstrating clean Java software craftsmanship."
        }
      ]
    }
  ],

  skillsUniverse: [
    // Programming Languages
    {
      id: "java",
      name: "Java SE / OOP",
      category: "Languages",
      level: "Advanced",
      description: "Object-oriented design, custom data structures, file I/O streams, inheritance architectures.",
      relatedProjects: ["Space Mission Control", "File-based Quiz System"],
      pairedWith: ["Eclipse", "JUnit", "Data Structures"],
      coords: { x: 25, y: 35 }
    },
    {
      id: "python",
      name: "Python",
      category: "Languages",
      level: "Proficient",
      description: "Data processing, machine learning prototypes, API gateways, script automation.",
      relatedProjects: ["DBMS Labs", "AI/ML Internship Projects"],
      pairedWith: ["FastAPI", "NumPy", "Jupyter"],
      coords: { x: 38, y: 22 }
    },
    {
      id: "c-cpp",
      name: "C / C++",
      category: "Languages",
      level: "Intermediate",
      description: "Low-level memory management, pointers, algorithmic optimization, embedded firmware.",
      relatedProjects: ["Circuit-X Embedded Systems"],
      pairedWith: ["Arduino", "GCC", "Embedded C"],
      coords: { x: 18, y: 55 }
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "Frontend",
      level: "Proficient",
      description: "Strong static typing, interface contracts, modern React architecture, async pipelines.",
      relatedProjects: ["MovieRecommend", "RehabVision"],
      pairedWith: ["React", "Next.js", "TailwindCSS"],
      coords: { x: 55, y: 30 }
    },
    {
      id: "javascript",
      name: "JavaScript (ES6+)",
      category: "Frontend",
      level: "Proficient",
      description: "DOM manipulation, canvas animations, event-driven async models, custom UI widgets.",
      relatedProjects: ["Structviz", "GreenLeaf Store"],
      pairedWith: ["HTML5 Canvas", "CSS3 Grid"],
      coords: { x: 68, y: 45 }
    },

    // AI & Computer Vision
    {
      id: "cv",
      name: "Computer Vision",
      category: "AI / ML",
      level: "Applied",
      description: "Pose estimation, landmark detection, kinematic angle computation, telemetry feedback.",
      relatedProjects: ["RehabVision AI Platform"],
      pairedWith: ["TypeScript", "Canvas Graphics"],
      coords: { x: 75, y: 20 }
    },
    {
      id: "ml",
      name: "Machine Learning Foundations",
      category: "AI / ML",
      level: "Foundational",
      description: "Supervised classification, regression modeling, feature evaluation, prediction pipelines.",
      relatedProjects: ["AI/ML Virtual Internship (Grade: Excellent)"],
      pairedWith: ["Python", "Scikit-Learn"],
      coords: { x: 82, y: 35 }
    },

    // Databases & Architecture
    {
      id: "sql",
      name: "SQL & Relational DBs",
      category: "Databases",
      level: "Proficient",
      description: "Schema design, relational normalization, DDL/DML transactions, multi-table queries.",
      relatedProjects: ["DBMS Lab Systems"],
      pairedWith: ["PostgreSQL", "MySQL", "DB Gateways"],
      coords: { x: 30, y: 75 }
    },
    {
      id: "vectordb",
      name: "Vector Databases",
      category: "Databases",
      level: "Applied",
      description: "Vector similarity search, high-dimensional embedding retrieval, semantic lookups.",
      relatedProjects: ["Polyglot DBMS Gateway"],
      pairedWith: ["Python", "Embeddings"],
      coords: { x: 45, y: 82 }
    },

    // Hardware & IoT
    {
      id: "iot",
      name: "IoT & Microcontrollers",
      category: "Hardware",
      level: "Practical",
      description: "ESP32 and Arduino development, sensor telemetry, serial communication (UART/SPI), GPIO control.",
      relatedProjects: ["Circuit-X Telemetry"],
      pairedWith: ["Arduino IDE", "ESP32", "C++"],
      coords: { x: 65, y: 75 }
    },

    // Tools & Workflow
    {
      id: "git",
      name: "Git & GitHub",
      category: "Tools",
      level: "Proficient",
      description: "Version control, multi-branching, repository maintenance, GitHub Pages CI/CD.",
      relatedProjects: ["All 6 GitHub Repositories"],
      pairedWith: ["GitHub Actions", "Git CLI"],
      coords: { x: 80, y: 65 }
    },
    {
      id: "linux",
      name: "Linux & Bash",
      category: "Tools",
      level: "Comfortable",
      description: "CLI environment, shell scripting, process management, server navigation.",
      relatedProjects: ["Systems Labs"],
      pairedWith: ["Terminal", "PowerShell", "WSL"],
      coords: { x: 50, y: 55 }
    }
  ],

  journey: [
    {
      year: "2011 – 2023",
      title: "Foundational Curiosity & Schooling",
      organization: "Little Flower High School",
      location: "Hyderabad, India",
      metric: "CGPA: 9.7 / 10",
      metricLabel: "Academic Performance",
      description: "Consistent academic distinction and excellence across mathematics, science exhibitions, and scholastic competitions."
    },
    {
      year: "2023 – 2025",
      title: "Intermediate Scientific Foundations (MPC)",
      organization: "Narayana Junior College",
      location: "Hyderabad, India",
      metric: "89% Score",
      metricLabel: "Board Exam Distinction",
      description: "Rigorous immersion in Advanced Mathematics, Physics, and Chemistry. Honed structured quantitative problem-solving and algorithmic deduction that serves as the theoretical bedrock of computer science."
    },
    {
      year: "Jun 2025 – Present",
      title: "B.Tech in Computer Science & Engineering",
      organization: "KL University, Hyderabad (KLH)",
      location: "Hyderabad, India",
      metric: "CGPA: 9.6",
      metricLabel: "Second-Year CSE Student",
      description: "Second-year Computer Science Engineering student (Roll No: 2510030295) with a 9.6 CGPA. Studying Data Structures & Algorithms, Java OOP, Machine Learning, Data Analysis, and AI tools while building practical applications."
    },
    {
      year: "2025",
      title: "Industry Certifications & Job Simulations",
      organization: "NVIDIA &bull; Deloitte / Forage &bull; GenAI Studio",
      location: "Verified Credentials",
      metric: "4 Certifications",
      metricLabel: "Industry Credentials",
      description: "Completed NVIDIA Building Agentic AI with LLMs, Deloitte Data Analytics Job Simulation, Introduction to Generative AI Studio, and ReactJS for Beginners."
    },
    {
      year: "2025 – 2026",
      title: "Production Software & Educational Releases",
      organization: "Independent Open-Source Engineering",
      location: "GitHub & Webhosts",
      metric: "6 Public Repos",
      metricLabel: "Live Applications",
      description: "Engineered and deployed Structviz (Interactive DS Visualizer), MovieRecommend on Vercel, RehabVision on GitHub Pages, GreenLeaf Botanical Store, SkyBook Airline Booking, and Space Mission Control."
    },
    {
      year: "Next Horizon",
      title: "Summer Internships & Distributed Systems Research",
      organization: "Target: 2025/2026 Internships",
      location: "Hyderabad / Bangalore / Remote",
      metric: "Open For Hire",
      metricLabel: "Current Standing",
      description: "Seeking software engineering and data systems internships where I can contribute to high-impact production code, scalable microservices, and creative problem-solving."
    }
  ],

  terminalCommands: {
    help: `Available Commands:
  about         - Learn about Sai Karthik's background and focus
  projects      - List all 6 verified GitHub projects and live webhosts
  skills        - Display core technical capabilities and languages
  resume        - View ATS-friendly resume and download PDF
  contact       - Get direct email, LinkedIn, and GitHub links
  journey       - View educational milestones and current academic standing
  whoami        - Display visitor identity and system diagnostic info
  time-machine  - Open project evolution switcher
  status        - Check live developer node telemetry
  clear         - Clear the terminal screen
  sudo          - [Restricted admin command]
  coffee        - Brew an instant developer coffee`,

    resume: `Resume: Raskas Sai Karthik
===========================
Education: 2nd-Year B.Tech CSE @ KL University Hyderabad (Roll: 2510030295)
Standing:  CGPA: 9.6 | Intermediate: 89% | Little Flower: 9.7 CGPA
Phone:     +91 9494681618 | Email: raskas.saikarthik07@gmail.com
Certifications: NVIDIA Agentic AI LLMs, Deloitte Data Analytics, GenAI Studio, ReactJS
PDF:       public/resume.pdf (Download as Karthik_Resume.pdf)
Type 'resume' or click 'Resume ↗' in the navbar to open the full viewer.`,

    about: `Raskas Sai Karthik
==================
Second-year Computer Science Engineering student @ KL University, Hyderabad
Roll Number: 2510030295 | Current CGPA: 9.6
Skills: Java, C, Python, Machine Learning, Front-end development, Data Analysis, AI Tools.
Passionate about technology, practical solutions, and turning ideas into useful applications.`,

    projects: `Verified GitHub Repositories & Webhosts:
1. MovieRecommend Platform  -> https://movierecommend-pi.vercel.app [TypeScript/React]
2. Structviz DS Visualizer  -> https://raskassaikarthik07-droid.github.io/Structviz/ [JavaScript/Canvas]
3. RehabVision AI Platform  -> https://raskassaikarthik07-droid.github.io/Rehabvision_physio/ [Computer Vision]
4. GreenLeaf Plant Store    -> https://raskassaikarthik07-droid.github.io/plants/ [E-Commerce/CSS]
5. SkyBook Flight Booking   -> https://github.com/raskassaikarthik07-droid/flight [React 19/Tailwind v4]
6. Space Mission Control    -> https://github.com/raskassaikarthik07-droid/Space-mission-control [Java DSA]`,

    skills: `Technical Core:
Languages:        C, Java, Python, TypeScript, JavaScript (ES6+), SQL
Competencies:     Machine Learning (ML), Data Analysis, Basic DSA, Front-End Dev
AI & Tools:       AI Tools & Generative AI, Agentic LLMs, Git/GitHub, Vercel, VS Code
Hardware:         ESP32, Arduino, Sensor Telemetry
Non-Technical:    Communication, Decision Making, Teamwork`,

    contact: `Direct Communication:
Phone:    +91 9494681618
Email:    raskas.saikarthik07@gmail.com
LinkedIn: https://www.linkedin.com/in/raskas-sai-karthik-7b3746378/
GitHub:   https://github.com/raskassaikarthik07-droid
Campus:   KL University, Hyderabad, Telangana, India`,

    journey: `Academic Path:
- KL University Hyderabad: B.Tech CSE (2025–2029) | CGPA: 9.6 (Roll: 2510030295)
- Narayana Junior College: Intermediate MPC (2023–2025) | 89% Distinction
- Little Flower High School: SSC (2011–2023) | CGPA: 9.7 / 10`,

    status: `System Status: ONLINE
Node: KLH-CSE-NODE-01 | Region: Hyderabad (IST)
Current Focus: Applied Computer Vision & High-Performance Web Tools
Seeking: Summer 2025/2026 Software Engineering Internships`,

    whoami: `Visitor: Valued Collaborator / Recruiter / Explorer
Access Level: Guest [Interactive Playground & Case Studies Enabled]
Host: Portfolio v2.8 (60fps Engine)`,

    sudo: `Permission denied: Sai Karthik has reserved root privileges. Try typing 'coffee' instead.`,

    coffee: `☕ [SUCCESS] Freshly brewed developer coffee delivered to your desk. Code with passion!`
  }
};

// Make available globally on window
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
