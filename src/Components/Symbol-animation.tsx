import { motion } from 'framer-motion';
import React, { useState } from 'react';

const FULL_ROTATION: number = 360;
const MIN_DURATION: number = 60;
const MAX_EXTRA_DURATION: number = 20;
const MAX_DELAY: number = 30;

interface SymbolProps {
  symbol: string;
  index: number;
  windowSize: { width: number; height: number };
}

export const SymbolAnimation: React.FC<SymbolProps> = React.memo(({ symbol, index, windowSize }) => {
  const [rotate] = useState<number>(Math.random() * FULL_ROTATION);

  const initialLeft: number = Math.random() * windowSize.width;
  const initialTop: number = Math.random() * windowSize.height;
  const left: number[] = [initialLeft, Math.random() * windowSize.width, initialLeft];
  const top: number[] = [initialTop, Math.random() * windowSize.height, initialTop];
  const duration : number= MIN_DURATION + Math.random() * MAX_EXTRA_DURATION;
  const delay: number = Math.random() * MAX_DELAY; 

  return (
    <motion.span
      key={index}
      style={{ position: 'absolute', opacity: 1, left: initialLeft, top: initialTop, rotate }}
      animate={{ left, top, opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}}
      transition={{ delay, duration, ease: 'linear', repeat: Infinity }}
    >
      {symbol}
    </motion.span>
  );
});


