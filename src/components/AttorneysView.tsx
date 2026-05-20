import { Award, GraduationCap, Scale, ShieldCheck, Mail, Phone, Calendar, BookmarkCheck } from "lucide-react";
import { ATTORNEY_KEITH, FIRM_DETAILS } from "../data";

interface AttorneysViewProps {
  setActiveTab: (tab: string) => void;
}

export default function AttorneysView({ setActiveTab }: AttorneysViewProps) {
  
  const handleIntakeCTA = () => {
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="attorneys-view-container" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Primary Practitioner</div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">Meet Our Trial Attorney</h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-2"></div>
        </div>

        {/* Major Multi-Grid Card */}
        <div className="bg-white rounded-2xl border border-gold-500/10 shadow-2xl overflow-hidden mb-16" id="attorney-deep-card">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Foto and immediate hotlines */}
            <div className="lg:col-span-5 bg-navy-950 p-8 sm:p-12 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden border-2 border-gold-500/30">
                  <img
                    src={ATTORNEY_KEITH.imageUrl}
                    alt="Keith L. Langston, Lead Texas Trial Counsel at Langston Law Firm"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-navy-900 border border-gold-500/40 px-3 py-1 rounded text-[10px] font-mono font-bold text-gold-400">
                    Rising Stars (2009-2012)
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-serif font-bold tracking-tight text-white mb-1">
                    {ATTORNEY_KEITH.name}
                  </h2>
                  <p className="text-xs text-gold-400 font-mono uppercase tracking-widest font-bold">
                    {ATTORNEY_KEITH.role}
                  </p>
                </div>
              </div>

              {/* Direct Hotlines column */}
              <div className="border-t border-white/10 mt-8 pt-8 space-y-4 text-xs font-mono text-white/80">
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-gold-500 shrink-0" />
                  <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="hover:text-gold-400 transition-colors font-semibold">
                    {FIRM_DETAILS.phone} (Office Main)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-gold-500 shrink-0" />
                  <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-gold-400 transition-colors">
                    {FIRM_DETAILS.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <BookmarkCheck size={15} className="text-gold-500 shrink-0" />
                  <span>Licensed State of Texas Bar (ID: 24032541)</span>
                </div>
              </div>
            </div>

            {/* In-depth details (Right Side) */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-8">
              {/* Profile Bio bio */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-navy-950 border-b border-gold-500/20 pb-2">
                  Professional Narrative & Track Record
                </h3>
                {ATTORNEY_KEITH.bioParagraphs.map((para, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed font-light text-sm">
                    {para}
                  </p>
                ))}
              </div>

              {/* Education Ledger Block */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-gold-600" size={20} />
                  <h3 className="font-serif text-base font-bold text-navy-950">Academic Credentials</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ATTORNEY_KEITH.education.map((edu, index) => (
                    <div key={index} className="bg-cream-100 p-4 rounded border border-gold-500/5">
                      <span className="text-[10px] font-mono text-gold-600 font-bold block mb-1 uppercase tracking-wider">{edu.year}</span>
                      <h4 className="font-serif text-sm font-bold text-navy-950">{edu.school}</h4>
                      <p className="text-xs text-slate-500 font-light mt-0.5">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courtroom Bar Admissions Admissions */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Scale className="text-gold-600" size={20} />
                  <h3 className="font-serif text-base font-bold text-navy-950">Jurisdictional Bar Admissions</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-light pl-2">
                  {ATTORNEY_KEITH.admissions.map((adm, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></div>
                      <span>{adm}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selected Awards & Laurels */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Award className="text-gold-600" size={20} />
                  <h3 className="font-serif text-base font-bold text-navy-950">Elected Honors & Affiliations</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                  {ATTORNEY_KEITH.awards.map((awr, index) => (
                    <li key={index} className="bg-slate-50 border border-slate-100 rounded p-3 text-xs text-slate-700 font-light flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0"></div>
                      <span>{awr}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Commitment Statement Summary Card */}
        <div className="bg-navy-900 text-white rounded-xl p-8 sm:p-12 border border-gold-500/20 shadow-xl text-center space-y-6" id="attorney-statement">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mx-auto">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gold-400 md:text-3xl">
            "We believe in leveling the playing field against bad manufacturers and heavy polluters."
          </h2>
          <p className="text-white/75 font-light text-sm max-w-2xl mx-auto leading-relaxed">
            Attorney Keith L. Langston has dedicated his trial career strictly to protecting physical health, groundwater resources, and fair consumer warranties. Let him personally audit your case files today at absolutely zero cost.
          </p>
          <div className="pt-2">
            <button
              onClick={handleIntakeCTA}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-mono font-bold uppercase text-xs tracking-wider py-4 px-8 rounded shadow-md transition-colors inline-flex items-center gap-2"
            >
              <Calendar size={14} />
              <span>Request Free Case Intake Callback</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
