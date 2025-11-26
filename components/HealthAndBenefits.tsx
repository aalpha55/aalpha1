import React from 'react';
import { 
  Heart, 
  Activity, 
  Users, 
  FileCheck, 
  Globe, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  Laptop
} from 'lucide-react';

export const HealthAndBenefits: React.FC = () => {
  return (
    <section id="health-and-benefits" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-teal-600">Green Shield Canada</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Health and Benefits
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-600">
            Find the coverage that’s right for your clients with a Health Assist plan from Green Shield Canada.
          </p>
        </div>

        {/* What is Health Assist */}
        <div className="mb-20 rounded-2xl bg-teal-50 p-8 sm:p-10 border border-teal-100 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 p-4 bg-white rounded-full shadow-sm text-teal-600">
            <Heart size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What is Health Assist?</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Health Assist is a flexible health benefits solution offering prescription drug coverage, dental care, vision care, extended health services, and emergency medical travel protection. Plans are easy to apply for, with guaranteed acceptance for many options and no medical questions required. Clients can choose single, couple, or family coverage, with straightforward eligibility and no termination age.
            </p>
          </div>
        </div>

        {/* Coverage Details Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Activity className="text-teal-600" /> Coverage Overview
          </h3>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Column 1: Coverage Details */}
            <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h4 className="font-bold text-slate-900 text-lg">Coverage Details</h4>
              </div>
              <div className="p-6 bg-white flex-1">
                <ul className="space-y-4">
                  {[
                    "Prescription drugs",
                    "Dental care",
                    "Vision care",
                    "Extended health care",
                    "Emergency medical travel protection",
                    "Optional hospital accommodation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="mt-0.5 text-teal-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Plan Benefits */}
            <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h4 className="font-bold text-slate-900 text-lg">Plan Benefits</h4>
              </div>
              <div className="p-6 bg-white flex-1">
                <ul className="space-y-4">
                  {[
                    "Single, couple and family coverage",
                    "Guaranteed acceptance options",
                    "No termination age",
                    "No waiting period — even for dental",
                    "Top band age of 65+",
                    "Straightforward eligibility",
                    "Online service platform",
                    "Medical underwriting within 5–7 business days",
                    "Tax deductible business expense"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="mt-0.5 text-teal-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Who is Eligible? */}
            <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h4 className="font-bold text-slate-900 text-lg">Who is Eligible?</h4>
              </div>
              <div className="p-6 bg-white flex-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 text-teal-500 flex-shrink-0" />
                    <span>Canadian resident covered by a provincial government health plan</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 text-teal-500 flex-shrink-0" />
                    <span>Ages 18–74 eligible</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 text-teal-500 flex-shrink-0" />
                    <span>Link between ages 18–79 <span className="text-slate-500 text-sm block mt-1">(for individuals and dependents leaving a group benefits plan)</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Information Required */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="text-teal-600" size={28} />
              <h3 className="text-2xl font-bold text-slate-900">Information Required to Obtain a Quote</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-sm">1</span>
                <span className="font-medium text-slate-700">Province of residence</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-sm">2</span>
                <span className="font-medium text-slate-700">Coverage needed (single, couple, family)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-sm">3</span>
                <span className="font-medium text-slate-700">Age</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-sm">4</span>
                <span className="font-medium text-slate-700">Must be covered by a provincial plan</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to Refer */}
        <div className="mb-12">
           <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">How to Refer Your Client</h3>
           
           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* Option 1 */}
             <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-teal-600" size={24} />
                  <h4 className="text-xl font-bold text-slate-900">Option 1: Personalized Link</h4>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-teal-600">1.</span> Visit <span className="font-medium">wfg.aon.ca</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-teal-600">2.</span> Click on “Health & Benefits”
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-teal-600">3.</span> Complete “Request for New Advisor” form
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-teal-600">4.</span> Send to <a href="mailto:wfg.aon@greenshield.ca" className="text-teal-600 hover:underline">wfg.aon@greenshield.ca</a>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-teal-600">5.</span> Allow up to three business days, then start quoting
                  </li>
                </ul>
                <div className="mt-auto">
                  <button className="w-full py-3 px-4 bg-teal-50 text-teal-700 font-semibold rounded-lg hover:bg-teal-100 transition-colors flex items-center justify-center gap-2">
                    Request Link <ArrowRight size={16} />
                  </button>
                </div>
             </div>

             {/* Option 2 */}
             <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-slate-700"></div>
                <div className="flex items-center gap-3 mb-6">
                  <Laptop className="text-slate-700" size={24} />
                  <h4 className="text-xl font-bold text-slate-900">Option 2: Online Quote</h4>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-slate-700">1.</span> Visit <span className="font-medium">wfg.aon.ca</span>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-slate-700">2.</span> Click on “Health & Benefits”
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <span className="font-bold text-slate-700">3.</span> Get a quote instantly
                  </li>
                </ul>
                <div className="mt-auto">
                   <button className="w-full py-3 px-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                    Get Quote Now <ArrowRight size={16} />
                  </button>
                </div>
             </div>
           </div>

           {/* Reminder Note */}
           <div className="max-w-3xl mx-auto mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
              <Info className="text-amber-600 shrink-0 mt-1" />
              <div className="text-sm text-amber-900 space-y-2">
                <p className="font-bold">Important Reminder:</p>
                <p>
                  If you did not set up a personalized link, email <a href="mailto:wfg.aon@greenshield.ca" className="underline hover:text-amber-700">wfg.aon@greenshield.ca</a> with:
                </p>
                <ul className="list-disc list-inside pl-2 space-y-1 text-amber-800/80">
                  <li>Subject: WFG Health Assist Application</li>
                  <li>Body: Full name of applicant, full name of WFG advisor, and code</li>
                </ul>
                <p className="mt-2 text-xs opacity-80">
                  Your client will not receive outbound calls. They will only be contacted upon purchasing a product.
                </p>
              </div>
           </div>
        </div>

        {/* Footer Note */}
        <div className="text-center pt-8 border-t border-slate-100">
          <p className="text-slate-500 text-sm">
            The Advisor Portal provides fast and easy access to Health Assist product information.<br/>
            Visit: <a href="https://www.greenshield.ca/GShealthassist" target="_blank" rel="noreferrer" className="text-teal-600 hover:underline font-medium">www.greenshield.ca/GShealthassist</a>
          </p>
        </div>

      </div>
    </section>
  );
};
