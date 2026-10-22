import React, { useState } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  ShieldAlert,
  Server,
  Zap,
  Copy,
  Check
} from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'api' | 'signals' | 'aggregation'>('api');

  // API Console State
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('auth');
  const [selectedRole, setSelectedRole] = useState<string>('SUPER_ADMIN');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<any>({
    status: 200,
    timeMs: 42,
    data: {
      message: 'Authentication successful',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c3ItOTk4MiIsInJvbGUiOiJTVVBFUl9BRE1JTiIsInRlbmFudElkIjoidGVsZWNvbS1jb3JlIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      user: {
        id: 'usr-9982',
        name: 'Enterprise Hub Admin',
        role: 'SUPER_ADMIN',
        tenantId: 'telecom-core',
        permissions: ['READ_ALL', 'WRITE_HUB', 'MANAGE_PRODUCTS', 'DEPLOY_CI_CD']
      }
    }
  });

  // Angular Signals Interactive State
  const [tenantFilter, setTenantFilter] = useState<'ALL' | 'TELECOM' | 'BANKING' | 'INSURANCE'>('ALL');
  const [signalCount, setSignalCount] = useState<number>(15);
  const [signalEffectTriggered, setSignalEffectTriggered] = useState<boolean>(false);

  // MongoDB Aggregation Active Stage
  const [activeAggStage, setActiveAggStage] = useState<number>(0);

  const endpoints = [
    {
      id: 'auth',
      method: 'POST',
      url: '/api/v1/auth/login',
      desc: 'JWT authentication with RBAC role payload'
    },
    {
      id: 'tenants',
      method: 'GET',
      url: '/api/v1/hub/tenants/analytics',
      desc: 'Aggregates 15+ tenant products data via MongoDB'
    },
    {
      id: 'config',
      method: 'PATCH',
      url: '/api/v1/products/hub-config',
      desc: 'Updates enterprise module feature flags'
    }
  ];

  const handleExecuteAPI = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      if (selectedEndpoint === 'auth') {
        setApiResponse({
          status: 200,
          timeMs: Math.floor(Math.random() * 20) + 32,
          data: {
            success: true,
            message: 'Authenticated with RBAC permissions',
            token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify({ role: selectedRole, tenant: 'enterprise-core' }))}.hash`,
            user: {
              role: selectedRole,
              tenantId: 'enterprise-core',
              sessionExpiry: '24h',
              accessibleProducts: selectedRole === 'VIEWER' ? 2 : 15
            }
          }
        });
      } else if (selectedEndpoint === 'tenants') {
        setApiResponse({
          status: 200,
          timeMs: 58,
          data: {
            success: true,
            timestamp: new Date().toISOString(),
            metrics: {
              totalTenants: 15,
              activeSessions: 1420,
              domains: ['telecom', 'banking', 'insurance'],
              avgResponseTime: '38ms',
              clusterHealth: 'OPTIMAL'
            }
          }
        });
      } else {
        setApiResponse({
          status: 200,
          timeMs: 44,
          data: {
            success: true,
            updatedModule: 'LINK Service Assist',
            flags: {
              signalsEnabled: true,
              ssrHydration: true,
              auditLogging: true
            },
            status: 'APPLIED_TO_CLUSTER'
          }
        });
      }
    }, 400);
  };

  const handleSignalUpdate = (filter: 'ALL' | 'TELECOM' | 'BANKING' | 'INSURANCE') => {
    setTenantFilter(filter);
    setSignalEffectTriggered(true);
    setTimeout(() => setSignalEffectTriggered(false), 800);
  };

  const aggStages = [
    {
      stage: '$match',
      label: 'Stage 1: Filter Tenant & Active Records',
      snippet: `{ $match: { tenantId: "telecom-corp", status: "ACTIVE" } }`,
      output: `[ 8,420 matched documents across 15 unified product lines ]`
    },
    {
      stage: '$lookup',
      label: 'Stage 2: Join Product Deployments Collection',
      snippet: `{ $lookup: { from: "deployments", localField: "productId", foreignField: "_id", as: "deployments" } }`,
      output: `[ Joined 8,420 configurations with latest deployment logs ]`
    },
    {
      stage: '$group',
      label: 'Stage 3: Group by Domain & Compute High-Water Marks',
      snippet: `{ $group: { _id: "$domain", totalRequests: { $sum: "$metrics.volume" }, avgLatency: { $avg: "$metrics.latency" } } }`,
      output: `[ Telecom: 4.8M req (32ms avg), Banking: 2.1M req (24ms avg) ]`
    },
    {
      stage: '$facet',
      label: 'Stage 4: Multi-Dimensional Executive Reporting',
      snippet: `{ $facet: { summary: [ { $count: "activeCount" } ], topPerformers: [ { $sort: { volume: -1 } }, { $limit: 3 } ] } }`,
      output: `[ Single-roundtrip executive payload returned in 52ms ]`
    }
  ];

  return (
    <section id="architecture" className="py-20 lg:py-28 border-b border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            05. Architecture Lab & Interactive Simulation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Live Full-Stack Architecture Sandbox
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Test-run simulated API routes, inspect Angular 21 reactive signal updates, and trace MongoDB multi-tenant aggregation pipelines.
          </p>
        </div>

        {/* Outer Console Card */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/70 p-2 gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('api')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'api'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Express.js & JWT RBAC Console</span>
            </button>

            <button
              onClick={() => setActiveTab('signals')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'signals'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Angular 21 Signals Reactive Inspector</span>
            </button>

            <button
              onClick={() => setActiveTab('aggregation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'aggregation'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>MongoDB Aggregation Visualizer</span>
            </button>
          </div>

          {/* Tab 1: API Console */}
          {activeTab === 'api' && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Endpoint Selection & Controls */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs uppercase font-mono text-cyan-400 tracking-wider">
                    Target RESTful Endpoint
                  </h4>

                  <div className="space-y-2">
                    {endpoints.map((ep) => (
                      <div
                        key={ep.id}
                        onClick={() => setSelectedEndpoint(ep.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedEndpoint === ep.id
                            ? 'bg-slate-800/90 border-cyan-500/80 shadow-sm'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                            ep.method === 'POST' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                            ep.method === 'GET' ? 'bg-blue-950 text-blue-400 border border-blue-800' :
                            'bg-amber-950 text-amber-400 border border-amber-800'
                          }`}>
                            {ep.method}
                          </span>
                          <span className="text-xs font-mono text-slate-300">{ep.url}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">{ep.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* RBAC Role Selector */}
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                    <label className="text-xs font-mono text-slate-400 block">
                      Simulate JWT Role Header:
                    </label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full text-xs font-mono bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-2 focus:outline-none focus:border-cyan-500"
                    >
                      <option value="SUPER_ADMIN">SUPER_ADMIN (Full UNFYD Hub Permissions)</option>
                      <option value="HUB_ADMIN">HUB_ADMIN (Configuration & Metrics)</option>
                      <option value="OPERATOR">OPERATOR (Service Assist View)</option>
                      <option value="VIEWER">VIEWER (Read Only)</option>
                    </select>
                  </div>

                  <button
                    onClick={handleExecuteAPI}
                    disabled={isExecuting}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-xs transition-all shadow-md shadow-blue-600/20 active:scale-95 disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isExecuting ? 'Dispatching Request...' : 'Send Request (Simulated)'}</span>
                  </button>
                </div>

                {/* API Response Display */}
                <div className="lg:col-span-7 flex flex-col rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs">
                  <div className="px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Status: {apiResponse.status} OK
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400 tabular-nums">Latency: {apiResponse.timeMs}ms</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">Content-Type: application/json</span>
                  </div>

                  <div className="p-4 overflow-x-auto text-slate-200 leading-relaxed flex-1 max-h-[300px]">
                    <pre tabIndex={0} className="focus:outline-none">
                      <code>{JSON.stringify(apiResponse.data, null, 2)}</code>
                    </pre>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 2: Angular Signals State */}
          {activeTab === 'signals' && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Signals Controls */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs uppercase font-mono text-cyan-400 tracking-wider">
                    Angular 21 Fine-Grained Reactive Primitives
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Unlike legacy Zone.js monkey-patching that triggers tree-wide change detection passes, Angular Signals update only the precise DOM nodes reading the signal value.
                  </p>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 block">
                      Active Signal: tenantFilter()
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['ALL', 'TELECOM', 'BANKING', 'INSURANCE'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => handleSignalUpdate(filter)}
                          className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                            tenantFilter === filter
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-700 shadow-sm'
                              : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-mono">Effect execution flag:</span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      signalEffectTriggered ? 'bg-emerald-950 text-emerald-400 border border-emerald-800 animate-pulse' : 'bg-slate-900 text-slate-500'
                    }`}>
                      {signalEffectTriggered ? 'effect() FIRED' : 'IDLE (Zero CPU)'}
                    </span>
                  </div>
                </div>

                {/* Signals Live Graph Visualizer */}
                <div className="lg:col-span-7 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <h5 className="text-xs font-mono text-slate-300 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      Reactive Dependency Graph
                    </h5>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded">
                      Zero Zone.js Overhead
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase">Writabe Signal</span>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-cyan-400">const tenantDomain = signal("{tenantFilter}");</span>
                        <span className="text-slate-500 text-[11px]">Primary Producer</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase">Computed Memoized Signal</span>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-purple-400">
                          const visibleCount = computed(() =&gt; {
                            tenantFilter === 'ALL' ? 15 : tenantFilter === 'TELECOM' ? 7 : tenantFilter === 'BANKING' ? 5 : 3
                          });
                        </span>
                        <span className="text-emerald-400 font-bold tabular-nums">
                          = {tenantFilter === 'ALL' ? '15 Products' : tenantFilter === 'TELECOM' ? '7 Telecom Products' : tenantFilter === 'BANKING' ? '5 Banking Products' : '3 Insurance Products'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[10px] uppercase">Standalone Template Consumption</span>
                      <div className="mt-1 text-slate-300">
                        <code>&#64;for (product of filteredProducts(); track product.id) &#123; ... &#125;</code>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 3: MongoDB Aggregation */}
          {activeTab === 'aggregation' && (
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase font-mono text-cyan-400 tracking-wider">
                    Multi-Stage Aggregation Pipeline Inspection
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    Step {activeAggStage + 1} of {aggStages.length}
                  </span>
                </div>

                {/* Pipeline Step Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {aggStages.map((stg, i) => (
                    <button
                      key={stg.stage}
                      onClick={() => setActiveAggStage(i)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        activeAggStage === i
                          ? 'bg-slate-800 border-cyan-500 text-white shadow-sm'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="block text-xs font-bold font-mono text-cyan-400 mb-0.5">
                        {stg.stage}
                      </span>
                      <span className="block text-[11px] truncate">{stg.label.split(':')[1]}</span>
                    </button>
                  ))}
                </div>

                {/* Current Stage Deep Dive */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2">
                    <span className="text-cyan-300 font-bold">{aggStages[activeAggStage].label}</span>
                    <span className="text-[11px] text-slate-500">Mongoose / MongoDB Engine</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800/90 text-cyan-300">
                    <code>{aggStages[activeAggStage].snippet}</code>
                  </div>

                  <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-emerald-400">
                    <span className="text-[10px] text-slate-500 block uppercase mb-1">
                      Stage Output Metric:
                    </span>
                    <span>{aggStages[activeAggStage].output}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
