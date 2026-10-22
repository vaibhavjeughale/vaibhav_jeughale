import { Project, SkillItem, ExperienceItem, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Vaibhav Gajanan Jeughale',
  shortName: 'Vaibhav Jeughale',
  title: 'Full Stack Developer',
  subtitle: 'MERN & MEAN Stack Specialist | Modern Angular & Node.js Architect',
  location: 'Navi Mumbai (Airoli), Maharashtra, India',
  phone: '+91 721 8472483',
  email: 'vaibhavjs1997@gmail.com',
  linkedin: 'https://linkedin.com/in/vaibhav-jeughale-570389228',
  linkedinDisplay: 'linkedin.com/in/vaibhav-jeughale-570389228',
  github: 'https://github.com/vaibhav-jeughale',
  resumeUrl: '/assets/aistudio/Full_Stack_developer_b501380b.pdf',
  experienceYears: '3+',
  bio: 'Results-driven Full Stack Developer with 3+ years of experience building enterprise-grade web applications using Angular (v13 to v21), TypeScript, Node.js, Express.js, and MongoDB. Proven track record of leading complex frontend modernizations with zero downtime while engineering scalable RESTful backend services, secure JWT/RBAC architectures, and high-performance multi-tenant data pipelines.',
  careerObjective: 'Seeking a challenging full-stack engineering role to apply deep expertise in modern Angular (Standalone Components, Signals, SSR, RxJS, NgRx) and robust backend ecosystems (Node.js, Express.js, MongoDB/Mongoose) to architect fast, scalable, and secure enterprise web applications.'
};

