import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2, Code, Cpu, Video, FileText, ChevronRight } from 'lucide-react'

export const Hero: React.FC = () => {
  const mockCards = [
    {
      title: 'Website Development',
      price: '₹15,000+',
      icon: Code,
      category: 'Web App & UI',
      tags: ['Next.js', 'React', 'Tailwind'],
      glow: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      title: 'AI / ML Solution',
      price: '₹20,000+',
      icon: Cpu,
      category: 'Intelligent Systems',
      tags: ['Python', 'LLMs', 'RAG'],
      glow: 'from-teal-500/20 to-cyan-500/20',
    },
    {
      title: 'Video Editing',
      price: '₹5,000+',
      icon: Video,
      category: 'Media Production',
      tags: ['Motion', 'Reels', 'YouTube'],
      glow: 'from-emerald-600/20 to-green-400/20',
    },
    {
      title: 'Content Writing',
      price: '₹3,000+',
      icon: FileText,
      category: 'SEO & Copywriting',
      tags: ['SEO Blogs', 'Technical Docs'],
      glow: 'from-green-500/20 to-lime-500/20',
    },
  ]

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[#F0FDF8]">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#15D69C]/15 via-[#7FFFD4]/20 to-[#0D7A58]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#84CC16]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Subtle Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#0A4F3A 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-semibold text-[#0D7A58]">
              <Sparkles className="w-4 h-4 text-[#10A87A]" />
              <span>Student-Driven Digital Services & Managed Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#052E20] tracking-tight leading-[1.1]">
              Build Skills.<br />
              <span className="text-grad-bright">Earn Money.</span><br />
              Create Impact.
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-lg sm:text-xl text-[#527A68] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Digital solutions built by ambitious talent, managed by a team that cares about the outcome. From high-performance websites and AI pipelines to video editing and technical content.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/start-project"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white shadow-lg shadow-[#0A4F3A]/20 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-4 text-base font-semibold rounded-xl bg-white hover:bg-[#F7FEE7] border border-[#D1FAE5] text-[#052E20] shadow-xs active:scale-98 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-[#10A87A]" />
              </Link>
            </div>

            {/* Trust Checklist */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#527A68]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10A87A]" />
                <span>Managed Quality Execution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10A87A]" />
                <span>Transparent Milestone Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10A87A]" />
                <span>Fast Requirement Intake</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Realistic Project Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Card Grid Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {mockCards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D1FAE5] shadow-md hover:shadow-xl hover:border-[#10A87A]/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] flex items-center justify-center text-[#0D7A58]">
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>
                        <span className="text-xs font-bold text-[#166534] bg-[#F7FEE7] px-2.5 py-1 rounded-full border border-[#D1FAE5]">
                          {card.price}
                        </span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#527A68]/80 mb-1">{card.category}</p>
                      <h4 className="text-base font-bold text-[#052E20] leading-snug">{card.title}</h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#D1FAE5]/60">
                      {card.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-semibold text-[#0D7A58] bg-[#F0FDF8] px-2 py-0.5 rounded-md border border-[#D1FAE5]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Note banner under cards */}
            <p className="text-center text-xs text-[#527A68] mt-4 italic">
              *Visual examples of typical project domains & starting scopes.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
