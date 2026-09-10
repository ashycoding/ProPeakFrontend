export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category:
    | "Development"
    | "AI & Data"
    | "Creative & Media"
    | "Mentorship & Advisory";
  skills: string[];
  deliverables: string[];
  sampleStartingBudget?: string;
  popular?: boolean;
}

export interface FounderItem {
  id: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  linkedinUrl?: string;
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  category: "Web" | "AI/ML" | "Data" | "Video" | "Design" | "Content";
  scope: string;
  technologies: string[];
  sampleOutcome: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Public environment variables sanitized configuration
export const siteConfig = {
  name: "ProPeak",
  tagline: "Build Skills. Earn Money. Create Impact.",
  heroSupporting:
    "Digital solutions built by ambitious talent, managed by a team that cares about the outcome.",
  url: import.meta.env.VITE_SITE_URL || "https://propeak.in",
  email: import.meta.env.VITE_CONTACT_EMAIL || "propeakofficial@gmail.com",
  phone: import.meta.env.VITE_CONTACT_PHONE || "7023719415",
  googleFormUrl:
    import.meta.env.VITE_GOOGLE_PROJECT_FORM_URL ||
    "https://forms.gle/oTRxffbuEJQiLFee6",
  analyticsId: import.meta.env.VITE_ANALYTICS_ID || "",
  socialLinks: {
    linkedin:
      import.meta.env.VITE_LINKEDIN_URL ||
      "https://www.linkedin.com/company/propeak-tech/?viewAsMember=true",
    instagram:
      import.meta.env.VITE_INSTAGRAM_URL ||
      "https://www.instagram.com/propeakofficial/",
    github: import.meta.env.VITE_GITHUB_URL || "",
    youtube: import.meta.env.VITE_YOUTUBE_URL || "",
    whatsapp: import.meta.env.VITE_WHATSAPP_URL || "",
  },
  navLinks: [
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Our Work", href: "/#showcase" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  footerLinks: {
    services: [
      { name: "Website Development", href: "/services/web-development" },
      { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      { name: "Data Analytics", href: "/services/data-analytics" },
      { name: "Video Editing", href: "/services/video-editing" },
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "Content Writing", href: "/services/content-writing" },
      { name: "Final Year Projects", href: "/services/final-year-projects" },
      { name: "Technical Consulting", href: "/services/technical-consulting" },
    ],
    company: [
      { name: "About ProPeak", href: "/about" },
      { name: "Meet The Builders", href: "/about#builders" },
      { name: "Why ProPeak", href: "/about#why-propeak" },
      { name: "Contact Us", href: "/contact" },
    ],
    forBusinesses: [
      { name: "Start a Project", href: "/start-project" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Sample Work", href: "/#showcase" },
      { name: "Request a Quote", href: "/contact" },
    ],
    forStudents: [
      { name: "Talent Network", href: "/about#talent" },
      { name: "Mentorship", href: "/services/final-year-projects" },
      { name: "Skill Elevation", href: "/about" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
};

// 9 Core Services
export const servicesData: ServiceItem[] = [
  {
    id: "s1",
    slug: "web-development",
    title: "Website Development",
    category: "Development",
    iconName: "Globe",
    shortDesc:
      "Modern, high-speed websites, responsive web apps, landing pages, and interactive UI systems.",
    fullDesc:
      "We design and develop fast, accessible, and responsive websites using modern frontend stacks like React, Next.js, and TypeScript. From high-converting marketing landing pages to full-scale web applications, every project is engineered for speed, clean architecture, and seamless user experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "REST APIs",
      "Framer Motion",
    ],
    deliverables: [
      "Responsive frontend web architecture",
      "High-converting landing page development",
      "Modern interactive UI component libraries",
      "API integrations and state management",
      "SEO optimization and Core Web Vitals tuning",
    ],
    sampleStartingBudget: "₹15,000+",
    popular: true,
  },
  {
    id: "s2",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    category: "AI & Data",
    iconName: "Cpu",
    shortDesc:
      "Intelligent AI models, custom LLM integrations, retrieval pipelines (RAG), and smart automations.",
    fullDesc:
      "Harness cutting-edge artificial intelligence tailored to your domain. We develop and integrate AI solutions including custom chatbot agents, document analysis pipelines, fine-tuned classifiers, and predictive models backed by rigorous testing.",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenAI / Anthropic APIs",
      "LangChain",
      "FastAPI",
    ],
    deliverables: [
      "Custom LLM agent & chatbot integrations",
      "Retrieval-Augmented Generation (RAG) pipelines",
      "Predictive analytics & ML classification models",
      "Data preprocessing & model evaluation benchmarks",
      "Python microservices & REST API packaging",
    ],
    sampleStartingBudget: "₹20,000+",
    popular: true,
  },
  {
    id: "s3",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Development",
    iconName: "Smartphone",
    shortDesc:
      "Native-feel cross-platform mobile apps for iOS and Android built with React Native and Flutter.",
    fullDesc:
      "Deliver seamless mobile experiences across devices. We build cross-platform mobile apps featuring intuitive navigation, offline support, device hardware integrations, and smooth micro-interactions.",
    skills: [
      "React Native",
      "Expo",
      "Flutter",
      "Mobile UI/UX",
      "Async Storage",
      "Push Notifications",
    ],
    deliverables: [
      "Cross-platform iOS and Android builds",
      "Clean modular mobile UI architecture",
      "Backend API & cloud database syncing",
      "State management & offline data caching",
      "App store deployment preparation",
    ],
    sampleStartingBudget: "₹22,000+",
  },
  {
    id: "s4",
    slug: "data-analytics",
    title: "Data Analytics",
    category: "AI & Data",
    iconName: "BarChart3",
    shortDesc:
      "Interactive business intelligence dashboards, automated ETL pipelines, and insightful metrics.",
    fullDesc:
      "Turn raw numbers into actionable business decisions. We create interactive visual dashboards, build automated data ingestion and cleaning pipelines, and perform statistical deep dives to uncover growth levers.",
    skills: [
      "Python",
      "SQL",
      "Pandas / NumPy",
      "Tableau / PowerBI",
      "ETL Pipelines",
      "Plotly",
    ],
    deliverables: [
      "Executive KPI dashboards & visual reports",
      "Automated ETL data ingestion pipelines",
      "Cohort, retention, and funnel analysis",
      "Data cleaning, transformation, and audit scripts",
      "Statistical summaries & strategic recommendations",
    ],
    sampleStartingBudget: "₹12,000+",
  },
  {
    id: "s5",
    slug: "video-editing",
    title: "Video Editing",
    category: "Creative & Media",
    iconName: "Video",
    shortDesc:
      "High-retention product launch reels, YouTube post-production, motion graphics, and social promo.",
    fullDesc:
      "Elevate your brand storytelling with cinematic, high-retention video production. We craft engaging promotional videos, educational YouTube content, dynamic reels/shorts, motion titles, and crisp sound design.",
    skills: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Sound Design",
      "Motion Graphics",
      "Color Grading",
    ],
    deliverables: [
      "Short-form reels & TikTok video packs",
      "Long-form YouTube video post-production",
      "Animated motion titles & typography overlays",
      "Professional audio cleanup & soundtrack mixing",
      "Multi-format aspect ratios (16:9, 9:16, 1:1)",
    ],
    sampleStartingBudget: "₹5,000+",
  },
  {
    id: "s6",
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Creative & Media",
    iconName: "Palette",
    shortDesc:
      "Brand identity systems, vector assets, marketing collateral, pitch decks, and Figma UI design.",
    fullDesc:
      "Create memorable visual identities that stand out. We design cohesive brand guidelines, vector logos, marketing collateral, social media design kits, and high-fidelity Figma user interfaces.",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "Brand Systems",
      "Typography",
      "UI Wireframing",
    ],
    deliverables: [
      "Brand style guides & color system palettes",
      "Vector logo kits & scalable icon sets",
      "Social media promotional post templates",
      "High-fidelity Figma UI prototypes",
      "Investor pitch deck visual formatting",
    ],
    sampleStartingBudget: "₹6,000+",
  },
  {
    id: "s7",
    slug: "content-writing",
    title: "Content Writing",
    category: "Creative & Media",
    iconName: "FileText",
    shortDesc:
      "Professional content for brands, websites, blogs, technical products, documentation, and SEO.",
    fullDesc:
      "Professional content writing services engineered to inform, convert, and rank. We craft SEO-optimized articles, compelling website copy, clear technical documentation, product descriptions, and multi-channel marketing content that resonates with your target audience.",
    skills: [
      "SEO Copywriting",
      "Technical Documentation",
      "Blog Strategy",
      "Website Copy",
      "Case Studies",
      "Editing",
    ],
    deliverables: [
      "Keyword-optimized SEO blog post clusters",
      "Conversion-focused website & landing page copy",
      "Developer guides & technical API documentation",
      "Case studies & customer success writeups",
      "Engaging social media & newsletter content",
    ],
    sampleStartingBudget: "₹3,000+",
    popular: true,
  },
  {
    id: "s8",
    slug: "final-year-projects",
    title: "Final Year Projects & Mentorship",
    category: "Mentorship & Advisory",
    iconName: "GraduationCap",
    shortDesc:
      "Engineering project guidance, architectural reviews, prototype builds, and source code walkthroughs.",
    fullDesc:
      "Comprehensive mentorship for computer science and engineering students building capstone and final year projects. Receive expert guidance on system architecture, code implementation, test suites, documentation, and viva defense preparation.",
    skills: [
      "Full-Stack Architectures",
      "ML / AI Prototypes",
      "System Design",
      "Code Walkthroughs",
      "Documentation",
    ],
    deliverables: [
      "Architectural planning & tech stack selection",
      "Hands-on code reviews & debugging sessions",
      "Working prototype implementation guidance",
      "IEEE/academic standard project documentation",
      "Viva defense & demonstration preparation",
    ],
    sampleStartingBudget: "₹8,000+",
  },
  {
    id: "s9",
    slug: "technical-consulting",
    title: "Technical Consulting",
    category: "Mentorship & Advisory",
    iconName: "Compass",
    shortDesc:
      "Architecture audits, database optimization, technology roadmap planning, and code quality reviews.",
    fullDesc:
      "Make confident technical decisions for your product or startup. Our consulting services provide in-depth code audits, database index and query optimizations, scalable architecture blueprints, and technology selection guidance.",
    skills: [
      "Architecture Audits",
      "Database Optimization",
      "Cloud Infrastructure",
      "Security Reviews",
      "DevOps",
    ],
    deliverables: [
      "System architecture & scalability audits",
      "Database performance & query optimization",
      "Tech stack evaluation & migration roadmaps",
      "Security posture & code hygiene checklists",
      "Deployment & CI/CD workflow recommendations",
    ],
    sampleStartingBudget: "₹10,000+",
  },
];

// Founders & Leadership Team
export const foundersData: FounderItem[] = [
  {
    id: "anubhav",
    name: "Anubhav",
    role: "Founder",
    img: "/founders/Anubhav.png",
    bio: "Oversees managed project execution, talent coordination, and operational delivery. Focuses on AI integration strategies and structured milestones.",
    linkedinUrl: "https://www.linkedin.com/in/anubhavsinghiitm/",
  },
  {
    id: "ashok",
    name: "Ashok",
    role: "Co-Founder & Technology",
    img: "/founders/Ashok.png",
    bio: "Leads technical architecture, engineering workflows, and system infrastructure. Focuses on robust software design, performance, and data engineering.",
    linkedinUrl: "https://www.linkedin.com/in/gangwarashok/",
  },
  {
    id: "amit",
    name: "Amit",
    role: "Co-Founder & Business Development",
    img: "/founders/Amit.png",
    bio: "Drives client partnerships, strategic growth, and service expansion. Connects business requirements with tailored digital engineering teams.",
    linkedinUrl: "https://www.linkedin.com/in/amitkrverma19/",
  },
];

// Work Showcase / Sample Outcomes
export const showcaseData: ProjectShowcaseItem[] = [
  {
    id: "p1",
    title: "Modern Next.js SaaS Website",
    category: "Web",
    scope:
      "Responsive marketing website with animated component library, interactive pricing calculator, and high Core Web Vitals score.",
    technologies: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    sampleOutcome:
      "Sample Outcome: 98+ Lighthouse performance score, 0.4s initial load time, and clean modular component architecture.",
    featured: true,
  },
  {
    id: "p2",
    title: "Document AI Knowledge Assistant",
    category: "AI/ML",
    scope:
      "Custom retrieval-augmented generation (RAG) pipeline enabling semantic search and conversational queries across technical PDF libraries.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI Embeddings",
      "ChromaDB",
    ],
    sampleOutcome:
      "Sample Outcome: Sub-second search retrieval across 1,000+ pages with cited source passages.",
    featured: true,
  },
  {
    id: "p3",
    title: "Executive Sales & Cohort Dashboard",
    category: "Data",
    scope:
      "Automated data ingestion pipeline aggregating transactional data into an interactive KPI overview with retention heatmaps.",
    technologies: ["Python", "PostgreSQL", "Pandas", "Plotly / Dash"],
    sampleOutcome:
      "Sample Outcome: Automated weekly reporting eliminating 10+ hours of manual data assembly.",
    featured: true,
  },
  {
    id: "p4",
    title: "Product Launch Showcase Reel",
    category: "Video",
    scope:
      "60-second high-energy product launch video featuring custom 3D device mockups, kinetic typography, and synchronized sound design.",
    technologies: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
    sampleOutcome:
      "Sample Outcome: High-retention social promotional video ready for multi-channel ad campaigns.",
    featured: true,
  },
  {
    id: "p5",
    title: "Fintech Brand Identity & UI Kit",
    category: "Design",
    scope:
      "Complete brand guidelines, design tokens, responsive typography scale, and 40+ atomic Figma UI components.",
    technologies: ["Figma", "Adobe Illustrator", "Design Systems"],
    sampleOutcome:
      "Sample Outcome: Ready-to-implement design system reducing frontend prototyping time by 40%.",
    featured: true,
  },
  {
    id: "p6",
    title: "Technical API Documentation & Guides",
    category: "Content",
    scope:
      "Comprehensive developer documentation suite covering authentication flows, endpoint specifications, and copy-paste code snippets.",
    technologies: ["Markdown", "Technical Writing", "API Specs", "SEO"],
    sampleOutcome:
      "Sample Outcome: Crystal-clear developer onboarding guide with complete code examples.",
    featured: true,
  },
  {
    id: "p7",
    title: "Cross-Platform Delivery Mobile App",
    category: "Web",
    scope:
      "React Native mobile application featuring live map tracking, order status updates, and push notifications.",
    technologies: ["React Native", "Expo", "TypeScript", "Tailwind"],
    sampleOutcome:
      "Sample Outcome: Unified codebase deployed to both iOS TestFlight and Android staging builds.",
  },
  {
    id: "p8",
    title: "SEO Content Cluster for SaaS Product",
    category: "Content",
    scope:
      "Cluster of 6 long-form SEO articles covering core product use cases, keyword research, and informative diagrams.",
    technologies: ["SEO Strategy", "Copywriting", "Content Architecture"],
    sampleOutcome:
      "Sample Outcome: Comprehensive topical authority cluster targeting high-intent search queries.",
  },
];

