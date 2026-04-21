'use client';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Xavira</h2>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
