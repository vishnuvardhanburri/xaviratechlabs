import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { AboutEvolution } from '@/components/AboutEvolution';
import { SystemPreview } from '@/components/SystemPreview';
import dynamic from 'next/dynamic';

// Lazy load heavy components below the fold
const Flow = dynamic(() => import('@/components/Flow').then(mod => ({ default: mod.Flow })), { 
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const AgentsSystem = dynamic(() => import('@/components/AgentsSystem').then(mod => ({ default: mod.AgentsSystem })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const Comparison = dynamic(() => import('@/components/Comparison').then(mod => ({ default: mod.Comparison })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const Performance = dynamic(() => import('@/components/Performance').then(mod => ({ default: mod.Performance })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const Pricing = dynamic(() => import('@/components/Pricing').then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const CaseStudies = dynamic(() => import('@/components/CaseStudies').then(mod => ({ default: mod.CaseStudies })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const TrustEngineering = dynamic(() => import('@/components/TrustEngineering').then(mod => ({ default: mod.TrustEngineering })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const TrustAndCTA = dynamic(() => import('@/components/TrustAndCTA').then(mod => ({ default: mod.TrustAndCTA })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});
const LandingFooter = dynamic(() => import('@/components/LandingFooter').then(mod => ({ default: mod.LandingFooter })), {
  loading: () => <div className="py-24 flex justify-center"><div className="animate-pulse bg-cyan-500/20 h-32 w-32 rounded-lg"></div></div>
});

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
