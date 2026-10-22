import React, { useState, useMemo } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';
import { Search, Code2, Server, Database, GitBranch, Layers, Check, X, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = [
    'All',
    'Frontend & Modern Angular',
    'Backend & APIs',
    'Database',
    'State & Async',
    'UI & DevOps'
  ];

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend & Modern Angular':
        return Code2;
      case 'Backend & APIs':
        return Server;
      case 'Database':
        return Database;
      case 'State & Async':
        return Layers;
      default:
        return GitBranch;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              02. Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Enterprise MERN & MEAN Stack Matrix
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Battle-tested tools and frameworks utilized across production telecom, banking, insurance, and academic platforms.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill or keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs / Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const IconComponent = getCategoryIcon(skill.category);
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon + Meta */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span>{skill.experienceYears}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-cyan-400/90">{skill.level}% Proficiency</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Proficiency Gauge Bar */}
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                    {skill.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="hover:text-slate-200 transition-colors">{tag}</span>
                        {i < skill.tags.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-400">No skills match "{searchQuery}" in this category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{selectedSkill.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{selectedSkill.category}</span>
                  <span>·</span>
                  <span>{selectedSkill.experienceYears}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-sm text-slate-300">
              <h4 className="text-xs uppercase font-mono text-cyan-400 tracking-wider">Enterprise Application</h4>
              <p className="leading-relaxed text-xs sm:text-sm">{selectedSkill.description}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-mono text-cyan-400 tracking-wider">Related Technologies & Sub-skills</h4>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {selectedSkill.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
