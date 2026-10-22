import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split Screen Hero with Interactive Code Showcase */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Full-Width Verified Metrics Strip */}
        <StatsBar />

        {/* Professional Summary, Objective & Education */}
        <About onOpenResume={handleOpenResume} />

        {/* MERN & MEAN Skills Matrix */}
        <SkillsSection />

        {/* Enterprise Experience Timeline */}
        <ExperienceSection />

        {/* Featured Projects Bento Showcase */}
        <ProjectsSection />

        {/* Interactive Full Stack Architecture Sandbox */}
        <InteractivePlayground />

        {/* Direct Contact & Collaboration Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive PDF Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
