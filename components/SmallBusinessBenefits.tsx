import React from 'react';
import { 
  Building2, 
  MousePointerClick, 
  Phone, 
  Hexagon,
  ArrowRight
} from 'lucide-react';

export const SmallBusinessBenefits: React.FC = () => {
  return (
    <section id="small-business-benefits" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-teal-600">Honeybee Benefits</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Health and Benefits for Small Business Referral Program
          </h2>
        </div>

        {/* Intro & Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Intro & Plans */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Introduction */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Hexagon className="text-teal-600 fill-teal-50" /> Introducing Honeybee Benefits
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Honeybee offers digital benefits with unparalleled flexibility and personalized options. With customizable benefits plans for experienced Canadian businesses with 5 to 150 employees and standardized packages for small businesses, new-to-employee benefits with less than 25 employees — Honeybee has a plan that works for everyone.
                    </p>
                </div>

                {/* Plans Table */}
                <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-teal-50 border-b border-teal-100">
                        <div className="p-4 font-bold text-teal-800 md:col-span-1 uppercase text-sm tracking-wide">Plans Offered</div>
                        <div className="p-4 font-bold text-teal-800 md:col-span-2 uppercase text-sm tracking-wide">Plan Descriptions</div>
                    </div>
                    
                    <div className="divide-y divide-slate-100">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 hover:bg-slate-50 transition-colors">
                            <div className="font-bold text-slate-900 mb-2 md:mb-0 md:col-span-1 text-lg">Honeybee Select</div>
                            <div className="text-slate-600 text-sm md:col-span-2 leading-relaxed">
                                Simplified employee benefits for “virgin” businesses with &lt;25 employees. Three plan designs and a quote in less than 24 hours… guaranteed!
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 hover:bg-slate-50 transition-colors">
                            <div className="font-bold text-slate-900 mb-2 md:mb-0 md:col-span-1 text-lg">Honeybee</div>
                            <div className="text-slate-600 text-sm md:col-span-2 leading-relaxed">
                                Comprehensive and fully customizable digital benefits solutions for Canadian businesses 5 to 150 lives with group benefits experience.
                            </div>
                        </div>

                        {/* Row 3 */}
                         <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 hover:bg-slate-50 transition-colors">
                            <div className="font-bold text-slate-900 mb-2 md:mb-0 md:col-span-1 text-lg">Honeybee Health Account</div>
                            <div className="text-slate-600 text-sm md:col-span-2 leading-relaxed">
                                A customizable health savings account (HSA) that covers expenses such as vision, acupuncture, massage therapy and more.
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 hover:bg-slate-50 transition-colors">
                            <div className="font-bold text-slate-900 mb-2 md:mb-0 md:col-span-1 text-lg">Honeybee Allowance Account</div>
                            <div className="text-slate-600 text-sm md:col-span-2 leading-relaxed">
                                Employee-customizable coverage to cover everything from wellness, pet care, fitness and more.
                            </div>
                        </div>

                        {/* Row 5 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 hover:bg-slate-50 transition-colors">
                            <div className="font-bold text-slate-900 mb-2 md:mb-0 md:col-span-1 text-lg">Honeybee Administrative Services Only (ASO)</div>
                            <div className="text-slate-600 text-sm md:col-span-2 leading-relaxed">
                                Coverage against catastrophic employee claims. They pay for claims up to a reasonable deductible to keep premiums low (think low-cost, high-frequency-type claims), and they assume risk only up to that deductible amount.
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Footer */}
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 flex items-start gap-3">
                    <Building2 className="text-slate-400 shrink-0 mt-1" size={20} />
                    <p className="text-slate-600 text-sm italic">
                        “Honeybee is provided and administered by Benecaid Health Benefit Solutions Inc., a licensed insurance agent with over 20 years of experience and providing health and dental benefits to small and medium-sized businesses.”
                    </p>
                </div>

            </div>

            {/* Right Column: Referral Box */}
            <div className="lg:col-span-1">
                <div className="bg-teal-600 text-white rounded-2xl p-8 sticky top-24 shadow-xl">
                    <h3 className="text-xl font-bold mb-6 border-b border-teal-500 pb-4">How to Refer Your Client</h3>
                    
                    {/* Option 1 */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3 font-bold text-teal-100 uppercase tracking-wider text-xs">
                            <MousePointerClick size={16} /> Option 1
                        </div>
                        <h4 className="font-bold text-lg mb-2">Submit an online referral</h4>
                        <ul className="space-y-3 text-teal-50 text-sm">
                            <li className="flex gap-3">
                                <span className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-sm">1</span> 
                                Visit <span className="font-bold text-white">wfg.aon.ca</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-sm">2</span> 
                                Click on “Group Health and Dental — Employee Benefits”
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-sm">3</span> 
                                Complete and submit a referral form
                            </li>
                        </ul>
                    </div>

                    {/* Option 2 */}
                    <div>
                        <div className="flex items-center gap-2 mb-3 font-bold text-teal-100 uppercase tracking-wider text-xs">
                            <Phone size={16} /> Option 2
                        </div>
                        <h4 className="font-bold text-lg mb-2">Speak with a Benecaid account executive</h4>
                        <p className="text-teal-50 text-sm mb-4 leading-relaxed">
                            Call the dedicated WFG Benecaid telephone line with your advisor code to speak with an account executive to review your client’s needs.
                        </p>
                        <div className="bg-teal-700/50 rounded-lg p-4 text-sm border border-teal-500/30">
                            <p className="mb-1 text-teal-200 text-xs font-semibold uppercase">For further information:</p>
                            <a href="mailto:wfgsales@greenshield.ca" className="block text-white hover:underline mb-2 font-medium">wfgsales@greenshield.ca</a>
                            <p className="text-teal-200 text-xs font-semibold uppercase mb-1">Or Call:</p>
                            <a href="tel:1-855-478-7973" className="flex items-center gap-2 font-bold text-white text-lg hover:text-teal-100 transition-colors">
                                1-855-478-7973 <ArrowRight size={16} />
                            </a>
                            <span className="text-xs text-teal-300 block mt-1">Select option 2</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};