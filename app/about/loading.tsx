
export default function AboutLoading() {
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

      {/* Story Section Skeleton */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-4 bg-gray-800/50 rounded"
              />
            ))}
          </div>
          <div
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-cyan-500/30 h-64"
          >
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="h-8 bg-cyan-500/30 rounded mb-2" />
                  <div className="h-3 bg-gray-700/50 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Skeleton */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-800/30 border border-cyan-500/20 rounded-lg p-8 h-48"
            >
              <div className="h-6 bg-gray-700/50 rounded mb-4" />
              <div className="h-3 bg-gray-700/30 rounded mb-2" />
              <div className="h-3 bg-gray-700/30 rounded w-3/4" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
