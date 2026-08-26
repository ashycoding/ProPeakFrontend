import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SeoHead from "@/components/ui/SeoHead";
import FoundersSection from "@/components/landing/FoundersSection";
import WhyProPeak from "@/components/landing/WhyProPeak";
import {
  Sparkles,
  ArrowRight,
  Target,
  Users,
  ShieldCheck,
  Award,
  HeartHandshake,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="About Us | The ProPeak Story & Mission"
        description="Learn about ProPeak's mission as a student-driven digital services company and managed talent network connecting ambitious creators with meaningful client projects."
        canonicalPath="/about"
      />

      <div className="min-h-screen py-12 sm:py-16 lg:py-24 bg-[#F0FDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
              <span>About ProPeak</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-gerbil font-light  text-[#052E20] tracking-tight leading-[1.15]">
              Empowering Ambitious Talent to Deliver Real-World Impact
            </h1>

            <p className="text-base sm:text-xl text-[#527A68] leading-relaxed">
              ProPeak was founded to solve two fundamental challenges: helping
              skilled student engineers and creators gain verified commercial
              experience, and giving businesses access to high-caliber,
              affordable digital services managed for quality.
            </p>
          </div>

          {/* Mission & Vision Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D1FAE5] shadow-xs space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] flex items-center justify-center">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <h2 className="text-2xl font-bold text-[#052E20]">Our Mission</h2>
              <p className="text-base text-[#527A68] leading-relaxed">
                To build India’s premier managed student talent network where
                ambition transforms into production-ready software, AI tools,
                multimedia, and technical writing—backed by rigorous engineering
                supervision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D1FAE5] shadow-xs space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 stroke-[2]" />
              </div>
              <h2 className="text-2xl font-bold text-[#052E20]">
                Our Philosophy
              </h2>
              <p className="text-base text-[#527A68] leading-relaxed">
                We believe practical experience beats static theoretical
                certifications. By managing project scopes and vetting
                deliverables, we create a win-win ecosystem where clients
                receive exceptional digital solutions and talent builds real
                commercial credibility.
              </p>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-3xl font-gerbil font-light  text-[#052E20]">
                Our Core Values
              </h2>
              <p className="text-sm sm:text-base text-[#527A68]">
                Principles that guide our engineering standards and community
                relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Excellence in Execution",
                  desc: "We take pride in clean code, accessible UI architectures, and resilient system design.",
                },
                {
                  title: "Managed Accountability",
                  desc: "No client is left managing unverified freelancers alone; our leadership oversees every milestone.",
                },
                {
                  title: "Continuous Growth",
                  desc: "Every project is a launchpad for student talent to master modern production toolchains.",
                },
                {
                  title: "Honest Communication",
                  desc: "Clear scope boundaries, transparent turnaround schedules, and honest estimations.",
                },
                {
                  title: "End-to-End Ownership",
                  desc: "We deliver complete source code, documentation, and asset handoffs with zero lock-in.",
                },
                {
                  title: "Security & Integrity",
                  desc: "Respect for client data, digital assets, and ethical cybersecurity practices.",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs"
                >
                  <h3 className="text-lg font-bold text-[#052E20] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#527A68] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why ProPeak Section Component */}
        <WhyProPeak />

        {/* Founders Section Component */}
        {/* <FoundersSection /> */}

        {/* Talent Community Callout */}
        <div
          id="talent"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A4F3A] text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#84CC16]">
                For Ambitious Students
              </span>
              <h2 className="font-gerbil font-light text-3xl sm:text-4xl tracking-tight">
                Want to join the ProPeak talent network?
              </h2>
              <p className="text-sm sm:text-base text-white/80">
                If you are a student passionate about web development, AI, data
                science, video editing, design, or writing, reach out to explore
                project collaborations.
              </p>
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold rounded-xl bg-[#84CC16] text-[#0A4F3A] hover:bg-[#84CC16]/90 transition-all shadow-md active:scale-95"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
