import React, { useState } from 'react';
import { 
  Home, 
  Car, 
  Shield, 
  Percent, 
  AlertCircle, 
  FileText, 
  Phone, 
  MousePointerClick,
  CheckCircle2,
  Building,
  Key
} from 'lucide-react';

export const HomeAndAuto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'property' | 'auto'>('property');

  return (
    <section id="home-and-auto" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Comprehensive Protection</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Home and Auto
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Aon provides customized Home & Auto insurance solutions tailored to your client’s exact needs. Below are the available coverage options, optional add-ons, discounts, and the information required to obtain a quote.
          </p>
        </div>

        {/* Coverage Tabs Section */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden mb-20">
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('property')}
              className={`flex-1 py-4 px-6 text-sm font-semibold sm:text-base flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'property' 
                  ? 'bg-white text-brand-red border-b-2 border-brand-red' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Home size={20} /> Property Coverage
            </button>
            <button
              onClick={() => setActiveTab('auto')}
              className={`flex-1 py-4 px-6 text-sm font-semibold sm:text-base flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'auto' 
                  ? 'bg-white text-brand-red border-b-2 border-brand-red' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Car size={20} /> Auto Coverage
            </button>
          </div>

          <div className="p-8 bg-white">
            {activeTab === 'property' && (
              <div className="grid gap-12 lg:grid-cols-3">
                {/* Type */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Home size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Type</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Principle residence",
                      "Condominiums",
                      "Additional dwellings",
                      "Secondary and seasonal homes",
                      "Cottages",
                      "Tenant/Rental properties",
                      "Home-based business"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="mt-0.5 text-blue-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Coverage */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                      <Shield size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Optional Coverage</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Sewer backup / water damage",
                      "Earthquake",
                      "Overland water",
                      "Personal umbrella",
                      "Scheduled articles"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="mt-0.5 text-purple-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discounts */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-green-50 text-green-600">
                      <Percent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Discounts</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "New home / age",
                      "Loyalty",
                      "Claims-free",
                      "Green power",
                      "Non-smoker"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="mt-0.5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'auto' && (
              <div className="space-y-8">
                <div className="grid gap-12 lg:grid-cols-3">
                  {/* Type */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                        <Car size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Type</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Personal vehicle",
                        "Recreational vehicle",
                        "Antique / Collector cars",
                        "Motorcycle",
                        "RV / Motorhome",
                        "Boat / Watercraft",
                        "Trailer"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 size={18} className="mt-0.5 text-blue-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Coverage */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                        <Shield size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Optional Coverage</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="mt-0.5 text-purple-500 flex-shrink-0" />
                        <span>Accident waiver</span>
                      </li>
                    </ul>
                  </div>

                  {/* Discounts */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-green-50 text-green-600">
                        <Percent size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Discounts</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Multi-vehicle",
                        "Mature driver",
                        "Anti-theft alarm",
                        "Loyalty / Stability",
                        "Hybrid vehicle",
                        "Claims-free",
                        "Short commute",
                        "Winter tire"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 size={18} className="mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-amber-50 p-4 border border-amber-200 flex items-start gap-3">
                  <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> Auto insurance requirements vary by province. In British Columbia, Manitoba, and Saskatchewan, government-regulated auto insurance applies. An Aon personal insurance broker will help you understand exactly what is needed.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Information Required Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <FileText className="text-brand-red" size={28} />
            <h3 className="text-2xl font-bold text-slate-900">Information Required to Obtain a Quote</h3>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* AUTO CARD */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4 text-brand-navy">
                <Car className="shrink-0" />
                <h4 className="font-bold text-lg uppercase tracking-wide">Auto</h4>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-brand-orange">•</span> VIN, year, make, model, purchase date</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Annual kilometres + commute kilometres</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Driver’s licence info + dates</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Claims in last 9 years</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Convictions</li>
              </ul>
            </div>

            {/* PROPERTY CARD */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4 text-brand-navy">
                <Home className="shrink-0" />
                <h4 className="font-bold text-lg uppercase tracking-wide">Property</h4>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Year built</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Square footage & Number of storeys</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Construction type & Dwelling type</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Basement details</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Occupancy date</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Heat/roof/electrical/plumbing updates</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Discounts: No mortgage, alarm system, good credit (soft check)</li>
              </ul>
            </div>

            {/* CONDO / TENANTS CARD */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4 text-brand-navy">
                <Building className="shrink-0" />
                <h4 className="font-bold text-lg uppercase tracking-wide">Condo / Tenants</h4>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Year built</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Square footage & Number of storeys</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Construction type</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Alarm system</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Year of updates</li>
                <li className="flex gap-2"><span className="text-brand-orange">•</span> Good credit (soft check)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Get a Quote */}
        <div className="bg-brand-navy rounded-2xl p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center sm:text-left">How to Get a Quote</h3>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Option 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-brand-orange">
                  <Phone size={24} />
                  <h4 className="font-bold text-lg">Option 1: Call Us</h4>
                </div>
                <p className="text-slate-200 mb-4">Speak with a home and auto insurance broker directly.</p>
                <a href="tel:1-800-448-2539" className="text-3xl font-bold text-white block mb-2 hover:text-brand-orange transition-colors">1-800-448-2539</a>
                <p className="text-sm text-slate-400">Ensure your client provides your WFG code for referral fees.</p>
              </div>

              {/* Option 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                 <div className="flex items-center gap-3 mb-4 text-brand-orange">
                  <MousePointerClick size={24} />
                  <h4 className="font-bold text-lg">Option 2: Online Referral</h4>
                </div>
                <p className="text-slate-200 mb-4">Submit a quick referral form online.</p>
                <ul className="space-y-2 text-sm text-slate-300 mb-6">
                  <li className="flex gap-2">1. Visit <span className="text-white font-semibold">wfg.aon.ca</span></li>
                  <li className="flex gap-2">2. Click "Home & Auto"</li>
                  <li className="flex gap-2">3. Submit the referral form</li>
                </ul>
                <div className="inline-block px-4 py-2 bg-brand-red rounded-lg text-sm font-semibold text-white">
                  Clients contacted within 3 business days
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-brand-red opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};