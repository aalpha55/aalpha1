import React from 'react';
import { Header } from './components/Header';
import { Hero, WhyPartner, Programs, AboutPartnership } from './components/LandingSections';
import { HomeAndAuto } from './components/HomeAndAuto';
import { HealthAndBenefits } from './components/HealthAndBenefits';
import { CommercialInsurance } from './components/CommercialInsurance';
import { PetInsurance } from './components/PetInsurance';
import { SmallBusinessBenefits } from './components/SmallBusinessBenefits';
import { AdvisorCoverage } from './components/AdvisorCoverage';
import { ReferralFees } from './components/ReferralFees';
import { ContactsFooter } from './components/ContactsFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* SECTION 1 — Introduction */}
        <Hero />
        
        {/* SECTION 2 — Contents List (Services) */}
        <Programs />

        {/* SECTION 3 — Home and Auto */}
        <HomeAndAuto />

        {/* SECTION 4 — Health and Benefits */}
        <HealthAndBenefits />

        {/* SECTION 5 — Commercial Business Insurance */}
        <CommercialInsurance />

        {/* SECTION 6 — Pet Insurance */}
        <PetInsurance />
        
        {/* SECTION 7 — Health and Benefits for Small Business */}
        <SmallBusinessBenefits />

        {/* SECTION 8 — Coverage for WFG Advisors/Associates */}
        <AdvisorCoverage />

        {/* SECTION 9 — Referral Fees */}
        <ReferralFees />

        {/* SECTION 10 — About Our Referral Programs */}
        <AboutPartnership />

        {/* SECTION 11 — Why Work With Aon? */}
        <WhyPartner />

        {/* SECTION 12 — Contacts */}
        <ContactsFooter />
      </main>

      <footer className="bg-brand-navy border-t border-slate-800 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FinVantage / WFG Playbook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;