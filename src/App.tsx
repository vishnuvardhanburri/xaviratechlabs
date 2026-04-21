import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AboutEvolution } from './components/AboutEvolution';
import { SystemPreview } from './components/SystemPreview';
import { Flow } from './components/Flow';
import { AgentsSystem } from './components/AgentsSystem';
import { Comparison } from './components/Comparison';
import { Performance } from './components/Performance';
import { Pricing } from './components/Pricing';
import { TrustEngineering } from './components/TrustEngineering';
import { TrustAndCTA } from './components/TrustAndCTA';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { LiveChat } from './components/LiveChat';
import { LandingNavbar } from './components/LandingNavbar';
import { LandingFooter } from './components/LandingFooter';

export default function App() {
  // SEO: Set title and meta description
  useEffect(() => {
    document.title = 'Xavira | Autonomous Outbound Infrastructure - Built by Engineers';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Xavira is infrastructure for autonomous outbound, built by engineers from VishnuLabs. 34% reply rates, deterministic execution, 99.99% uptime. From $14K.'
    );

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'outbound infrastructure, autonomous sales, B2B outbound, email automation, enterprise sales infrastructure'
    );

    // Add mobile viewport meta tag for SEO
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');

    // Add theme color meta tag
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.setAttribute('name', 'theme-color');
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute('content', '#0b0b0f');
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <LandingNavbar />
      <main className="pt-20">
        <Hero />
        <ProblemSection />
        <AboutEvolution />
        <SystemPreview />
        <Flow />
        <AgentsSystem />
        <Comparison />
        <Performance />
        <Pricing />
        <Testimonials />
        <CaseStudies />
        <TrustEngineering />
        <TrustAndCTA />
      </main>
      <LandingFooter />
      <LiveChat />
    </div>
  );
}