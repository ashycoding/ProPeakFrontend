import React from 'react'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/ui/SeoHead'
import { siteConfig } from '@/config/site'
import { FileText, ChevronLeft } from 'lucide-react'

export const TermsPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Terms of Service"
        description="Terms of Service governing project engagement, milestone reviews, deliverable handoff, and service terms at ProPeak."
        canonicalPath="/terms"
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
                <FileText className="w-4 h-4 text-[#10A87A]" />
                <span>Agreement</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#052E20] tracking-tight">
                Terms of Service
              </h1>
              <p className="text-sm text-[#527A68]">Last updated: August 2026</p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-[#527A68] leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">1. Service Scope & Engagements</h2>
                <p>
                  ProPeak provides managed digital development, AI implementation, media production, and technical consulting services. All project timelines, scopes, and deliverables are mutually agreed upon prior to project kickoff.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">2. Intellectual Property & Ownership</h2>
                <p>
                  Upon full payment and milestone acceptance, clients receive full commercial ownership of bespoke source code, visual assets, documentation, and deliverables produced specifically for their project.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">3. Revisions & Acceptance Windows</h2>
                <p>
                  Each deliverable phase includes a structured review window for testing, inspection, and feedback. Revisions within the agreed project scope are accommodated promptly. Scope additions outside the initial agreement are estimated as separate milestones.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">4. Client Responsibilities</h2>
                <p>
                  Clients are responsible for providing clear specifications, necessary access credentials or brand assets in a timely manner to maintain agreed milestone schedules.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-[#052E20]">5. Contact & Support</h2>
                <p>
                  For any legal or contractual inquiries, please contact our team at{' '}
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

export default TermsPage
