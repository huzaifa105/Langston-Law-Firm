import { useState, useEffect } from "react";
import { Scale, Phone, Menu, X, ChevronDown, Calendar } from "lucide-react";
import { FIRM_DETAILS } from "../data";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSelectedPracticeAreaId: (id: string | null) => void;
  setSelectedBlogSlug: (slug: string | null) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  setSelectedPracticeAreaId,
  setSelectedBlogSlug
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);

  // Monitor scroll height to add transparent/opaque frosting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (tab: string, practiceAreaId: string | null = null) => {
    setIsMobileMenuOpen(false);
    setIsPracticeDropdownOpen(false);
    setSelectedBlogSlug(null);
    if (practiceAreaId) {
      setSelectedPracticeAreaId(practiceAreaId);
      setActiveTab("practice-details");
    } else {
      setSelectedPracticeAreaId(null);
      setActiveTab(tab);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Firm" },
    { id: "attorneys", label: "Keith Langston, Esq." },
    { id: "practice-main", label: "Practice Areas" },
    { id: "results", label: "Case Results" },
    { id: "testimonials", label: "Client Voice" },
    { id: "faq", label: "FAQ" },
    { id: "blog", label: "Legal Blog" },
  ];

  return (
    <>
      {/* Top Banner Bar - Contact Intake */}
      <div id="top-announcement-bar" className="bg-navy-950 text-white/90 text-xs py-2 px-4 shadow-sm z-50 relative border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-light">
            <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span>Experienced Trial Attorney Serving Longview & All of Texas</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-gold-400">Confidential Case Intake Available 24/7</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="flex items-center gap-1 text-gold-400 font-semibold hover:text-gold-300 transition duration-150 group"
              id="top-phone-cta"
            >
              <Phone size={13} className="group-hover:scale-110 transition-transform" />
              <span>{FIRM_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Premium Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-xl py-3 border-b border-gold-500/20"
            : "bg-navy-900 py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigateTo("home")}
              id="brand-logo"
            >
              <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded shadow-md border border-gold-500/30">
                <Scale className="text-navy-950" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-lg sm:text-xl font-bold uppercase text-white group-hover:text-gold-400 transition-colors">
                  LANGSTON
                </span>
                <span className="text-[9px] uppercase tracking-[0.45em] text-gold-400 font-bold -mt-1 font-mono">
                  Law Firm
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm" id="desktop-nav">
              {navLinks.map((link) => {
                if (link.id === "practice-main") {
                  return (
                    <div
                      key={link.id}
                      className="relative"
                      onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                      onMouseLeave={() => setIsPracticeDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 font-medium px-3 py-2 rounded transition-colors text-white hover:text-gold-400 focus:outline-none ${
                          activeTab === "practice-main" || activeTab === "practice-details"
                            ? "text-gold-400 border-b-2 border-gold-500 rounded-b-none"
                            : ""
                        }`}
                        onClick={() => navigateTo("practice-main")}
                      >
                        Practice Areas
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isPracticeDropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Premium Dropdown menu for individual practices */}
                      {isPracticeDropdownOpen && (
                        <div className="absolute left-0 mt-0 w-64 bg-navy-900 border border-gold-500/30 rounded-md shadow-2xl py-2 overflow-hidden animate-fadeIn">
                          <div className="px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-gold-500/80 border-b border-white/5">
                            Specific Focuses
                          </div>
                          <button
                            onClick={() => navigateTo("practice-details", "personal-injury")}
                            className="w-full text-left px-4 py-2.5 text-xs text-white/90 hover:bg-gold-500 hover:text-navy-950 transition duration-150"
                          >
                            Personal Injury Law
                          </button>
                          <button
                            onClick={() => navigateTo("practice-details", "class-action")}
                            className="w-full text-left px-4 py-2.5 text-xs text-white/90 hover:bg-gold-500 hover:text-navy-950 transition duration-150"
                          >
                            Class Action & Mass Torts
                          </button>
                          <button
                            onClick={() => navigateTo("practice-details", "environmental-litigation")}
                            className="w-full text-left px-4 py-2.5 text-xs text-white/90 hover:bg-gold-500 hover:text-navy-950 transition duration-150"
                          >
                            Environmental Litigation
                          </button>
                          <button
                            onClick={() => navigateTo("practice-details", "product-liability")}
                            className="w-full text-left px-4 py-2.5 text-xs text-white/90 hover:bg-gold-500 hover:text-navy-950 transition duration-150"
                          >
                            Product Liability Injury
                          </button>
                          <div className="border-t border-white/5 mt-1 pt-1 bg-navy-950/40">
                            <button
                              onClick={() => navigateTo("practice-main")}
                              className="w-full text-left px-4 py-2 text-xs font-semibold text-gold-400 hover:text-white transition duration-150"
                            >
                              Explore Main Index &rarr;
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`font-medium px-3 py-2 rounded transition-all duration-200 cursor-pointer ${
                      activeTab === link.id
                        ? "text-gold-400 bg-white/5 shadow-inner"
                        : "text-white/80 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Global CTA Action Button */}
            <div className="hidden sm:block">
              <button
                onClick={() => navigateTo("contact")}
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 text-xs uppercase font-mono tracking-wider font-bold py-2.5 px-5 rounded shadow-lg hover:shadow-gold-500/10 transition-all duration-150 flex items-center gap-2 border border-gold-400/30"
                id="header-consultation-btn"
              >
                <Calendar size={14} />
                <span>Book Free Consult</span>
              </button>
            </div>

            {/* Mobile Hamburger toggle button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white/80 hover:text-gold-400 focus:outline-none p-2"
                id="mobile-menu-btn"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen Panel Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-t border-white/10 shadow-2xl animate-slideDown" id="mobile-nav-panel">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                if (link.id === "practice-main") {
                  return (
                    <div key={link.id} className="space-y-1">
                      <div className="text-[10px] font-mono tracking-widest text-gold-500/80 px-3 uppercase mt-2">
                        Practice Specializations
                      </div>
                      <button
                        onClick={() => navigateTo("practice-main")}
                        className={`w-full text-left px-3 py-2 rounded text-sm font-semibold ${
                          activeTab === "practice-main" ? "text-gold-400 bg-white/5" : "text-white"
                        }`}
                      >
                        All Practice Areas Overview
                      </button>
                      <div className="pl-4 border-l border-gold-400/20 space-y-1 ml-3">
                        <button
                          onClick={() => navigateTo("practice-details", "personal-injury")}
                          className="w-full text-left py-1 text-xs text-white/70 hover:text-gold-400"
                        >
                          Personal Injury Law
                        </button>
                        <button
                          onClick={() => navigateTo("practice-details", "class-action")}
                          className="w-full text-left py-1 text-xs text-white/70 hover:text-gold-400"
                        >
                          Class Action & Mass Torts
                        </button>
                        <button
                          onClick={() => navigateTo("practice-details", "environmental-litigation")}
                          className="w-full text-left py-1 text-xs text-white/70 hover:text-gold-400"
                        >
                          Environmental Litigation
                        </button>
                        <button
                          onClick={() => navigateTo("practice-details", "product-liability")}
                          className="w-full text-left py-1 text-xs text-white/70 hover:text-gold-400"
                        >
                          Product Liability Injuries
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`block w-full text-left px-3 py-2 rounded text-sm font-semibold transition-all ${
                      activeTab === link.id
                        ? "text-gold-400 bg-white/5 border-l-2 border-gold-500"
                        : "text-white/85 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 py-3 rounded text-center text-xs font-bold uppercase tracking-wider font-mono shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  <span>Request Free Intake Visit</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
