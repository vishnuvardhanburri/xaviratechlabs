'use client';

export function Portfolio() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing successful implementations across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-full h-48 bg-gray-800/50 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise SaaS</h3>
            <p className="text-gray-300">34% reply rate achievement with autonomous outreach</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-full h-48 bg-gray-800/50 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">FinTech Platform</h3>
            <p className="text-gray-300">10x scale while maintaining 32% reply rate</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-full h-48 bg-gray-800/50 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Healthcare Tech</h3>
            <p className="text-gray-300">42% reply rate for specialized provider outreach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
