import React from 'react'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/ui/SeoHead'
import { siteConfig } from '@/config/site'
import { ShieldCheck, ChevronLeft } from 'lucide-react'

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Privacy Policy"
        description="ProPeak's Privacy Policy outlining how we handle information submitted through our website and project intake channels."
        canonicalPath="/privacy"
      />

      <div className="min-h-screen py-12 sm:py-16 lg:py-20 bg-[#F0FDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#527A68] hover:text-[#0A4F3A] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D1FAE5] shadow-xs space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF8] border border-[#D1FAE5] text-xs font-bold text-[#0D7A58] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#10A87A]" />
                <span>Legal & Trust</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#052E20] tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-sm text-[#527A68]">Last updated: August 2026</p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-[#527A68] leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">1. Introduction</h2>
                <p>
                  ProPeak ("we," "our," or "us") operates as a managed digital services network and website. We respect your privacy and are committed to protecting the information you share with us when exploring our services or submitting project requirements.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">2. Information We Collect</h2>
                <p>
                  When you submit project intake details, request a quote, or email us, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contact details such as your name, business name, and email address.</li>
                  <li>Project scope descriptions, technical requirements, timelines, and budget expectations.</li>
                  <li>Any supplementary reference files or assets you provide for estimation.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">3. How We Use Your Information</h2>
                <p>We use the information you provide solely to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Review your project requirements and prepare technical proposals.</li>
                  <li>Communicate with you regarding your milestones, schedules, and deliverables.</li>
                  <li>Coordinate internal engineering and talent assignments.</li>
                  <li>Maintain transparency and recordkeeping for project deliverables.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">4. Data Confidentiality & Non-Disclosure</h2>
                <p>
                  We treat all proprietary client specifications, source ideas, and project briefs as confidential. We do not sell, rent, or trade your contact or project data to third-party advertisers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">5. External Links & Forms</h2>
                <p>
                  Our website may provide links to external services such as Google Forms or professional social platforms (LinkedIn, GitHub). We are not responsible for the privacy practices of third-party platforms.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">6. Contact Us</h2>
                <p>
                  If you have questions regarding this Privacy Policy, please contact our team directly at{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-[#0D7A58] font-bold underline">
                    {siteConfig.email}
                  </a>.
                </p>
              </section>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PrivacyPage
