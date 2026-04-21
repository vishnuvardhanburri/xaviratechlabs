'use client';

export default function TechCanvas() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 bg-cyan-400 rounded-full" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Tech Canvas</h3>
        <p className="text-gray-300">Static visualization component</p>
      </div>
    </div>
  );
}
