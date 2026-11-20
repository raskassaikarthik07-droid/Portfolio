/**
 * RESUME DATA - SINGLE SOURCE OF TRUTH
 * Raskas Sai Karthik | Computer Science & Engineering
 * KL University, Hyderabad | Roll No: 2510030295
 *
 * Strictly verified data only. Zero fabricated experience or fake metrics.
 */

export interface ContactInfo {
  name: string;
  preferredName: string;
  role: string;
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  scoreOrGrade: string;
  details?: string[];
}

export interface TechnicalSkills {
  languages: string[];
  frameworksAndWeb: string[];
  systemsAndDatabases: string[];
  toolsAndPlatforms: string[];
  hardwareAndIoT: string[];
}

export interface ProjectEntry {
  title: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl: string;
  summary: string;
  highlights: string[];
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  description: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  education: EducationEntry[];
  skills: TechnicalSkills;
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
}

export const resumeData: ResumeData = {
  contact: {
    name: "Raskas Sai Karthik",
    preferredName: "Karthik",
    role: "Computer Science Engineer & Systems Builder",
    email: "raskas.saikarthik07@gmail.com",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/raskas-sai-karthik-7b3746378/",
    github: "https://github.com/raskassaikarthik07-droid",
    portfolio: "https://raskassaikarthik07-droid.github.io/Portfolio/"
  },

  summary:
    "Analytical and performance-driven Computer Science Engineering undergraduate at KL University, Hyderabad (Roll No: 2510030295). Experienced in developing responsive full-stack applications, browser-based computer vision kinematics, and deterministic Java object-oriented data structures. Proven academic track record with 89% in Intermediate (MPC) and a 9.7/10 GPA in Secondary School. Seeking Summer 2025/2026 Software Engineering and Distributed Systems Internships.",

  education: [
    {
      institution: "KL University (Koneru Lakshmaiah Education Foundation)",
      degree: "B.Tech in Computer Science & Engineering (Roll No: 2510030295)",
      duration: "June 2025 – Present",
      location: "Hyderabad, India",
      scoreOrGrade: "Active B.Tech CSE Undergraduate",
      details: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Relational & Vector Databases, Computer Networks, IoT & Microcontroller Architecture.",
        "Engineering Focus: High-performance browser computing, microservices, and applied computer vision telemetry."
      ]
    },
    {
      institution: "Narayana Junior College",
      degree: "Board of Intermediate Education (Mathematics, Physics, Chemistry - MPC)",
      duration: "2023 – 2025",
      location: "Hyderabad, India",
      scoreOrGrade: "Academic Distinction: 89%",
      details: [
        "Intensive curriculum in higher-level calculus, classical mechanics, physical chemistry, and quantitative analytical problem-solving."
      ]
    },
    {
      institution: "Little Flower High School",
      degree: "Secondary School Certificate (SSC)",
      duration: "2013 – 2023",
      location: "Hyderabad, India",
      scoreOrGrade: "Academic Score: 9.7 / 10 GPA (97%)",
      details: [
        "Graduated with distinction; demonstrated consistent excellence in mathematics, physical sciences, and science exhibition symposiums."
      ]
    }
  ],

  skills: {
    languages: ["Java SE", "Python", "C / C++", "TypeScript", "JavaScript (ES6+)", "SQL"],
    frameworksAndWeb: ["React 19", "Next.js", "Tailwind CSS", "HTML5 Canvas", "RESTful APIs", "FastAPI"],
    systemsAndDatabases: ["Data Structures & Algorithms", "OOP Design Patterns", "MySQL", "PostgreSQL", "Vector Databases"],
    toolsAndPlatforms: ["Git", "GitHub & GitHub Pages", "Linux CLI / Bash", "Docker Basics", "Vercel CI/CD", "Eclipse IDE", "VS Code"],
    hardwareAndIoT: ["Arduino IDE", "ESP32 Microcontrollers", "Analog/Digital Sensor Telemetry", "Serial Protocols (UART / SPI)"]
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
      title: "AI / ML Virtual Internship & Systems Certification",
      issuer: "Industry Virtual Internship Program",
      date: "2025",
      credential: "Grade: Excellent",
      description: "Completed intensive practical curriculum in supervised machine learning, model evaluation, and computer vision pose tracking."
    }
  ]
};

export default resumeData;
