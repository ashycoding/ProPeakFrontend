import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Instagram,
  Github,
  Youtube,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const isNotFoundPage =
    pathname !== "/" &&
    ![
      "/services",
      "/about",
      "/contact",
      "/start-project",
      "/privacy",
      "/terms",
    ].includes(pathname) &&
    !pathname.startsWith("/services/");

  return (
    <footer className="bg-brand-950 text-white border-t border-brand-800/40 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-teal/10 rounded-full blur-[100px] pointer-events-none" />

      {pathname !== "/" &&
        pathname !== "/services" &&
        !pathname.startsWith("/services/") &&
        !isNotFoundPage && (
          <div className="border-b border-brand-800/40 py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="space-y-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-xs font-bold text-accent-lime uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Start Building Today
                  </div>
                  <h3 className="font-gerbil font-light text-2xl sm:text-3xl tracking-tight">
                    Have a project or talent requirement?
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 max-w-xl h-auto">
                    Tell us what you need. Our team reviews your requirements
                    and coordinates high-caliber execution.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/start-project"
                    className="px-6 py-3 text-sm sm:text-base font-bold rounded-xl bg-accent-lime text-brand-950 hover:bg-accent-lime/90 transition-all shadow-lg active:scale-95 flex items-center gap-2 group"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="px-5 py-3 text-sm sm:text-base font-semibold rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-brand-400" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Main Multi-Column Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Col 1 & 2: Brand Information */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/assets/logo/logo.png"
                alt="ProPeak Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-2xl font-black tracking-tight text-white">
                Pro<span className="text-brand-400">Peak</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed pr-4">
              A student-driven digital services company and managed talent
              network delivering production-grade web apps, AI systems, mobile
              apps, media, and technical consulting.
            </p>
            <div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
            <div>
              <a
                href={`https://wa.me/91${siteConfig.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp us at ${siteConfig.phone}`}
                className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Social Media Links (Only rendered when URL exists) */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-white/10 hover:bg-brand-600/30 text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg bg-white/10 hover:bg-brand-600/30 text-white/80 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.github && (
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-white/10 hover:bg-brand-600/30 text-white/80 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.youtube && (
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 rounded-lg bg-white/10 hover:bg-brand-600/30 text-white/80 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socialLinks.whatsapp && (
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2 rounded-lg bg-white/10 hover:bg-brand-600/30 text-white/80 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-brand-400">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {siteConfig.footerLinks.services.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-brand-400 hover:text-white font-semibold flex items-center gap-1 pt-1"
                >
                  View All (9) &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: For Businesses */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-brand-400">
              For Businesses
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {siteConfig.footerLinks.forBusinesses.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith("/#") ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: For Students */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-brand-400">
              For Students
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {siteConfig.footerLinks.forStudents.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-brand-400">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {siteConfig.footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {siteConfig.footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="border-t border-brand-800/40 py-6 relative z-10 text-xs text-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} ProPeak. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
