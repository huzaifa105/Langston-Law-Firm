import { ShieldCheck, Award, HeartHandshake, Eye, Scale, ArrowRight, UserCheck } from "lucide-react";
import { FIRM_DETAILS } from "../data";

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
}

export default function AboutView({ setActiveTab }: AboutViewProps) {
  
  const handleContactCTA = () => {
    setActiveTab("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const values = [
    {
      icon: <Scale className="text-gold-500" size={24} />,
      title: "Courtroom-Hardened Preparation",
      desc: "We prepare every catastrophic crash, toxic spill, and mechanical design flaw case as if it will proceed directly to a federal or state jury panel. Prepare diligently, compromise never."
    },
    {
      icon: <HeartHandshake className="text-gold-500" size={24} />,
      title: "Radical Client Personalization",
      desc: "At heavy volume firms, you are a number passed to paralegals. At Langston Law Firm, Keith L. Langston personally reviews your case files, answers your text messages, and sits at your kitchen table."
    },
    {
      icon: <ShieldCheck className="text-gold-500" size={24} />,
      title: "100% Contingency-Risk Insulation",
      desc: "Our financial backing allows us to completely pay up-front for expensive hydrologists, accident experts, and heavy filings. If we do not successfully recover money, you pay us $0."
    },
    {
      icon: <Eye className="text-gold-500" size={24} />,
      title: "Aggressive, Unapologetic Advocacy",
      desc: "We stand up directly to Fortune 500 chemical plants, national logistics operations, and massive device manufacturers. We maintain a proud reputation as a formidable opponent."
    }
  ];

  const milestones = [
    {
      year: "2001",
      title: "Baylor Law Graduation & State Bar Admission",
      desc: "Keith L. Langston graduates from Baylor Law School, widely regarded as a premier legal bootcamp for trial practice in America. He is formally licensed in Texas."
    },
    {
      year: "2005",
      title: "Filing Landmark Toxic Spillage Actions",
      desc: "Keith establishes deep expertise fighting heavy industrial polluters of East Texas aquifer systems, securing agricultural remediations and punitive jury payouts."
    },
    {
      year: "2009",
      title: "First 'Rising Stars' Award Selection",
      desc: "Recognized by Texas partners and Super Lawyers peer boards for outstanding early achievements in Plaintiff litigation and consumer class action files (annually certified 2009-2012)."
    },
    {
      year: "2015",
      title: "Structuring Multidistrict Product Litigations",
      desc: "Langston Law Firm acts as lead steering coordinators in national MDL pipelines targeting metal-on-metal hip replacements and failure-to-warn orthopedic device designs."
    },
    {
      year: "2026",
      title: "Over Two Decades of Uncompromising Representation",
      desc: "Continuing to base core legal practice in Longview, Texas, representing injured neighbors with identical integrity, backing, and aggressive vigor."
    }
  ];

  return (
    <div id="about-view-container" className="py-12 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-gold-600 font-bold">
            The Langston Legacy
          </div>
          <h1 className="text-4xl font-serif font-extrabold text-navy-950 tracking-tight sm:text-5xl">
            Uncompromising Advocacy, Proven Courtroom Vigor
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          <p className="text-slate-600 font-light text-base leading-relaxed">
            Founded with the sole objective of delivering premier legal resources, corporate pressure, and client-first restoration to victims of catastrophic loss.
          </p>
        </div>

        {/* Brand Mission & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900 tracking-tight">
              Our Journey: Born Out of a Passion to Equalize the Scales of Justice
            </h2>
            <p className="text-slate-700 font-light leading-relaxed text-sm">
              In 2001, attorney Keith L. Langston graduated from the trial-heavy Baylor University School of Law and set out to build a modern law firm that combined the raw investigative capital of high-end corporate firms with the warm, loyal integrity of a small-town Texas counselor.
            </p>
            <p className="text-slate-700 font-light leading-relaxed text-sm">
              In the two decades since, Langston Law Firm has stayed strictly dedicated to helping injured plaintiffs. We do not represent insurance providers, we do not defend corporate polluters, and we do not represent manufacturers of defective products. We are 100% focused on plaintiffs' rights.
            </p>
            
            <div className="p-5 bg-white border border-gold-500/10 rounded-lg shadow-sm border-l-4 border-l-gold-500">
              <span className="font-serif italic text-navy-950 block text-base font-bold mb-1">
                "Our clients are our neighbors in East Texas. When they suffer permanent physical injuries or catastrophic agricultural losses, we see it as a personal duty to deploy every ounce of our legal knowledge to secure full restoration."
              </span>
              <span className="text-xs text-gold-600 font-mono font-semibold block uppercase tracking-wider mt-2">
                — Keith L. Langston, Founding partner
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="border-4 border-gold-400 p-2 rounded shadow-2xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Modern corporate glass office building reflecting the sky"
                className="w-full h-[400px] object-cover rounded shadow"
              />
            </div>
          </div>
        </div>

        {/* Timeline chronological list */}
        <div className="mb-24 bg-navy-900 text-white rounded-2xl p-8 sm:p-12 border border-gold-500/20 shadow-2xl">
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">Chronological Milestones</span>
            <h2 className="text-3xl font-serif font-bold tracking-tight">Building a Century of Precedent</h2>
          </div>

          <div className="relative border-l-2 border-gold-500/30 pl-6 sm:pl-12 space-y-12 max-w-4xl mx-auto">
            {milestones.map((m, index) => (
              <div key={index} className="relative">
                {/* Node pointer pointer */}
                <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-gold-400 border-4 border-navy-900 group" />
                <div className="space-y-1">
                  <span className="inline-block text-xs font-mono font-bold text-gold-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 shadow-inner">
                    {m.year}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {m.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12 mb-20" id="values-block">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-navy-950 tracking-tight">
              Our Non-Negotiable Core Values
            </h2>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
              The four pillar truths that guide our day-to-day operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, index) => (
              <div key={index} className="bg-white rounded-lg border border-gold-500/10 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-400/10 rounded-lg shrink-0">
                    {v.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-navy-950">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Conversion Box */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 text-white rounded-2xl border border-gold-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl font-serif font-bold text-white md:text-4xl">
            Injured or Facing Toxic Industrial Dam? Let our Texas Attorney Analyze Your Case.
          </h2>
          <p className="text-white/70 font-light text-sm leading-relaxed max-w-2xl mx-auto">
            We offer 100% confidential case reviews at absolutely zero cost. Speak directly to Keith L. Langston regarding your injuries and rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <button
              onClick={handleContactCTA}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded font-mono font-bold uppercase tracking-wider text-xs shadow-lg transition-colors"
            >
              Begin Your Free Evaluation
            </button>
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="border border-white/20 hover:border-gold-400 bg-white/5 hover:bg-white/10 px-8 py-4 rounded font-mono font-bold uppercase tracking-wider text-xs transition-all text-center"
            >
              Call {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
