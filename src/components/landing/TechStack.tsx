import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Custom high-fidelity brand icons for battle-tested technologies
const TechIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "React":
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="1.5"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current">
          <path d="M90 0a90 90 0 1 0 90 90A90 90 0 0 0 90 0ZM62 135V45h17.5l55 70.8V45h16.5v90h-16.5L78.5 63.8V135Z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
          <path d="M16 2.5 3 10v12l13 7.5 13-7.5V10Zm9.5 17.7-9.5 5.5-9.5-5.5V11.8l9.5-5.5 9.5 5.5Z" />
          <path d="M16 11a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z" />
        </svg>
      );
    case "Python":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2c-3.8 0-4.5.8-4.5 2.5V7h7V8H5.5C3.8 8 2 9.5 2 12s1.5 4 3.5 4H7v-2.5C7 11.8 8.5 10 10.5 10H15c1.8 0 3-1.2 3-3V4.5C18 2.8 15.8 2 12 2z" />
          <circle cx="9" cy="4.5" r="0.8" fill="currentColor" />
          <path d="M12 22c3.8 0 4.5-.8 4.5-2.5V17h-7v-1h9c1.7 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17v2.5c0 1.7-1.5 3.5-3.5 3.5H9c-1.8 0-3 1.2-3 3v2.5C6 21.2 8.2 22 12 22z" />
          <circle cx="15" cy="19.5" r="0.8" fill="currentColor" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 8h6M10 8v8M15 11c0-1.5 1-2 2.5-2s2.5.8 2.5 2c0 2-3 2-3 3.5 0 1 .8 1.5 2 1.5 1 0 1.8-.5 2-1" />
        </svg>
      );
    case "Java":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case "C++":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 7.5A5.5 5.5 0 1 0 9 16.5" />
          <path d="M13 12h3M14.5 10.5v3M18 12h3M19.5 10.5v3" />
        </svg>
      );
    case "TensorFlow":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2z" />
          <path d="M12 2v18M12 11l8-4.5M12 11l-8-4.5" />
        </svg>
      );
    case "PyTorch":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 6c0-2-1-3-3-4-1 2-2 3-2 5 0 1.5 1 2.5 2 2.5s3-.5 3-3.5z" />
          <path d="M16 11c1.5 1.5 2 3.5 1 5.5-1.5 3-4.5 4.5-7.5 4s-4.5-3.5-4-6.5c.5-3 3-5 5.5-5.5" />
          <circle cx="16.5" cy="8.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-13z" />
          <path d="M12 2v20" />
        </svg>
      );
    case "AWS":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "Docker":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 11h3v3H4zM8 11h3v3H8zM12 11h3v3h-3zM8 7h3v3H8zM12 7h3v3h-3zM16 7h3v3h-3z" />
          <path d="M2 13c1 4 4 8 11 8 6 0 9-3 9-6 0-1-.5-2-1.5-2.5A3.5 3.5 0 0 0 18 10h-2V6h-1" />
        </svg>
      );
    case "TailwindCSS":
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 12c.5-2.5 2-4 4.5-4.5 3-.5 4.5 1 6 1.5 2 .5 3.5 0 4.5-1.5-1 2.5-2.5 4-5 4.5-3 .5-4.5-1-6-1.5-2-.5-3 0-4 1.5z" />
          <path d="M3 18c.5-2.5 2-4 4.5-4.5 3-.5 4.5 1 6 1.5 2 .5 3.5 0 4.5-1.5-1 2.5-2.5 4-5 4.5-3 .5-4.5-1-6-1.5-2-.5-3 0-4 1.5z" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
};

export const TechStack: React.FC = () => {
  const techStackData = [
    { name: "React", category: "Frontend", desc: "Interactive UI Library" },
    {
      name: "Next.js",
      category: "Fullstack",
      desc: "Server-Side & Hybrid React",
    },
    { name: "Node.js", category: "Backend", desc: "JavaScript Runtime" },
    {
      name: "Python",
      category: "AI & Data",
      desc: "ML, Scripting & Analytics",
    },
    {
      name: "TypeScript",
      category: "Language",
      desc: "Type-Safe Architecture",
    },
    { name: "Java", category: "Enterprise", desc: "Scalable Services" },
    { name: "C++", category: "Systems", desc: "High-Performance Computing" },
    { name: "TensorFlow", category: "AI / ML", desc: "Deep Learning Models" },
    {
      name: "PyTorch",
      category: "AI / ML",
      desc: "Neural Networks & Research",
    },
    { name: "PostgreSQL", category: "Database", desc: "Relational Data Store" },
    { name: "MongoDB", category: "Database", desc: "Document Database" },
    { name: "AWS", category: "Cloud", desc: "Cloud Infrastructure" },
    { name: "Docker", category: "DevOps", desc: "Containerization" },
    { name: "TailwindCSS", category: "Styling", desc: "Utility-First Design" },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F0FDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
            <span>Modern Engineering Stack</span>
          </div>

          <h2 className="font-gerbil font-light text-3xl sm:text-4xl font-extrabold text-[#052E20] tracking-tight">
            Battle-Tested Technologies We Build With
          </h2>

          <p className="text-base sm:text-lg text-[#527A68]">
            We deploy modern, scalable languages, frameworks, and AI toolchains
            tailored to the needs of each project.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {techStackData.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="p-4 rounded-xl bg-white border border-[#D1FAE5] hover:border-[#10A87A]/50 shadow-xs hover:shadow-md transition-all duration-200 text-center flex flex-col items-center justify-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] group-hover:bg-[#0A4F3A] group-hover:text-white transition-all duration-200 flex items-center justify-center mb-2.5 shadow-2xs">
                <TechIcon name={tech.name} />
              </div>
              <h4 className="text-sm font-bold text-[#052E20] mb-0.5">
                {tech.name}
              </h4>
              <p className="text-[11px] font-semibold text-[#10A87A]">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
