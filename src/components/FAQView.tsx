import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, Phone, Calendar } from "lucide-react";
import { FAQS, FIRM_DETAILS } from "../data";

interface FAQViewProps {
  setActiveTab: (tab: string) => void;
}

export default function FAQView({ setActiveTab }: FAQViewProps) {
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions Index" },
    { id: "costs", label: "Fees & Costs" },
    { id: "injury", label: "Injury Claims" },
    { id: "class-actions", label: "Class Actions vs Mass Torts" },
    { id: "timeline", label: "Litigation Timelines" },
    { id: "consultation", label: "Consultation Process" },
    { id: "insurance", label: "Insurance Companies" }
  ];

  const handleToggleFaq = (id: string) => {
    if (activeFaqId === id) {
      setActiveFaqId(null);
    } else {
      setActiveFaqId(id);
    }
  };

  const handleContactCTA = () => {
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredFaqs = selectedCategory === "all"
    ? FAQS
    : FAQS.filter(faq => faq.category === selectedCategory);

  return (
    <div id="faq-view-container" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">In-depth answers</div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2"></div>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Unpacking the legal process, timelines, contingency fee schedules, and trial procedures under Texas codes.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="faq-categories-nav">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all font-semibold select-none cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-navy-900 text-gold-400 border border-gold-400 shadow-md"
                  : "bg-white text-navy-950 hover:bg-gold-500 hover:text-navy-950 shadow-sm border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list list */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16" id="faq-accordion-deck">
          {filteredFaqs.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-lg border border-gold-500/10 shadow-sm overflow-hidden transition-shadow"
              >
                <button
                  onClick={() => handleToggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-cream-100 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-navy-950 leading-snug">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs text-slate-600 leading-relaxed font-light border-t border-slate-50">
                    <p className="mb-2">{faq.answer}</p>
                    <div className="flex items-center gap-2 text-[10px] text-gold-600 font-mono mt-4 font-semibold uppercase tracking-wider">
                      <AlertCircle size={14} />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center p-12 bg-white rounded-lg border border-dashed border-slate-300">
              <p className="text-sm text-slate-500 font-light">No questions found matching this category tab selection. Please explore another.</p>
            </div>
          )}
        </div>

        {/* Quick Contact helpline box */}
        <div className="max-w-3xl mx-auto bg-navy-950 text-white rounded-xl border border-gold-500/20 shadow-2xl p-8 text-center space-y-5">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-500/20 flex items-center justify-center text-gold-400 mx-auto">
            <HelpCircle size={24} />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-400">Still have a question left unanswered?</h3>
          <p className="text-white/70 font-light text-xs max-w-xl mx-auto leading-relaxed">Legal disputes can be extremely complex and fact-specific. Speak directly with Keith Langston or our intake division on our free 24/7 hotline today.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-2">
            <button
              onClick={handleContactCTA}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-mono font-bold uppercase py-3 px-6 rounded shadow transition-all cursor-pointer"
            >
              Ask Keith a custom Question
            </button>
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="border border-white/20 hover:border-gold-400 bg-white/5 px-6 py-3 rounded text-xs font-mono font-bold uppercase text-center transition-colors"
            >
              Call Hotline: {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
