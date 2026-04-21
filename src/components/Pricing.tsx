"use client";
"use client";
import { motion } from './motion-mock';
import { CheckCircle2, Zap } from 'lucide-react';

export function Pricing() {
  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-20 text-center"
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Premium Pricing.
          <br />
          <span className="text-cyan-400">Zero Risk.</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          You see results before the full payment. That's how confident we are.
        </p>
      </motion.div>

      {/* Main pricing card */}
      <motion.div
        className="group relative max-w-2xl mx-auto mb-20"
      >
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card */}
        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-12 hover:border-cyan-500/60 transition-all duration-300">
          {/* Title */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Autonomous Outbound System</h3>
              <p className="text-gray-400">Enterprise-grade infrastructure for sales</p>
            </div>
            <motion.div
              className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50"
            >
              <p className="text-cyan-300 font-bold text-sm">BEST VALUE</p>
            </motion.div>
          </div>

          {/* Price sections */}
          <div className="space-y-8 mb-12 pb-12 border-b border-cyan-500/20">
            {/* Phase 1 */}
            <motion.div
              className="relative p-6 rounded-lg border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-green-400 text-sm font-bold mb-1">PHASE 1: PROOF</p>
                  <h4 className="text-2xl font-bold text-white">10-Day Proof Campaign</h4>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-400">$7,000</p>
                  <p className="text-xs text-gray-400">One-time</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Real results before full commitment. You see outcomes in 10 days.
              </p>
              <div className="space-y-2">
                {[
                  'Full system setup & configuration',
                  'AI-powered email sequences',
                  'Real campaign to your prospects',
                  '34% average reply rate guarantee',
                  'Daily performance reports',
                  'Full transparency on all metrics',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              className="relative p-6 rounded-lg border border-cyan-500/20 bg-cyan-500/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-cyan-400 text-sm font-bold mb-1">PHASE 2: SCALE</p>
                  <h4 className="text-2xl font-bold text-white">Unlimited Scale License</h4>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-cyan-400">$7,000</p>
                  <p className="text-xs text-gray-400">One-time</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                After Phase 1 proof, scale to unlimited campaigns with the full system.
              </p>
              <div className="space-y-2">
                {[
                  'Unlimited email sending (50K+/day)',
                  'Unlimited prospect campaigns',
                  'Autonomous agent system',
                  'Self-healing optimization',
                  'Dedicated support & optimization',
                  '24/7 monitoring & uptime SLA',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Total */}
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-2">Complete Infrastructure Investment</p>
            <p className="text-5xl font-bold text-cyan-400 mb-2">$14,000</p>
            <p className="text-gray-500 text-sm">
              Phase 1 ($7K) proves ROI → Phase 2 ($7K) scales the results
            </p>
          </div>

          {/* Key benefit */}
          <motion.div
            className="mb-12 p-6 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30"
          >
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-amber-300 mb-1">Proof-First Deployment (VishnuLabs Model)</p>
                <p className="text-gray-300 text-sm">
                  We validate the fix before you commit. Pilot-first approach. Risk is on us if you don't see results in 10 days.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Start 10-Day Proof
            </button>
            <button className="flex-1 px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
              Book Demo First
            </button>
          </div>
        </div>
      </motion.div>

      {/* FAQ-style section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            q: 'What if I don\'t see results in 10 days?',
            a: 'Full refund. We\'re confident in our system. If you don\'t see 20+ replies from real prospects, you don\'t pay for Phase 2.',
          },
          {
            q: 'Can I cancel anytime?',
            a: 'Yes. Phase 1 is a fixed 10-day proof. After that, you own the license. Scale back or forward anytime.',
          },
          {
            q: 'What about integrations?',
            a: 'API includes Zapier, Make, custom webhooks. Connect to any CRM: Salesforce, HubSpot, Pipedrive, etc.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
              <p className="font-bold text-white mb-3">{item.q}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
