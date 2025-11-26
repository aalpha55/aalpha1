import React from 'react';
import { 
  Check, 
  ArrowRight, 
  Car, 
  Heart, 
  Briefcase, 
  PawPrint, 
  Building2, 
  Handshake, 
  ShieldCheck, 
  Banknote, 
  Phone 
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] w-full flex items-center overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Dark Texture Background" 
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">Exclusive Partnership</span>
          </div>
          
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-sans">
            <span className="text-[#E61B2E]">AON</span> x WFG <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Advisor Playbook</span>
          </h1>
          
          <p className="mt-4 text-xl font-medium text-slate-200">
            A complete overview of insurance products and referral programs for Canadian WFG advisors and associates.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-3xl">
            This playbook provides Canadian World Financial Group (WFG) advisors and associates with a full overview of the insurance products available through Aon. It explains what comes standard, what questions our brokers ask clients, and the complete process for submitting referrals.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center rounded-lg bg-brand-red px-8 py-4 text-base font-bold text-white transition-all hover:bg-red-700 shadow-lg hover:shadow-red-500/25"
            >
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutPartnership: React.FC = () => {
  const offerings = [
    "Home and auto",
    "Individual health and benefits",
    "Employee health and dental",
    "Commercial business insurance",
    "Pet insurance"
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Our Partnership</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Our Referral Programs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Since early 2013, Aon and World Financial Group (WFG) have partnered to launch a series of client referral programs and exclusive coverages for Canadian WFG advisors and associates.
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {offerings.map((item, index) => (
            <div key={index} className="flex items-center rounded-full bg-white px-6 py-3 shadow-sm border border-slate-200">
              <span className="mr-3 h-2 w-2 rounded-full bg-brand-orange"></span>
              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyPartner: React.FC = () => {
  const benefits = [
    "Build and enhance your client relationships",
    "Reassess your or your clients’ insurance to get the best coverage and competitive rates",
    "Recruit new team members using products from a leading global insurance broker",
    "Help your clients save money they can reinvest into core WFG products (life insurance, CI, RESPs)",
    "Earn referral fees as long as your clients stay with Aon (available in certain jurisdictions)"
  ];

  return (
    <section id="whyaon" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
              alt="Team collaboration" 
              className="h-[600px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
          </div>

          {/* Right Column: Content */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Advisor Benefits</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Work With Aon?
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We help WFG advisors and associates protect and grow their wealth while empowering their clients to do the same. Through Aon, you gain access to referral programs, discounts, and expert insurance solutions designed to support your business and your clients.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-white">
                      <Check size={16} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-slate-900 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Programs: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Home and Auto",
      description: "Protect your clients' most valuable assets with comprehensive home and vehicle coverage.",
      icon: <Car size={24} />,
    },
    {
      title: "Health and Benefits",
      description: "Individual health and dental plans for clients without employer coverage.",
      icon: <Heart size={24} />,
    },
    {
      title: "Commercial Business Insurance",
      description: "Tailored insurance solutions for businesses of all sizes and industries.",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Pet Insurance",
      description: "Ensuring the health and well-being of family pets with comprehensive care plans.",
      icon: <PawPrint size={24} />,
    },
    {
      title: "Health and Benefits for Small Business",
      description: "Competitive health and dental benefit packages designed specifically for small businesses.",
      icon: <Building2 size={24} />,
    },
    {
      title: "Referral Program",
      description: "A streamlined program rewarding advisors for connecting clients with trusted coverage.",
      icon: <Handshake size={24} />,
    },
    {
      title: "Coverage for WFG Advisors/Associates",
      description: "Specialized protection plans designed exclusively for WFG Advisors and Associates.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Referral Fees",
      description: "Transparent and attractive compensation structure for successful client referrals.",
      icon: <Banknote size={24} />,
    },
    {
      title: "Contacts",
      description: "Direct access to specialized teams ready to assist you and your clients.",
      icon: <Phone size={24} />,
    }
  ];

  return (
    <section id="products" className="py-24 bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Services</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Contents List
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Explore the full range of Aon insurance products and services available to you in this playbook.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {services.map((service, index) => (
            <div key={index} className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-lg border border-slate-200 hover:border-brand-red/30 flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-slate-50 text-brand-red flex items-center justify-center flex-shrink-0 border border-slate-100 group-hover:bg-red-50 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};