import React from 'react';
import { motion } from 'motion/react';
import { Label, Divider, Tag } from './UI';

export const Slide1 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-navy overflow-hidden">
    <div className="flex flex-col justify-center p-10 md:p-20 relative z-10">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #f5f5f0 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Label color="gold">Rebrand Solutions — R&D Division</Label>
        <Divider color="gold" />
        <h1 className="font-bricolage text-7xl md:text-[92px] leading-[0.9] tracking-tight text-white-brand mb-2">
          Brand<br /><span className="text-gold-brand">Audit</span>
        </h1>
        <p className="font-lora text-xl text-dim-brand tracking-wider mb-8 italic">Growth Opportunities — 2025</p>
        <div className="flex flex-col gap-2 font-work text-[11.5px] tracking-[0.16em] text-dim-brand">
          <div>CLIENT — PEAK VENTURES</div>
          <div>MARKET — KINGDOM OF SAUDI ARABIA</div>
          <div className="text-red-brand/60">CONFIDENTIAL — NOT FOR DISTRIBUTION</div>
        </div>
      </motion.div>
    </div>
    
    <div className="relative bg-navy-light hidden md:block overflow-hidden border-l border-white-brand/10">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" className="text-gold-brand" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.1" className="text-gold-brand" />
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.1" className="text-gold-brand" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.1" className="text-gold-brand" />
        </svg>
      </div>

      <div className="absolute top-12 right-12 text-right">
        <div className="font-bricolage text-sm tracking-[0.22em] text-white-brand uppercase">Rebrand</div>
        <div className="font-work text-[9px] tracking-[0.22em] text-gold-brand uppercase font-bold mt-1">Solutions</div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="w-44 h-44 border border-gold-brand/20 rounded-full flex items-center justify-center mb-6"
        >
          <div className="w-24 h-24 border border-gold-brand/40 rounded-full flex items-center justify-center bg-navy-mid/50 backdrop-blur-sm">
            <span className="font-bricolage text-2xl text-gold-brand">PEAK</span>
          </div>
        </motion.div>
        <div className="font-work text-[10px] tracking-[0.25em] text-white-brand/30 uppercase">PEAK VENTURES</div>
      </div>
    </div>
  </div>
);

export const Slide2 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-navy">
    <div className="p-10 md:p-20 flex flex-col justify-center border-r border-white-brand/10">
      <Label color="gold">Introduction</Label>
      <h2 className="font-bricolage text-5xl md:text-[56px] leading-[1.05] tracking-tight text-white-brand my-6 italic">
        We Reviewed<br />Your Entire<br />Brand Presence
      </h2>
      <Divider color="gold" />
      <p className="text-[15.5px] leading-relaxed text-dim-brand max-w-sm font-light">
        A complete forensic review of the PEAK Ventures company profile — every page, every image, every line of copy. What we found points directly to what's holding the business back.
      </p>
      <div className="flex flex-wrap gap-2.5 mt-8">
        <Tag color="gold">21 Pages Reviewed</Tag>
        <Tag color="red">4 Critical Issues</Tag>
        <Tag color="orange">4 High-Priority Items</Tag>
      </div>
    </div>
    
    <div className="p-10 md:p-20 flex flex-col justify-center gap-5">
      <Label color="dim">Review Scope</Label>
      {[
        { value: '21', label: 'Pages Analyzed\nCover to Cover', color: 'gold' },
        { value: '14', label: 'Distinct Issues\nIdentified & Mapped', color: 'red' },
        { value: '35+', label: 'AI-Flagged Phrases\nFound in Body Copy', color: 'aqua' },
      ].map((stat, i) => (
        <div key={i} className="flex items-center gap-5 p-6 rounded bg-white-brand/5 border border-white-brand/10 relative overflow-hidden group">
          <div className={`absolute inset-y-0 left-0 w-1 ${
            stat.color === 'gold' ? 'bg-gold-brand' : stat.color === 'red' ? 'bg-red-brand' : 'bg-aqua-brand'
          }`} />
          <span className={`font-bricolage text-5xl tracking-tighter leading-none ${
            stat.color === 'gold' ? 'text-gold-brand' : stat.color === 'red' ? 'text-red-brand' : 'text-aqua-brand'
          }`}>
            {stat.value}
          </span>
          <span className="font-work text-[11.5px] tracking-wider uppercase text-dim-brand whitespace-pre-line">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);
