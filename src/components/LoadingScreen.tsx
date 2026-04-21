"use client";
"use client";
import { motion } from './motion-mock';
import { useEffect, useState } from 'react';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useIsMobile';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Faster loading on mobile
    const increment = isMobile ? 4 : 2;
    const interval = isMobile ? 20 : 30;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete, isMobile]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      {/* Animated Background - Simplified on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-100 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gray-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      )}

      {/* Mobile simplified background */}
      {isMobile && (
        <div className="absolute inset-0 bg-white" />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* XAVIRA GROUP Text Animation */}
        <motion.div
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col items-center gap-2">
            {/* XAVIRA */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-[0.2em] md:tracking-[0.3em] text-black relative">
              {prefersReducedMotion || isMobile ? (
                <span className="inline-block">
                  XAVIRA
                </span>
              ) : (
                'XAVIRA'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))
              )}
            </h1>

            {/* GROUP */}
            <motion.h2
              className="text-2xl md:text-4xl lg:text-6xl tracking-[0.2em] md:tracking-[0.3em] text-gray-800"
            >
              GROUP
            </motion.h2>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-48 md:w-64 lg:w-96 mx-auto"
        >
          <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-black rounded-full shadow-lg"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
          
          {/* Loading Text */}
          <motion.p
            className="mt-4 text-gray-600 text-xs md:text-sm"
          >
            Loading Experience... {progress}%
          </motion.p>
        </motion.div>

        {/* Pulsing Glow Effect - Desktop only */}
        {!isMobile && !prefersReducedMotion && (
          <motion.div
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}