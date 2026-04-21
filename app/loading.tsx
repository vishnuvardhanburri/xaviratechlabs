'use client';


export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center px-8">
      <div className="text-center">
        <div
          className="flex justify-center gap-2 mb-8"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Loading...
        </h2>
        <p className="text-gray-400">
          We're fetching the best autonomous infrastructure for you
        </p>
      </div>
    </div>
  );
}
