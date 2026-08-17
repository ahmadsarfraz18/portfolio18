export interface Project {
  id: string;
  title: string;
  category: string;
  projectCategory?: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ai?: string[];
    deployment?: string[];
  };
  myRole: string;
  challenges: string;
  results: string;
  architecture: string[];
  developmentProcess: string[];
  futureImprovements: string;
  duration: string;
  projectType: string;
  status: string;
  metadata?: string[];
  liveUrl: string | null;
  githubUrl: string;
  image?: string;
  isFlagship?: boolean;
  highlights?: string[];
}

export const portfolioData = {
  hero: {
    name: "Mahar Ahmad Sarfraz",
    title: "Generative AI & Full-Stack Developer",
    subtitle:
      "Building practical AI systems, full-stack applications, and digital products that turn complex ideas into useful experiences.",
  },
  about: {
    bio: "I am an AI and Full-Stack Developer who learns by building real systems. My work spans modern web applications, AI agents, developer-focused workflows, and Physical AI education. From building a technical textbook on humanoid robotics to developing practical web and AI applications, I enjoy turning complex ideas into functional digital experiences.",
  },
  socials: {
    github: "https://github.com/ahmadsarfraz18",
    linkedin: "https://www.linkedin.com/in/ahmad-sarfraz-394b4b276/",
  },
  learningJourney: [
    {
      year: "2024",
      title: "Started Python Programming",
      description: "Began learning Python fundamentals and object-oriented programming while building small practical applications.",
      techBadge: "Python",
      icon: "Code2"
    },
    {
      year: "2024",
      title: "Built First Python Projects",
      description: "Completed multiple beginner-to-intermediate Python applications including Unit Converter, Password Strength Meter, Personal Library Manager, and Streamlit projects.",
      techBadge: "Python",
      icon: "TerminalSquare"
    },
    {
      year: "2025",
      title: "Governor Sindh IT Initiative — Quarter 1",
      description: "Started the Governor Sindh IT Program and learned modern web development fundamentals with TypeScript and frontend technologies.",
      techBadge: "HTML • CSS • TypeScript",
      icon: "GraduationCap"
    },
    {
      year: "2025",
      title: "OpenAI Agents SDK — Quarter 3",
      description: "Learned AI Agents architecture, tool calling, workflows, and production-ready AI application development.",
      techBadge: "OpenAI Agents SDK",
      icon: "BrainCircuit"
    },
    {
      year: "2025",
      title: "Passed OpenAI Agents Final (92 Percentile)",
      description: "Successfully completed the OpenAI Agents SDK final assessment with a 92 percentile score.",
      techBadge: "Achievement",
      icon: "Award"
    },
    {
      year: "2025",
      title: "Started Agentic AI Development",
      description: "Focused on building autonomous AI systems, multi-agent workflows, prompt engineering, and modern AI architectures.",
      techBadge: "Agentic AI",
      icon: "Bot"
    },
    {
      year: "2025",
      title: "Built AI & Full-Stack Projects",
      description: "Developed practical AI applications and full-stack web solutions using Next.js, FastAPI, TypeScript, and modern frontend technologies.",
      techBadge: "Next.js • FastAPI",
      icon: "Layers"
    },
    {
      year: "2026",
      title: "Spec-Kit & Claude Code Workflow",
      description: "Adopted specification-driven development using Spec-Kit, Claude Code, and structured AI-assisted engineering workflows.",
      techBadge: "Spec-Kit • Claude Code",
      icon: "Workflow"
    },
    {
      year: "2026",
      title: "OpenCode & AI Development Workflow",
      description: "Expanded my AI-assisted software engineering workflow using OpenCode alongside modern developer tooling.",
      techBadge: "OpenCode",
      icon: "Cpu"
    },
    {
      year: "2026",
      title: "Building Production Portfolio & AI Products",
      description: "Currently focused on building production-quality AI applications, a premium developer portfolio, and real-world software products.",
      techBadge: "Next.js • OpenAI",
      icon: "Rocket"
    }
  ],
  achievements: [
    {
      title: "Projects Built",
      count: 25,
      suffix: "+",
      description: "Across web, AI, and robotics domains.",
      icon: "Briefcase"
    },
    {
      title: "AI Agents",
      count: 4,
      suffix: "",
      description: "Fully autonomous systems deployed.",
      icon: "Bot"
    },
    {
      title: "GitHub Repositories",
      count: 40,
      suffix: "+",
      description: "Open-source contributions and personal projects.",
      icon: "Github"
    },
    {
      title: "Learning Hours",
      count: 2000,
      suffix: "+",
      description: "Dedicated to mastering modern web and AI.",
      icon: "Clock"
    }
  ],
  techGrowth: {
    "Artificial Intelligence": [
      { name: "OpenAI", maturity: "Production Ready" },
      { name: "Agents SDK", maturity: "Advanced" },
      { name: "Gemini", maturity: "Intermediate" },
      { name: "MCP", maturity: "Currently Learning" }
    ],
    "Frontend": [
      { name: "Next.js", maturity: "Production Ready" },
      { name: "React", maturity: "Production Ready" },
      { name: "TypeScript", maturity: "Advanced" },
      { name: "Tailwind CSS", maturity: "Production Ready" },
      { name: "ShadCN UI", maturity: "Advanced" }
    ],
    "Backend": [
      { name: "Python", maturity: "Production Ready" },
      { name: "FastAPI", maturity: "Intermediate" },
      { name: "Node.js", maturity: "Intermediate" }
    ],
    "Databases": [
      { name: "PostgreSQL", maturity: "Advanced" },
      { name: "Neon", maturity: "Intermediate" }
    ],
    "Developer Tools": [
      { name: "Git & GitHub", maturity: "Production Ready" },
      { name: "VS Code", maturity: "Production Ready" },
      { name: "Claude Code", maturity: "Advanced" },
      { name: "Docker", maturity: "Intermediate" },
      { name: "OpenCode", maturity: "Currently Learning" }
    ],
    "Deployment": [
      { name: "Vercel", maturity: "Production Ready" },
      { name: "GitHub Pages", maturity: "Production Ready" }
    ]
  },
  philosophy: "I don't learn technologies to collect certificates. I learn by building real products that solve real-world problems.",
  projects: [
    {
      id: "physical-ai-textbook",
      title: "Physical AI & Humanoid Robotics Textbook",
      category: "Flagship Project",
      projectCategory: "OPEN SOURCE",
      description: "An interactive digital textbook designed for developers exploring Physical AI and humanoid robotics. Combines theoretical concepts with real-world simulation case studies, leveraging digital twins and Vision-Language-Action (VLA) models.",
      problem: "Traditional robotics education relies on abstract math and expensive hardware, creating a high barrier to entry for full-stack developers exploring Physical AI and VLA models.",
      solution: "Architected an interactive digital textbook using Next.js. Integrated embedded simulation visuals, structured learning paths, and digital twin models to teach ROS 2 and VLA concepts without physical hardware.",
      keyFeatures: [
        "Interactive 3D Simulation Walkthroughs",
        "ROS 2 Code Snippet Execution Previews",
        "Digital Twin Architecture Visualizer",
        "Progressive Learning Paths",
        "Dark-Mode Optimized Reading Experience",
        "Comprehensive Glossary & Search"
      ],
      techStack: ["Next.js", "React", "TypeScript", "ROS 2", "Digital Twin"],
      technologies: {
        frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        backend: ["Node.js", "MDX"],
        ai: ["VLA Models", "NVIDIA Isaac"],
        deployment: ["Vercel", "GitHub Actions"]
      },
      myRole: "Lead Developer & Technical Author. Responsible for the entire platform architecture, UI/UX design, and the technical accuracy of the robotics content.",
      challenges: "Rendering complex architectural diagrams and simulation videos without degrading web performance. Ensuring the dense technical content remained readable and structurally accessible on mobile devices.",
      results: "Achieved a perfect 100/100 Lighthouse performance score. Successfully lowered the barrier to entry for web developers transitioning into Physical AI.",
      architecture: [
        "User requests interactive chapter",
        "Next.js App Router fetches MDX content",
        "React Server Components parse layout",
        "Client components hydrate simulation visuals",
        "Rendered output delivered to browser"
      ],
      developmentProcess: [
        "Curriculum Planning",
        "UI/UX Design System",
        "Platform Development",
        "Content Authoring (MDX)",
        "Performance Optimization"
      ],
      futureImprovements: "Integration with a cloud-based WebGL physics engine to allow live execution of robotics code directly within the browser.",
      duration: "3 Months",
      projectType: "Personal / Educational",
      status: "Completed & Actively Maintained",
      metadata: ["High Performance", "Modern UI", "Interactive"],
      liveUrl: "https://hachathon-ai-book-ahxf-k9n0c5c7e-ahmad-sarfrazs-projects.vercel.app/",
      githubUrl: "https://github.com/ahmadsarfraz18/hachathon_ai_book",
      isFlagship: true,
      highlights: [
        "Spec-Driven Development",
        "Interactive learning modules",
        "Real-world simulation case studies",
      ],
      image: "/projects/physical-ai-book.jpg",
    },
    {
      id: "personal-ai-employee",
      title: "Personal AI Employee",
      category: "Applied AI Projects",
      projectCategory: "AI PROJECT",
      description: "An autonomous AI agent built to streamline professional workflows. Features intelligent task automation, context-aware scheduling, and automated email management, built on a robust LangChain backend.",
      problem: "Knowledge workers lose up to 15 hours weekly managing emails, scheduling, and routine administrative tasks. Existing tools lack deep contextual understanding of personalized workflows.",
      solution: "Engineered an autonomous AI agent capable of reading context, drafting intelligent email replies, managing calendar events, and extracting action items from meeting notes using advanced LLM orchestration.",
      keyFeatures: [
        "Context-Aware Email Drafting",
        "Automated Calendar Scheduling",
        "Document Parsing & Summarization",
        "Natural Language Task Management",
        "Secure API Integrations",
        "Continuous Workflow Learning"
      ],
      techStack: ["AI Agent", "Python", "OpenAI", "LangChain"],
      technologies: {
        frontend: ["Streamlit"],
        backend: ["Python", "LangChain", "FastAPI"],
        ai: ["OpenAI GPT-4", "Vector Embeddings"],
        deployment: ["Docker", "AWS EC2"]
      },
      myRole: "Sole Full-Stack AI Engineer. Handled LLM prompt engineering, vector database setup, and the user interface implementation.",
      challenges: "Preventing AI hallucinations during calendar scheduling. Overcame this by implementing a rigid tool-calling structure and a 'human-in-the-loop' verification step before any destructive API actions.",
      results: "Reduced personal administrative overhead by 40%. The agent successfully parsed and categorized complex email threads with 95% accuracy.",
      architecture: [
        "User issues natural language command",
        "LangChain Agent interprets intent",
        "RAG retrieves contextual user data",
        "Agent executes specific Tool (e.g. Google Calendar API)",
        "Result formatted and returned to User"
      ],
      developmentProcess: [
        "Agentic Architecture Design",
        "Tool Integration (APIs)",
        "LLM Prompt Refinement",
        "Safety & Guardrails Testing",
        "UI Implementation"
      ],
      futureImprovements: "Adding multi-modal capabilities to allow the agent to process voice commands and analyze visual charts.",
      duration: "4 Weeks",
      projectType: "Personal",
      status: "Completed",
      metadata: ["Production Ready", "High Performance"],
      liveUrl: null,
      githubUrl: "https://github.com/ahmadsarfraz18/Personal-AI-Employee",
      image: "/projects/personal-ai-emp.jpg",
    },
    {
      id: "rishtay-wali-aunty-agent",
      title: "Rishtay Wali Aunty Agent",
      category: "Applied AI Projects",
      projectCategory: "AI PROJECT",
      description: "A conversational matchmaking AI agent designed for traditional cultural contexts. Leverages LLMs to process nuanced user preferences, facilitating highly accurate and culturally aware profile recommendations.",
      problem: "Traditional matchmaking relies heavily on human intermediaries, which can be slow and biased. Existing digital apps often miss the cultural nuance required for serious commitments.",
      solution: "Developed an empathetic, persona-driven AI agent that acts as a traditional matchmaker. It conducts conversational interviews to map cultural preferences and utilizes semantic search for highly compatible recommendations.",
      keyFeatures: [
        "Persona-Driven Conversational UI",
        "Semantic Profile Matching",
        "Cultural Nuance Extraction",
        "Privacy-First Data Handling",
        "Automated Compatibility Scoring",
        "Interactive Feedback Loop"
      ],
      techStack: ["AI Agent", "Python", "Streamlit", "LLMs"],
      technologies: {
        frontend: ["Streamlit", "Custom CSS"],
        backend: ["Python", "FastAPI"],
        database: ["Pinecone", "PostgreSQL"],
        ai: ["OpenAI", "LangChain", "HuggingFace Embeddings"],
        deployment: ["Render"]
      },
      myRole: "AI Developer. Designed the conversational flow, engineered the system prompts, and built the semantic search pipeline.",
      challenges: "Ensuring the AI maintained a respectful, culturally appropriate tone while accurately parsing highly subjective user requirements. Solved through extensive prompt tuning and few-shot learning examples.",
      results: "Engineered a robust proof-of-concept proving the viability of persona-driven AI in sensitive domains, achieving highly positive qualitative feedback on the conversational UX.",
      architecture: [
        "User chats with AI interface",
        "LLM extracts structured preferences",
        "Vector DB queried for semantic matches",
        "Scoring engine ranks profiles",
        "AI presents matches conversationally"
      ],
      developmentProcess: [
        "Persona Engineering",
        "Vector Database Schema Design",
        "Conversational UI Build",
        "Recommendation Algorithm Tuning",
        "User Testing"
      ],
      futureImprovements: "Integrating secure video verification and implementing a real-time localized language translation layer.",
      duration: "3 Weeks",
      projectType: "Personal",
      status: "Completed",
      metadata: ["Interactive", "Modern UI"],
      liveUrl: null,
      githubUrl: "https://github.com/ahmadsarfraz18/Rishtay_Wali_Aunty_Agent",
      image: "/projects/rishtay-agent.jpg",
    },
    {
      id: "taskflow-todo-app",
      title: "TaskFlow Todo App",
      category: "Selected Web & Product Work",
      projectCategory: "WEB APP",
      description: "A robust task management dashboard focused on daily productivity. Engineered with optimistic UI updates, persistent state management, and real-time category filtering for a frictionless user experience.",
      problem: "Complex task management apps suffer from slow UI interactions, cluttered interfaces, and high cognitive load, leading to user fatigue.",
      solution: "Built a lightning-fast, minimalist task dashboard. By utilizing optimistic UI updates and local caching, interactions feel instant. The clean design focuses entirely on reducing cognitive load.",
      keyFeatures: [
        "Optimistic UI Updates",
        "Drag & Drop Organization",
        "Real-Time Category Filtering",
        "Local Storage Persistence",
        "Accessible Keyboard Navigation",
        "Responsive Dark Mode"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      technologies: {
        frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        backend: ["Next.js API Routes"],
        database: ["Local Storage (Client-side)"],
        deployment: ["Vercel"]
      },
      myRole: "Frontend Engineer. Designed the UI/UX and implemented all client-side state management and animations.",
      challenges: "Managing complex client-side state transitions smoothly while ensuring data persistence didn't block the main thread. Solved using React context and optimized local storage syncing.",
      results: "Achieved sub-50ms interaction latency, delivering a native desktop-like fluid experience directly within the browser.",
      architecture: [
        "User interacts with UI",
        "React State instantly updates (Optimistic)",
        "Framer Motion handles layout animation",
        "Background sync to Local Storage",
        "UI reflects confirmed state"
      ],
      developmentProcess: [
        "Wireframing & UI Design",
        "Component Architecture",
        "State Management Implementation",
        "Animation & Polish",
        "Performance Auditing"
      ],
      futureImprovements: "Migrating to a full backend with PostgreSQL and Prisma to support multi-device syncing and collaborative lists.",
      duration: "2 Weeks",
      projectType: "Personal",
      status: "Completed",
      metadata: ["Responsive", "Dark Mode", "High Performance"],
      liveUrl: "https://hackathon2-phase2-gamma.vercel.app/",
      githubUrl: "https://github.com/ahmadsarfraz18/hackathon2_todo_app_phasew",
      image: "/projects/taskflow-app.jpg",
    },
    {
      id: "al-arab-shawarma",
      title: "Al-Arab Shawarma Restaurant Website",
      category: "Selected Web & Product Work",
      projectCategory: "WEB APP",
      description: "A high-conversion landing page for an authentic Arabic restaurant. Built with a mobile-first approach, featuring an interactive digital menu, optimized asset loading, and a seamless reservations interface.",
      problem: "The restaurant's digital presence was outdated, slow, and unresponsive on mobile devices, resulting in high bounce rates and lost digital orders.",
      solution: "Designed and developed a performant, mobile-first Next.js web application. Implemented dynamic image optimization and an intuitive interactive menu to drastically improve user retention.",
      keyFeatures: [
        "Mobile-First Responsive Layout",
        "Interactive Digital Menu",
        "Optimized Image Delivery",
        "SEO & Meta Tag Management",
        "High-Conversion CTA Placement",
        "Accessible Contact Forms"
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      technologies: {
        frontend: ["Next.js", "React", "Tailwind CSS", "Lucide Icons"],
        deployment: ["Vercel"]
      },
      myRole: "Freelance Full-Stack Developer. Managed the project from client requirements gathering to final deployment.",
      challenges: "Ensuring high-resolution food photography loaded instantly on mobile networks. Implemented Next/Image with aggressive caching and modern WebP formats to solve this.",
      results: "Improved page load speeds by over 300% and secured perfect Lighthouse scores, leading to a measurable increase in mobile user retention and digital menu views.",
      architecture: [
        "User visits URL",
        "Vercel Edge Network serves cached HTML",
        "Next/Image dynamically optimizes assets",
        "Client-side React handles interactive menu",
        "Form submissions route via API to Email"
      ],
      developmentProcess: [
        "Client Consultation",
        "Figma Prototyping",
        "Next.js Implementation",
        "Asset Optimization",
        "SEO Setup & Launch"
      ],
      futureImprovements: "Integrating a complete e-commerce checkout flow for direct online delivery orders.",
      duration: "1 Month",
      projectType: "Client Work",
      status: "Completed",
      metadata: ["Responsive", "Modern UI", "Production Ready"],
      liveUrl: "https://al-arab-shawarma-18-5pgl8h97m-ahmad-sarfrazs-projects.vercel.app/",
      githubUrl: "https://github.com/ahmadsarfraz18/Al-Arab-Shawarma",
      image: "/projects/al-arab-shawarma.jpg",
    },
    {
      id: "wok-on",
      title: "Wok On – Fusion Cuisine Website",
      category: "Selected Web & Product Work",
      projectCategory: "WEB APP",
      description: "A modern digital presence for a fast-casual fusion restaurant. Incorporates performant scroll animations, dynamic routing, and an accessible UI tailored for rapid menu browsing and online orders.",
      problem: "The client needed a highly visual, brand-aligned website capable of standing out in a competitive food market while providing an ultra-fast browsing experience.",
      solution: "Engineered a visually striking web app using Next.js and Tailwind CSS. Focused heavily on micro-interactions and scroll animations to create a premium feel without sacrificing Core Web Vitals.",
      keyFeatures: [
        "Dynamic Scroll Animations",
        "Component-Based Menu System",
        "Brand-Aligned Theming",
        "Lightning Fast Routing",
        "SEO Optimized Architecture",
        "Cross-Browser Compatibility"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      technologies: {
        frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        deployment: ["Vercel"]
      },
      myRole: "Frontend Developer & UI Designer. Responsible for translating the brand identity into a cohesive digital experience.",
      challenges: "Balancing complex Framer Motion animations with strict performance requirements. Overcame this by lazy-loading heavy animations and ensuring they only fired once within the viewport.",
      results: "Delivered a premium digital experience with 100/100 Accessibility and SEO scores in Google Lighthouse, receiving stellar client feedback.",
      architecture: [
        "User accesses site",
        "Static Generation delivers instant initial load",
        "Framer Motion orchestrates entry animations",
        "Next.js pre-fetches linked routes",
        "Instant client-side navigation"
      ],
      developmentProcess: [
        "Brand Identity Translation",
        "Frontend Architecture Setup",
        "Animation Choreography",
        "Cross-Device Testing",
        "Production Deployment"
      ],
      futureImprovements: "Adding an integrated headless CMS (like Sanity) to allow the client to update the menu dynamically without code changes.",
      duration: "3 Weeks",
      projectType: "Client Work",
      status: "Completed",
      metadata: ["Responsive", "Dark Mode", "Modern UI"],
      liveUrl: "https://wok-on.vercel.app/",
      githubUrl: "https://github.com/ahmadsarfraz18/wok_on",
      image: "/projects/wok-on.jpg",
    },
    {
      id: "hekto-furniture",
      title: "Hekto Furniture Market App",
      category: "Selected Web & Product Work",
      projectCategory: "FULL STACK",
      description: "A full-stack e-commerce platform tailored for the luxury furniture market. Features server-side rendered product catalogs, secure stateful cart management, and an optimized, frictionless checkout flow.",
      problem: "Luxury furniture buyers require high-fidelity imagery and a seamless, trustworthy checkout process. Generic e-commerce templates often feel cheap and degrade brand value.",
      solution: "Architected a custom headless e-commerce frontend. Implemented server-side rendering for optimal SEO and initial load times, paired with a robust client-side cart state management system.",
      keyFeatures: [
        "Server-Side Rendered Catalog",
        "Global Cart State Management",
        "Frictionless Checkout Flow",
        "High-Fidelity Product Galleries",
        "Advanced Filtering & Search",
        "Responsive Grid Layouts"
      ],
      techStack: ["Full-Stack", "Next.js", "TypeScript", "React", "Tailwind"],
      technologies: {
        frontend: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
        backend: ["Next.js API Routes"],
        database: ["PostgreSQL (Planned)"],
        deployment: ["Vercel"]
      },
      myRole: "Full-Stack Engineer. Built the entire application from component design to cart logic and deployment.",
      challenges: "Handling complex client-side state across multiple routes without causing unnecessary re-renders. Solved using optimized React Context and careful component memoization.",
      results: "Engineered a production-grade e-commerce frontend architecture capable of scaling to thousands of products while maintaining sub-second navigation latency.",
      architecture: [
        "User browses catalog (SSR)",
        "Next.js delivers SEO-optimized page",
        "User adds item to cart",
        "React Context updates global state",
        "Optimized checkout routing"
      ],
      developmentProcess: [
        "E-commerce Flow Mapping",
        "Component Library Build",
        "Cart Logic Implementation",
        "Product Details Pages (SSR)",
        "Testing & Polish"
      ],
      futureImprovements: "Integrating Stripe for payment processing and a secure authentication layer using NextAuth.",
      duration: "1.5 Months",
      projectType: "Personal / Showcase",
      status: "Completed",
      metadata: ["Responsive", "Production Ready", "High Performance"],
      liveUrl: "https://hecto-furniture-website-1nvo0fipc-ahmad-sarfrazs-projects.vercel.app/",
      githubUrl: "https://github.com/ahmadsarfraz18/hecto-furniture-website",
      image: "/projects/hekto-furniture.jpg",
    }
  ] as Project[],
};
