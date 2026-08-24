import React from 'react'
import { Link } from 'react-router-dom'
import SeoHead from '@/components/ui/SeoHead'
import { siteConfig } from '@/config/site'
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Github, 
  Youtube, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  CheckCircle2,
  Clock
} from 'lucide-react'

export const ContactPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Contact Us & Get In Touch"
        description="Contact the ProPeak engineering and business team for project inquiries, technical consulting, talent network collaborations, or general questions."
        canonicalPath="/contact"
      />

      <div className="min-h-screen py-12 sm:py-16 lg:py-24 bg-[#F0FDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D1FAE5] shadow-xs text-xs sm:text-sm font-bold text-[#0D7A58] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#10A87A]" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#052E20] tracking-tight">
              Let's Talk About Your Project
            </h1>

            <p className="text-base sm:text-lg text-[#527A68] leading-relaxed">
              Whether you have a concrete project requirement, need technical consulting, or want to explore talent collaborations, we are here to help.
            </p>
          </div>

          {/* Main 2-Column Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            
            {/* Left Col (6 cols): Direct Channels */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Primary Email Card */}
              <div className="p-8 rounded-3xl bg-white border border-[#D1FAE5] shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#0D7A58] flex items-center justify-center">
                  <Mail className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-2xl font-bold text-[#052E20]">Direct Email</h3>
                <p className="text-sm sm:text-base text-[#527A68]">
                  For general business inquiries, partnership discussions, or sending project briefs:
                </p>

                <div className="pt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold rounded-xl bg-[#0A4F3A] hover:bg-[#0D7A58] text-white shadow-sm transition-all active:scale-95 group"
                  >
                    <span>{siteConfig.email}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#527A68] pt-2">
                  <Clock className="w-4 h-4 text-[#10A87A]" />
                  <span>Typical response time: within 24 hours</span>
                </div>
              </div>

              {/* Social and Messaging Channels */}
              <div className="p-8 rounded-3xl bg-white border border-[#D1FAE5] shadow-xs space-y-4">
                <h3 className="text-xl font-bold text-[#052E20]">Social & Community Channels</h3>
                <p className="text-sm text-[#527A68]">
                  Connect with our team across professional platforms:
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {siteConfig.socialLinks.linkedin && (
                    <a
                      href={siteConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#052E20] hover:bg-[#0A4F3A] hover:text-white transition-all text-xs font-bold"
                    >
                      <Linkedin className="w-4 h-4 text-[#0D7A58]" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {siteConfig.socialLinks.whatsapp && (
                    <a
                      href={siteConfig.socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#052E20] hover:bg-[#0A4F3A] hover:text-white transition-all text-xs font-bold"
                    >
                      <MessageCircle className="w-4 h-4 text-[#10A87A]" />
                      <span>WhatsApp</span>
                    </a>
                  )}

                  {siteConfig.socialLinks.github && (
                    <a
                      href={siteConfig.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#052E20] hover:bg-[#0A4F3A] hover:text-white transition-all text-xs font-bold"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {siteConfig.socialLinks.instagram && (
                    <a
                      href={siteConfig.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#052E20] hover:bg-[#0A4F3A] hover:text-white transition-all text-xs font-bold"
                    >
                      <Instagram className="w-4 h-4 text-[#0D7A58]" />
                      <span>Instagram</span>
                    </a>
                  )}

                  {siteConfig.socialLinks.youtube && (
                    <a
                      href={siteConfig.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F0FDF8] border border-[#D1FAE5] text-[#052E20] hover:bg-[#0A4F3A] hover:text-white transition-all text-xs font-bold"
                    >
                      <Youtube className="w-4 h-4 text-[#0D7A58]" />
                      <span>YouTube</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* Right Col (6 cols): Project Intake Callout */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0A4F3A] text-white shadow-xl space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#7FFFD4] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>Project Intake</span>
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-tight">
                    Ready to Start a Specific Project?
                  </h3>

                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Submit your requirement via our dedicated project intake flow. We collect your scope, target timelines, and budget expectations to provide an accurate proposal.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      'Structured requirement intake review',
                      'Technical architecture assessment',
                      'Dedicated team assignment & milestone planning',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <Link
                    to="/start-project"
                    className="w-full py-4 px-6 rounded-xl bg-[#84CC16] text-[#0A4F3A] hover:bg-[#84CC16]/90 text-center font-bold text-base transition-all flex items-center justify-center gap-2 group shadow-md active:scale-98"
                  >
                    <span>Open Project Intake Form</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default ContactPage
