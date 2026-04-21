'use client';

export function AgentsSystem() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Multi-Agent System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Autonomous agents working together to generate real conversations at scale.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Research Agent</h3>
            <p className="text-gray-300">
              Analyzes prospects, gathers context, and identifies optimal conversation starters.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Content Agent</h3>
            <p className="text-gray-300">
              Generates personalized messages that resonate with each prospect's specific needs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Coordination Agent</h3>
            <p className="text-gray-300">
              Orchestrates timing, prevents duplicates, and ensures optimal delivery schedules.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Analytics Agent</h3>
            <p className="text-gray-300">
              Tracks performance, identifies patterns, and optimizes campaign strategies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Response Agent</h3>
            <p className="text-gray-300">
              Handles replies, continues conversations, and schedules follow-ups automatically.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Quality Agent</h3>
            <p className="text-gray-300">
              Ensures message quality, maintains brand voice, and prevents errors.
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Deterministic Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Features</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Fault-tolerant design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Horizontal scaling</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Real-time monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Automatic failover</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Performance</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">34% average reply rate</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">99.99% uptime SLA</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Sub-second response times</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Enterprise scale support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
