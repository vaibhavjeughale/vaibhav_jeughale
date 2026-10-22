import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { X, Check, Copy, ExternalLink, GitBranch, Cpu, Layers, Terminal, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-0.5 rounded">
              {project.category}
            </span>
            {project.company && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-slate-300 font-medium">{project.company}</span>
              </>
            )}
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{project.period}</span>
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-300 font-medium">{project.subtitle}</p>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-slate-800">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
              <span className="block text-xl font-bold text-cyan-400 font-mono tabular-nums">
                {m.value}
              </span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Executive Summary & Architecture Overview */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider">System Architecture</h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            {project.architectureOverview}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="space-y-2.5">
          <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider">Engineered Features & Solutions</h4>
          <ul className="space-y-2">
            {project.keyHighlights.map((hl, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Production Code Snippet Preview */}
        {project.codeSnippet && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Sample Production Implementation ({project.codeSnippet.filename})</span>
              </h4>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 rounded border border-slate-700 transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto max-h-56">
              <pre tabIndex={0} className="focus:outline-none">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider">Integrated Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 rounded border border-slate-700/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Authored & Maintained by Vaibhav Jeughale
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
