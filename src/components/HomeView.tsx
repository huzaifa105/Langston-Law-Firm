import { ArrowRight, Scale, ShieldCheck, Award, ThumbsUp, Calendar, Phone, MapPin, Star, HelpCircle, FileText } from "lucide-react";
import { FIRM_DETAILS, ATTORNEY_KEITH, PRACTICE_AREAS, CASE_RESULTS, TESTIMONIALS, FAQS, BLOG_ARTICLES } from "../data";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedPracticeAreaId: (id: string | null) => void;
  setSelectedBlogSlug: (slug: string | null) => void;
}

export default function HomeView({
  setActiveTab,
  setSelectedPracticeAreaId,
  setSelectedBlogSlug
}: HomeViewProps) {
  
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

  const handleReadArticle = (slug: string) => {
    setSelectedBlogSlug(slug);
    setActiveTab("blog-details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="home-view-container">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative bg-navy-950 text-white pt-24 pb-32 overflow-hidden border-b border-slate-800"
      >
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bento-pattern opacity-60" />
        
        {/* Ambient gradient highlights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Copy copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141E33]/60 border border-slate-700/50 rounded-full text-gold-400 text-[11px] font-mono uppercase tracking-wider shadow-inner">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Active Trial Counsel • Texan Specialization</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.1] text-white">
                Justice for the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
                  Injured
                </span>{" "}
                and Wronged.
              </h1>
              
              <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                Keith L. Langston represents victims of corporate negligence and environmental hazards with over 20 years of aggressive courtroom advocacy across Texas. We fight to secure the major multi-million dollar settlements our neighbors deserve.
              </p>

              {/* Trust Metric Badge grid */}
              <div className="grid grid-cols-3 gap-6 pt-5 pb-3 border-y border-slate-800">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#B89150] tracking-tight">20+</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider">Years Active</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#B89150] tracking-tight">Baylor Law</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider">School of Law J.D.</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#B89150] tracking-tight">2001</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono uppercase tracking-wider">Texas Bar Admission</div>
                </div>
              </div>

              {/* Action consultation triggers */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigateToTab("contact")}
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded font-mono font-bold uppercase tracking-wider text-xs shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Evaluate My Case Online</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href={`tel:${FIRM_DETAILS.phoneRaw}`}
                  className="border border-slate-700 hover:border-gold-400 bg-white/5 hover:bg-white/10 px-8 py-4 rounded font-mono font-bold uppercase tracking-wider text-xs text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Phone size={14} className="text-gold-400" />
                  <span>Call {FIRM_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column High-Res visuals */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-slate-800 p-2.5 rounded-xl shadow-2xl bg-[#141E33]">
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-navy-950/80 backdrop-blur border border-slate-800 flex items-center justify-center text-[#B89150] font-bold font-serif shadow">L</div>
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
                  alt="US Courtroom Scales of Justice representing trustworthy trial experience"
                  className="w-full object-cover rounded shadow h-[400px]"
                  id="hero-image"
                />
              </div>
              
              {/* Floating super lawyer credential pill */}
              <div className="absolute -bottom-6 -left-6 bg-[#1B263B] border border-slate-800 p-3.5 rounded-lg shadow-2xl flex items-center gap-3 max-w-[280px]">
                <div className="p-2.5 bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 rounded shadow-inner">
                  <Scale size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-serif">Keith L. Langston</h4>
                  <p className="text-[10px] text-gold-400 font-mono">Rising Stars Select (2009-2012)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & BADGES STRIP */}
      <section className="py-12 bg-navy-950 border-b border-slate-800" id="stats-ribbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-center md:text-left" id="stats-grid">
            
            <div className="md:col-span-3 p-6 bento-stat-gold rounded-xl flex flex-col justify-center text-navy-950 shadow-lg relative overflow-hidden group select-none">
              <div className="absolute -right-4 -bottom-4 text-7xl font-bold opacity-10 font-serif">$</div>
              <span className="text-4xl font-extrabold tracking-tight">$Millions</span>
              <span className="text-[11px] font-mono uppercase tracking-[0.1em] mt-2 font-bold opacity-85">Recovered for Plaintiffs</span>
            </div>

            <div className="md:col-span-3 p-6 bg-[#141E33] border border-slate-800/60 rounded-xl flex flex-col justify-center text-white bento-glow-card group">
              <span className="text-4xl font-serif font-extrabold text-[#B89150] tracking-tight">2001</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider mt-2">Texas Bar Admittance</span>
            </div>

            <div className="md:col-span-3 p-6 bg-[#1B263B] border border-slate-800/60 rounded-xl flex flex-col justify-center text-white bento-glow-card group">
              <span className="text-4xl font-serif font-extrabold text-[#B89150] tracking-tight">Baylor J.D.</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider mt-2">Elite Trial Training</span>
            </div>

            <div className="md:col-span-3 p-6 bg-[#141E33] border border-slate-800/60 rounded-xl flex flex-col justify-center text-white bento-glow-card group">
              <span className="text-4xl font-serif font-extrabold text-[#B89150] tracking-tight">100% Free</span>
              <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider mt-2">Initial Case Audit Reviews</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="py-20 bg-cream-100" id="firm-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800"
                alt="Two business colleagues signing important contracts representing ethical trust"
                className="w-full h-[450px] object-cover rounded-lg shadow-2xl border-b-8 border-gold-500"
              />
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-bold text-gold-600 uppercase tracking-widest">
                Our Legal Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight">
                An Unwavering Commitment to Injured Neighbors and Fair Corporations
              </h2>
              <div className="w-20 h-1 bg-gold-500"></div>
              
              <p className="text-slate-700 leading-relaxed font-light text-base">
                For over twenty years, <strong>Langston Law Firm</strong> has fought as a powerful guardian for everyday individuals in Longview, Tyler, East Texas, and across the nation. We know that when an oil refinery explodes, a big rig crashes, or a bad surgical mesh deteriorates, corporations deploy legions of expensive attorneys to evade their financial debts.
              </p>
              
              <p className="text-slate-700 leading-relaxed font-light text-base">
                Our philosophy is straightforward: <strong>Aggressive litigation, uncompromising focus, and deep personalized attention.</strong> We do not treat you like an anonymous insurance claim. As a graduate of the trial-heavy Baylor Law School system, Attorney Keith L. Langston prepares every case for the absolute rigor of a courtroom jury, which represents the only way to demand genuine, premium settlements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="text-gold-500 shrink-0" size={20} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy-950">No Fee Unless We Win</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ThumbsUp className="text-gold-500 shrink-0" size={20} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy-950">Intimate Individualized Intake</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateToTab("about")}
                  className="font-mono font-bold uppercase tracking-wider text-xs text-gold-600 hover:text-gold-500 flex items-center gap-2"
                >
                  <span>Read Full History & Core Mission</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS CARDS OVERVIEW */}
      <section className="py-24 bg-navy-950 text-white relative border-y border-slate-800" id="practices-stripe">
        <div className="absolute inset-0 bento-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-block text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold bg-white/5 px-2.5 py-1 rounded">
              Areas of Deep Specialization
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight">
              Honorable Legal Advocacy for Catastrophic Loss
            </h2>
            <p className="text-slate-400 font-light text-sm">
              Attorney Keith L. Langston focuses strictly on high-severity, high-impact categories of personal injury and corporate liability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="practices-cards-grid">
            {PRACTICE_AREAS.map((pa) => (
              <div
                key={pa.id}
                className="bg-[#141E33] border border-slate-800/80 rounded-xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group cursor-pointer bento-glow-card relative overflow-hidden"
                onClick={() => navigateToTab("practice-details", pa.id)}
              >
                <div className="absolute inset-0 bento-pattern opacity-10 pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-md bg-gold-400/10 flex items-center justify-center border border-gold-400/20 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                    <Scale size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors">
                    {pa.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-4 font-light leading-relaxed">
                    {pa.shortDesc}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono font-semibold text-gold-400 uppercase tracking-wider relative z-10 select-none">
                  <span>Explore Cases</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 relative z-10">
            <button
              onClick={() => navigateToTab("practice-main")}
              className="bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl font-mono font-bold uppercase tracking-wider text-xs text-gold-400 border border-slate-800 hover:border-gold-500/50 transition-all shadow-md cursor-pointer"
            >
              Analyze Main Practice Area Indexes &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 5. ATTORNEY SPOTLIGHT SECTION */}
      <section className="py-20 bg-navy-950" id="attorney-spotlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141E33] rounded-2xl border border-slate-800 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bento-pattern opacity-20 pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Foto column */}
              <div className="lg:col-span-12 xl:col-span-5 space-y-4">
                <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-navy-950">
                  <img
                    src={ATTORNEY_KEITH.imageUrl}
                    alt="Attorney Keith L. Langston representing professional attorney portrait in office environment"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent p-6 text-white text-center">
                    <h3 className="font-serif text-xl font-bold">{ATTORNEY_KEITH.name}</h3>
                    <p className="text-xs text-gold-400 font-mono uppercase tracking-wider">Founding Attorney, admitted 2001</p>
                  </div>
                </div>
              </div>

              {/* Text info column column */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-400/10 border border-gold-400/30 rounded-full text-gold-400 text-[10px] font-mono uppercase tracking-wider">
                  <Award size={12} className="text-gold-500" />
                  <span>Primary Trial Counsel Spotlight</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
                  Meet Attorney Keith L. Langston
                </h2>
                <p className="text-slate-300 leading-relaxed font-light text-sm">
                  {ATTORNEY_KEITH.bioParagraphs[0]}
                </p>
                <p className="text-slate-300 leading-relaxed font-light text-sm">
                  {ATTORNEY_KEITH.bioParagraphs[1]}
                </p>

                {/* Accomplishments checklist cards */}
                <div className="space-y-2 pt-2 pb-4">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Education & Laurels:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2 font-light">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></div>
                      <span>Baylor School of Law (J.D., 2001)</span>
                    </li>
                    <li className="flex items-center gap-2 font-light">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></div>
                      <span>Selected to Rising Stars (2009–2012)</span>
                    </li>
                    <li className="flex items-center gap-2 font-light">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></div>
                      <span>Admitted to Practice in Texas since 2001</span>
                    </li>
                    <li className="flex items-center gap-2 font-light">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></div>
                      <span>Multi-Million Dollar Advocates</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => navigateToTab("attorneys")}
                    className="bg-navy-950 hover:bg-navy-900 text-white min-w-[200px] px-6 py-3.5 rounded-xl border border-slate-800 font-mono font-semibold uppercase tracking-wider text-xs shadow-md transition-all text-center cursor-pointer"
                  >
                    View Comprehensive Bio & Credentials
                  </button>
                  <button
                    onClick={() => navigateToTab("contact")}
                    className="border border-gold-500 hover:bg-gold-500/10 text-gold-400 px-6 py-3.5 rounded-xl font-mono font-semibold uppercase tracking-wider text-xs transition-colors text-center cursor-pointer"
                  >
                    Book Private intake with Keith
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERDICTS & SETTLEMENTS GRID */}
      <section className="py-20 bg-navy-950 border-b border-slate-800 relative" id="case-success-strip">
        <div className="absolute inset-0 bento-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold mb-2">
                Documented Results
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
                Selected Historic Case Recoveries
              </h2>
            </div>
            <div>
              <button
                onClick={() => navigateToTab("results")}
                className="font-mono font-bold uppercase tracking-wider text-xs text-gold-400 hover:text-white flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Browse Full Success Ledger</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="home-results-deck">
            {CASE_RESULTS.slice(0, 3).map((res) => (
              <div
                key={res.id}
                className="bg-[#141E33] border border-slate-800 rounded-xl p-6 shadow-md transition-all hover:shadow-xl hover:border-gold-500/40 relative overflow-hidden bento-glow-card"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
                <div className="space-y-3">
                  <div className="text-[10px] font-mono uppercase text-gold-400 bg-white/5 border border-slate-850 px-2 py-0.5 rounded inline-block">
                    {res.category}
                  </div>
                  <div className="text-3xl font-serif font-extrabold text-[#B89150] tracking-tight">
                    {res.amount}
                  </div>
                  <h3 className="font-serif text-base font-bold text-white">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {res.summary}
                  </p>
                  <div className="pt-2 text-[10px] text-slate-400 font-mono">
                    Jurisdiction: {res.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sincere Legal Disclaimer representation */}
          <p className="text-[10px] text-slate-400 text-center leading-relaxed max-w-2xl mx-auto mt-10 font-light/80">
            *Legal Representation Disclaimer: Financial recoveries shown above are representative and do not guarantee or predict identical future success. Every lawsuit carries distinct facts, liability profiles, and coverage parameters in Texas legal courts.
          </p>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-navy-950 border-b border-slate-800 relative" id="testimonials-strip">
        <div className="absolute inset-0 bento-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white gap-2">
              Testimonials: Our Clients' Sincere Accounts
            </h2>
            <div className="w-12 h-1 bg-gold-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="home-testimonials">
            {TESTIMONIALS.filter(t => t.isFeatured).map((t) => (
              <div
                key={t.id}
                className="bg-[#141E33] border border-slate-800 p-8 rounded-xl relative shadow-lg bento-glow-card"
              >
                <div className="flex items-center gap-1.5 text-gold-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm italic text-slate-300 leading-relaxed font-light mb-6">
                  "{t.text}"
                </p>
                <div className="flex justify-between items-center text-xs font-mono">
                  <div>
                    <span className="font-serif text-sm font-bold block text-gold-400">{t.clientName}</span>
                    <span className="text-slate-400 text-[10px]">{t.location}</span>
                  </div>
                  <span className="text-gold-400 uppercase tracking-widest text-[10px] bg-white/5 border border-slate-800 px-2 py-1 rounded">
                    {t.caseType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigateToTab("testimonials")}
              className="text-xs text-gold-400 font-mono font-semibold uppercase tracking-wider hover:text-white transition-all flex items-center gap-1.5 mx-auto cursor-pointer"
            >
              <span>Read All client verification statements</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. QUICK FAQ PREVIEW */}
      <section className="py-20 bg-navy-950 border-b border-slate-800 relative" id="faq-preview">
        <div className="absolute inset-0 bento-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left label card */}
            <div className="lg:col-span-5 bg-[#141E33] border border-slate-800 rounded-xl p-8 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-slate-800 rounded-full text-gold-450 text-[10px] font-mono uppercase tracking-wider">
                  <HelpCircle size={12} className="text-gold-500" />
                  <span>Immediate Legal Answers</span>
                </div>
                <h2 className="text-3xl font-serif font-extrabold text-white tracking-tight leading-snug">
                  Answering Common Texas Injury Inquiries
                </h2>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Making sense of legal terminology following an accident is overwhelming. We highlight simple answers to the questions our client intake division receives most.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => navigateToTab("faq")}
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-mono font-bold uppercase tracking-wider py-3 px-6 rounded-lg shadow-md transition-colors cursor-pointer w-full text-center"
                >
                  Explore Complete FAQ Index
                </button>
              </div>
            </div>

            {/* Accordion previews */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              {FAQS.slice(0, 3).map((faq) => (
                <div key={faq.id} className="bg-[#141E33] rounded-xl border border-slate-800 p-6 shadow-sm bento-glow-card flex-1 flex flex-col justify-center">
                  <h3 className="font-serif text-base font-bold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. BLOG RESOURCE STRIP */}
      <section className="py-20 bg-navy-950 border-b border-slate-800 relative" id="blog-strip">
        <div className="absolute inset-0 bento-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 max-w-xl mx-auto mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              Legal Education Resources
            </div>
            <h2 className="text-3xl font-serif font-extrabold text-white tracking-tight">
              Insights from Keith L. Langston, Esq.
            </h2>
            <div className="w-12 h-1 bg-gold-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="blog-preview-deck">
            {BLOG_ARTICLES.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className="bg-[#141E33] rounded-xl overflow-hidden border border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between bento-glow-card"
              >
                <div>
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover border-b border-slate-800"
                  />
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">{article.publishDate}</span>
                  <button
                    onClick={() => handleReadArticle(article.slug)}
                    className="text-gold-400 hover:text-white font-mono font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigateToTab("blog")}
              className="border border-slate-800 hover:border-gold-500 bg-[#141E33] text-gold-400 px-8 py-3.5 rounded-xl font-mono font-bold uppercase tracking-wider text-xs transition-all shadow-md cursor-pointer"
            >
              Browse Complete Legal Library Index
            </button>
          </div>
        </div>
      </section>

      {/* 10. PHYSICAL CONTACT & GOOGLE MAPS SECTION */}
      <section className="py-20 bg-navy-950 border-b border-slate-800 relative" id="office-map-strip">
        <div className="absolute inset-0 bento-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#141E33] rounded-xl border border-slate-800 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Information compartment */}
              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
                <div>
                  <div className="text-[10px] font-mono uppercase text-gold-400 font-bold mb-1">Office Headquarters</div>
                  <h3 className="text-2xl font-serif font-bold text-white">Longview TX Law Center</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gold-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Physical Intake Address</span>
                      <p className="text-slate-300">{FIRM_DETAILS.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="text-gold-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Telephone Hotline</span>
                      <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="text-gold-400 hover:text-white hover:underline font-semibold text-sm">
                        {FIRM_DETAILS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="text-gold-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Client Intake Hours</span>
                      <p className="text-slate-300">{FIRM_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-navy-950 text-white rounded-xl border border-slate-800 text-xs text-slate-300">
                  <h4 className="font-serif text-gold-400 font-bold mb-1">Immediate Case Consultation:</h4>
                  <p className="font-light text-slate-300 leading-relaxed mb-3">Our phone and online intake forms map details directly to Keith L. Langston within 5 minutes. No appointment is needed for initial callbacks.</p>
                  <button
                    onClick={() => navigateToTab("contact")}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 py-2.5 rounded-lg font-mono font-bold uppercase text-[10px] tracking-widest text-center transition-colors cursor-pointer"
                  >
                    Open Consultation intake Form &rarr;
                  </button>
                </div>
              </div>

              {/* Map compartment */}
              <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px]">
                <iframe
                  title="Langston Law Firm Longview Texas Physical Office Location Map Pinpoint"
                  src={FIRM_DETAILS.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
