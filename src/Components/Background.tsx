import { useEffect, useState } from 'react';
import { SymbolAnimation } from './Symbol-animation';
import { debounce } from 'lodash';

const MAX_SYMBOLS: number = 100;
const SYMBOL_DENSITY: number = 15000;
const password: string='UgB7WZVpHZK1Sbx15RUe7brXivj35zyqWyHoDOkGVbOiRlwi1xRCjExocGUeRgHbvdWknHLVVRfDhpI3LoNi9Gil2js3nRx4w4fD';

export const Background: React.FC = () => {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const numSymbols: number = Math.min(MAX_SYMBOLS, Math.floor(windowSize.width * windowSize.height / SYMBOL_DENSITY));

  useEffect(() => {
    setSymbols(password.slice(0, numSymbols).split(''));
  }, [numSymbols]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 300);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full text-gray-400 flex items-center justify-center text-6xl opacity-20 z-[-1] overflow-hidden">
      {symbols.map((symbol, index) => (
        <SymbolAnimation key={index} symbol={symbol} index={index} windowSize={windowSize} />
      ))}
    </div>
  );
};
























// import { useEffect, useRef, useState } from 'react';

// const password: string='UgB7WZVpHZK1Sbx15RUe7brXivj35zyqWyHoDOkGVbOiRlwi1xRCjExocGUeRgHbvdWknHLVVRfDhpI3LoNi9Gil2js3nRx4w4fD'

// export const Background: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const numSymbols = Math.floor(windowSize.width * windowSize.height / 10000);
//     const symbols = password.slice(0, numSymbols).split('');

//     const createSymbolElement = (symbol: string) => {
//       const el = document.createElement('span');
//       el.textContent = symbol;
//       el.style.position = 'absolute';
//       el.style.opacity = '0';
//       const rotation = Math.random() * 360;
//       el.style.transform = `rotate(${rotation}deg)`;
//       return el;
//     };

//     const animateSymbol = (el: HTMLSpanElement) => {
//       const x = Math.random() * (windowSize.width - el.offsetWidth);
//       const y = Math.random() * (windowSize.height - el.offsetHeight);
//       el.style.left = `${x}px`;
//       el.style.top = `${y}px`;
//       el.style.transition = 'opacity 0.5s';
//       el.style.opacity = '1';
//     };

//     symbols.forEach((symbol: string) => {
//       const el = createSymbolElement(symbol);
//       container.appendChild(el);
//       animateSymbol(el);
//     });
//     return () => {
//       if (container) container.textContent = '';
//     };
//   }, [password, windowSize]);

//   return (
//     <div ref={containerRef} className="absolute top-0 left-0 w-full h-full text-gray-400 flex items-center justify-center text-6xl opacity-20 z-[-1] overflow-hidden">
//     </div>
//   );
// };

