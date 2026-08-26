import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SeoHead from "@/components/ui/SeoHead";
import { servicesData, ServiceItem } from "@/config/site";
import {
  Globe,
  Cpu,
  Smartphone,
  BarChart3,
  Video,
  Palette,
  FileText,
  GraduationCap,
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Cpu,
  Smartphone,
  BarChart3,
  Video,
  Palette,
  FileText,
  GraduationCap,
  Compass,
};

type CategoryType =
  | "All"
  | "Development"
  | "AI & Data"
  | "Creative & Media"
  | "Mentorship & Advisory";

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  const categories: CategoryType[] = [
    "All",
    "Development",
    "AI & Data",
    "Creative & Media",
    "Mentorship & Advisory",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter(
          (item: ServiceItem) => item.category === selectedCategory,
        );

  return (
    <>
      <SeoHead
        title="Services & Digital Capabilities"
        description="Explore ProPeak's comprehensive suite of digital services across web development, AI & ML, mobile apps, data analytics, video editing, design, and content writing."
        canonicalPath="/services"
      />

      <div className="min-h-screen py-12 sm:py-16 lg:py-24 bg-[#F0FDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
              <span>Full Service Catalog</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-gerbil font-light text-[#052E20] tracking-tight">
              Digital Solutions Built for Growth
            </h1>

            <p className="text-base sm:text-lg text-[#527A68] leading-relaxed">
              Every project is managed directly by technical leads and executed
              by talented developers and creators to deliver dependable business
              value.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#0A4F3A] text-white shadow-md"
                    : "bg-white hover:bg-[#F7FEE7] text-[#527A68] hover:text-[#052E20] border border-[#D1FAE5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service: ServiceItem, idx: number) => {
                const Icon = iconMap[service.iconName] || Globe;

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    whileHover={{ y: -6 }}
                    className="p-7 rounded-2xl bg-white border border-[#D1FAE5] hover:border-[#10A87A]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top icon and budget badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] group-hover:bg-[#0A4F3A] group-hover:text-white transition-colors duration-200 flex items-center justify-center shadow-xs">
                          <Icon className="w-6 h-6 stroke-[2]" />
                        </div>

                        {service.popular && (
                          <span className="text-xs font-bold text-[#166534] bg-[#F7FEE7] px-3 py-1 rounded-full border border-[#D1FAE5]">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider text-[#10A87A] mb-1">
                        {service.category}
                      </p>

                      <h3 className="text-xl font-bold text-[#052E20] group-hover:text-[#0D7A58] transition-colors mb-3">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#527A68] leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>

                      {/* Key Deliverables Bullet Points */}
                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#052E20]/80">
                          What's Included:
                        </p>
                        {service.deliverables.slice(0, 3).map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 text-xs text-[#527A68]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10A87A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-semibold text-[#0D7A58] bg-[#F0FDF8] px-2.5 py-1 rounded-md border border-[#D1FAE5]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-[#D1FAE5]/60 flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A4F3A] group-hover:text-[#10A87A] transition-colors"
                      >
                        <span>Full Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        to="/start-project"
                        className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#0A4F3A] text-white hover:bg-[#0D7A58] transition-colors"
                      >
                        Start Project
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0A4F3A] text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need a customized cross-disciplinary project?
              </h3>
              <p className="text-sm sm:text-base text-white/80">
                Many projects combine frontend engineering, AI models, custom
                design, and video production. Tell us your goals and we will
                assemble the exact team.
              </p>
              <div className="pt-2">
                <Link
                  to="/start-project"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold rounded-xl bg-[#84CC16] text-[#0A4F3A] hover:bg-[#84CC16]/90 transition-all shadow-md active:scale-95"
                >
                  <span>Submit Custom Requirement</span>
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

export default ServicesPage;
