import React from 'react';
import { motion } from 'motion/react';
import { Label, Divider, Tag } from './UI';

export const Slide3 = () => (
  <div className="flex flex-col h-full bg-navy p-12 md:px-20 md:py-16 overflow-hidden">
    <div className="flex items-end justify-between mb-10">
      <div>
        <Label color="gold">Current Brand Overview</Label>
        <h2 className="font-bricolage text-5xl md:text-[52px] tracking-tight text-white-brand mt-3 italic">PEAK Ventures — Snapshot</h2>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <div className="w-12 h-12 border border-gold-brand/40 rounded-full flex items-center justify-center bg-navy-mid/50">
          <span className="font-bricolage text-[10px] text-gold-brand">PEAK</span>
        </div>
        <Tag color="orange">Pre-Optimization State</Tag>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 h-0 overflow-auto pr-2 custom-scrollbar">
      {[
        { title: 'Three-Division Structure', icon: '🏢', desc: 'Strategic Advisory · Creative Studio · Investment & Real Estate. Only two divisions are developed. The third is three lines.', status: 'Incomplete', color: 'orange' },
        { title: 'Saudi Market Focus', icon: '🇸🇦', desc: 'Vision 2030 positioning with a Riyadh office. The strategy is specific — the execution contradicts it at every turn.', status: 'Promising', color: 'gold' },
        { title: 'Visual Identity', icon: '🎨', desc: 'Strong logo. Three competing design languages across the 21 pages. No unified visual system applied consistently.', status: 'Critical', color: 'red' },
        { title: 'Written Copy', icon: '✍️', desc: '35+ AI-signature phrases. Uniform sentence structure. Authenticity is a stated core value — the copy directly contradicts it.', status: 'Critical', color: 'red' },
        { title: 'Photography & Imagery', icon: '📸', desc: 'AI-generated images with broken, garbled Arabic text on pages 5, 18, 19. A Saudi client will see this immediately.', status: 'Critical', color: 'red' },
        { title: 'Proof of Results', icon: '📊', desc: 'Zero case studies. No client numbers. No metrics about PEAK itself. Every strong claim is currently unsupported.', status: 'Critical', color: 'red' },
      ].map((card, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-navy-light border border-white-brand/10 p-7 rounded flex flex-col gap-3.5 group hover:border-gold-brand transition-colors h-full"
        >
          <div className="text-2xl">{card.icon}</div>
          <h3 className="font-bricolage text-[17px] text-white-brand">{card.title}</h3>
          <p className="font-work text-[11.5px] tracking-wide text-dim-brand leading-relaxed flex-1">
            {card.desc}
          </p>
          <div className="mt-auto">
            <Tag color={card.color as any}>{card.status}</Tag>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Slide4 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-navy overflow-hidden">
    <div className="p-10 md:p-20 bg-navy-light flex flex-col justify-center border-r border-white-brand/10 relative overflow-hidden">
      <div className="absolute -bottom-10 -right-10 font-bricolage text-[220px] leading-none tracking-tighter text-red-brand/[0.06] pointer-events-none italic">4</div>
      <Label color="red">Critical Findings</Label>
      <h2 className="font-bricolage text-6xl md:text-[58px] leading-none tracking-tight text-white-brand my-6 italic">
        Where the<br />Profile<br /><span className="text-red-brand">Falls Short</span>
      </h2>
      <Divider color="red" />
      <p className="text-sm leading-relaxed text-dim-brand max-w-sm font-light">
        These are not aesthetic preferences. These are the exact points where a serious client pauses, loses confidence, and moves on.
      </p>
    </div>
    
    <div className="p-10 md:p-20 flex flex-col justify-center gap-4 overflow-auto custom-scrollbar">
      <Label color="dim" className="mb-2">Critical Issues — Priority Order</Label>
      {[
        { num: '01', title: 'AI Images with Broken Arabic Text', sub: 'Pages 5 · 18 · 19 · Directly Contradicts Cultural Positioning' },
        { num: '02', title: 'Third Division Mentioned, Never Developed', sub: 'Investment & Real Estate · 3 Lines Across 21 Pages' },
        { num: '03', title: 'Zero Proof of Work or Results', sub: 'No Cases · No Numbers · No Client Evidence' },
        { num: '04', title: 'AI-Generated Copy — No Authentic Voice', sub: '35+ AI Markers · Uniform Structure · Zero Brand Personality' },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-4 p-5 rounded bg-white-brand/5 border border-white-brand/10 hover:border-red-brand/40 hover:bg-red-brand/[0.04] transition-all cursor-default group"
        >
          <span className="font-bricolage text-3xl text-red-brand/50 group-hover:text-red-brand transition-colors">{item.num}</span>
          <div className="flex-1">
            <h4 className="font-bricolage text-[15px] text-white-brand mb-1">{item.title}</h4>
            <div className="font-work text-[11px] tracking-wider text-dim-brand uppercase">{item.sub}</div>
          </div>
          <div className="self-center">
            <Tag color="red">Critical</Tag>
          </div>
        </motion.div>
      ))}
      <div className="mt-2 p-4 rounded bg-red-brand/[0.04] border border-red-brand/[0.14]">
        <p className="font-work text-[11px] tracking-widest text-dim-brand uppercase leading-relaxed">
          + 4 High-Priority · 6 Medium-Priority items mapped across the full document
        </p>
      </div>
    </div>
  </div>
);
