import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Mail, MessageSquare } from 'lucide-react'
import { siteConfig } from '@/config/site'

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F0FDF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-[#0A4F3A] p-8 sm:p-14 lg:p-20 text-white shadow-2xl border border-[#0D7A58]/50 text-center">
          {/* Glowing gradient backdrops */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#15D69C]/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7FFFD4]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-bold text-[#7FFFD4] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#84CC16]" />
              <span>Let's Build Something Exceptional</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Have a Project In Mind?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-xl text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
              Tell us what you need. We'll review your scope, assemble the ideal talent team, and get back to you with a clear roadmap.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/start-project"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-xl bg-[#84CC16] text-[#0A4F3A] hover:bg-[#84CC16]/90 transition-all duration-200 shadow-lg shadow-[#84CC16]/20 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-[#7FFFD4]" />
                <span>Contact Us</span>
              </Link>
            </div>

            <p className="text-xs text-white/60 pt-2">
              Prefer email? Reach us directly at <a href={`mailto:${siteConfig.email}`} className="text-[#7FFFD4] underline hover:text-white transition-colors">{siteConfig.email}</a>
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default CtaSection
