import { Hero } from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import { AboutEvolution } from '@/components/AboutEvolution';
import SystemPreview from '@/components/SystemPreview';
import { Flow } from '@/components/Flow';
import { AgentsSystem } from '@/components/AgentsSystem';
import { Comparison } from '@/components/Comparison';
import { Performance } from '@/components/Performance';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { CaseStudies } from '@/components/CaseStudies';
import TrustEngineering from '@/components/TrustEngineering';
import { TrustAndCTA } from '@/components/TrustAndCTA';
import LandingFooter from '@/components/LandingFooter';

export const metadata = {
  title: 'Xavira | Autonomous Outbound Infrastructure - Built by Engineers',
  description: 'Xavira is infrastructure for autonomous outbound, built by engineers from VishnuLabs. 34% reply rates, deterministic execution, 99.99% uptime. From $14K.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
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
      <LandingFooter />
    </div>
  );
}
