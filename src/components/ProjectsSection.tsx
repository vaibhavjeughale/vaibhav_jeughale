import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';
import {
  ExternalLink,
  Code2,
  Layers,
  ArrowUpRight,
  Database,
  Terminal,
  Server,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Enterprise MEAN', 'Full Stack MERN', 'EdTech & Systems'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              04. Featured Implementations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Production Systems & Full Stack Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Architectural blueprints, multi-tenant schemas, reactive Angular frontends, and RESTful microservices.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Bento Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-lg p-6 sm:p-7"
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                    {project.company && (
                      <span className="text-slate-400 font-medium hidden sm:inline">
                        {project.company}
                      </span>
                    )}
                  </div>
                  <span className="text-slate-500">{project.period}</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 pb-1 border-y border-slate-800/80">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 bg-slate-950/70 rounded-lg border border-slate-800/50">
                      <span className="block text-base font-bold text-white font-mono tabular-nums">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-950 rounded border border-slate-800/90"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="text-[11px] text-slate-500 font-mono">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>Inspect Architecture & Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="View Details"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
