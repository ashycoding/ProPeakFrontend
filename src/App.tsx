import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

// Layout Components
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Public Pages
import LandingPage from '@/pages/LandingPage'
import ServicesPage from '@/pages/ServicesPage'
import ServiceDetailPage from '@/pages/ServiceDetailPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import StartProjectPage from '@/pages/StartProjectPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import NotFoundPage from '@/pages/NotFoundPage'
import TestStatusPage from '@/pages/TestStatusPage'

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#F0FDF8] text-[#052E20]">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-project" element={<StartProjectPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/test" element={<TestStatusPage />} />
            <Route path="/test-status" element={<TestStatusPage />} />
            <Route path="/diagnostics" element={<TestStatusPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Multi-Column Rich Footer */}
        <Footer />

        {/* Global Toast Notifications */}
        <Toaster position="top-right" richColors expand={false} />
      </div>
    </Router>
  )
}

export default App
