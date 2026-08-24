import React from 'react'
import { motion } from 'framer-motion'
import { whyProPeakPillars } from '@/config/site'
import { Users, BadgePercent, ShieldCheck, Layers, Sparkles, Award } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Users,
  BadgePercent,
  ShieldCheck,
  Layers,
  Sparkles,
  Award,
}

export const WhyProPeak: React.FC = () => {
  return (
    <section id="why-propeak" className="py-20 lg:py-28 bg-[#F0FDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
            <span>The ProPeak Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#052E20] tracking-tight">
            A Managed Talent Network, Not an Open Freelancer Directory
          </h2>

          <p className="text-base sm:text-lg text-[#527A68] leading-relaxed">
            We bridge the gap between high-caliber student developers and ambitious businesses. Every project is planned, reviewed, and overseen by technical leads.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyProPeakPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Sparkles

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl bg-white border border-[#D1FAE5] hover:border-[#10A87A]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] group-hover:bg-[#0A4F3A] group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#052E20] mb-3 group-hover:text-[#0D7A58] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#527A68] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D1FAE5]/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10A87A]" />
                  <span className="text-xs font-semibold text-[#527A68]">Core Quality Guarantee</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhyProPeak
