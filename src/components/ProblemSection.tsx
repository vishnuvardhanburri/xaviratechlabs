import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Zap } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Main headline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            If your system handles leads,
            <br />
            <span className="text-red-400">failure is already happening.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Silent failures cost money. Dropped handoffs. Missed follow-ups. Leads going cold.
          </p>
        </motion.div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: TrendingDown,
              title: 'Dropped Handoffs',
              description: 'Lead gets qualified, but handoff to sales fails silently. You never know until revenue is lost.',
              problem: true,
            },
            {
              icon: AlertTriangle,
              title: 'Missed Follow-ups',
              description: 'Reply comes in. No one catches it. Prospect moves to competitor because you went silent.',
              problem: true,
            },
            {
              icon: Zap,
              title: 'Manual Bottleneck',
              description: 'Your team spends 60% of time on busywork instead of closing. System requires constant recovery.',
              problem: true,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-gradient-to-b from-red-950/30 to-gray-950/80 backdrop-blur-md border border-red-500/20 rounded-lg p-8 hover:border-red-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The gap explanation */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">The System Flow Everyone Assumes Works</h3>
                <div className="space-y-4">
                  {[
                    'Lead enters your system',
                    '→ Gets data enriched',
                    '→ Gets scored',
                    '→ Gets handed off to sales',
                    '→ Sales follows up',
                    '→ Deal closes',
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <p>{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What Actually Happens</h3>
                <div className="space-y-4">
                  {[
                    'Lead enters system',
                    '→ Gets lost in queue',
                    "→ No one knows it's there",
                    "→ Handoff process breaks (manually)",
                    "→ Sales never follows up",
                    "→ Prospect gone to competitor",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 text-red-300"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <p>{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* The gap explanation */}
            <div className="border-t border-cyan-500/20 pt-12">
              <p className="text-gray-400 mb-4">
                <span className="text-cyan-300 font-bold">The gap:</span> Your current tools don't talk to each other. There's
                no orchestration. No fallback. No visibility.
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-300 font-bold">The result:</span> You have a system that <em>looks</em> automated but
                requires constant manual recovery. Your team spends 60% of time fixing what broke instead of selling.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bridge to solution */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block">
            <div className="text-6xl mb-6">↓</div>
            <h3 className="text-4xl font-bold text-cyan-400 mb-4">
              Xavira was built to eliminate this completely.
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Input to output, without silent failure in the middle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
