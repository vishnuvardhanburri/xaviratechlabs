"use client";
"use client";
import { motion } from './motion-mock';
import { CheckCircle2, X } from 'lucide-react';

export function Comparison() {
  const competitors = [
    { name: 'Apollo', type: 'Data Tool' },
    { name: 'Instantly', type: 'Email SaaS' },
    { name: 'Xavira', type: 'Infrastructure', highlight: true },
  ];

  const features = [
    { feature: 'Lead Data', apollo: true, instantly: true, xavira: true },
    { feature: 'Email Sending', apollo: false, instantly: true, xavira: true },
    { feature: 'AI Personalization', apollo: false, instantly: false, xavira: true },
    { feature: 'Reply Capture', apollo: false, instantly: true, xavira: true },
    { feature: 'Autonomous Agents', apollo: false, instantly: false, xavira: true },
    { feature: 'Domain Management', apollo: false, instantly: false, xavira: true },
    { feature: 'Self-Healing', apollo: false, instantly: false, xavira: true },
    { feature: 'Enterprise API', apollo: true, instantly: false, xavira: true },
    { feature: 'Owned Infrastructure', apollo: false, instantly: false, xavira: true },
  ];

  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-20 text-center"
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Why Different
        </h2>
        <motion.p
          className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text max-w-2xl mx-auto"
        >
          "Apollo gives data. Instantly automates emails.
          <br />
          We deploy infrastructure that generates outcomes."
        </motion.p>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left side - The problem with tools */}
        <motion.div
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-red-500/20 rounded-lg p-12">
            <h3 className="text-2xl font-bold text-red-400 mb-6">Other Tools</h3>
            <div className="space-y-4">
              {[
                'You connect disconnected tools together',
                'Failures happen silently between integrations',
                'Requires constant manual intervention',
                'Low reply rates force more volume',
                'No visibility into why things break',
                'You rent the engine; you own the problems',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right side - Xavira infrastructure */}
        <motion.div
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-green-500/20 rounded-lg p-12">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Xavira Infrastructure</h3>
            <div className="space-y-4">
              {[
                'Single integrated platform. No gaps.',
                'Deterministic execution. Every failure is visible.',
                'Autonomous agents handle edge cases.',
                'Higher engagement means fewer emails needed.',
                'Real-time visibility + control dashboard.',
                'You own the engine; we own the reliability.',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comparison table */}
      <motion.div
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="px-6 py-4 text-left text-gray-300 font-bold">Capability</th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.name}
                      className={`px-6 py-4 text-center font-bold ${
                        comp.highlight ? 'bg-cyan-500/10 text-cyan-300' : 'text-gray-300'
                      }`}
                    >
                      {comp.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((item, i) => (
                  <motion.tr
                    key={i}
                    className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-300 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {item.apollo ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400 inline" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 inline" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.instantly ? (
                        <CheckCircle2 className="w-5 h-5 text-green-400 inline" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 inline" />
                      )}
                    </td>
                    <td className={`px-6 py-4 text-center ${item.xavira ? 'bg-cyan-500/10' : ''}`}>
                      {item.xavira ? (
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 inline" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 inline" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="px-6 py-4 border-t border-cyan-500/20 bg-cyan-500/5">
            <p className="text-sm text-gray-400">
              <span className="text-cyan-400 font-bold">Key difference:</span> Xavira is a complete infrastructure stack. Not a tool
              you bolt onto other tools.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
