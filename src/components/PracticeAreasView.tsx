import { useState, FormEvent } from "react";
import { Scale, ChevronRight, CheckCircle2, Briefcase, FileText, ChevronDown, Handshake, ShieldCheck, ArrowLeft, Calendar, Trees, Users, ShieldAlert, Hammer } from "lucide-react";
import { PRACTICE_AREAS, FIRM_DETAILS } from "../data";
import { PracticeArea } from "../types";

interface PracticeAreasViewProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedPracticeAreaId: string | null;
  setSelectedPracticeAreaId: (id: string | null) => void;
}

export default function PracticeAreasView({
  activeTab,
  setActiveTab,
  selectedPracticeAreaId,
  setSelectedPracticeAreaId
}: PracticeAreasViewProps) {
  
  // Custom intake form state for practice specific leads
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleLogoClick = (tabId: string) => {
    setSelectedPracticeAreaId(null);
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectPracticeArea = (id: string) => {
    setSelectedPracticeAreaId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedPracticeAreaId(null);
    setActiveTab("practice-main");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = async (e: FormEvent, practiceTitle: string) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please enter all required information (Name, Email, Message).");
      return;
    }
    setSubmitting(true);
    
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          practiceArea: practiceTitle,
          message: formData.message
        })
      });

      const resData = await response.json();
      if (resData.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(resData.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      alert("System communication trouble. Your message could not be relayed. Please dial +1 903-746-4887 to speak with us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  // Resolve Lucide outline icons
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert size={size} />;
      case "Users": return <Users size={size} />;
      case "Trees": return <Trees size={size} />;
      case "Hammer": return <Hammer size={size} />;
      default: return <Scale size={size} />;
    }
  };

  const activeArea = PRACTICE_AREAS.find((pa) => pa.id === selectedPracticeAreaId);

  // 1. RENDER DETAILED PRACTICE VIEW PAGE
  if (activeArea) {
    return (
      <div id="practice-details-page" className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation button */}
          <button
            onClick={handleBackToList}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gold-600 hover:text-gold-500 mb-8 uppercase tracking-wider group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Practice Areas</span>
          </button>

          {/* Individual Service Hero Banner */}
          <div className="bg-navy-950 text-white rounded-2xl border border-gold-500/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#caa45204_1px,transparent_1px),linear-gradient(to_bottom,#caa45204_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="inline-block text-[10px] font-mono tracking-widest text-gold-400 uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                Litigation Practice Profile
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-none">
                {activeArea.title}
              </h1>
              <div className="w-16 h-1 bg-gold-500"></div>
              <p className="text-white/80 font-light text-base sm:text-lg leading-relaxed">
                {activeArea.shortDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="practice-details-grid">
            {/* Left Narrative Column column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Core Detailed Legal Explanation */}
              <div className="bg-white rounded-xl border border-gold-500/10 p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-2xl font-bold text-navy-950">In-Depth Practice Overview</h2>
                <div className="w-12 h-0.5 bg-gold-500 mb-4"></div>
                <p className="text-slate-600 leading-relaxed font-light text-sm">
                  {activeArea.fullDesc}
                </p>
                <p className="text-slate-600 leading-relaxed font-light text-sm mt-3">
                  {activeArea.casesSummary}
                </p>
              </div>

              {/* Common Case Subtypes Checklist */}
              <div className="bg-white rounded-xl border border-gold-500/10 p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-xl font-bold text-navy-950">Specific Case Types We Handle</h2>
                <p className="text-xs text-slate-500">We represent injured property and physical victims in Gregg County, Rusk County, Harrison County, and federal multidistrict courts involving:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activeArea.relatedCaseTypes.map((type, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-700 font-light p-2 bg-cream-100 rounded border border-gold-500/5">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step litigation timeline */}
              <div className="bg-white rounded-xl border border-gold-500/10 p-8 shadow-sm space-y-6">
                <h2 className="font-serif text-xl font-bold text-navy-950">Our Systemic Litigation Approach</h2>
                <p className="text-xs text-slate-500">A clear outline of Keith's strict tactical process from initial retainment to final check payout:</p>
                
                <div className="relative border-l border-gold-500/30 pl-6 space-y-8 select-none">
                  {activeArea.processTimeline.map((step, index) => {
                    const [stepTitle, stepDesc] = step.split(":");
                    return (
                      <div key={index} className="relative">
                        <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-gold-400 border-2 border-white flex items-center justify-center text-[8px] font-bold text-navy-950">
                          {index + 1}
                        </div>
                        <h4 className="font-serif text-sm font-bold text-navy-950">{stepTitle}</h4>
                        <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">{stepDesc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Related Selected Case Results Examples */}
              <div className="bg-navy-900 text-white rounded-xl p-8 border border-gold-500/10 shadow-lg space-y-6">
                <div className="border-b border-white/10 pb-2">
                  <h3 className="font-serif text-lg font-bold text-gold-400">Past Representative Case Payouts</h3>
                  <p className="text-[10px] text-white/50 font-mono uppercase tracking-wider mt-0.5">Selected {activeArea.title} Recoveries</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {activeArea.caseExamples.map((ex, index) => (
                    <div key={index} className="bg-navy-950 border border-gold-500/10 p-5 rounded-lg space-y-2">
                      <div className="text-2xl font-serif font-bold text-gold-400">{ex.amount}</div>
                      <h4 className="font-serif text-sm font-bold text-white leading-tight">{ex.title}</h4>
                      <p className="text-xs text-white/70 font-light leading-relaxed">{ex.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Consultation Intake Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Why Choose card card */}
              <div className="bg-navy-900 text-white rounded-xl border border-gold-500/20 p-6 shadow-xl space-y-4">
                <h3 className="font-serif text-base font-bold text-gold-400 border-b border-white/10 pb-2">Why Langston Law Firm</h3>
                <ul className="space-y-3.5 text-xs text-white/80 font-light">
                  {activeArea.whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ShieldCheck size={16} className="text-gold-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Practice Lead Capture form */}
              <div className="bg-white rounded-xl border border-gold-500/10 p-6 shadow-xl space-y-4">
                <div className="text-center pb-2 border-b border-slate-100">
                  <h3 className="font-serif text-lg font-bold text-navy-950">Secure Case Evaluator</h3>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">Start online review within 2 min</p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded text-xs leading-relaxed space-y-2 text-center">
                    <CheckCircle2 className="text-emerald-500 mx-auto" size={24} />
                    <p className="font-bold">Case Info Received Confidentially</p>
                    <p>Attorney Keith L. Langston and his team are reviewing your submittal. Expect a direct callback within 24 working hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => handleFormSubmit(e, activeArea.title)} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded p-2.5 text-xs focus:bg-white focus:border-gold-500 outline-none"
                        placeholder="e.g. Marcus Aurelius"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded p-2.5 text-xs focus:bg-white focus:border-gold-500 outline-none"
                          placeholder="e.g. name@host.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded p-2.5 text-xs focus:bg-white focus:border-gold-500 outline-none"
                          placeholder="e.g. 903-555-0199"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Tell us what happened *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded p-2.5 text-xs focus:bg-white focus:border-gold-500 outline-none resize-none"
                        placeholder="Please write dates, physical injuries, and any corporate names involved..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 text-navy-950 text-xs font-mono font-bold uppercase tracking-widest py-3 rounded shadow transition-all cursor-pointer"
                    >
                      {submitting ? "Transmitting..." : "Submit Case Files"}
                    </button>
                    <span className="block text-[9px] text-center text-slate-400 max-w-xs mx-auto leading-relaxed font-light">
                      *By submitting, you agree that this does not constitute a formal contract of attorney-client privilege.
                    </span>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // 2. RENDER MAIN PRACTICE INDEX PAGE
  return (
    <div id="practice-main-page" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Litigation focus</div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">Our Practice Areas</h1>
          <div className="w-20 h-0.5 bg-gold-400 mx-auto mt-2"></div>
          <p className="text-slate-600 font-light text-base">
            We intentionally limit the categories of cases we accept so we can dedicate concentrated attention and massive capital resources to securing major plaintiff recoveries.
          </p>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="practice-categories-grid">
          {PRACTICE_AREAS.map((pa) => (
            <div
              key={pa.id}
              className="bg-white rounded-xl border border-gold-500/10 p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1 duration-300 group cursor-pointer"
              onClick={() => selectPracticeArea(pa.id)}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-gold-500/10 text-gold-600 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  {getIcon(pa.iconName, 22)}
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                  {pa.title}
                </h2>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {pa.shortDesc}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold bg-slate-50 px-2.5 py-1 rounded">
                    Common Subtypes Include:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2.5 text-xs text-slate-600 font-light">
                    {pa.relatedCaseTypes.slice(0, 4).map((sub, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-gold-500 rounded-full shrink-0"></div>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-50 pt-5 mt-6 flex items-center justify-between text-xs font-mono font-bold text-gold-600 uppercase tracking-wider">
                <span>View Full practice page & timeline</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight trust banners */}
        <div className="bg-navy-950 text-white rounded-xl p-8 border border-gold-500/20 shadow-xl text-center space-y-4">
          <h3 className="font-serif text-xl font-bold text-gold-400">Do you have questions about a potential legal file?</h3>
          <p className="text-white/70 font-light text-sm max-w-xl mx-auto">We review cases free of charge. You can speak to us via text or schedule a callback at our Office Headquarters.</p>
          <div className="pt-2">
            <button
              onClick={() => handleLogoClick("contact")}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-6 py-3 rounded text-xs font-mono font-bold uppercase tracking-wider"
            >
              Initialize Confidential Review Form
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
