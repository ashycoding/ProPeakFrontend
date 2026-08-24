import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Cpu, Play, BarChart3, Paintbrush, FileText, ShieldCheck, LucideIcon } from 'lucide-react'

interface OrbitServiceItem {
  id: string
  title: string
  icon: LucideIcon
  desc: string
  angle: number // Angle in degrees (0 to 360)
}

const serviceItems: OrbitServiceItem[] = [
  { id: 's1', title: 'Website Development', icon: Code, desc: 'Responsive Next.js, Vite React interfaces & custom frontend integrations.', angle: 0 },
  { id: 's2', title: 'AI & Machine Learning', icon: Cpu, desc: 'LLM fine-tuning, embeddings, agentic chatbot configurations & custom APIs.', angle: 40 },
  { id: 's3', title: 'Video Editing', icon: Play, desc: 'Short-form promotional reels, YouTube post-production, overlays & sound design.', angle: 80 },
  { id: 's4', title: 'Content Writing', icon: FileText, desc: 'Professional content writing services including blogs, articles, SEO content, website copywriting, technical documentation, and marketing content.', angle: 120 },
  { id: 's5', title: 'Final Year Projects', icon: FileText, desc: 'Premium engineering prototypes, architectural documentation & source walk-throughs.', angle: 160 },
  { id: 's6', title: 'Mobile Apps', icon: Play, desc: 'Cross-platform iOS and Android applications utilizing React Native & Expo.', angle: 200 },
  { id: 's7', title: 'Data Analytics', icon: BarChart3, desc: 'Data visualization, ETL pipelines, Python analysis & automated reports.', angle: 240 },
  { id: 's8', title: 'Graphic Design', icon: Paintbrush, desc: 'Brand guidelines, landing page structures, Figma asset packs & logo sets.', angle: 280 },
  { id: 's9', title: 'Technical Consulting', icon: ShieldCheck, desc: 'Software architecture reviews, database optimizations & deployment audits.', angle: 320 },
]

const getCoordinates = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180
  const x = 50 + radius * Math.cos(rad)
  const y = 50 + radius * Math.sin(rad)
  return { x, y }
}

