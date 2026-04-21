"use client";
"use client";
import { motion } from './motion-mock';
import { CheckCircle2, Zap, Shield, Rocket } from 'lucide-react';

export function Performance() {
  const metrics = [
    {
      icon: CheckCircle2,
      title: 'Build',
      status: 'PASS',
      statusColor: 'text-green-400',
      bgColor: 'from-green-500 to-emerald-500',
      details: [
        'Production-ready build pipeline',
        'Zero build errors',
        'All tests passing',
        'Ready for deployment',
      ],
    },
    {
      icon: Shield,
      title: 'Runtime',
      status: 'SAFE',
      statusColor: 'text-cyan-400',
      bgColor: 'from-cyan-500 to-blue-500',
      details: [
        'Memory optimized',
        'No memory leaks',
        'CPU efficient',
        'Error handling verified',
      ],
    },
    {
      icon: Zap,
      title: 'Type Safety',
      status: 'STRONG',
      statusColor: 'text-blue-400',
      bgColor: 'from-blue-500 to-purple-500',
      details: [
        'Full TypeScript coverage',
        'No any types',
        'Strict mode enabled',
        'Type-checked API calls',
      ],
    },
    {
      icon: Rocket,
      title: 'Delivery Engine',
      status: 'ACTIVE',
      statusColor: 'text-purple-400',
      bgColor: 'from-purple-500 to-pink-500',
      details: [
        '99.99% uptime SLA',
        'Multi-region redundancy',
        'Auto-failover enabled',
        'Real-time monitoring',
      ],
    },
  ];

  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-20 text-center"
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          Enterprise <span className="text-cyan-400">Grade</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Built for scale. Tested for reliability. Ready for production.
        </p>
      </motion.div>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={i}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${metric.bgColor} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

              {/* Card */}
              <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon + status */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.bgColor} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className={`text-xs font-bold px-3 py-1 rounded-full ${metric.statusColor} border ${metric.statusColor.replace('text', 'border')} bg-opacity-10 bg-current`}>
                    {metric.status}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6">{metric.title}</h3>

                {/* Details */}
                <div className="space-y-3 flex-1">
                  {metric.details.map((detail, j) => (
                    <motion.div
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <div className={`w-2 h-2 rounded-full ${metric.statusColor}`} />
                      {detail}
                    </motion.div>
                  ))}
                </div>

                {/* Live indicator */}
                <motion.div
                  className="mt-6 pt-6 border-t border-cyan-500/10 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-gray-500">Monitored 24/7</span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional stats */}
      <motion.div
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Uptime', value: '99.99%', icon: '📈' },
              { label: 'Latency', value: '<100ms', icon: '⚡' },
              { label: 'Throughput', value: '50K+/day', icon: '📨' },
              { label: 'Reliability', value: '100%', icon: '🛡️' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
              >
                <p className="text-4xl mb-2">{stat.icon}</p>
                <p className="text-3xl font-bold text-cyan-300 mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
