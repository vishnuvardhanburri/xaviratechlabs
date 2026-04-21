'use client';

import Link from 'next/link';
import { Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center px-8">
      <div
        className="max-w-2xl w-full text-center"
      >
        <div
          className="flex justify-center mb-6"
        >
          <Search className="w-16 h-16 text-cyan-400" />
        </div>

        <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-2">Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