export const ServicesOrbit: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const [logoSrc, setLogoSrc] = useState('/assets/logo/logo-orbit.jpg')

  // Automatically cycle through the active service index if not hovered
  useEffect(() => {
    if (hoveredIdx !== null) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % serviceItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [hoveredIdx])

  const currentActive = hoveredIdx !== null ? hoveredIdx : activeIdx
  const activeService = serviceItems[currentActive]

  const handleLogoLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (img.src.startsWith('data:')) return

    try {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      ctx.drawImage(img, 0, 0)
      
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imgData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        
        // If the pixel is close to white (RGB > 240), make it transparent
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0 // Alpha = 0
        }
      }
      
      ctx.putImageData(imgData, 0, 0)
      setLogoSrc(canvas.toDataURL('image/png'))
    } catch (err) {
      console.error('Failed to remove white background:', err)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Orbital Container */}
      <div className="relative w-full aspect-square max-w-[460px] sm:max-w-[540px] md:max-w-[620px]">
        {/* Glow backdrop effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-lime/10 to-accent-teal/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

        {/* SVG Orbit and Flow Paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <defs>
            {/* Glow Filter for Active Flow Line */}
            <filter id="glow-effect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Gradient for orbiting dash lines */}
            <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84cc16" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0d9488" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0.6" />
            </linearGradient>

            {/* Arrow Marker Definitions */}
            <marker
              id="orbit-arrow-lime"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#84cc16" fillOpacity="0.8" />
            </marker>

            <marker
              id="orbit-arrow-teal"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0d9488" fillOpacity="0.8" />
            </marker>
          </defs>

          {/* Outer Orbit Guide Ring */}
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.5" />

          {/* Inner Orbit Guide Ring */}
          <circle cx="50" cy="50" r="23" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="1,2" />

          {/* Clockwise rotating dashed outer ring */}
          <g className="animate-[spin_40s_linear_infinite] origin-center">
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="url(#orbitLineGrad)"
              strokeWidth="0.75"
              strokeDasharray="6, 12"
              strokeLinecap="round"
            />
          </g>

          {/* Counter-clockwise rotating inner dotted ring */}
          <g className="animate-[spin_25s_linear_infinite_reverse] origin-center">
            <circle
              cx="50"
              cy="50"
              r="23"
              fill="none"
              stroke="rgba(13, 148, 136, 0.25)"
              strokeWidth="0.75"
              strokeDasharray="3, 7"
              strokeLinecap="round"
            />
          </g>

          {/* Curved Flow Arrows wrapping around outer orbit */}
          <path
            d="M 82.3 31.4 A 38 38 0 0 1 82.3 68.6"
            fill="none"
            stroke="#84cc16"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            markerEnd="url(#orbit-arrow-lime)"
          />
          <path
            d="M 17.7 68.6 A 38 38 0 0 1 17.7 31.4"
            fill="none"
            stroke="#0d9488"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            markerEnd="url(#orbit-arrow-teal)"
          />

          {/* Animated Laser connection flow line connecting the selected node to center */}
          <AnimatePresence>
            {currentActive !== null && (() => {
              const coords = getCoordinates(serviceItems[currentActive].angle, 38)
              return (
                <motion.line
                  x1={coords.x}
                  y1={coords.y}
                  x2={50}
                  y2={50}
                  stroke="#84cc16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  filter="url(#glow-effect)"
                  initial={{ strokeDashoffset: 0, opacity: 0 }}
                  animate={{ strokeDashoffset: -20, opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    strokeDashoffset: { repeat: Infinity, ease: 'linear', duration: 1 },
                    opacity: { duration: 0.2 }
                  }}
                />
              )
            })()}
          </AnimatePresence>
        </svg>

        {/* Center Node: Pulsing ProPeak Logo */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div 
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-brand-950 border-2 border-white/10 flex items-center justify-center p-2.5 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-accent-lime/10 rounded-full blur-md animate-pulse" />
            <img
              src={logoSrc}
              alt="ProPeak Center Logo"
              className="w-12 h-12 sm:w-18 sm:h-18 object-contain relative z-10"
              onLoad={handleLogoLoad}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
                const fallback = document.getElementById('center-logo-text-fallback');
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span id="center-logo-text-fallback" className="hidden text-sm font-black text-white relative z-10 font-mono">
              P<span className="text-accent-lime">P</span>
            </span>
          </motion.div>
        </div>

        {/* Orbiting Service Node Buttons */}
        {serviceItems.map((item, idx) => {
          const coords = getCoordinates(item.angle, 38)
          const isActive = currentActive === idx
          const Icon = item.icon

          return (
            <div
              key={item.id}
              style={{
                left: `${coords.x}%`,
                top: `${coords.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <motion.button
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ scale: 1.15 }}
                className={`w-12 h-12 sm:w-15 sm:h-15 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-md relative ${
                  isActive
                    ? 'bg-accent-lime text-brand-950 border-accent-lime shadow-[0_0_20px_rgba(132,204,22,0.5)]'
                    : 'bg-white/5 text-text-darkMuted border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
                aria-label={item.title}
              >
                <Icon className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2]" />

                {/* Service mini-badge, visible when active */}
                <span className={`absolute -bottom-8 whitespace-nowrap text-xs font-bold tracking-wider px-2.5 py-0.5 rounded bg-brand-950 border border-white/10 text-white transition-opacity duration-200 pointer-events-none ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}>
                  {item.title.split(' ')[0]}
                </span>
              </motion.button>
            </div>
          )
        })}
      </div>

      {/* Active Service Description Card */}
      <div className="mt-8 text-center w-full max-w-[360px] sm:max-w-[420px] min-h-[106px] relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass-panel-dark rounded-2xl p-4 sm:p-5 border border-white/10 shadow-xl backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-lime" />
            <h4 className="text-base font-bold text-accent-lime uppercase tracking-widest">{activeService.title}</h4>
            <p className="text-sm sm:text-base text-text-darkMuted mt-2 leading-relaxed">{activeService.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
export default ServicesOrbit