// Technology Stack
export const techStackData = [
  { name: "React", category: "Frontend", desc: "Interactive UI Library" },
  {
    name: "Next.js",
    category: "Fullstack",
    desc: "Server-Side & Hybrid React",
  },
  { name: "Node.js", category: "Backend", desc: "JavaScript Runtime" },
  { name: "Python", category: "AI & Data", desc: "ML, Scripting & Analytics" },
  { name: "TypeScript", category: "Language", desc: "Type-Safe Architecture" },
  { name: "Java", category: "Enterprise", desc: "Scalable Services" },
  { name: "C++", category: "Systems", desc: "High-Performance Computing" },
  { name: "TensorFlow", category: "AI / ML", desc: "Deep Learning Models" },
  { name: "PyTorch", category: "AI / ML", desc: "Neural Networks & Research" },
  { name: "PostgreSQL", category: "Database", desc: "Relational Data Store" },
  { name: "MongoDB", category: "Database", desc: "Document Database" },
  { name: "AWS", category: "Cloud", desc: "Cloud Infrastructure" },
  { name: "Docker", category: "DevOps", desc: "Containerization" },
  { name: "TailwindCSS", category: "Styling", desc: "Utility-First Design" },
];

// How It Works 4-step workflow
export const howItWorksSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    desc: "Submit your project requirements, scope, timeline, and goals through our intake form or reach out directly by email.",
  },
  {
    step: "02",
    title: "We Understand & Plan",
    desc: "Our engineering leads review your requirements, scope out milestones, structure deliverables, and organize the right talent.",
  },
  {
    step: "03",
    title: "Our Team Builds It",
    desc: "Vetted student talent builds your solution under experienced technical supervision with regular progress updates and code checks.",
  },
  {
    step: "04",
    title: "You Receive The Final Work",
    desc: "You review the deliverables, receive complete source assets and documentation, and take your solution live with confidence.",
  },
];

