import React from 'react'
import { motion } from 'framer-motion'
import SeoHead from '@/components/ui/SeoHead'
import { siteConfig } from '@/config/site'
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Coins, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react'

export const StartProjectPage: React.FC = () => {
  const formUrl = siteConfig.googleFormUrl

  return (
    <>
      <SeoHead
        title="Start a Project | Project Requirement Intake"
        description="Submit your digital project requirement to ProPeak. Our engineering leads will review your scope, timeline, and budget, and contact you with a structured proposal."
        canonicalPath="/start-project"
      />

      <div className="min-h-screen py-12 sm:py-16 lg:py-24 bg-[#F0FDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
              <span>Project Intake Experience</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#052E20] tracking-tight">
              Tell Us What You're Building
            </h1>

            <p className="text-base sm:text-lg text-[#527A68] leading-relaxed max-w-2xl mx-auto">
              Share your project requirements with our engineering team. We will review your scope, timeline, and goals, and get back to you with a structured execution plan.
            </p>
          </div>

          {/* Main Action & Process Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D1FAE5] shadow-xl space-y-10"
          >
            {/* What Happens After Submission */}
            <div>
              <h2 className="text-xl font-bold text-[#052E20] mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#10A87A]" />
                <span>Our 3-Step Intake & Review Process</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: FileText,
                    step: '1. Submit Scope',
                    desc: 'Fill out our structured form with your goals, target features, and any reference designs.',
                  },
                  {
                    icon: Clock,
                    step: '2. Lead Review',
                    desc: 'ProPeak engineering leads evaluate technical feasibility, milestones, and budget tiers.',
                  },
                  {
                    icon: Coins,
                    step: '3. Proposal & Kickoff',
                    desc: 'We reach out via email/call with a milestone proposal and team assignment.',
                  },
                ].map((item, idx) => {
                  const ItemIcon = item.icon
                  return (
                    <div key={idx} className="p-5 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] space-y-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#D1FAE5] text-[#0D7A58] flex items-center justify-center">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-[#052E20]">{item.step}</h3>
                      <p className="text-xs text-[#527A68] leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Core Review Checklist */}
            <div className="p-6 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] space-y-3">
              <h4 className="text-sm font-bold text-[#052E20] uppercase tracking-wider">
                What We Review in Your Submission:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#052E20]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10A87A] shrink-0" />
                  <span>Functional Scope & Requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10A87A] shrink-0" />
                  <span>Target Milestones & Deadlines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10A87A] shrink-0" />
                  <span>Budget & Tier Expectations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10A87A] shrink-0" />
                  <span>Required Technical Toolchains</span>
                </div>
              </div>
            </div>

            {/* Primary Action Button (Configurable Google Form or Fallback) */}
            <div className="pt-2 text-center space-y-4">
              {formUrl ? (
                <div className="space-y-3">
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base sm:text-lg font-bold rounded-2xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white shadow-lg shadow-[#0A4F3A]/20 active:scale-98 transition-all duration-200 group w-full sm:w-auto"
                  >
                    <span>Submit Project Requirement</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <p className="text-xs text-[#527A68]">
                    Opens the secure ProPeak Project Intake Form in a new tab.
                  </p>
                </div>
              ) : (
                /* Graceful fallback when VITE_GOOGLE_PROJECT_FORM_URL is empty */
                <div className="p-6 rounded-2xl bg-[#F7FEE7] border border-[#D1FAE5] text-center space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#166534]">
                    <AlertCircle className="w-4 h-4" />
                    <span>Direct Email Intake Active</span>
                  </div>
                  <p className="text-sm text-[#052E20] font-medium">
                    Our online intake form is currently being updated. Please send your project brief directly to our team:
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:${siteConfig.email}?subject=Project Intake Requirement Brief`}
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold rounded-xl bg-[#0A4F3A] text-white hover:bg-[#0D7A58] transition-all shadow-sm"
                    >
                      <Mail className="w-4 h-4 text-[#7FFFD4]" />
                      <span>Email Us at {siteConfig.email}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

          </motion.div>

        </div>
      </div>
    </>
  )
}

export default StartProjectPage
