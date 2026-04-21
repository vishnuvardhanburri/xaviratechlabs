import { TrustEngineering } from '@/components/TrustEngineering';
import { Testimonials } from '@/components/Testimonials';
import { LandingFooter } from '@/components/LandingFooter';
import { motion } from 'motion/react';

export const metadata = {
  title: 'About | Xavira',
  description: 'Built by engineers from VishnuLabs. Autonomous outbound infrastructure built on systems reliability principles.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Built by <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Engineers</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Xavira is built by systems engineers from VishnuLabs. Same reliability mindset. Applied to sales.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">The VishnuLabs Foundation</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                For over 6 years, VishnuLabs has built systems that don't fail silently. Systems that run mission-critical infrastructure for enterprises. Systems that are audited, monitored, and optimized for 99.99% uptime.
              </p>
              <p>
                We've served 50+ companies across 6+ industries. We've audited systems handling billions of transactions. We've learned what reliability actually means at scale.
              </p>
              <p>
                Then we looked at the outbound sales space and saw chaos. Manual processes. Silent failures. Systems that lose leads without telling anyone.
              </p>
              <p>
                So we applied everything we learned about systems engineering to autonomous outbound.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-cyan-500/30">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-cyan-400 mb-2">50+</p>
                  <p className="text-gray-300">Systems Audited</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-400 mb-2">6+</p>
                  <p className="text-gray-300">Industries Served</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-400 mb-2">99.99%</p>
                  <p className="text-gray-300">Average Uptime</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-400 mb-2">100%</p>
                  <p className="text-gray-300">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Principles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Real System Thinking',
              description: 'Autonomous outbound is infrastructure, not a tool. It needs monitoring, observability, and optimization.',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Reliability-First Mindset',
              description: 'Your campaigns don\'t fail silently. Every action is logged, monitored, and recoverable.',
              color: 'from-cyan-500 to-emerald-500',
            },
            {
              title: 'Deterministic Execution',
              description: 'Every decision is traceable. Every result is explainable. No black boxes.',
              color: 'from-emerald-500 to-teal-500',
            },
          ].map((principle, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${principle.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

              <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Engineering */}
      <TrustEngineering />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="relative py-24 px-8 lg:px-16 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Infrastructure Built on Reliability?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's build something that doesn't fail silently. Start your 10-day proof today.
          </p>
          <a
            href="https://cal.com/vishnuvardhanburri/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg"
          >
            Book Demo
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
