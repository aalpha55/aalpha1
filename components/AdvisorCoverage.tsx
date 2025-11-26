import React from 'react';
import { Scale, ShieldCheck, FileText, Phone } from 'lucide-react';

export const AdvisorCoverage: React.FC = () => {
  return (
    <section id="advisor-coverage" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-teal-600">Exclusive Benefits</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Coverage for WFG Advisors/Associates
          </h2>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            {/* Intro Header */}
            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-8">
                <div className="p-3 bg-teal-100 text-teal-700 rounded-lg shadow-sm">
                    <Scale size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Aon Counsel — Telephone Legal Advice
                </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Column: Paragraphs */}
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                    <p>
                        If you are a licensed World Financial Group advisor, you have access to Aon Counsel. Legal disputes are common in today’s world and can cause high levels of personal stress that may affect mental health, wellbeing and job performance. Finding the appropriate advice can be confusing, costly, and take a further toll on emotional well-being.
                    </p>
                    <p>
                        Aon has partnered with Assistenza International to create a unique service that provides individuals with easy access to practicing bilingual lawyers covering both civil and common law, who can advise on legal matters. Additionally, the bilingual counsellors provide emotional support.
                    </p>
                </div>

                {/* Right Column: Bullets & Access */}
                <div className="space-y-10">
                    
                    {/* Aon Counsel Provides */}
                    <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
                             <ShieldCheck className="text-teal-600" size={24} /> Aon Counsel provides:
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-700">
                                <span className="h-2 w-2 rounded-full bg-teal-500 mt-2.5 shrink-0"></span>
                                <span>Empowerment to take contact of a potential or in-progress legal situation and the associated emotional concerns.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <span className="h-2 w-2 rounded-full bg-teal-500 mt-2.5 shrink-0"></span>
                                <span>Unlimited access to confidential general legal advice over the telephone.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <span className="h-2 w-2 rounded-full bg-teal-500 mt-2.5 shrink-0"></span>
                                <span>Unlimited access to confidential telephone advice from a counsellor who can provide emotional support.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Lawyers Available For */}
                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                         <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                             <FileText className="text-teal-600" size={20} /> Lawyers are available to answer questions about:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {["Immigration", "Tax", "Wills and estate", "Contracts", "Family"].map((item, i) => (
                                <span key={i} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium border border-teal-100">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* How to Access */}
                    <div className="bg-teal-600 rounded-xl p-8 text-white shadow-md relative overflow-hidden">
                        {/* Decorative circle */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
                        
                        <h4 className="font-bold text-xl mb-6 flex items-center gap-2 relative z-10">
                            <Phone className="text-teal-200" size={24} /> How to Access Aon Counsel
                        </h4>
                        <ul className="space-y-5 relative z-10">
                            <li className="flex items-start gap-4">
                                <span className="bg-white text-teal-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                                <span>Call <a href="tel:1-866-568-1205" className="font-bold text-white text-lg hover:underline decoration-teal-200 underline-offset-4">1 866 568 1205</a> and quote policy number <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold tracking-wide ml-1">AC-003</span>.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="bg-white text-teal-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                                <span>Provide a brief description of the legal issue.</span>
                            </li>
                             <li className="flex items-start gap-4">
                                <span className="bg-white text-teal-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                                <span>Retrieve confidential advice from a lawyer at no cost.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};