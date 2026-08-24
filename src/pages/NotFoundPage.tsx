import React from 'react'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/ui/SeoHead'
import { ArrowRight, Home, Compass, Sparkles } from 'lucide-react'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="404 - Page Not Found"
        description="The page you are looking for does not exist. Explore ProPeak digital services or return home."
        canonicalPath="/404"
      />

      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#F0FDF8]">
        <div className="max-w-md w-full text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs font-bold text-[#0D7A58] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
            <span>Error 404</span>
          </div>

          <h1 className="text-7xl sm:text-8xl font-black text-[#0A4F3A] tracking-tight font-mono">
            404
          </h1>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#052E20]">Page Not Found</h2>
            <p className="text-sm text-[#527A68]">
              The page you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white text-sm font-bold shadow-sm transition-all active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F7FEE7] border border-[#D1FAE5] text-[#052E20] text-sm font-semibold transition-all"
            >
              <Compass className="w-4 h-4 text-[#10A87A]" />
              <span>Explore Services</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default NotFoundPage
