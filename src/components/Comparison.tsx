'use client';

export function Comparison() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Xavira Wins
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare traditional outbound tools with autonomous infrastructure built for scale.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Features</h3>
              <div className="space-y-4">
                <div className="py-3 text-gray-300">Autonomous Operation</div>
                <div className="py-3 text-gray-300">Reply Rate</div>
                <div className="py-3 text-gray-300">Scalability</div>
                <div className="py-3 text-gray-300">Customization</div>
                <div className="py-3 text-gray-300">Integration</div>
                <div className="py-3 text-gray-300">Analytics</div>
                <div className="py-3 text-gray-300">Support</div>
                <div className="py-3 text-gray-300">Compliance</div>
                <div className="py-3 text-gray-300">ROI Timeline</div>
              </div>
            </div>

            {/* Traditional Tools Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-6">Traditional Tools</h3>
              <div className="space-y-4">
                <div className="py-3">
                  <span className="text-red-400">Manual</span>
                </div>
                <div className="py-3">
                  <span className="text-red-400">2-5%</span>
                </div>
                <div className="py-3">
                  <span className="text-red-400">Limited</span>
                </div>
                <div className="py-3">
                  <span className="text-yellow-400">Basic</span>
                </div>
                <div className="py-3">
                  <span className="text-yellow-400">Complex</span>
                </div>
                <div className="py-3">
                  <span className="text-yellow-400">Basic</span>
                </div>
                <div className="py-3">
                  <span className="text-red-400">Email Only</span>
                </div>
                <div className="py-3">
                  <span className="text-yellow-400">Manual</span>
                </div>
                <div className="py-3">
                  <span className="text-red-400">12+ Months</span>
                </div>
              </div>
            </div>

            {/* Xavira Column */}
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-6">Xavira</h3>
              <div className="space-y-4">
                <div className="py-3">
                  <span className="text-green-400">Autonomous</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">34%</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">Unlimited</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">Advanced</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">Seamless</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">Real-time</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">24/7 Dedicated</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">Automated</span>
                </div>
                <div className="py-3">
                  <span className="text-green-400">3-6 Months</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Infrastructure vs Tool</h3>
            <p className="text-gray-300">
              Traditional tools are applications you use. Xavira is infrastructure that runs your outbound operations autonomously, with enterprise reliability and scale.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Deterministic vs Random</h3>
            <p className="text-gray-300">
              Other systems use randomization and black-box algorithms. Xavira provides deterministic execution with complete visibility and control.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Built for Scale</h3>
            <p className="text-gray-300">
              While traditional tools struggle with volume, Xavira is designed from the ground up to handle enterprise-scale operations without performance degradation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Systems Engineering</h3>
            <p className="text-gray-300">
              Built with the same principles that power critical infrastructure. 99.99% uptime, fault tolerance, and horizontal scaling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
