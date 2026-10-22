import React from 'react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-slate-900/60 border-b border-slate-800/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-display tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5 text-center sm:text-left">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
