"use client";
import { motion } from 'motion/react';
import { Shield, CheckCircle2, Code2, Lock } from 'lucide-react';

export function TrustEngineering() {
  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      {/* Section header */}
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          Trusted When Failure
          <br />
          <span className="text-cyan-400">Costs Real Money</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Built on 3+ years of systems engineering. Deployed to companies with real revenue at risk.
        </p>
      </motion.div>

      {/* Trust pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          {
            icon: Lock,
            title: 'Owned Infrastructure',
            description: 'Your servers. Your data. Your control. Not renting another SaaS stack.',
            stat: '100%',
          },
          {
            icon: Shield,
            title: 'Deterministic Execution',
            description: 'Input predictably produces output. No silent failures. Every decision logged.',
            stat: '99.99%',
          },
          {
            icon: Code2,
            title: 'System Reliability',
            description: 'Autonomous agents with self-healing. Built by engineers, not marketers.',
            stat: '24/7',
          },
          {
            icon: CheckCircle2,
            title: 'Proof-First Deployment',
            description: 'See results in 10 days before full payment. Risk is on us.',
            stat: '34%',
          },
        ].map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">{pillar.description}</p>
                <div className="text-3xl font-bold text-cyan-400">{pillar.stat}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* VishnuLabs track record + Xavira proof */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* VishnuLabs experience */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-12 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">📋</span>
              VishnuLabs Experience
            </h3>

            <div className="space-y-6">
              {[
                {
                  label: 'Systems Audited',
                  value: '50+',
                  detail: 'Enterprise backends handling real revenue',
                },
                {
                  label: 'Deployment Model',
                  value: 'Proof-First',
                  detail: '$1.5K audit → $7.5K pilot → full deployment',
                },
                {
                  label: 'Industries',
                  value: '6+',
                  detail: 'Law, healthcare, real estate, B2B, logistics, and more',
                },
                {
                  label: 'Customer Satisfaction',
                  value: '100%',
                  detail: 'Companies who sign stay. No churn.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between border-b border-cyan-500/10 pb-4">
                    <div>
                      <p className="text-cyan-400 font-bold text-sm">{item.label}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.detail}</p>
                    </div>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Xavira engineering */}
        <motion.div
          className="group relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-12 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-3xl">⚙️</span>
              Xavira Engineering
            </h3>

            <div className="space-y-6">
              {[
                {
                  label: 'Architecture',
                  value: 'Multi-Agent',
                  detail: '6 autonomous agents, self-orchestrating',
                },
                {
                  label: 'Reliability',
                  value: '99.99%',
                  detail: 'Multi-region redundancy, auto-failover',
                },
                {
                  label: 'Visibility',
                  value: '100%',
                  detail: 'Live dashboard + audit logs on every decision',
                },
                {
                  label: 'Performance',
                  value: 'Proven',
                  detail: '34% avg reply rate in 10-day proof',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between border-b border-cyan-500/10 pb-4">
                    <div>
                      <p className="text-cyan-400 font-bold text-sm">{item.label}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.detail}</p>
                    </div>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Strong positioning */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-12 hover:border-cyan-500/50 transition-all duration-300 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Why We're Different</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              <span className="text-cyan-400 font-bold">We don't sell tools.</span> Tools fail when pushed.
            </p>
            <p className="text-lg text-gray-300">
              <span className="text-cyan-400 font-bold">We deploy infrastructure.</span> Infrastructure scales and self-heals.
            </p>
            <p className="text-lg text-gray-300">
              <span className="text-cyan-400 font-bold">We think like engineers.</span> Which means we understand failure modes,
              edge cases, and what breaks under load.
            </p>

            <div className="border-t border-cyan-500/20 mt-8 pt-8">
              <p className="text-2xl font-bold text-white">
                This is why
                <br />
                <span className="text-cyan-400">companies with real revenue</span>
                <br />
                trust us with their growth engine.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
