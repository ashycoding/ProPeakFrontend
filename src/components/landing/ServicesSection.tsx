import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { servicesData, ServiceItem } from "@/config/site";

// Map icon string name to Lucide Icon component
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

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F0FDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="font-elms-sans font-normal text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
            <span>Our Service Capabilities</span>
          </div>

          <h2 className="font-gerbil font-light text-3xl sm:text-5xl text-[#052E20] tracking-tight">
            High-Impact Digital Services Delivered with Precision
          </h2>

          <p className="text-base font-elms-sans font-normal sm:text-lg text-[#527A68] leading-relaxed">
            From modern web applications and AI workflows to high-retention
            video editing and professional SEO content. Every service is
            supervised by technical leads to guarantee quality.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service: ServiceItem, idx: number) => {
            const Icon = iconMap[service.iconName] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-white border border-[#D1FAE5] hover:border-[#10A87A]/60 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] group-hover:bg-[#0A4F3A] group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    {service.popular && (
                      <span className="text-[11px] font-bold text-[#166534] bg-[#F7FEE7] px-2.5 py-1 rounded-full border border-[#D1FAE5]">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#052E20] group-hover:text-[#0D7A58] transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#527A68] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.skills.slice(0, 4).map((skill: string) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold text-[#0D7A58] bg-[#F0FDF8] px-2.5 py-1 rounded-md border border-[#D1FAE5]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-[#D1FAE5]/60 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A4F3A] group-hover:text-[#10A87A] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/start-project"
                    className="text-xs font-semibold text-[#527A68] hover:text-[#052E20] transition-colors"
                  >
                    Request Scope
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#052E20]">
              Looking for a customized digital solution?
            </h4>
            <p className="text-sm text-[#527A68]">
              We tailor engineering teams and scopes specifically for your
              startup or business.
            </p>
          </div>
          <Link
            to="/start-project"
            className="font-gerbil font-bold px-6 py-3 text-sm rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white shadow-sm transition-all whitespace-nowrap active:scale-95"
          >
            Start Your Custom Project &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