// Why ProPeak Value Proposition
export const whyProPeakPillars = [
  {
    title: "Student Talent",
    desc: "Ambitious, hungry-to-build developers and creators bringing fresh perspectives and dedicated focus to every project.",
    iconName: "Users",
  },
  {
    title: "Affordable Solutions",
    desc: "High-quality technical execution at accessible pricing designed for startups, creators, and growing businesses.",
    iconName: "BadgePercent",
  },
  {
    title: "Managed Execution",
    desc: "Not a self-service freelancer directory. Every project is planned, reviewed, and overseen by our technical leadership.",
    iconName: "ShieldCheck",
  },
  {
    title: "Modern Technology",
    desc: "Built with the latest battle-tested industry stacks—React, Next.js, Python, TypeScript, and modern AI pipelines.",
    iconName: "Layers",
  },
  {
    title: "Quality Focus",
    desc: "Rigorous internal code reviews, QA checks, and deliverable standards ensure clean, maintainable, production-ready work.",
    iconName: "Sparkles",
  },
  {
    title: "Real-World Experience",
    desc: "Students gain verified portfolio credentials and industry experience while clients receive dependable digital outcomes.",
    iconName: "Award",
  },
];

// Frequently Asked Questions
export const faqsData: FaqItem[] = [
  {
    question: "What is ProPeak?",
    answer:
      "ProPeak is a student-driven digital services company and managed talent network. We connect businesses, startups, and individuals with ambitious student talent to build websites, AI solutions, mobile apps, data analytics, video editing, design, and professional content—all overseen and quality-managed by our engineering leads.",
  },
  {
    question: "How do I start a project with ProPeak?",
    answer:
      'Starting is simple: click "Start a Project" to submit your project requirements via our project form, or email us directly at our contact email. Our team will review your scope, timeline, and requirements, and contact you with a structured proposal.',
  },
  {
    question: "How does the managed execution model work?",
    answer:
      "Unlike open freelance directories where you have to vet dozens of unknown candidates, ProPeak manages the entire process. We review your specifications, match the best qualified talent, supervise the development milestones, conduct code and quality audits, and deliver the final work directly to you.",
  },
  {
    question: "What types of projects does ProPeak handle?",
    answer:
      "We handle 9 core digital service domains: Website Development, AI & Machine Learning, Mobile Apps, Data Analytics, Video Editing, Graphic Design, Content Writing, Final Year Projects & Technical Mentorship, and Technical Consulting.",
  },
  {
    question: "What are typical project timelines and pricing?",
    answer:
      "Timelines and budgets depend on the scope and complexity of your requirements. Small projects (landing pages, content packs, short edits) typically take 3–7 days, while full applications or AI systems take 2–4 weeks. We provide clear, milestone-based quotes before any work begins.",
  },
  {
    question: "How are students selected and guided?",
    answer:
      "Students in the ProPeak network are evaluated on their technical skills, portfolio work, and problem-solving abilities. Every project is supervised by our co-founders and technical leads, ensuring all code and deliverables adhere to professional industry standards.",
  },
  {
    question: "What if I need revisions or post-delivery support?",
    answer:
      "Every project includes a dedicated review and revision window. We ensure you are completely satisfied with the deliverables and provide full source code, assets, and documentation for seamless handoff.",
  },
];
