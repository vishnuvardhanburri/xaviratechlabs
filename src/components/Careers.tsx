'use client';

export function Careers() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us build the future of autonomous outbound infrastructure.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Current Openings
          </h3>
          <p className="text-gray-300 text-center">
            We're always looking for talented engineers to join our mission.
          </p>
          <div className="text-center mt-8">
            <a
              href="mailto:careers@xavira.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Send Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
