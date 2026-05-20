import { Star, Quote, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import { TESTIMONIALS, FIRM_DETAILS } from "../data";

interface TestimonialsViewProps {
  setActiveTab: (tab: string) => void;
}

export default function TestimonialsView({ setActiveTab }: TestimonialsViewProps) {
  
  const handleConsultationClick = () => {
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="testimonials-view-container" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Client Verification</div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">The Voice of Our Clients</h1>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2"></div>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            There is no greater honor than helping an injured neighbor recover their dignity and financial stability following a catastrophic event. Here are their verified stories:
          </p>
        </div>

        {/* Feature/Intro section block */}
        <div className="bg-white rounded-2xl border border-gold-500/10 p-8 sm:p-12 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4 select-none">
              <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-500">
                <Quote size={32} />
              </div>
              <h2 className="font-serif text-2xl font-bold text-navy-950 leading-tight">Representing with Heart and Integrity</h2>
              <div className="w-12 h-0.5 bg-gold-400"></div>
              <p className="text-xs text-slate-500 font-light leading-relaxed">We are deeply committed to ensuring you feel supported at every step of your recovery, giving you direct cell access to Keith Langston and our senior team.</p>
            </div>
            
            <div className="lg:col-span-8 p-6 bg-gradient-to-r from-navy-900 to-navy-950 text-white rounded-xl space-y-4 border border-gold-500/20 shadow-md">
              <div className="flex items-center gap-1.5 text-gold-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm italic font-light leading-relaxed text-white/90">
                "Keith L. Langston and his staff didn't just win my toxic land spill case; they restored my peace of mind. They sat down with my father and answered every chemical toxicology report in plain language. They handled all filings while we focus on soil restoration. Absolute first-class professional counsel!"
              </p>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-serif text-gold-400 font-bold block">— Harold T., Gregg County Agriculturalist</span>
                <span className="text-white/40 text-[10px]">Case Type: Environmental Contaminations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimony Grid Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="testimonials-main-grid">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-gold-500/10 p-8 shadow-md relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Star header rating rating */}
              <div className="flex items-center gap-1.5 text-gold-500 mb-4 select-none">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>

              {/* Speech narrative content */}
              <p className="text-xs text-slate-600 italic leading-relaxed font-light mb-6">
                "{t.text}"
              </p>

              {/* Client Profile details */}
              <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs font-mono">
                <div>
                  <h4 className="font-serif text-sm font-bold text-navy-950 block">{t.clientName}</h4>
                  <span className="text-slate-400 text-[10px]">{t.location}</span>
                </div>
                <span className="inline-block text-[9px] font-mono text-gold-600 font-bold bg-gold-400/5 border border-gold-400/10 rounded px-2.5 py-1 text-center self-start sm:self-auto">
                  {t.caseType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client-First Guarantee Banner */}
        <div className="bg-navy-900 text-white rounded-xl p-8 sm:p-12 border border-gold-500/20 shadow-xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mx-auto">
            <HeartHandshake size={24} />
          </div>
          <h2 className="text-2xl font-serif text-gold-400 font-bold">The Langston "Direct Access" Guarantee</h2>
          <p className="text-white/80 font-light text-xs max-w-2xl mx-auto leading-relaxed">
            Unlike massive automated firms in Houston or Dallas, Keith Langston does not believe in passing you around. You will always have direct visual review lines, direct intake access, and phone callbacks scheduled with Keith himself.
          </p>
          <div className="pt-2">
            <button
              onClick={handleConsultationClick}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-mono font-bold uppercase text-xs tracking-wider py-3.5 px-8 rounded shadow flex items-center gap-1.5 mx-auto"
            >
              <span>Schedule My Direct Callback Intake Review</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