export const HIGHLIGHT_STATS = [
  { value: '3+', label: 'Years Experience', description: 'Enterprise Full Stack Development' },
  { value: '15+', label: 'Enterprise Products', description: 'Telecom, Banking & Insurance suites' },
  { value: 'v13 ➔ v21', label: 'Angular Migration', description: 'Zero production downtime achieved' },
  { value: '100%', label: 'Type-Safe End-to-End', description: 'Typed forms, Signals & RESTful APIs' }
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend & Modern Angular
  {
    name: 'Modern Angular (v13 – v21)',
    category: 'Frontend & Modern Angular',
    level: 95,
    experienceYears: '3+ Years',
    description: 'Expertise in Standalone Components, Angular Signals, SSR & Hydration, Typed Reactive Forms, @if/@for control flow, and Deferrable Views (@defer).',
    featured: true,
    tags: ['Signals', 'Standalone', 'SSR', 'Control Flow', 'Micro-frontends']
  },
  {
    name: 'TypeScript & JavaScript (ES6+)',
    category: 'Frontend & Modern Angular',
    level: 92,
    experienceYears: '3+ Years',
    description: 'Strict type modeling, generics, decorators, asynchronous concurrency, and modern ES features.',
    featured: true,
    tags: ['Strict Typing', 'Generics', 'Async/Await', 'Clean Code']
  },
  {
    name: 'React.js & Next.js Ecosystem',
    category: 'Frontend & Modern Angular',
    level: 86,
    experienceYears: '2+ Years',
    description: 'Component architecture, custom hooks, context API, state management, and full-stack MERN integrations.',
    featured: true,
    tags: ['Hooks', 'Context API', 'MERN Stack', 'Virtual DOM']
  },
  {
    name: 'HTML5, CSS3, SCSS & Responsive Design',
    category: 'Frontend & Modern Angular',
    level: 90,
    experienceYears: '3+ Years',
    description: 'Mobile-first responsive layouts using CSS Grid, Flexbox, custom design systems, and cross-browser resilience.',
    featured: false,
    tags: ['Flexbox', 'CSS Grid', 'SCSS', 'Accessibility']
  },

  // Backend & APIs
  {
    name: 'Node.js & Express.js',
    category: 'Backend & APIs',
    level: 90,
    experienceYears: '3+ Years',
    description: 'Architecting high-throughput RESTful microservices, asynchronous event loop optimization, middleware chaining, and centralized error handling.',
    featured: true,
    tags: ['REST APIs', 'Middleware', 'Event Loop', 'Express Routers']
  },
  {
    name: 'JWT Authentication & RBAC',
    category: 'Backend & APIs',
    level: 92,
    experienceYears: '3+ Years',
    description: 'Granular Role-Based Access Control, refresh token rotation, encrypted payloads, and secure session management.',
    featured: true,
    tags: ['JWT', 'RBAC', 'Security', 'Bcrypt', 'Token Rotation']
  },
  {
    name: 'RESTful API Design & Integration',
    category: 'Backend & APIs',
    level: 94,
    experienceYears: '3+ Years',
    description: 'REST architectural constraints, API versioning, payload validation (Joi/Zod), rate limiting, and HTTP status standard compliance.',
    featured: false,
    tags: ['API Contracts', 'Payload Validation', 'Error Handling', 'CORS']
  },

  // Database
  {
    name: 'MongoDB & Mongoose ODM',
    category: 'Database',
    level: 90,
    experienceYears: '3+ Years',
    description: 'NoSQL document modeling, indexing strategies, compound indexes, multi-tenant schema isolation, and population hooks.',
    featured: true,
    tags: ['Mongoose', 'Schema Design', 'NoSQL', 'Multi-tenant']
  },
  {
    name: 'Aggregation Pipelines & Optimization',
    category: 'Database',
    level: 88,
    experienceYears: '2.5+ Years',
    description: 'Multi-stage aggregation pipelines ($match, $group, $lookup, $unwind, $facet) for high-performance enterprise analytics and reporting.',
    featured: true,
    tags: ['$lookup', '$facet', '$group', 'Query Optimization', 'Explain Plan']
  },

  // State & Async
  {
    name: 'NgRx State Management',
    category: 'State & Async',
    level: 88,
    experienceYears: '2.5+ Years',
    description: 'Redux pattern implementation for enterprise Angular apps: Store, Actions, Reducers, Effects, and Memoized Selectors.',
    featured: true,
    tags: ['Store', 'Actions', 'Effects', 'Selectors', 'Immutability']
  },
  {
    name: 'RxJS Operators & Reactive Streams',
    category: 'State & Async',
    level: 92,
    experienceYears: '3+ Years',
    description: 'Declarative asynchronous pipelines using switchMap, mergeMap, concatMap, debounceTime, combineLatest, and Subject patterns.',
    featured: true,
    tags: ['Observables', 'switchMap', 'pipe', 'Reactive Programming']
  },
  {
    name: 'Angular Signals State',
    category: 'State & Async',
    level: 90,
    experienceYears: '1.5+ Years',
    description: 'Fine-grained reactivity using signal(), computed(), and effect(), eliminating Zone.js overhead for high rendering performance.',
    featured: false,
    tags: ['signal()', 'computed()', 'effect()', 'Fine-grained Reactivity']
  },

  // UI & DevOps
  {
    name: 'Angular Material & Tailwind CSS',
    category: 'UI & DevOps',
    level: 92,
    experienceYears: '3+ Years',
    description: 'Creating reusable enterprise component libraries, accessible data tables, dynamic dialogs, and utility-first styling.',
    featured: true,
    tags: ['Component Libraries', 'Tailwind CSS', 'Material Theming']
  },
  {
    name: 'CI/CD Pipelines & Git',
    category: 'UI & DevOps',
    level: 85,
    experienceYears: '2.5+ Years',
    description: 'Automating build pipelines, linting, unit testing checks, multi-stage Docker builds, and deployment verification.',
    featured: false,
    tags: ['GitHub Actions', 'CI/CD', 'Git Flow', 'Automated Testing']
  },
  {
    name: 'Postman & API Testing',
    category: 'UI & DevOps',
    level: 90,
    experienceYears: '3+ Years',
    description: 'Automated test suites, environment variables, pre-request scripts, and mock API servers.',
    featured: false,
    tags: ['Automated Tests', 'Collections', 'Environments']
  },
  {
    name: 'Jasmine & Karma Unit Testing',
    category: 'UI & DevOps',
    level: 82,
    experienceYears: '2+ Years',
    description: 'Writing comprehensive unit tests for components, services, HTTP interceptors, and reducers to ensure test coverage.',
    featured: false,
    tags: ['TestBed', 'Mocks', 'Spies', 'Code Coverage']
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'smartconnectt',
    role: 'Full Stack Developer',
    company: 'SmartConnectt Technologies',
    location: 'Navi Mumbai, India',
    period: 'Dec 2024 – Jul 2026',
    employmentType: 'Full-time',
    description: 'Architected, modernized, and maintained enterprise full-stack solutions for the Hub Admin platform (UNFYD Hub), a centralized system unifying 15+ enterprise products across telecom, banking, and insurance domains.',
    keyAchievements: [
      'Backend Development: Designed and built scalable RESTful APIs with Node.js and Express.js, implementing secure middleware, JWT authentication, and role-based access control (RBAC).',
      'Database Architecture: Modeled complex multi-tenant data schemas in MongoDB using Mongoose; tuned database indexing and engineered aggregation pipelines for rapid data retrieval.',
      'Frontend Modernization: Successfully spearheaded the enterprise Angular upgrade from v13 to v21 using ng update schematics, adopting Standalone Components, Angular Signals, and modern @if/@for control flow with zero production downtime.',
      'Reactive State Management: Implemented state management using NgRx and RxJS for complex multi-product configuration workflows, ensuring predictable data flow and seamless change detection.',
      'Reusable Component Systems: Built reusable UI modules with Angular Material supporting LINK Service Assist and POLL products; enhanced CI/CD build pipelines for automated, reliable deployments.'
    ],
    techStack: [
      'Angular v13–v21',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TypeScript',
      'NgRx',
      'RxJS',
      'Signals',
      'Angular Material',
      'CI/CD Pipelines'
    ],
    products: ['UNFYD Hub Admin', 'LINK Service Assist', 'POLL Analytics Engine']
  },
  {
    id: 'paptronics',
    role: 'Angular Developer',
    company: 'Paptronics Pvt Ltd',
    location: 'India',
    period: 'Mar 2022 – Oct 2023',
    employmentType: 'Full-time',
    description: 'Engineered responsive dynamic web applications for higher education domain projects, focusing on mission-critical examination, student scheduling, and timetable modules.',
    keyAchievements: [
      'Engineered responsive, dynamic UI modules for education domain projects (Exams and Timetable engines) using Angular v13+ and Bootstrap, integrating seamlessly with backend REST APIs.',
      'Participated actively in the foundational Angular upgrade from v12 to v13, successfully resolving View Engine deprecation and eliminating legacy entryComponents declarations.',
      'Translated multifaceted business requirements into clean, structured, and maintainable Angular features, drastically reducing rework cycles and improving client satisfaction.',
      'Collaborated closely with backend developers and QA automation teams to guarantee smooth API contract adherence, bulletproof data validation, and punctual sprint deliveries.'
    ],
    techStack: [
      'Angular v12–v13+',
      'TypeScript',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Reactive Forms',
      'Agile / JIRA'
    ],
    products: ['EdTech Exam Manager', 'Automated Timetable Generation Engine']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'unfyd-hub',
    title: 'Hub Admin Platform (UNFYD Hub)',
    subtitle: 'Centralized Multi-Tenant Enterprise Administration Platform',
    category: 'Enterprise MEAN',
    company: 'SmartConnectt Technologies',
    period: '2024 – 2026',
    summary: 'A mission-critical centralized platform managing and orchestrating configuration for 15+ enterprise products across telecom, banking, and insurance domains.',
    fullDescription: 'The Hub Admin Platform serves as the central control plane for enterprise clients managing multiple interconnected business applications. Vaibhav engineered the full-stack architecture, delivering high-performance Node.js/Express REST APIs, multi-tenant MongoDB schemas, and modernizing the front-end to Angular v21 with Standalone Components and Signals.',
    architectureOverview: 'Architected with a micro-modular Angular frontend communicating through type-safe HTTP clients to an Express.js API gateway. The backend incorporates multi-tenant isolation middleware, verifying tenant IDs and permissions via JWT tokens before querying partitioned MongoDB collections.',
    keyHighlights: [
      'Orchestrated centralized management for 15+ business products in telecom, finance, and insurance.',
      'Engineered backend RESTful services with Node.js & Express, securing routes with JWT and custom RBAC middleware.',
      'Modeled scalable multi-tenant MongoDB schemas using Mongoose, creating aggregation pipelines that cut report generation time by 45%.',
      'Spearheaded zero-downtime migration from Angular v13 to v21, migrating legacy NgModules to Standalone Components and Angular Signals.',
      'Integrated NgRx state architecture and RxJS reactive streams to manage intricate cross-module data dependencies.'
    ],
    technologies: [
      'Angular v21',
      'Node.js',
      'Express.js',
      'MongoDB',
      'TypeScript',
      'NgRx',
      'RxJS',
      'Signals',
      'Angular Material',
      'CI/CD Pipelines'
    ],
    metrics: [
      { label: 'Products Managed', value: '15+' },
      { label: 'Migration Downtime', value: '0 hrs' },
      { label: 'Query Latency', value: '<65ms' },
      { label: 'Enterprise Uptime', value: '99.9%' }
    ],
    codeSnippet: {
      filename: 'hub-admin.signals.service.ts',
      language: 'typescript',
      code: `// Modern Angular 21 Signal-based State Service
import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class HubTenantService {
  private http = inject(HttpClient);
  
  // Reactive Signals for active tenant & filters
  readonly activeTenantId = signal<string>('tenant-telecom-01');
  readonly searchQuery = signal<string>('');
  
  // Load tenant products with rxResource
  readonly productsResource = rxResource({
    request: () => ({ tenantId: this.activeTenantId() }),
    loader: ({ request }) => 
      this.http.get<ProductConfig[]>(\`/api/v1/tenants/\${request.tenantId}/products\`)
  });

  // Computed state for active, filtered products
  readonly filteredProducts = computed(() => {
    const list = this.productsResource.value() ?? [];
    const query = this.searchQuery().toLowerCase();
    return list.filter(p => p.name.toLowerCase().includes(query));
  });

  switchTenant(tenantId: string) {
    this.activeTenantId.set(tenantId);
  }
}`
    }
  },
  {
    id: 'edtech-exam-engine',
    title: 'Education Management & Timetable System',
    subtitle: 'Dynamic Timetable Generation & Exam Scheduling Engine',
    category: 'EdTech & Systems',
    company: 'Paptronics Pvt Ltd',
    period: '2022 – 2023',
    summary: 'A comprehensive academic management system featuring dynamic constraint-based exam scheduling, timetable generation, and responsive student/faculty portals.',
    fullDescription: 'Designed to solve high-conflict academic scheduling across universities with hundreds of concurrent courses, faculty allocations, and venue constraints. Vaibhav delivered responsive UI modules with Angular v13+, integrated backend REST APIs, and led the legacy View Engine cleanup.',
    architectureOverview: 'Built on modular Angular architecture with typed reactive forms and conflict-detection validators. Frontend integrates with Node.js REST endpoints that execute scheduling algorithms, returning structured timetable matrices rendered dynamically across responsive mobile-first views.',
    keyHighlights: [
      'Engineered interactive examination and timetable scheduling UI modules with real-time slot conflict detection.',
      'Integrated typed reactive forms with custom cross-field validators ensuring no faculty or classroom double-booking.',
      'Contributed significantly to Angular v12 to v13 migration, eradicating deprecated View Engine code and refactoring dynamic component instantiation.',
      'Delivered fully mobile-responsive layouts tested across diverse device viewports for both faculty and students.'
    ],
    technologies: [
      'Angular v13+',
      'TypeScript',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Reactive Forms',
      'RxJS'
    ],
    metrics: [
      { label: 'Scheduling Conflict Rate', value: '0%' },
      { label: 'Time Saved / Term', value: '80+ hrs' },
      { label: 'Angular Upgrade', value: 'v12 ➔ v13' },
      { label: 'Mobile Score', value: '98/100' }
    ],
    codeSnippet: {
      filename: 'timetable-generator.ts',
      language: 'typescript',
      code: `// Custom Slot Conflict Detection Validator
export function validateSlotConflict(existingSlots: ScheduleSlot[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const day = control.get('dayOfWeek')?.value;
    const start = control.get('startTime')?.value;
    const end = control.get('endTime')?.value;
    const roomId = control.get('roomId')?.value;

    const hasConflict = existingSlots.some(slot => 
      slot.dayOfWeek === day &&
      slot.roomId === roomId &&
      ((start >= slot.startTime && start < slot.endTime) ||
       (end > slot.startTime && end <= slot.endTime))
    );

    return hasConflict ? { roomSlotConflict: true } : null;
  };
}`
    }
  },
  {
    id: 'mern-cloud-commerce',
    title: 'MERN Enterprise Cloud Commerce & Analytics',
    subtitle: 'Full-Stack E-Commerce & Real-Time Inventory Control Portal',
    category: 'Full Stack MERN',
    period: '2025',
    summary: 'High-performance MERN stack application featuring real-time inventory management, multi-stage aggregation pipeline analytics, and JWT authentication.',
    fullDescription: 'Engineered as a full-stack showcase demonstrating end-to-end MERN competencies: Express.js REST API with JWT authentication, MongoDB multi-stage aggregation for monthly revenue trends and customer cohort retention, and a React frontend with responsive cart, checkout, and admin telemetry.',
    architectureOverview: 'React frontend consumes Express.js RESTful API secured by HTTP-only cookie JWT tokens. Mongoose models enforce validation rules, and aggregation pipelines generate sales summaries directly inside MongoDB to minimize application memory overhead.',
    keyHighlights: [
      'Implemented secure JWT auth flow with refresh token rotation and bcrypt password hashing.',
      'Designed MongoDB aggregation pipelines ($match, $group, $facet) for real-time sales reporting and inventory restock alerts.',
      'Built responsive React UI with custom hooks, optimistic UI updates, and instant search debouncing.',
      'Structured modular backend with Express router, controller-service pattern, and centralized async error wrapper.'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT Auth',
      'Tailwind CSS',
      'REST APIs'
    ],
    metrics: [
      { label: 'API Response Time', value: '<48ms' },
      { label: 'Aggregation Stages', value: '6 Stages' },
      { label: 'Security Grade', value: 'A+' },
      { label: 'Test Coverage', value: '92%' }
    ],
    codeSnippet: {
      filename: 'salesAnalytics.controller.js',
      language: 'javascript',
      code: `// MongoDB Aggregation Pipeline for Revenue & Top Categories
export const getMonthlySalesAnalytics = async (req, res, next) => {
  try {
    const { tenantId } = req.user;
    const stats = await Order.aggregate([
      { $match: { tenantId, status: 'COMPLETED' } },
      {
        $facet: {
          monthlyRevenue: [
            {
              $group: {
                _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
                totalRevenue: { $sum: "$totalAmount" },
                orderCount: { $sum: 1 }
              }
            },
            { $sort: { _id: -1 } },
            { $limit: 12 }
          ],
          topCategories: [
            { $unwind: "$items" },
            {
              $group: {
                _id: "$items.category",
                salesVolume: { $sum: "$items.quantity" },
                categoryRevenue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
              }
            },
            { $sort: { categoryRevenue: -1 } },
            { $limit: 5 }
          ]
        }
      }
    ]);
    res.json({ success: true, data: stats[0] });
  } catch (err) {
    next(err);
  }
};`
    }
  },
  {
    id: 'mean-reactive-workflow',
    title: 'Reactive Workflow & Task Orchestrator',
    subtitle: 'Real-Time Enterprise Kanban & Event Streaming Engine',
    category: 'Enterprise MEAN',
    period: '2025',
    summary: 'A reactive MEAN stack workflow orchestrator utilizing Angular 21 Signals, RxJS event buses, and Express/MongoDB backend with audit logging.',
    fullDescription: 'Built to solve cross-department task assignment with audit trails for regulated industries. Features drag-and-drop state transitions, reactive signal updates, WebSocket event distribution, and immutable event history stored in MongoDB capped collections.',
    architectureOverview: 'Angular 21 frontend leverages the new control flow (@if, @for) and deferrable views (@defer) for instantaneous perceived performance. Backend Express service writes state updates and triggers notifications while maintaining full ACID compliance via MongoDB multi-document transactions.',
    keyHighlights: [
      'Leveraged modern Angular 21 control flow (@if, @for, @switch) and @defer to reduce initial bundle chunk size by 35%.',
      'Engineered RxJS multicasting event buses for synchronized cross-component state updates.',
      'Implemented MongoDB transactions to ensure atomic status transitions across complex task trees.',
      'Constructed accessible drag-and-drop Kanban boards adhering to WCAG keyboard standards.'
    ],
    technologies: [
      'Angular v21',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB Transactions',
      'RxJS Streams',
      'Angular Signals'
    ],
    metrics: [
      { label: 'Bundle Reduction', value: '35%' },
      { label: 'Event Sync Latency', value: '<20ms' },
      { label: 'Audit Trail', value: '100% Immutable' },
      { label: 'Accessibility', value: '100%' }
    ],
    codeSnippet: {
      filename: 'jwt-auth.middleware.ts',
      language: 'typescript',
      code: `// Secure Node.js & Express Role-Based Access Control Middleware
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedUser {
  userId: string;
  role: 'SUPER_ADMIN' | 'HUB_ADMIN' | 'OPERATOR' | 'VIEWER';
  tenantId: string;
}

export const requireRoles = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Missing or malformed authorization token' });
      return;
    }

    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthenticatedUser;
      if (!allowedRoles.includes(decoded.role)) {
        res.status(403).json({ error: 'Access denied: Insufficient permissions for this route' });
        return;
      }
      (req as any).user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: 'Token expired or invalid signature' });
    }
  };
};`
    }
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Electronics and Telecommunication (ENTC)',
  institution: 'Sant Gadge Baba Amravati University',
  year: '2019',
  grade: 'CGPA: 7.0',
  highlights: [
    'Strong analytical foundation in digital signal processing, algorithm design, and computational networks.',
    'Led final-year engineering technical symposium and web portal initiatives.',
    'Graduated in 2019 with distinction in core engineering fundamentals.'
  ]
};
