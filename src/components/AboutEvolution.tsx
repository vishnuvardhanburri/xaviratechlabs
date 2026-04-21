'use client';

export function AboutEvolution() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            From Systems to Sales
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The same engineering principles that power critical infrastructure now drive your outbound success.
          </p>
        </div>

        {/* Evolution Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-cyan-400 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VishnuLabs Foundation</h3>
              <p className="text-gray-400">2020-2023</p>
            </div>
            <p className="text-gray-300">
              Built systems infrastructure for 50+ companies across 6+ industries. 99.99% uptime, enterprise scale.
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-cyan-400 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">The Problem</h3>
              <p className="text-gray-400">2023</p>
            </div>
            <p className="text-gray-300">
              Traditional outbound tools failed at scale. Manual processes, low reply rates, no deterministic execution.
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-cyan-400 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Xavira Born</h3>
              <p className="text-gray-400">2024-Present</p>
            </div>
            <p className="text-gray-300">
              Autonomous outbound infrastructure built with systems reliability. 34% reply rates, deterministic execution.
            </p>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Engineering Principles Applied
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">Deterministic</h4>
              <p className="text-gray-300 text-sm">
                Every action is predictable and measurable. No random behavior, no black boxes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">Fault Tolerant</h4>
              <p className="text-gray-300 text-sm">
                Built with redundancy. Systems continue operating even under partial failures.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">Scalable</h4>
              <p className="text-gray-300 text-sm">
                Horizontal scaling from day one. Handle 10x growth without architectural changes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">Observable</h4>
              <p className="text-gray-300 text-sm">
                Complete visibility into system behavior. Real-time monitoring and alerting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
