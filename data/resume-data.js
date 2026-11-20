/**
 * BROWSER-COMPATIBLE RESUME DATA (MIRRORS src/data/resume.ts)
 * Used by the Resume Viewer Modal and download triggers
 */

const RESUME_DATA = {
  contact: {
    name: "Raskas Sai Karthik",
    preferredName: "Karthik",
    role: "Computer Science Engineer & Systems Builder",
    email: "raskas.saikarthik07@gmail.com",
    phone: "+91 9494681618",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/raskas-sai-karthik-7b3746378/",
    github: "https://github.com/raskassaikarthik07-droid",
    portfolio: "https://raskassaikarthik07-droid.github.io/Portfolio/"
  },

  summary:
    "I am a second-year Computer Science Engineering student passionate about technology and problem-solving. I have skills in Java, C, Python, Machine Learning, front-end development, data analysis, and AI tools. I enjoy learning new technologies, building practical solutions, and turning ideas into useful projects. My goal is to gain real-world experience and grow as a skilled technology professional.",

  education: [
    {
      institution: "KL University (Koneru Lakshmaiah Education Foundation)",
      degree: "B.Tech in Computer Science & Engineering (Roll No: 2510030295)",
      duration: "Jun 2025 – Present",
      location: "Hyderabad, India",
      scoreOrGrade: "CGPA: 9.6",
      details: [
        "Second-year Computer Science Engineering undergraduate specializing in practical software systems.",
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Machine Learning, Relational & Vector Databases, Operating Systems."
      ]
    },
    {
      institution: "Narayana Junior College",
      degree: "Board of Intermediate Education (Mathematics, Physics, Chemistry - MPC)",
      duration: "2023 – 2025",
      location: "Hyderabad, India",
      scoreOrGrade: "Grade: 89%",
      details: [
        "Intensive curriculum in higher-level calculus, physics, chemistry, and quantitative analytical problem-solving."
      ]
    },
    {
      institution: "Little Flower High School",
      degree: "Secondary School Certificate (SSC)",
      duration: "2011 – 2023",
      location: "Hyderabad, India",
      scoreOrGrade: "CGPA: 9.7 / 10",
      details: [
        "Graduated with distinction; consistent excellence in mathematics, science exhibitions, and scholastic competitions."
      ]
    }
  ],

  skills: {
    languages: ["C", "Java", "Python", "TypeScript", "JavaScript (ES6+)", "SQL"],
    frameworksAndWeb: ["Front-end Development", "React 19", "Next.js", "Tailwind CSS", "HTML5 Canvas", "RESTful APIs", "FastAPI"],
    systemsAndDatabases: ["Data Structures & Algorithms (Basic DSA)", "Machine Learning (ML)", "Data Analysis", "OOP Design Patterns", "MySQL", "Vector Databases"],
    toolsAndPlatforms: ["AI Tools & Generative AI", "Agentic LLMs", "Git & GitHub", "Linux CLI / Bash", "Vercel", "VS Code", "Eclipse"],
    hardwareAndIoT: ["Arduino IDE", "ESP32 Microcontrollers", "Sensor Telemetry"],
    nonTechnical: ["Communication", "Decision Making", "Teamwork"]
  },

  projects: [
    {
      title: "MovieRecommend Platform",
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://movierecommend-pi.vercel.app",
      repoUrl: "https://github.com/raskassaikarthik07-droid/movierecommend",
      summary: "AI-driven movie discovery and recommendation platform featuring algorithmic genre matching, search indexing, and real-time media views.",
      highlights: [
        "Architected strictly typed TypeScript components with modular UI state for smooth responsiveness.",
        "Optimized client-side filtering and debounced queries to achieve sub-100ms search latency.",
        "Configured continuous edge deployment pipeline on Vercel with responsive desktop and mobile viewport support."
      ]
    },
    {
      title: "Structviz (Data Structures Visualizer)",
      technologies: ["JavaScript (ES6+)", "HTML5 Canvas", "CSS3", "GitHub Pages"],
      liveUrl: "https://raskassaikarthik07-droid.github.io/Structviz/",
      repoUrl: "https://github.com/raskassaikarthik07-droid/Structviz",
      summary: "Interactive educational visualizer animating abstract computer science memory allocations and pointer operations in real time.",
      highlights: [
        "Engineered smooth 60fps canvas animations for LIFO stacks, FIFO queues, and dynamic linked node traversals.",
        "Constructed interactive step-by-step playback controls enabling students to inspect pointer manipulations frame by frame.",
        "Deployed to GitHub Pages with zero external UI dependencies for instant load times."
      ]
    },
    {
      title: "RehabVision Physio",
      technologies: ["TypeScript", "Computer Vision", "Kinematic Mathematics", "HTML5 Video / Canvas", "GitHub Pages"],
      liveUrl: "https://raskassaikarthik07-droid.github.io/Rehabvision_physio/",
      repoUrl: "https://github.com/raskassaikarthik07-droid/Rehabvision_physio",
      summary: "Clinical AI-assisted movement tracking, computer vision posture analysis, and rehabilitation monitoring platform.",
      highlights: [
        "Implemented real-time browser-based skeletal landmark analysis to compute joint vectors and degrees of flexion/extension at 30+ fps.",
        "Created an intuitive minimal heads-up display (HUD) with dynamic posture thresholds (green/amber/red).",
        "Published fully interactive clinical prototype on GitHub Pages accessible on standard webcam-equipped hardware."
      ]
    },
    {
      title: "GreenLeaf Botanical Store",
      technologies: ["JavaScript", "Semantic HTML5", "Custom CSS Grid Architecture", "GitHub Pages"],
      liveUrl: "https://raskassaikarthik07-droid.github.io/plants/",
      repoUrl: "https://github.com/raskassaikarthik07-droid/plants",
      summary: "Botanical plant and artisan lifestyle pot storefront with dynamic shopping cart and categorized catalog browsing.",
      highlights: [
        "Engineered responsive CSS Grid layouts, accessible product modals, and client-side cart price arithmetic.",
        "Built pub/sub cart state synchronization with LocalStorage persistence across user sessions.",
        "Achieved fluid touch drawer navigation and optimized image rendering for mobile shoppers."
      ]
    },
    {
      title: "SkyBook Flight Booking",
      technologies: ["React 19", "Tailwind CSS v4", "Amadeus API", "Framer Motion"],
      repoUrl: "https://github.com/raskassaikarthik07-droid/flight",
      summary: "Commercial-grade flight reservation web application with real-time flight search and interactive seat selection.",
      highlights: [
        "Integrated Amadeus flight search APIs with resilient error boundaries and multi-leg route query parsing.",
        "Designed an interactive SVG aircraft seat cabin map supporting real-time seat reservation selection.",
        "Provided digital boarding pass preview and print export workflow."
      ]
    },
    {
      title: "Space Mission Control",
      technologies: ["Java SE", "Custom Data Structures (LinkedList, Stack, Queue)", "OOP Architecture"],
      repoUrl: "https://github.com/raskassaikarthik07-droid/Space-mission-control",
      summary: "High-reliability aerospace mission and astronaut flight crew telemetry dispatch architecture in pure Java.",
      highlights: [
        "Implemented custom two-pointer Linked Lists (CrewList), LIFO Emergency Stacks, and FIFO Mission Queues without utilizing standard java.util collections.",
        "Engineered atomic enqueue/dequeue algorithms with strict boundary checks to prevent memory leaks and dangling node pointers.",
        "Passed 100% of stress-test scenarios for contingency abort procedures and priority flight dispatch."
      ]
    }
  ],

  certifications: [
    {
      title: "Building Agentic AI Applications with Large Language Models",
      issuer: "NVIDIA",
      date: "2025",
      credential: "NVIDIA Verified Credential",
      description: "Trained on enterprise agentic architectures, function calling, vector retrieval, and autonomous multi-agent orchestration."
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      date: "2025",
      credential: "Simulation Credential",
      description: "Practical telemetry analysis, dashboard architecture, business intelligence, and predictive data modeling."
    },
    {
      title: "Introduction to Generative AI Studio",
      issuer: "Generative AI Studio",
      date: "2025",
      credential: "Certified Completion",
      description: "Foundation models, prompt tuning, semantic embeddings, and multimodal application workflows."
    },
    {
      title: "ReactJS for Beginners",
      issuer: "Technical Certification",
      date: "2025",
      credential: "Verified Completion",
      description: "Component hierarchy, state and effect lifecycles, virtual DOM rendering, and single-page web applications."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.RESUME_DATA = RESUME_DATA;
}
