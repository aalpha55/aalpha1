import React from 'react';
import { 
  Banknote, 
  Percent, 
  AlertCircle, 
  CheckCircle2,
  FileSignature
} from 'lucide-react';

export const ReferralFees: React.FC = () => {
  return (
    <section id="referral-fees" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-teal-600">Compensation</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Referral Fees
          </h2>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Column: Description & Note */}
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-100 text-teal-700 rounded-lg shadow-sm">
                    <Banknote size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Program Overview</h3>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Referral fees are available on closed won business to licensed advisors in British Columbia, Alberta, Saskatchewan, Ontario, Québec, Prince Edward Island and Northwest Territories.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Once a policy is bound with Aon, WFG advisors will receive a referral fee based on the annual premium paid by your client.
                </p>
              </div>

              {/* Important Note Box */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mt-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-amber-500 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Important Compliance Requirement</h4>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      You must complete the WFG referral course found at <a href="http://hllqp.com" className="text-teal-600 font-medium hover:underline">hllqp.com</a> before referring your clients to Aon. When submitting a referral please ensure your client signs the disclosure form.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-lg inline-flex border border-slate-100">
                      <FileSignature size={16} className="text-teal-600" />
                      Download forms at <a href="http://www.mywfg.com" className="text-teal-600 hover:underline">www.mywfg.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Fee Structure */}
            <div className="bg-white border-t lg:border-t-0 lg:border-l border-slate-200 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-teal-100 text-teal-700 rounded-lg shadow-sm">
                  <Percent size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Fee Structure</h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Home", value: "5%" },
                  { label: "Health and Benefits", value: "5%" },
                  { label: "Commercial", value: "2.5% – 5%" },
                  { label: "Auto", value: "2.5%" },
                  { label: "Pet", value: "2%" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-teal-500 group-hover:text-teal-600 transition-colors" size={20} />
                      <span className="font-semibold text-slate-700 text-lg">{item.label}</span>
                    </div>
                    <span className="font-bold text-xl text-teal-700 bg-white px-4 py-1 rounded-lg border border-teal-100 shadow-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <p className="mt-8 text-sm text-slate-400 italic text-center">
                * Percentages based on annual premium paid by client.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};