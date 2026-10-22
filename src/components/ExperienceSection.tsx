import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCE_DATA[0].id);

  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            03. Career & Impact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Work Experience & Enterprise Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Direct ownership across mission-critical full-stack enterprise systems, frontend modernizations, and multi-tenant architectures.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-all duration-200 relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-cyan-300 font-medium">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{exp.location}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400 font-mono text-xs">{exp.employmentType}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3.5 py-1.5 rounded-lg border border-slate-800 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Context Summary */}
              <p className="py-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Products & Domains */}
              {exp.products && exp.products.length > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-500 font-mono">Unified Products:</span>
                  {exp.products.map((p) => (
                    <span key={p} className="px-2.5 py-1 bg-slate-950 text-cyan-300 rounded border border-slate-800 font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              )}

              {/* Bulleted Achievements from Resume */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Key Responsibilities & Measurable Outcomes
                </h4>
                <ul className="space-y-2.5">
                  {exp.keyAchievements.map((achieve, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs text-slate-300 bg-slate-950 rounded-md border border-slate-800 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
