'use client';

export default function ProblemSection() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main headline */}
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Traditional Outbound Is Broken
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Manual processes, low reply rates, and no scalability. Enterprise sales teams deserve better.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">2-5% Reply Rates</h3>
            <p className="text-gray-300">
              Traditional tools get abysmal response rates. Most messages go unanswered, wasting time and resources.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Manual Labor</h3>
            <p className="text-gray-300">
              Sales teams spend hours researching prospects, writing personalized messages, and following up manually.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">No Scale</h3>
            <p className="text-gray-300">
              As you grow, manual processes break. Quality decreases, costs increase, and results become unpredictable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Black Box Algorithms</h3>
            <p className="text-gray-300">
              Most tools use randomization and opaque algorithms. You can't understand or control how they work.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Poor Integration</h3>
            <p className="text-gray-300">
              Siloed tools that don't work together. Data gets lost, processes break, and teams work in isolation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">No Reliability</h3>
            <p className="text-gray-300">
              Consumer-grade tools with enterprise needs. Downtime, bugs, and poor support cost you deals.
            </p>
          </div>
        </div>

        {/* Solution Preview */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            The Xavira Solution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-gray-300">34% average reply rate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-gray-300">Fully autonomous operation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-gray-300">Enterprise-scale reliability</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-gray-300">Deterministic execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-gray-300">Complete visibility</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full" />
                <span className="text-gray-300">Seamless integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
