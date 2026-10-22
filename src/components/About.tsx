import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Compass, Sparkles, CheckCircle2, ArrowUpRight, FileText } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const philosophies = [
    {
      title: 'Zero-Downtime Modernization',
      description: 'Upgrading enterprise monoliths to modern modular architectures (e.g. Angular v13 to v21) using ng update schematics, standalone APIs, and modern control flow without interrupting client operations.'
    },
    {
      title: 'Multi-Tenant Backend Architecture',
      description: 'Designing resilient RESTful microservices with Node.js and Express.js, partitioning tenant data in MongoDB with custom middleware, and optimizing aggregation pipelines for high data volume.'
    },
    {
      title: 'Reactive & Fine-Grained State',
      description: 'Balancing NgRx for complex global business workflows with modern Angular Signals for fine-grained local state, minimizing change detection passes and boosting UI responsiveness.'
    },
    {
      title: 'Security & Access Control by Design',
      description: 'Enforcing granular Role-Based Access Control (RBAC), stateless JWT authentication, cryptographic secret management, and strict payload validation across all public and internal endpoints.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            01. Professional Profile
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Engineering scalable systems with deep architectural discipline.
          </h2>
          <p className="text-slate-400 text-base max-w-3xl">
            Bridging intuitive UI engineering with performant, secure backend microservices for enterprise telecom, finance, and higher education.
          </p>
        </div>

        {/* 2-Column Split: Summary & Narrative vs Education & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-400">
                {PERSONAL_INFO.careerObjective}
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono text-cyan-400">
                Architectural Core Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {philosophies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-slate-100">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Resume Quick Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Education</h3>
                    <p className="text-xs text-cyan-400 font-mono">Formal Engineering Degree</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
                  {EDUCATION_DATA.year}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <h4 className="text-sm font-semibold text-slate-100">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-xs text-cyan-300 font-medium">
                  {EDUCATION_DATA.field}
                </p>
                <p className="text-xs text-slate-400">
                  {EDUCATION_DATA.institution} · <span className="font-mono text-slate-300">{EDUCATION_DATA.grade}</span>
                </p>
              </div>

              <ul className="space-y-1.5 pt-2 text-xs text-slate-400">
                {EDUCATION_DATA.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">·</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Resume Download Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Verified Resume</h3>
                  <p className="text-xs text-slate-400">Full Stack Developer · 2 Pages</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Contains complete breakdown of SmartConnectt Technologies Hub Admin, Paptronics EdTech modules, technical skill taxonomy, and academic credentials.
              </p>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={onOpenResume}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/20"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect PDF Resume</span>
                </button>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Vaibhav_Jeughale_Full_Stack_Developer.pdf"
                  className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                >
                  Download
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
