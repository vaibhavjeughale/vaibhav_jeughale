import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Linkedin, Mail, Phone, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
              VJ
            </div>
            <div>
              <p className="font-semibold text-slate-200">{PERSONAL_INFO.name}</p>
              <p className="text-[11px] text-slate-500">MERN & MEAN Stack Enterprise Engineer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
              title="Phone"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} {PERSONAL_INFO.shortName}. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
