'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLUMNS = 20;
const ROWS = 10;

function BinaryColumn({ columnIndex }: { columnIndex: number }) {
  const [binaryChars, setBinaryChars] = useState<string[]>(
    Array.from({ length: ROWS }, () => (Math.random() > 0.5 ? '1' : '0'))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryChars(() =>
        Array.from({ length: ROWS }, () => (Math.random() > 0.5 ? '1' : '0'))
      );
    }, Math.random() * 500 + 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {binaryChars.map((char, rowIndex) => (
        <motion.div
          key={rowIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={`text-xl font-mono transition-colors duration-100 ${
            char === '1'
              ? 'text-purdueGold'
              : 'text-gray-700'
          }`}
          style={{
            filter: char === '1' ? 'drop-shadow(0 0 4px rgba(207, 185, 145, 0.8))' : 'none',
          }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
}

function LoadingBarInner() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset loading state when route changes
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Prevent body scrolling when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-sm"
        >
          <div className="flex gap-2">
            {Array.from({ length: COLUMNS }).map((_, i) => (
              <BinaryColumn key={i} columnIndex={i} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function LoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarInner />
    </Suspense>
  );
}

