import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export const ContactsFooter: React.FC = () => {
  return (
    <section id="contacts" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Action Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-20 pb-12 border-b border-slate-100">
          <a href="https://instagram.com/AonCanReferrals" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
            <div className="p-2 bg-slate-50 text-slate-400 group-hover:text-teal-600 rounded-full transition-colors">
              <Instagram size={20} />
            </div>
            <span className="text-slate-600 group-hover:text-teal-700 font-medium transition-colors">
              Follow us on Instagram: <span className="font-bold">@AonCanReferrals</span>
            </span>
          </a>
          <a href="mailto:wfgreferrals@aon.ca" className="flex items-center gap-2 group">
             <div className="p-2 bg-slate-50 text-slate-400 group-hover:text-teal-600 rounded-full transition-colors">
              <Mail size={20} />
            </div>
            <span className="text-slate-600 group-hover:text-teal-700 font-medium transition-colors">
              Email all inquiries to: <span className="font-bold">wfgreferrals@aon.ca</span>
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* COLUMN 1: WFG Champions */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-teal-500 inline-block mb-6 pb-1">
                WFG Champions
              </h3>
              
              <div className="mb-6">
                <p className="font-bold text-slate-900">Jessica Bowler</p>
                <p className="text-sm text-slate-600 mb-1">Vice President and National Program Manager</p>
                <p className="text-sm text-slate-600">+1 647 259 5216</p>
                <a href="mailto:jessica.bowler@aon.ca" className="text-sm text-teal-600 hover:underline">jessica.bowler@aon.ca</a>
              </div>

              <div>
                <p className="font-bold text-slate-900">Shannon Murphy</p>
                <p className="text-sm text-slate-600 mb-1">Associate Account Executive — National</p>
                <p className="text-sm text-slate-600">+1 416 227 5867</p>
                <p className="text-sm text-slate-600">m +1 416 571 0481</p>
                <a href="mailto:shannon.murphy@aon.ca" className="text-sm text-teal-600 hover:underline">shannon.murphy@aon.ca</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2">Pet Insurance</h4>
              <a href="https://petsplusus.com/partner/aon" target="_blank" rel="noreferrer" className="block text-sm text-teal-600 hover:underline mb-1">
                petsplusus.com/partner/aon
              </a>
              <p className="text-sm text-slate-600">1 800 364 8422</p>
            </div>
          </div>

          {/* COLUMN 2: Home and Auto */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-teal-500 inline-block mb-6 pb-1">
                Home and Auto
              </h3>
              
              <div className="mb-6">
                <p className="font-bold text-slate-900">Jady Fitton</p>
                <p className="text-sm text-slate-600 mb-1">National Group Business Development Leader</p>
                <p className="text-sm text-slate-600">+1 416 227 3589</p>
                <a href="mailto:jady.fitton@aon.ca" className="text-sm text-teal-600 hover:underline">jady.fitton@aon.ca</a>
              </div>

              <div>
                <p className="text-lg font-medium text-slate-900">1 800 448 2539</p>
                <p className="text-sm text-slate-600 mt-1">Monday to Friday</p>
                <p className="text-sm text-slate-600">8:00 a.m. – 6:00 p.m. (ET)</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2">Individual Health and Benefits</h4>
              <a href="https://HealthAssist.aon.ca" target="_blank" rel="noreferrer" className="block text-sm text-teal-600 hover:underline mb-1">
                HealthAssist.aon.ca
              </a>
              <a href="mailto:wfgaon@greenshield.ca" className="block text-sm text-teal-600 hover:underline mb-1">
                wfgaon@greenshield.ca
              </a>
              <p className="text-sm text-slate-600">1 844 898 4742</p>
            </div>
          </div>

          {/* COLUMN 3: Commercial */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide border-b border-teal-500 inline-block mb-6 pb-1">
                Commercial
              </h3>
              
              <div className="mb-6">
                <p className="font-bold text-slate-900">Sireen Cheng</p>
                <p className="text-sm text-slate-600 mb-1">Business Development Executive — Eastern Canada</p>
                <p className="text-sm text-slate-600">+1 416 896 8889</p>
                <a href="mailto:sireen.cheng@aon.ca" className="text-sm text-teal-600 hover:underline">sireen.cheng@aon.ca</a>
              </div>

              <div>
                <p className="text-lg font-medium text-slate-900">1 877 766 9069</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2">Employee Health and Benefits</h4>
              <a href="mailto:wgfsales@greenshield.com" className="block text-sm text-teal-600 hover:underline mb-1">
                wgfsales@greenshield.com
              </a>
              <p className="text-sm text-slate-600">1 855 478 7973 option 2</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};