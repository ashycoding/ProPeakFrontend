import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position to enhance frosted glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/#how-it-works" },
    { name: "Our Work", path: "/#showcase" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass-navbar shadow-sm shadow-brand-950/5 py-2.5"
          : "bg-[#F0FDF8]/90 backdrop-blur-md py-3.5 border-b border-border-theme/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg p-1"
            aria-label="ProPeak Home"
          >
            <img
              src="/assets/logo/logo.png"
              alt="ProPeak Logo"
              className="h-14 sm:h-10 md:h-14  w-auto object-contain transition-transform duration-200 hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = "none";
                const fallback = document.getElementById(
                  "navbar-logo-fallback",
                );
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              id="navbar-logo-fallback"
              className="hidden items-center gap-1.5 font-bold text-2xl tracking-tight text-brand-950"
            >
              <span className="w-8 h-8 rounded-lg bg-brand-800 text-white flex items-center justify-center text-lg font-black">
                P
              </span>
              <span>
                Pro<span className="text-brand-600">Peak</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isAnchor = item.path.includes("#");
              const isActive = !isAnchor && location.pathname === item.path;

              return isAnchor ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-3.5 py-2 text-base font-semibold text-text-secondary hover:text-brand-950 hover:bg-brand-200/30 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3.5 py-2 text-base font-semibold rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-brand-950 bg-brand-200/40 font-bold"
                      : "text-text-secondary hover:text-brand-950 hover:bg-brand-200/30"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-brand-950 hover:text-brand-800 transition-colors"
              title="Direct Email Enquiry"
            >
              <Mail className="w-4 h-4 text-brand-800" />
              <span>Email Us</span>
            </a>

            <Link
              to="/start-project"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-brand-800 hover:bg-brand-950 text-white shadow-md shadow-brand-950/10 hover:shadow-lg transition-all duration-200 group active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/start-project"
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-brand-800 text-white shadow-sm"
            >
              Start Project
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-text-primary hover:bg-brand-200/40 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-950/40 backdrop-blur-sm z-40 md:hidden top-[60px]"
            />

            {/* Slide-Down Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-50 md:hidden bg-bg-card border-b border-border-theme px-6 py-6 space-y-4 shadow-xl"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isAnchor = item.path.includes("#");
                  const isActive = !isAnchor && location.pathname === item.path;

                  return isAnchor ? (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-lg font-semibold text-text-primary hover:bg-bg-page rounded-xl transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 text-lg font-semibold rounded-xl transition-colors ${
                        isActive
                          ? "text-brand-950 bg-brand-200/50 font-bold"
                          : "text-text-primary hover:bg-bg-page"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-border-theme space-y-3">
                <Link
                  to="/start-project"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base font-bold text-white bg-brand-800 rounded-xl shadow-md active:scale-98 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-accent-lime" />
                  <span>Start a Project</span>
                </Link>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-base font-semibold text-brand-950 bg-bg-page border border-border-theme rounded-xl"
                >
                  <Mail className="w-4 h-4 text-brand-800" />
                  <span>Email: {siteConfig.email}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
