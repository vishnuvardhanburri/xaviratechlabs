import Link from 'next/link';

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <h1
            className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Built by Engineers
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              For Engineers
            </span>
          </h1>

          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            From VishnuLabs foundation to autonomous outbound infrastructure. Same reliability mindset, applied to sales and outreach.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Book Demo
            </Link>
            <Link
              href="/product"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Product
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <h2
              className="text-4xl font-bold text-white mb-6"
            >
              From Systems to Sales
            </h2>

            <p
              className="text-gray-300 text-lg leading-relaxed"
            >
              Founded by systems engineers from VishnuLabs, Xavira brings the same reliability mindset that powers critical infrastructure to the world of outbound sales and marketing.
            </p>

            <p
              className="text-gray-300 text-lg leading-relaxed"
            >
              We've served 50+ companies across 6+ industries, delivering 99.99% uptime systems that scale from startup to enterprise.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-cyan-500/30"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">50+</p>
                <p className="text-gray-400">Systems Audited</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">99.99%</p>
                <p className="text-gray-400">Average Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">6+</p>
                <p className="text-gray-400">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">34%</p>
                <p className="text-gray-400">Reply Rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Engineering Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Deterministic Execution",
              description: "Every action is predictable, measurable, and auditable. No black boxes, no random behavior."
            },
            {
              title: "Fault Tolerance",
              description: "Built with redundancy and graceful degradation. Systems continue operating even under partial failures."
            },
            {
              title: "Scalable Architecture",
              description: "Designed to handle 10x growth without architectural changes. Horizontal scaling from day one."
            }
          ].map((principle, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-cyan-500/20 rounded-lg p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
              <p className="text-gray-300">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
