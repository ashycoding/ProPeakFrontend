import React from 'react'
import { motion } from 'framer-motion'
import { foundersData, FounderItem } from '@/config/site'
import { Sparkles, Linkedin, Users2 } from 'lucide-react'

export const FoundersSection: React.FC = () => {
  return (
    <section id="builders" className="py-20 lg:py-28 bg-white border-y border-[#D1FAE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF8] border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
            <span>Leadership & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#052E20] tracking-tight">
            Meet The Builders
          </h2>

          <p className="text-base sm:text-lg text-[#527A68] leading-relaxed">
            The core team directing technology architectures, operations, business partnerships, and cybersecurity at ProPeak.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {foundersData.map((founder: FounderItem, idx: number) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] hover:border-[#10A87A]/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Founder Image */}
                <div className="h-64 sm:h-72 w-full overflow-hidden relative bg-[#0A4F3A]/5 flex items-center justify-center">
                  <img
                    src={founder.img}
                    alt={`${founder.name} - ${founder.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLElement
                      target.style.display = 'none'
                      const fallback = document.getElementById(`founder-fb-${founder.id}`)
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div
                    id={`founder-fb-${founder.id}`}
                    className="hidden w-full h-full bg-[#0A4F3A] flex-col items-center justify-center text-white p-4"
                  >
                    <Users2 className="w-12 h-12 text-[#7FFFD4] mb-2 stroke-[1.5]" />
                    <span className="font-bold text-base">{founder.name}</span>
                    <span className="text-xs text-[#7FFFD4]/80">{founder.role}</span>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#052E20] group-hover:text-[#0D7A58] transition-colors">
                    {founder.name}
                  </h3>
                  
                  <p className="text-xs font-bold uppercase tracking-wider text-[#10A87A] mt-1 mb-3">
                    {founder.role}
                  </p>

                  <p className="text-sm text-[#527A68] leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Social Link */}
              {founder.linkedinUrl && (
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3 border-t border-[#D1FAE5] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#527A68]">Professional Profile</span>
                    <a
                      href={founder.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0D7A58] hover:text-[#0A4F3A] transition-colors"
                      aria-label={`${founder.name} LinkedIn Profile`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FoundersSection
