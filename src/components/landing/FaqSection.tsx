import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "@/components/ui/Accordion";
import { faqsData } from "@/config/site";
import { Sparkles, HelpCircle, ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-white border-y border-[#D1FAE5] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Support Box */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF8] border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#10A87A]" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="font-gerbil font-light text-3xl sm:text-5xl text-[#052E20] tracking-tight">
              Clear Answers About Working With ProPeak
            </h2>

            <p className="text-base sm:text-lg text-[#527A68] leading-relaxed">
              Everything you need to know about our student talent matching,
              managed execution, pricing scopes, and project handoff.
            </p>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] space-y-4">
              <h4 className="text-base font-bold text-[#052E20]">
                Have a question not listed here?
              </h4>
              <p className="text-sm text-[#527A68] leading-relaxed">
                Reach out directly to our engineering leads and we will respond
                with details for your specific scope.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 text-sm font-bold rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-95"
                >
                  <span>Contact Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-4 py-2.5 text-sm font-semibold rounded-xl bg-white border border-[#D1FAE5] text-[#052E20] hover:bg-[#F7FEE7] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#10A87A]" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <Accordion items={faqsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
