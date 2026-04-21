'use client';

export function About() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            About Xavira
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built by engineers from VishnuLabs. Autonomous outbound infrastructure with enterprise reliability.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Our Mission
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            To revolutionize outbound communication through autonomous infrastructure that delivers 
            deterministic results at enterprise scale.
          </p>
        </div>
      </div>
    </section>
  );
}
