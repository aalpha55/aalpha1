import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Briefcase, 
  AlertTriangle, 
  FileText, 
  MousePointerClick, 
  Clock, 
  CheckCircle2,
  Users,
  Store,
  HardHat,
  Monitor
} from 'lucide-react';

export const CommercialInsurance: React.FC = () => {
  return (
    <section id="commercial-insurance" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-teal-600">Business Solutions</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Commercial Business Insurance
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-600">
            A commercial insurance program available for all business owners.
          </p>
        </div>

        {/* Coverage List */}
        <div className="mb-20 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <ShieldCheck className="text-teal-600" /> Coverage Options
          </h3>
          <p className="mb-6 text-slate-600">Coverage can include the following:</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {[
                "Professional liability (errors and omissions)",
                "Commercial general liability",
                "Equipment breakdown",
                "Directors’ and officers’ liability (fiduciary liability)",
                "Cyber and privacy liability",
                "Business interruption"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 text-teal-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                "Commercial property (building and contents)",
                "Commercial auto",
                "Crime",
                "Cargo (motor truck or vessel)",
                "Excess liability/umbrella liability"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 text-teal-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Type of Business to Refer */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Type of Business to Refer</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-slate-800">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                  <Monitor size={24} />
                </div>
                <h4 className="font-bold text-lg leading-tight">Business & Professional Services</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm pl-2 border-l-2 border-teal-100">
                <li>• Accountants</li>
                <li>• Contractors</li>
                <li>• Travel agents</li>
                <li>• Graphic designers</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-slate-800">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                  <HardHat size={24} />
                </div>
                <h4 className="font-bold text-lg leading-tight">Construction & Contracting</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm pl-2 border-l-2 border-teal-100">
                <li>• Tree removal</li>
                <li>• Plumbing</li>
                <li>• Landscapers</li>
              </ul>
            </div>

             {/* Card 3 */}
             <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-slate-800">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                  <Store size={24} />
                </div>
                <h4 className="font-bold text-lg leading-tight">Retail</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-sm pl-2 border-l-2 border-teal-100">
                <li>• Bakeries</li>
                <li>• Pet groomers</li>
                <li>• Spas and salons</li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Business Criteria (5-5-5 Rule) */}
        <div className="mb-20">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <AlertTriangle size={32} className="text-teal-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">New Business Criteria: The 5-5-5 Rule</h3>
                <p className="text-slate-300 mb-6 text-lg">
                  Any new business venture requires meeting specific criteria for an insurance company to consider coverage.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <span className="block text-4xl font-bold text-teal-400 mb-1">5</span>
                    <span className="text-sm font-medium text-slate-300">Years in business under same name</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <span className="block text-4xl font-bold text-teal-400 mb-1">5</span>
                    <span className="text-sm font-medium text-slate-300">Years no claims history</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <span className="block text-4xl font-bold text-teal-400 mb-1">5</span>
                    <span className="text-sm font-medium text-slate-300">Years experience in that business type</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-400 italic border-t border-white/10 pt-4">
                  * All criteria must be met for an insurance company to consider coverage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Information Required */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-teal-600" size={28} />
            <h3 className="text-2xl font-bold text-slate-900">Information Required to Obtain a Quote</h3>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <ul className="space-y-4">
                {[
                  "Contact name and details",
                  "Company name",
                  "Business address",
                  "Description of operations",
                  "Annual sales or gross receipts",
                  "Number of full-time employees"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 border-b border-slate-100 pb-2 last:border-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  "Description of property to be insured",
                  "Renewal date (at least 60 days out)",
                  "Property values to be insured",
                  "Completed application and supporting documents"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 border-b border-slate-100 pb-2 last:border-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How to Refer & Reminder */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Refer Box */}
          <div className="lg:col-span-2 bg-teal-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-xl font-bold text-teal-900 mb-6 flex items-center gap-2">
              <MousePointerClick size={24} /> Option 1 — Submit an online referral
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-teal-100/50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-sm shrink-0">1</span>
                <span className="text-slate-700 font-medium">Visit <span className="text-teal-700 font-bold">wfg.aon.ca</span></span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-teal-100/50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-sm shrink-0">2</span>
                <span className="text-slate-700 font-medium">Click on “Commercial”</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-teal-100/50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-sm shrink-0">3</span>
                <span className="text-slate-700 font-medium">Complete a referral form</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 text-teal-800 bg-teal-100/50 px-4 py-2 rounded-lg text-sm font-semibold">
              <Clock size={16} />
              Your client will be contacted within five business days.
            </div>
          </div>

          {/* Reminder Note */}
          <div className="bg-slate-800 text-slate-300 rounded-2xl p-8 flex flex-col justify-center">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Building2 size={20} className="text-teal-400" />
              Important Reminders
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-teal-400 font-bold">•</span>
                We require 60 days prior to renewal to quote.
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 font-bold">•</span>
                Allow 5–7 business days to assign your referral and contact your client.
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 font-bold">•</span>
                Seek clients needing multiple lines of commercial insurance coverage.
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 font-bold">•</span>
                Remind clients to check their email for communication from Aon.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};