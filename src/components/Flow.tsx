'use client';

export function Flow() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Autonomous infrastructure that generates real conversations without manual intervention.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Setup</h3>
            <p className="text-gray-300">
              Connect your data sources and define your target audience. Takes less than 30 minutes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Autonomous Operation</h3>
            <p className="text-gray-300">
              AI agents research prospects, craft personalized messages, and initiate conversations automatically.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real Conversations</h3>
            <p className="text-gray-300">
              Handle replies, continue conversations, and schedule meetings without human intervention.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Results</h3>
            <p className="text-gray-300">
              34% average reply rate with qualified leads flowing into your sales pipeline automatically.
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technical Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Core Components</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">Multi-agent orchestration system</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">Natural language generation engine</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">Real-time conversation tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">Deterministic execution framework</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Enterprise Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">99.99% uptime SLA guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">Horizontal scaling architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">Custom integration capabilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">Real-time monitoring dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">34%</div>
            <p className="text-gray-400">Reply Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;1s</div>
            <p className="text-gray-400">Response Time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
            <p className="text-gray-400">Conversations/Month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
