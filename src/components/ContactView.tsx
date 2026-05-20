import { useState, FormEvent } from "react";
import { Scale, Phone, MapPin, Mail, Clock, ShieldCheck, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import { FIRM_DETAILS, PRACTICE_AREAS } from "../data";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "Personal Injury Law",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    // Baseline validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Please fill in all required fields (Name, Email, Message) so we can review your potential claim.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(data.message);
        // Reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          practiceArea: "Personal Injury Law",
          message: ""
        });
      } else {
        setSubmitError(data.message || "Failed to submit case. Please double check parameters and retry.");
      }
    } catch (err) {
      console.error("Transmission error:", err);
      setSubmitError("Our servers are currently experiencing connection difficulties. Please dial +1 903-746-4887 to initiate your free intake callback immediately.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-view-page" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title sections */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">Confidential Intake</div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">Request a Free Case Evaluation</h1>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2"></div>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Take the vital first step toward securing physical compensation and peace of mind. Our reviews are 100% confidential and carry absolutely zero obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-control-grid">
          {/* Left direct contact details details */}
          <div className="lg:col-span- così lg:col-span-5 space-y-8">
            <div className="bg-navy-900 text-white rounded-xl border border-gold-500/20 p-8 shadow-xl space-y-6">
              <h3 className="font-serif text-xl font-bold text-gold-400 border-b border-white/10 pb-2">Office Centers</h3>
              
              <div className="space-y-4 text-xs text-white/80 leading-relaxed font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold-500 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold text-white block mb-0.5">HQ Physical Address</span>
                    <p>{FIRM_DETAILS.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-gold-500 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Primary Hotline (24/7)</span>
                    <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="text-gold-400 hover:text-gold-300 transition-colors font-semibold text-sm">
                      {FIRM_DETAILS.phone} (Call or Text)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-gold-500 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Secure Document Registry</span>
                    <a href={`mailto:${FIRM_DETAILS.email}`} className="text-gold-400 hover:underline">
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-gold-500 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Intake Operations Hours</span>
                    <p>{FIRM_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-Stat checklist */}
            <div className="bg-white rounded-xl border border-gold-500/10 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-gold-600 font-mono text-xs font-bold border-b border-slate-100 pb-2">
                <ShieldCheck size={16} />
                <span>Premium intake security parameters</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-700 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 block">✓</span>
                  <span><strong>100% Encrypted Callback Pipe:</strong> Your personal collision statements are stored in encrypted digital compartments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 block">✓</span>
                  <span><strong>No Fee Policy:</strong> We collect zero litigation pay unless we settle your financial checks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 block">✓</span>
                  <span><strong>Direct Consultation with Keith:</strong> Evaluated details are sent directly to Keith L. Langston's docket sheet within 15 minutes.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Core Action Form Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-gold-500/10 p-8 sm:p-12 shadow-xl space-y-6">
            <div className="border-b border-slate-150 pb-4">
              <h2 className="font-serif text-2xl font-bold text-navy-950">Intake Statement Sheets</h2>
              <p className="text-xs text-slate-400 mt-0.5">Kindly complete our secure evaluator. Required cells are tagged *</p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-xs leading-relaxed space-y-4">
                <CheckCircle2 className="text-emerald-500" size={32} />
                <h4 className="font-bold text-sm">Transmitted Confidentially & Logged</h4>
                <p>{submitSuccess}</p>
                <div className="p-3 bg-white/20 border border-emerald-300 rounded font-bold font-mono text-[10px] text-emerald-950">
                  REF_CODE: 2026-N-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitError && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded text-xs flex items-start gap-2">
                    <AlertCircle className="text-rose-500 shrink-0 mt-0.5" size={16} />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-xs text-navy-950 focus:bg-white focus:border-gold-500 outline-none"
                      placeholder="e.g. Keith L. Langston Jr."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-xs text-navy-950 focus:bg-white focus:border-gold-500 outline-none"
                      placeholder="e.g. name@server.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-xs text-navy-950 focus:bg-white focus:border-gold-500 outline-none"
                      placeholder="e.g. 903-555-0100"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">Practice area specialty *</label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-xs text-navy-950 focus:bg-white focus:border-gold-500 outline-none"
                    >
                      {PRACTICE_AREAS.map((pa) => (
                        <option key={pa.id} value={pa.title}>
                          {pa.title}
                        </option>
                      ))}
                      <option value="General Corporate Injury Representation">General Injury / Claims Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-bold">Incident Summary & Injuries suffered *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-xs text-navy-950 focus:bg-white focus:border-gold-500 outline-none resize-none"
                    placeholder="We recommend writing dates, physical fractures, hospital names, police report codes, and any commercial vehicles involved..."
                  />
                </div>

                <div className="pt-2 border-t border-slate-50">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 text-xs font-mono font-bold uppercase tracking-widest py-4 rounded shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} />
                    <span>{isSubmitting ? "Transmitting Secure files..." : "Register Free Case Evaluation"}</span>
                  </button>
                </div>

                <p className="text-[9px] text-slate-400 text-center leading-relaxed font-light">
                  *Attorney-Client Privilege Note: While we operate on rigorous privacy standards, transmitting case details online does not form a binding contract of retainment. Langston Law Firm formally certified files only after signing a written contract.
                </p>

              </form>
            )}
          </div>
        </div>

        {/* Dynamic Map Pin Frame Block */}
        <div className="bg-white rounded-xl border border-gold-500/10 shadow-xl overflow-hidden mt-16 h-[400px]">
          <iframe
            title="Langston Law Firm Main Office Longview Gregg County TX Map Pointer Frame"
            src={FIRM_DETAILS.googleMapsEmbedUrl}
            className="w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
