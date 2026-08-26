import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import SeoHead from "@/components/ui/SeoHead";
import { servicesData, ServiceItem, siteConfig } from "@/config/site";
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
  ChevronLeft,
  Clock,
  ShieldCheck,
  Zap,
  Mail,
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

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s: ServiceItem) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || Globe;

  return (
    <>
      <SeoHead
        title={`${service.title} Services`}
        description={service.shortDesc}
        canonicalPath={`/services/${service.slug}`}
      />

      <div className="min-h-screen py-10 sm:py-16 lg:py-20 bg-[#F0FDF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Services Navigation */}
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#527A68] hover:text-[#0A4F3A] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to all services</span>
            </Link>
          </div>

          {/* Service Hero Header Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D1FAE5] shadow-sm mb-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] flex items-center justify-center shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10A87A] bg-[#F0FDF8] px-3 py-1.5 rounded-full border border-[#D1FAE5]">
                  {service.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-gerbil font-light  text-[#052E20] tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-xl text-[#527A68] leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/start-project"
                  className="px-7 py-3.5 text-base font-bold rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white shadow-md transition-all active:scale-95 flex items-center gap-2 group"
                >
                  <span>Start This Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`mailto:${siteConfig.email}?subject=Project Enquiry: ${encodeURIComponent(service.title)}`}
                  className="px-6 py-3.5 text-base font-semibold rounded-xl bg-[#F0FDF8] hover:bg-white border border-[#D1FAE5] text-[#052E20] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#10A87A]" />
                  <span>Email Requirements</span>
                </a>
              </div>
            </div>
          </div>

          {/* Details Grid: Deliverables, Skills, Guarantees */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left Col (8 cols): Deliverables & Methodology */}
            <div className="lg:col-span-8 space-y-8">
              {/* What We Deliver */}
              <div className="p-8 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs space-y-6">
                <h3 className="text-2xl font-bold text-[#052E20] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#10A87A]" />
                  <span>Key Deliverables & Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#10A87A] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#052E20] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Methodology */}
              <div className="p-8 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs space-y-6">
                <h3 className="text-2xl font-gerbil font-light text-[#052E20]">
                  How We Execute This Service
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      step: "1. Requirement Scoping",
                      desc: "We review your inputs, deliverables checklist, reference samples, and target timeline.",
                    },
                    {
                      step: "2. Team Assembly & Supervision",
                      desc: "We match skilled developers or creators under the direct oversight of our engineering co-founders.",
                    },
                    {
                      step: "3. Milestone Reviews & QA Audits",
                      desc: "Regular review gates ensure code quality, visual aesthetics, performance, and documentation standards.",
                    },
                    {
                      step: "4. Final Handoff & Assets Release",
                      desc: "Complete source repositories, design files, or media assets are handed over with full ownership.",
                    },
                  ].map((phase, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-start p-4 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5]/80"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#0A4F3A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#052E20]">
                          {phase.step}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#527A68] mt-0.5">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col (4 cols): Skills & Quick Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tech & Tools Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs space-y-4">
                <h4 className="text-base font-bold text-[#052E20]">
                  Technologies & Toolchains
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-bold text-[#0D7A58] bg-[#F0FDF8] px-3 py-1.5 rounded-lg border border-[#D1FAE5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Commitments */}
              <div className="p-6 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs space-y-4">
                <h4 className="text-base font-bold text-[#052E20]">
                  Service Highlights
                </h4>

                <div className="space-y-3 text-xs sm:text-sm text-[#527A68]">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#10A87A] shrink-0" />
                    <span>Internal QA & Technical Lead Reviews</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#10A87A] shrink-0" />
                    <span>Direct Timelines & Milestone Updates</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-[#10A87A] shrink-0" />
                    <span>Complete Source Code & Asset Handoff</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/start-project"
                    className="w-full py-3 px-4 rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Submit Requirement</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A4F3A] text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-gerbil font-light tracking-tight mb-2">
              Ready to build with ProPeak?
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-6">
              Share your project requirements via our project intake form. We
              will review the scope and contact you promptly.
            </p>
            <Link
              to="/start-project"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold rounded-xl bg-[#84CC16] text-[#0A4F3A] hover:bg-[#84CC16]/90 transition-all shadow-md active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
