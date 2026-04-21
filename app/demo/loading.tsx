
export default function DemoLoading() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Hero Skeleton */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32 w-full">
          <div
            className="h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mb-6 mx-auto max-w-3xl"
          />
          <div
            className="h-6 bg-gray-800/50 rounded-lg mb-8 mx-auto max-w-2xl"
          />
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="relative py-24 px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="bg-gray-800/30 border border-cyan-500/20 rounded-lg h-96"
          />
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex gap-4"
              >
                <div className="w-6 h-6 bg-cyan-500/20 rounded flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-700/50 rounded mb-2" />
                  <div className="h-3 bg-gray-700/30 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
