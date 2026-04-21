import { Flow } from '@/components/Flow';
import { AgentsSystem } from '@/components/AgentsSystem';
import { SystemPreview } from '@/components/SystemPreview';
import { Comparison } from '@/components/Comparison';
import { LandingFooter } from '@/components/LandingFooter';
import { motion } from 'motion/react';

export const metadata = {
  title: 'Product | Xavira',
  description: 'The autonomous outbound infrastructure that generates real conversations.',
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Autonomous <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Outbound Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Multi-agent system designed to generate real conversations without manual intervention. Built by systems engineers for enterprise reliability.
          </p>
        </div>
      </section>

      {/* System Overview */}
      <SystemPreview />

      {/* How It Works */}
      <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-20 text-center">The Execution Flow</h2>
        <Flow />
      </section>

      {/* Autonomous Agents */}
      <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-20 text-center">Six Autonomous Agents</h2>
        <AgentsSystem />
      </section>

      {/* Why Different */}
      <Comparison />

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
