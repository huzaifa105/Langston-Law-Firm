import { Scale, Phone, MapPin, Mail, Award, Clock } from "lucide-react";
import { FIRM_DETAILS, PRACTICE_AREAS } from "../data";

interface FooterProps {
  setActiveTab: (tab: string) => void;
  setSelectedPracticeAreaId: (id: string | null) => void;
}

export default function Footer({ setActiveTab, setSelectedPracticeAreaId }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navigateToTab = (tabId: string, practiceAreaId: string | null = null) => {
    if (practiceAreaId) {
      setSelectedPracticeAreaId(practiceAreaId);
      setActiveTab("practice-details");
    } else {
      setSelectedPracticeAreaId(null);
      setActiveTab(tabId);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-navy-950 text-white pt-16 pb-8 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" id="footer-grid">
          {/* Corporate brand summary Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateToTab("home")}>
              <div className="p-1.5 bg-gradient-to-br from-gold-400 to-gold-600 rounded shadow">
                <Scale className="text-navy-950" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-base font-bold uppercase text-white">
                  LANGSTON
                </span>
                <span className="text-[7.5px] uppercase tracking-[0.45em] text-gold-400 font-bold -mt-1 font-mono">
                  Law Firm
                </span>
              </div>
            </div>
            
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Veteran legal expertise specializing in High-Stakes Personal Injury litigation, 
              Complex Mass Torts, Environmental Contaminations, and Defective Product Liability. 
              Standing up to multi-billion dollar companies for over two decades.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-gold-400 font-mono">
                <Award size={14} />
                <span>Selected to Rising Stars (2009–2012)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gold-400 font-mono">
                <Clock size={14} />
                <span>Admitted in Texas since 2001</span>
              </div>
            </div>
          </div>

          {/* Core Practice Navigation Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-gold-400 uppercase border-b border-white/10 pb-2">
              Practice Specialties
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              {PRACTICE_AREAS.map((pa) => (
                <li key={pa.id}>
                  <button
                    onClick={() => navigateToTab("practice-details", pa.id)}
                    className="hover:text-gold-400 transition-colors duration-150 text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full scale-0 group-hover:scale-100 transition-all"></span>
                    <span>{pa.title}</span>
                  </button>
                </li>
              ))}
              <div className="pt-1.5 border-t border-white/5">
                <li>
                  <button
                    onClick={() => navigateToTab("practice-main")}
                    className="text-xs text-gold-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>All Practice Overview &rarr;</span>
                  </button>
                </li>
              </div>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-gold-400 uppercase border-b border-white/10 pb-2">
              Helpful Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <button onClick={() => navigateToTab("about")} className="hover:text-gold-400 transition-colors">
                  Our History & Values
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab("attorneys")} className="hover:text-gold-400 transition-colors">
                  Meet Keith L. Langston, Esq.
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab("results")} className="hover:text-gold-400 transition-colors">
                  Case Success Sheets
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab("testimonials")} className="hover:text-gold-400 transition-colors">
                  What Clients Say
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab("faq")} className="hover:text-gold-400 transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab("blog")} className="hover:text-gold-400 transition-colors">
                  Legal Resource Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Physical Address / Local SEO Contact Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-gold-400 uppercase border-b border-white/10 pb-2">
              Longview Office HQ
            </h3>
            <div className="space-y-3.5 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white/90">
                  {FIRM_DETAILS.location}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold-500 shrink-0" />
                <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="hover:text-gold-400 transition-colors font-semibold">
                  {FIRM_DETAILS.phone} (Main Line)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold-500 shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-gold-400 transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </div>
              <div className="pt-2 border-t border-white/5 bg-navy-950/40 p-2 rounded text-[11px] leading-relaxed text-white/60">
                <span className="font-bold text-gold-400 block mb-0.5">Disclaimer Note:</span>
                The info on this Texas law firm website is strictly for general guidance. It is not formal legal advice.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50" id="footer-bottom">
          <p>
            &copy; {currentYear} {FIRM_DETAILS.name}. All Rights Reserved. Not a certified specialist under the Texas Board of Legal Specialization.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gold-400">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-gold-400">Disclaimers</a>
            <span>•</span>
            <span className="text-gold-400 font-mono">
              Developed by <span className="underline hover:text-white transition-colors">Serwizen.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
