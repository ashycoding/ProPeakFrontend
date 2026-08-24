import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Star, Quote, CheckCircle2 } from 'lucide-react'

export const SampleOutcomes: React.FC = () => {
  const sampleCaseStudies = [
    {
      title: 'Fast-Loaded SaaS Landing & Architecture',
      category: 'Web Development',
      deliverable: 'Modular Next.js component system, Tailwind responsive design, and SEO metadata configuration.',
      highlight: 'Delivered in 8 days with 98+ PageSpeed and clean TypeScript structure.',
    },
    {
      title: 'Custom Technical Documentation Suite',
      category: 'Content Writing',
      deliverable: 'Complete developer onboarding guides, code samples, API endpoint references, and search-friendly docs.',
      highlight: 'Clear, structured documentation ready for developer ingestion.',
    },
    {
      title: 'RAG Knowledge Base & Query Engine',
      category: 'AI / Machine Learning',
      deliverable: 'Embeddings pipeline, vector store indexing, and conversational interface for internal company manuals.',
      highlight: 'Accurate citation retrieval with customizable prompt boundaries.',
    },
  ]

  const sampleFeedback = [
    {
      quote: "The ProPeak team delivered our frontend components with great attention to detail and responsiveness. Code was clean, modular, and easy to maintain.",
      author: "Early Stage Startup Founder",
      role: "Web & AI Project Client",
    },
    {
      quote: "Getting our capstone architecture reviewed by ProPeak gave us the confidence and technical clarity to complete our prototype ahead of schedule.",
      author: "Final Year Engineering Student",
      role: "Technical Mentorship Candidate",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#F0FDF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
            <span>Demonstrated Quality</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#052E20] tracking-tight">
            Sample Outcomes & Client Experiences
          </h2>

          <p className="text-base sm:text-lg text-[#527A68]">
            Here is what typical project execution and client collaborations look like with the ProPeak managed network.
          </p>
        </div>

        {/* 3 Case Study Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {sampleCaseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10A87A] bg-[#F0FDF8] px-2.5 py-1 rounded-md border border-[#D1FAE5] inline-block mb-3">
                  {study.category}
                </span>

                <h3 className="text-lg font-bold text-[#052E20] mb-2 leading-snug">
                  {study.title}
                </h3>

                <p className="text-sm text-[#527A68] leading-relaxed mb-4">
                  {study.deliverable}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-xs font-semibold text-[#0D7A58] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10A87A] shrink-0 mt-0.5" />
                <span>{study.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sample Testimonial / Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sampleFeedback.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-[#D1FAE5] shadow-xs relative"
            >
              <div className="flex items-center space-x-1 text-[#84CC16] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-[#10A87A]/20 mb-2" />

              <blockquote className="text-base sm:text-lg text-[#052E20] leading-relaxed italic mb-6">
                "{item.quote}"
              </blockquote>

              <div className="pt-4 border-t border-[#D1FAE5]/60 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#052E20]">{item.author}</p>
                  <p className="text-xs text-[#527A68] font-medium">{item.role}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#0D7A58] bg-[#F0FDF8] px-2 py-1 rounded-md border border-[#D1FAE5]">
                  Sample Feedback
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SampleOutcomes
