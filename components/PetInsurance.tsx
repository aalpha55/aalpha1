import React from 'react';
import { 
  PawPrint, 
  HeartPulse, 
  Stethoscope, 
  Syringe, 
  Award, 
  Phone, 
  Search, 
  LifeBuoy, 
  FileText, 
  MousePointerClick,
  Mail,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const PetInsurance: React.FC = () => {
  return (
    <section id="pet-insurance" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-teal-600">Pets Plus Us</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pet Insurance
          </h2>
          <p className="mt-4 text-xl font-medium text-slate-600">
            We don’t like to think of pets getting sick or injured, but it can happen.
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Aon works with Pets Plus Us to provide customized insurance coverage that will give your clients’ pets the protection they deserve. Coverage available for cats and dogs can include, but is not limited to:
          </p>
        </div>

        {/* Coverage Categories (3-Column Table) */}
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          
          {/* Col 1: Accident and Illness */}
          <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full bg-slate-50">
            <div className="p-6 border-b border-slate-200 bg-white">
              <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Accident and Illness</h3>
              <p className="text-sm text-slate-500 mt-2">Treatment Due to Accidents and Illnesses</p>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-3">
                {[
                  "Illness",
                  "Diagnosis",
                  "Injuries and accidents",
                  "Prescription medications",
                  "Hospitalization",
                  "Alternative therapies",
                  "Surgery",
                  "Behavioural therapies",
                  "Hereditary conditions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 2: Accident */}
          <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full bg-slate-50">
             <div className="p-6 border-b border-slate-200 bg-white">
              <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Accident</h3>
              <p className="text-sm text-slate-500 mt-2">Treatment Due to Accidents</p>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-3">
                {[
                  "Consultations",
                  "Exams",
                  "Emergency care",
                  "Hospitalization",
                  "Prescription medications",
                  "Surgery"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Wellness Care */}
          <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full bg-slate-50">
             <div className="p-6 border-b border-slate-200 bg-white">
              <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <Syringe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Wellness Care</h3>
              <p className="text-sm text-slate-500 mt-2">Routine and Seasonal Care</p>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-3">
                {[
                  "Exams",
                  "Vaccinations",
                  "Dental care",
                  "Flea prevention",
                  "Mature spay/neutering",
                  "Microchipping"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Blue Ribbon Benefits */}
        <div className="mb-20 bg-teal-50 rounded-2xl p-8 md:p-12 border border-teal-100">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-teal-600" size={32} />
            <h3 className="text-2xl font-bold text-slate-900">Blue Ribbon Benefits</h3>
          </div>
          <p className="mb-8 text-slate-700 text-lg">
            Pet owners with Pets Plus Us coverage enjoy free access to exclusive Blue Ribbon Benefits, including:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-teal-700">
                <Phone size={18} /> PetHelpFone™
              </div>
              <p className="text-sm text-slate-600">24/7 emergency veterinary support.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-teal-700">
                <AlertCircle size={18} /> Pet Poison Helpline®
              </div>
              <p className="text-sm text-slate-600">24/7 animal poison control support.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-teal-700">
                <Search size={18} /> PetLynx™
              </div>
              <p className="text-sm text-slate-600">Lost pet recovery services.</p>
            </div>
             <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-teal-700">
                <HeartPulse size={18} /> Compassionate Care Line
              </div>
              <p className="text-sm text-slate-600">Counselling for pet owners facing difficult pet health issues.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-teal-700">
                <LifeBuoy size={18} /> $1,000 Emergency Coverage
              </div>
              <p className="text-sm text-slate-600">If a pet incurs a life-threatening injury.</p>
            </div>
             <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-teal-700">
                <FileText size={18} /> Magazine Subscription
              </div>
              <p className="text-sm text-slate-600">Free subscription to <em>Modern Dog</em> or <em>Modern Cat</em> magazine.</p>
            </div>
          </div>
        </div>

        {/* Information Required */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            <FileText className="text-teal-600" /> Information Required to Obtain a Quote
          </h3>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <ul className="space-y-4">
                {[
                  "Pet’s name",
                  "Dog or cat",
                  "Breed"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 md:pl-8 pt-8 md:pt-0">
                {[
                  "Gender",
                  "Age",
                  "Postal code",
                  "Email"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How to Refer */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-teal-500 overflow-hidden shadow-xl">
            <div className="bg-teal-500 p-6 text-white text-center">
              <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                <MousePointerClick size={24} /> Option 1 — Obtain a quote online
              </h3>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8 max-w-md mx-auto">
                <li className="flex gap-3 text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-xs shrink-0 mt-0.5">1</span>
                  <span>Visit <span className="font-bold text-teal-700">wfg.aon.ca</span></span>
                </li>
                <li className="flex gap-3 text-slate-700">
                   <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-xs shrink-0 mt-0.5">2</span>
                  <span>Click on “Pet Insurance”</span>
                </li>
                <li className="flex gap-3 text-slate-700">
                   <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-xs shrink-0 mt-0.5">3</span>
                  <span>Get a quote</span>
                </li>
                 <li className="flex gap-3 text-slate-700">
                   <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-xs shrink-0 mt-0.5">4</span>
                  <span>Enter offer code <span className="font-bold text-teal-700">“WFG”</span></span>
                </li>
              </ul>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold">
                  <Mail size={18} className="text-teal-600" /> Reminder:
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  After your client purchases a policy, email <a href="mailto:insure@aon.ca" className="text-teal-600 hover:underline">insure@aon.ca</a> with:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-500 bg-white p-3 rounded border border-slate-100">
                  <div>• Subject: WFG Pet Insurance</div>
                  <div>• Applicant’s full name</div>
                  <div>• WFG advisor’s full name</div>
                  <div>• WFG advisor’s code</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};