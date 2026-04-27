import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SlideNav } from './components/Navigation';
import { Slide1, Slide2 } from './components/CoverSlides';
import { Slide3, Slide4 } from './components/KeyFindings';
import { Slide5, Slide6, Slide7, Slide8 } from './components/IssueSlides';
import { Slide9, Slide10, Slide11 } from './components/ImpactSlides';
import { Slide12, Slide13, Slide14, Slide15 } from './components/FinalSlides';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    <Slide6 />,
    <Slide7 />,
    <Slide8 />,
    <Slide9 />,
    <Slide10 />,
    <Slide11 />,
    <Slide12 />,
    <Slide13 />,
    <Slide14 />,
    <Slide15 />,
  ];
  
  const totalSlides = slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const next = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  const prev = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      <SlideNav 
        current={currentSlide} 
        total={totalSlides} 
        onNext={next} 
        onPrev={prev} 
        progress={progress} 
      />
    </div>
  );
}
