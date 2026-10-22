import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILLS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Eye,
  AlignLeft
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeView, setActiveView] = useState<'pdf' | 'text'>('pdf');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Resume Document Modal"
    >
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="text-xs font-normal text-slate-400 hidden sm:inline">· Full Stack Resume</span>
              </h3>
              <p className="text-[11px] text-cyan-400 font-mono">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          {/* View Mode Toggle & Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* View switcher */}
            <div className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5">
              <button
                onClick={() => setActiveView('pdf')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeView === 'pdf'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
              <button
                onClick={() => setActiveView('text')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeView === 'text'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <AlignLeft className="w-3.5 h-3.5" />
                <span>Structured CV</span>
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Vaibhav_Jeughale_Full_Stack_Developer.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-medium transition-colors shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-colors border border-slate-700"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 shrink-0">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.email}</span>
              {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
            </button>

            <button
              onClick={handleCopyPhone}
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.phone}</span>
              {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
            </button>
          </div>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:underline"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.linkedinDisplay}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Modal Main Content Area */}
        <div className="flex-1 overflow-hidden relative bg-slate-950">
          
          {/* PDF Viewer Mode */}
          {activeView === 'pdf' ? (
            <div className="w-full h-full flex flex-col">
              <object
                data={PERSONAL_INFO.resumeUrl}
                type="application/pdf"
                className="w-full h-full border-none"
              >
                {/* Fallback if browser blocks PDF embedding */}
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <FileText className="w-16 h-16 text-cyan-400/60" />
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Full Stack Developer Resume</h4>
                    <p className="text-xs text-slate-400 max-w-md">
                      If the inline PDF preview is not rendered directly by your browser, you can switch to the Structured CV tab or download the file.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={PERSONAL_INFO.resumeUrl}
                      download="Vaibhav_Jeughale_Full_Stack_Developer.pdf"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md"
                    >
                      Download Resume PDF
                    </a>
                    <button
                      onClick={() => setActiveView('text')}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg"
                    >
                      View Structured Text CV
                    </button>
                  </div>
                </div>
              </object>
            </div>
          ) : (
            /* Structured Text Resume Mode */
            <div className="w-full h-full overflow-y-auto p-6 sm:p-10 space-y-8 max-w-4xl mx-auto font-sans text-slate-200">
              
              {/* Header */}
              <div className="border-b border-slate-800 pb-6 space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-sm font-semibold text-cyan-400">
                  {PERSONAL_INFO.title} (MERN & MEAN Stack)
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                  <span>{PERSONAL_INFO.location}</span>
                  <span>·</span>
                  <span>{PERSONAL_INFO.phone}</span>
                  <span>·</span>
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>

              {/* Career Objective */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Career Objective
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Work Experience */}
              <div className="space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Work Experience
                </h3>
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="space-y-2 border-l-2 border-cyan-500/40 pl-4 py-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">
                        {exp.role} <span className="text-cyan-400">| {exp.company}</span>
                      </h4>
                      <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      {exp.keyAchievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Key Technical Skills */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Technical Skills Summary
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-slate-200 block mb-1">Frontend & Modern Angular:</span>
                    <span className="text-slate-400">Angular (v13 to v21), TypeScript, Standalone Components, Signals, SSR & Hydration, Typed Reactive Forms, @if/@for control flow, Deferrable Views, React.js.</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-slate-200 block mb-1">Backend & APIs:</span>
                    <span className="text-slate-400">Node.js, Express.js, RESTful API Design, JWT Authentication, Custom Middleware, Role-based Access Control (RBAC), Error Handling.</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-slate-200 block mb-1">Database & Architecture:</span>
                    <span className="text-slate-400">MongoDB, Mongoose ODM, Multi-Tenant Schema Design, Query Indexing, Aggregation Pipelines.</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-slate-200 block mb-1">State & DevOps:</span>
                    <span className="text-slate-400">NgRx (Store, Actions, Reducers, Effects, Selectors), RxJS Operators, Angular Material, Bootstrap, Tailwind CSS, Git/GitHub, Postman, CI/CD, Jasmine/Karma, Agile/JIRA.</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-2 border-t border-slate-800 pt-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Education
                </h3>
                <div className="text-xs sm:text-sm text-slate-300">
                  <p className="font-bold text-white">{EDUCATION_DATA.degree} in {EDUCATION_DATA.field}</p>
                  <p className="text-slate-400">{EDUCATION_DATA.institution} · {EDUCATION_DATA.grade} · Year {EDUCATION_DATA.year}</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono shrink-0">
          <span>File: Full_Stack_developer_b501380b.pdf</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white px-3 py-1 rounded hover:bg-slate-800 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
