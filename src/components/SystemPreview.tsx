'use client';

export default function SystemPreview() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Autonomous Outbound Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multi-agent system designed to generate real conversations without manual intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Core Components</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Multi-agent orchestration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Natural language generation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Real-time conversation tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Deterministic execution</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">99.99% uptime SLA</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Horizontal scaling</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">Real-time monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <div className="aspect-video bg-gray-800/50 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">System Architecture</h4>
                  <p className="text-gray-300">Built for scale and reliability</p>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-xl rounded-lg px-4 py-2 border border-cyan-500/20">
              <p className="text-cyan-400 font-semibold">34% Reply Rate</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-xl rounded-lg px-4 py-2 border border-cyan-500/20">
              <p className="text-cyan-400 font-semibold">Enterprise Scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
