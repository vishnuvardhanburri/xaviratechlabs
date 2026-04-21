'use client';

import { motion } from 'motion/react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center px-8">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-8">
          <motion.div
            className="w-20 h-20 bg-red-500/20 border border-red-500/50 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </motion.div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Something went wrong
        </h1>

        <p className="text-gray-300 mb-8 text-lg">
          We encountered an error loading the product page. This might be a temporary issue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            Back to Home
          </Link>
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
      </motion.div>
    </div>
  );
}
