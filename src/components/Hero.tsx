import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  FileText,
  ArrowRight,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Terminal,
  Layers,
  ShieldCheck,
  Database,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

const SNIPPETS = [
  {
    id: 'signals',
    title: 'Angular 21 Signals',
    lang: 'typescript',
    file: 'hub-product.service.ts',
    icon: Layers,
    badge: 'Frontend Modernization',
    code: `// Modern Angular 21 Standalone Service with Signals
@Injectable({ providedIn: 'root' })
export class HubProductService {
  private http = inject(HttpClient);
  
  // Reactive Signals for zero-overhead change detection
  readonly activeTenantId = signal<string>('telecom-core');
  readonly selectedFilter = signal<'ALL' | 'ACTIVE'>('ACTIVE');

  // Computed memoized product pipeline
  readonly tenantProducts = computed(() => {
    return this.productsList().filter(item => 
      this.selectedFilter() === 'ALL' || item.status === 'ACTIVE'
    );
  });

  // Upgrade legacy NgModules to Standalone APIs
  syncProductState(productId: string, config: ProductConfig) {
    return this.http.patch(\`/api/v1/hub/products/\${productId}\`, config);
  }
}`
  },
  {
    id: 'rbac',
    title: 'Node.js Express & RBAC',
    lang: 'typescript',
    file: 'rbac.middleware.ts',
    icon: ShieldCheck,
    badge: 'Enterprise Security',
    code: `// Role-Based Access Control (RBAC) & JWT Middleware
export const authorizeTenantAccess = (requiredRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as UserPayload;
      if (!requiredRoles.includes(decoded.role)) {
        return res.status(403).json({ error: 'Access forbidden: Insufficient role' });
      }

      req.tenantContext = { tenantId: decoded.tenantId, role: decoded.role };
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Token invalid or expired' });
    }
  };
};`
  },
  {
    id: 'mongo',
    title: 'MongoDB Aggregation',
    lang: 'javascript',
    file: 'tenant-metrics.pipeline.js',
    icon: Database,
    badge: 'Multi-Tenant Data',
    code: `// High-Performance Multi-Tenant Aggregation Pipeline
export const getHubTenantReport = async (tenantId) => {
  return await TenantProduct.aggregate([
    { $match: { tenantId, isDeleted: false } },
    {
      $facet: {
        summary: [
          { $group: { _id: "$domain", count: { $sum: 1 }, active: { $sum: { $cond: ["$isActive", 1, 0] } } } }
        ],
        recentDeployments: [
          { $sort: { updatedAt: -1 } },
          { $limit: 10 },
          { $project: { name: 1, version: 1, status: 1 } }
        ]
      }
    }
  ]);
};`
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeSnippet = SNIPPETS[activeSnippetIdx];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-900">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 rounded-md px-3 py-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full Stack Developer · MERN & MEAN Architecture</span>
            </div>

            {/* Headline with text-wrap balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Architecting scalable enterprise platforms with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400">
                Angular, Node.js & MongoDB
              </span>
              .
            </h1>

            {/* Candidate Narrative & Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. With{' '}
              <span className="text-cyan-300 font-medium">3+ years</span> of enterprise engineering experience, 
              I specialize in bridging high-performance frontends (Angular v13➔v21 with Signals & React) with 
              secure, scalable backend microservices (Node.js, Express, multi-tenant MongoDB).
            </p>

            {/* Quick Metadata Info */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg shadow-sm transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Domain Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-500 font-mono">Proven in:</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">Telecom</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">Banking</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">Insurance</span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">Higher EdTech</span>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    {activeSnippet.file}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/50 px-2 py-0.5 rounded">
                    {activeSnippet.badge}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                    title="Copy snippet"
                    aria-label="Copy code snippet"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Segmented Code Selector Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/40 p-1 gap-1">
                {SNIPPETS.map((snippet, idx) => {
                  const Icon = snippet.icon;
                  const isActive = idx === activeSnippetIdx;
                  return (
                    <button
                      key={snippet.id}
                      onClick={() => setActiveSnippetIdx(idx)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/80'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="truncate">{snippet.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Display Area */}
              <div className="p-4 bg-slate-950/90 font-mono text-xs overflow-x-auto text-slate-200 leading-relaxed max-h-[360px] scrollbar-thin">
                <pre tabIndex={0} className="focus:outline-none">
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>

              {/* Footer status bar in card */}
              <div className="px-4 py-2 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Production-Tested Code</span>
                <span className="text-slate-400">TypeScript · Node · MongoDB</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
