import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { showcaseData, ProjectShowcaseItem } from '@/config/site'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

type CategoryFilter = 'All' | 'Web' | 'AI/ML' | 'Data' | 'Video' | 'Design' | 'Content'

export const WorkShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const categories: CategoryFilter[] = ['All', 'Web', 'AI/ML', 'Data', 'Video', 'Design', 'Content']

  const filteredProjects =
    activeCategory === 'All'
      ? showcaseData
      : showcaseData.filter((item: ProjectShowcaseItem) => item.category === activeCategory)

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-white border-y border-[#D1FAE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF8] border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
              <span>Execution Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#052E20] tracking-tight">
              Sample Outcomes & Capability Demos
            </h2>

            <p className="text-base sm:text-lg text-[#527A68]">
              Explore sample scopes across our key service domains. Every project is engineered for performance, clean architecture, and measurable results.
            </p>
          </div>

          <Link
            to="/start-project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white text-sm font-bold shadow-sm transition-all whitespace-nowrap active:scale-95 self-start md:self-auto"
          >
            <span>Have a Similar Project?</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#0A4F3A] text-white shadow-sm'
                  : 'bg-[#F0FDF8] hover:bg-white text-[#527A68] hover:text-[#052E20] border border-[#D1FAE5]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectShowcaseItem) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] hover:border-[#10A87A]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D7A58] bg-white px-2.5 py-1 rounded-md border border-[#D1FAE5]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-bold text-[#166534] bg-[#F7FEE7] px-2 py-0.5 rounded-full border border-[#D1FAE5]">
                        Featured Demo
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#052E20] mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#527A68] leading-relaxed mb-5">
                    {project.scope}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold text-[#0D7A58] bg-white px-2.5 py-1 rounded-md border border-[#D1FAE5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sample Outcome Box */}
                <div className="p-3.5 rounded-xl bg-white border border-[#D1FAE5] text-xs text-[#052E20] space-y-1">
                  <div className="flex items-center gap-1.5 text-[#0D7A58] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10A87A]" />
                    <span>Benchmark / Deliverable Target</span>
                  </div>
                  <p className="text-[#527A68] font-medium leading-relaxed">
                    {project.sampleOutcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default WorkShowcase
