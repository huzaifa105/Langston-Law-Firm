import { useState } from "react";
import { Scale, ShieldCheck, HelpCircle, Trophy, BookmarkCheck, LayoutGrid, Award, ArrowRight } from "lucide-react";
import { CASE_RESULTS, FIRM_DETAILS } from "../data";

interface CaseResultsViewProps {
  setActiveTab: (tab: string) => void;
}

export default function CaseResultsView({ setActiveTab }: CaseResultsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Results Ledger" },
    { id: "Personal Injury", label: "Personal Injury" },
    { id: "Class Action / Mass Torts", label: "Class Actions & Torts" },
    { id: "Environmental Litigation", label: "Environmental Litigation" },
    { id: "Product Liability Injury Cases", label: "Product Liability" }
  ];

  const handleContactCTA = () => {
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredResults = selectedCategory === "all"
    ? CASE_RESULTS
    : CASE_RESULTS.filter(res => res.category.toLowerCase().includes(selectedCategory.split(" ")[0].toLowerCase()) || res.category === selectedCategory);

  return (
    <div id="case-results-view-container" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Ledger of success</div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">Proven Legal Recoveries</h1>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2"></div>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            While no attorney can guarantee specific outcomes under Texas law, our documented history demonstrates the heavy financial pressure we apply to negligent corporations and insurers.
          </p>
        </div>

        {/* Category segment tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="results-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono transition-all font-semibold ${
                selectedCategory === cat.id
                  ? "bg-navy-900 text-gold-400 shadow-lg border-2 border-gold-400"
                  : "bg-white text-navy-950 hover:bg-gold-500 hover:text-navy-950 shadow-sm border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Settlements Sheet Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="results-cards-grid">
          {filteredResults.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-xl border border-gold-500/10 p-8 shadow-md relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gold sidebar accents */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gold-400 to-gold-600"></div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-gold-600 bg-gold-400/10 border border-gold-400/20 px-2.5 py-1 rounded">
                    {res.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    📍 {res.location}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight">
                  {res.amount}
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-800 leading-tight border-b border-slate-100 pb-3">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {res.summary}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                  <BookmarkCheck size={14} className="text-gold-500" />
                  <span>Officially Resolved via Certified Settlement or jury Trial Verdict</span>
                </div>
              </div>
            </div>
          ))}

          {filteredResults.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center p-12 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-sm text-slate-500 font-light">No records found matching this filter segment. Please select a broader index above.</p>
            </div>
          )}
        </div>

        {/* Hard Standard Ethical Disclaimer */}
        <div className="bg-white border border-gold-500/20 rounded-xl p-6 sm:p-8 space-y-4 max-w-4xl mx-auto shadow-sm mb-16">
          <div className="flex items-center gap-2 text-gold-600 font-mono text-xs font-bold border-b border-slate-100 pb-2">
            <ShieldCheck size={16} />
            <span>Official East Texas Jurisdictional Disclaimer</span>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed font-light">
            *Texas Disciplinary Rules of Professional Conduct Note: The case summaries, verdicts, and negotiated settlement amounts outlined above represent historically secured file outcomes handled by Langston Law Firm or Keith L. Langston acting as lead steering associates. These numbers are purely historical and informational. They do not constitute an explicit forecast, backing, or guarantee that your future civil litigation will return identical recovery totals. Every legal matter contains distinct insurance policy limits, liability apportionments, and physical medical damages.
          </p>
        </div>

        {/* CTA Banner Area */}
        <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 border border-gold-500/20 shadow-2xl text-center space-y-6">
          <div className="w-12 h-12 bg-gold-400/10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-400 mx-auto">
            <Trophy size={22} fill="currentColor" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-white md:text-3xl">Ready to evaluate the financial feasibility of your potential claim?</h2>
          <p className="text-white/70 font-light text-xs max-w-xl mx-auto leading-relaxed">Let attorney Keith L. Langston personally perform a multi-tier assessment of liability and policy limits at absolutely no charge to you or your family.</p>
          <div className="pt-2">
            <button
              onClick={handleContactCTA}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-mono font-bold uppercase tracking-widest py-3.5 px-8 rounded shadow"
            >
              Evaluate My Case For Free
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
