import React from 'react'
import { motion } from 'framer-motion'
import { howItWorksSteps } from '@/config/site'
import { Sparkles, MessageSquare, Compass, Code2, CheckCircle } from 'lucide-react'

const stepIcons = [MessageSquare, Compass, Code2, CheckCircle]

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-y border-[#D1FAE5] relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#15D69C]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#7FFFD4]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF8] border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
            <span>Managed Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#052E20] tracking-tight">
            How ProPeak Works in 4 Simple Steps
          </h2>

          <p className="text-base sm:text-lg text-[#527A68] leading-relaxed">
            From initial project submission to final milestone delivery, our structured engineering workflow keeps projects transparent, timely, and aligned with your expectations.
          </p>
        </div>

        {/* 4-Step Interactive Workflow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-4 relative z-10 items-stretch">
            {howItWorksSteps.map((step, idx) => {
              const StepIcon = stepIcons[idx] || CheckCircle

              return (
                <React.Fragment key={step.step}>
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="p-6 sm:p-7 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] hover:border-[#10A87A]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
                  >
                    <div>
                      {/* Top Step Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#D1FAE5] flex items-center justify-center text-[#0D7A58] group-hover:bg-[#0A4F3A] group-hover:text-white transition-colors duration-300 shadow-xs">
                          <StepIcon className="w-6 h-6 stroke-[2]" />
                        </div>
                        <span className="text-2xl font-black text-[#10A87A]/40 group-hover:text-[#10A87A] transition-colors font-mono">
                          {step.step}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#052E20] mb-2.5 leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#527A68] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#D1FAE5]/60 flex items-center gap-2 text-xs font-bold text-[#0D7A58]">
                      <span className="w-2 h-2 rounded-full bg-[#10A87A]" />
                      <span>Phase {step.step}</span>
                    </div>
                  </motion.div>

                  {/* Desktop connector arrow between steps */}
                  {idx < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center absolute" style={{ display: 'none' }}>
                      {/* Placeholder for layout alignment if needed */}
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>

          {/* Desktop Animated Connecting Flow Graphic */}
          <div className="hidden lg:block mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#F0FDF8] border border-[#D1FAE5] text-xs font-semibold text-[#0D7A58]">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-[#10A87A]"
              />
              <span>Full milestone tracking, structured reviews & quality gates at every stage</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
