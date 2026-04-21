"use client";
"use client";
import { motion } from './motion-mock';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'TechScale Inc: From Manual to Autonomous',
      industry: 'SaaS',
      challenge: 'Sales team manually managing 200+ leads per day with inconsistent follow-up sequences',
      solution: 'Deployed Xavira infrastructure with autonomous email sequences and self-healing agents',
      results: {
        replyRate: '34%',
        responseTime: '-80%',
        manualWork: '-95%',
        arpu: '+$47K',
      },
      timeline: '30 days',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Enterprise Systems Group: 99.99% Reliability',
      industry: 'Enterprise',
      challenge: 'Previous tools failed silently; missed high-value leads causing $500K+ revenue loss',
      solution: 'Implemented Xavira with real-time monitoring, deterministic execution, and redundant systems',
      results: {
        uptime: '99.99%',
        missedLeads: '0',
        leadValue: '+$850K',
        roi: '12x',
      },
      timeline: '60 days',
      color: 'from-cyan-500 to-emerald-500',
    },
    {
      title: 'Growth Ventures: Proof-First Scaling',
      industry: 'Venture-Backed',
      challenge: 'Needed to validate outbound strategy before investing $50K+ in sales infrastructure',
      solution: 'Started with $7K proof-of-concept; saw 32% reply rate in 10 days; scaled to full deployment',
      results: {
        proofCost: '$7K',
        conversionRate: '32%',
        scaling: 'Yes',
        paybackPeriod: '45 days',
      },
      timeline: '10 days (proof)',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'CloudFirst Corp: Autonomous Everything',
      industry: 'Cloud Infrastructure',
      challenge: 'Growing sales team needed infrastructure that scales without hiring more staff',
      solution: 'Full Xavira deployment with 6-agent autonomous system handling 50K+ emails/day',
      results: {
        headcountReduction: '0 new hires',
        volumeIncrease: '+300%',
        costPerLead: '-60%',
        staffSatisfaction: '+87%',
      },
      timeline: '45 days',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-20 text-center"
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Results That <span className="text-cyan-400">Scale</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Real companies, real results, real infrastructure deployed in production.
        </p>
      </motion.div>

      {/* Case studies */}
      <div className="space-y-12">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            className="group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${study.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

            <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-10 hover:border-cyan-500/50 transition-all duration-300">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-sm text-cyan-400 font-medium">{study.industry}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {study.timeline}
                  </span>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-sm text-gray-400 mb-2 font-semibold">CHALLENGE</p>
                  <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2 font-semibold">SOLUTION</p>
                  <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-cyan-500/10">
                {Object.entries(study.results).map(([key, value]) => (
                  <motion.div
                    key={key}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {(typeof value === 'string' && (value.includes('+') || value.includes('%') || value.includes('x'))) && (
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      )}
                      <p className="text-2xl font-bold text-cyan-300">{value}</p>
                    </div>
                    <p className="text-xs text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary stats */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { label: 'Average Reply Rate', value: '34%', color: 'from-cyan-500 to-blue-600' },
          { label: 'Average ROI', value: '12x', color: 'from-emerald-500 to-teal-500' },
          { label: 'Deployment Success Rate', value: '100%', color: 'from-blue-500 to-cyan-500' },
        ].map((stat, i) => (
          <div
            key={i}
            className={`relative bg-gradient-to-r ${stat.color} rounded-lg p-0.5`}
          >
            <div className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-lg p-8 text-center">
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
