'use client';

import { AlertTriangle, RefreshCw, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function DemoError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center px-8">
      <div
        className="max-w-2xl mx-auto text-center"
      >
        <div className="flex justify-center mb-8">
          <div
            className="w-20 h-20 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center"
          >
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Demo Booking Error
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          We couldn't load the demo booking page. You can still schedule a demo directly with our team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://cal.com/vishnuvardhanburri/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book Demo Directly
          </a>

          <button
            onClick={reset}
            className="px-6 py-3 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
        </div>

        <div className="mt-8 p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
          <p className="text-sm text-gray-300 mb-2">
            <span className="text-cyan-400 font-bold">Alternative:</span> Email us directly at 
            <a href="mailto:xavira.group@gmail.com" className="text-cyan-300 hover:text-cyan-200 ml-1">
              xavira.group@gmail.com
            </a>
          </p>
          <p className="text-xs text-gray-400">
            We'll respond within 24 hours to schedule your demo.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300 mb-4">
              Error Details (Development Only)
            </summary>
            <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4 text-sm text-gray-300">
              <p className="font-mono break-all">{error.message}</p>
              {error.digest && (
                <p className="mt-2 text-xs text-gray-500">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
