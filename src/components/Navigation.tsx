import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  progress: number;
}

export const SlideNav = ({ current, total, onNext, onPrev, progress }: SlideNavProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-aqua-brand to-gold-brand transition-all duration-500 z-[1000]" style={{ width: `${progress}%` }} />
      
      <div className="fixed bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[1000] bg-navy/90 backdrop-blur-xl border border-white-brand/10 rounded-full px-6 py-2">
        <button 
          onClick={onPrev} 
          disabled={current === 0}
          className="p-1 text-dim-brand hover:text-white-brand disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        
        <span className="font-work text-xs tracking-widest text-dim-brand min-w-[60px] text-center">
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        
        <button 
          onClick={onNext} 
          disabled={current === total - 1}
          className="p-1 text-dim-brand hover:text-white-brand disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
};
