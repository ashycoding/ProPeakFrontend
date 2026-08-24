import React from 'react'
import SeoHead from '@/components/ui/SeoHead'
import Hero from '@/components/landing/Hero'
import ServicesTicker from '@/components/landing/ServicesTicker'
import ServicesSection from '@/components/landing/ServicesSection'
import HowItWorks from '@/components/landing/HowItWorks'
import WhyProPeak from '@/components/landing/WhyProPeak'
import WorkShowcase from '@/components/landing/WorkShowcase'
import TechStack from '@/components/landing/TechStack'
import FoundersSection from '@/components/landing/FoundersSection'
import SampleOutcomes from '@/components/landing/SampleOutcomes'
import FaqSection from '@/components/landing/FaqSection'
import CtaSection from '@/components/landing/CtaSection'

export const LandingPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="ProPeak | Build Skills. Earn Money. Create Impact."
        description="ProPeak connects businesses with skilled talent for websites, AI solutions, data, video, content, and digital projects."
        canonicalPath="/"
      />

      <div className="relative min-h-screen">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Horizontal Infinite Services Ticker */}
        <ServicesTicker />

        {/* 3. Core Services Grid (9 services) */}
        <ServicesSection />

        {/* 4. 4-Step Managed Execution Flow */}
        <HowItWorks />

        {/* 5. The ProPeak Difference / Why ProPeak */}
        <WhyProPeak />

        {/* 6. Work & Capability Showcase */}
        <WorkShowcase />

        {/* 7. Technology Stack */}
        <TechStack />

        {/* 8. Meet The Builders (Founders & Leadership) */}
        <FoundersSection />

        {/* 9. Sample Outcomes & Client Feedback */}
        <SampleOutcomes />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Final Call To Action */}
        <CtaSection />
      </div>
    </>
  )
}

export default LandingPage
