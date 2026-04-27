import React from 'react';
import { motion } from 'motion/react';
import { Label, Divider, Tag } from './UI';

export const Slide9 = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] h-full bg-navy overflow-hidden">
    <div className="p-10 md:p-20 bg-navy-light flex flex-col justify-center border-r border-white-brand/10 relative overflow-hidden">
      <div className="absolute -bottom-4 -left-2 font-bricolage text-[180px] leading-none tracking-tighter text-orange-brand/[0.05] pointer-events-none italic">HP</div>
      <Label color="orange">High Priority · Issues 5–8</Label>
      <h2 className="font-bricolage text-4xl md:text-[40px] leading-[1.1] tracking-tight text-white-brand my-4 italic">
        Four More<br />Gaps That<br />Cost You Trust
      </h2>
      <Divider color="orange" />
      <p className="text-[14.5px] leading-relaxed text-dim-brand max-w-xs font-light">
        Not deal-breakers alone. Together with the four critical issues, they make the profile feel unfinished before the meeting starts.
      </p>
      <div className="mt-6"><Tag color="orange">High Priority</Tag></div>
    </div>
    
    <div className="p-10 md:p-20 flex flex-col justify-center gap-4 overflow-auto custom-scrollbar">
      {[
        "**Three visual systems in one document.** Navy split, olive/khaki, and clean minimal — none designed to coexist. The profile reads like it was assembled from three separate templates.",
        "**Team page raises more questions than it answers.** One co-founder's primary role appears to be elsewhere. Photos are inconsistent in quality. No specific achievements.",
        "**Contact page has no phone number, no WhatsApp, no office address.** An international client finishing the document cannot take any next step. WhatsApp is vital in KSA.",
        "**The 90-day roadmap has no clear reading direction.** Stages scatter across the page. Dashed arrows point downward while the stages move horizontally."
      ].map((pt, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-4 items-start p-5 bg-orange-brand/[0.04] border border-orange-brand/[0.18] rounded transition-colors hover:border-orange-brand/40"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-orange-brand mt-1.5 shrink-0" />
          <p className="text-[13.5px] text-dim-brand leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white-brand font-bold">$1</strong>') }} />
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Slide10 = () => (
  <div className="relative w-full h-full bg-charcoal flex flex-col items-center justify-center text-center p-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,52,26,0.07)_0%,transparent_70%)] pointer-events-none" />
    
    <Label color="red" className="relative z-10">The Cumulative Effect</Label>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="font-bricolage text-6xl md:text-[80px] tracking-tighter text-white-brand leading-[0.95] my-6 relative z-10 italic"
    >
      This <span className="text-red-brand">Limits</span><br />Your Growth
    </motion.h2>
    <p className="font-work text-sm md:text-[13px] tracking-widest uppercase text-dim-brand max-w-lg leading-relaxed relative z-10 opacity-80">
      Every critical issue compounds the others. Together, they prevent the profile from performing the one job it needs to do: earning trust at first read.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 relative z-10 w-full max-w-4xl">
      {[
        { val: '0', sub: 'Case Studies\nto Build Trust' },
        { val: '3', sub: 'Competing Visual\nLanguages in One Doc' },
        { val: '35+', sub: 'AI-Signature Phrases\nin the Body Copy' },
      ].map((card, i) => (
        <div key={i} className="p-8 rounded bg-red-brand/[0.05] border border-red-brand/[0.15] text-left">
          <div className="font-bricolage text-5xl md:text-6xl text-red-brand leading-none tracking-tighter mb-3 italic">{card.val}</div>
          <div className="font-work text-[11.5px] leading-relaxed text-dim-brand uppercase tracking-wider whitespace-pre-line">{card.sub}</div>
        </div>
      ))}
    </div>

    <div className="mt-10 p-6 px-10 border border-red-brand/10 bg-red-brand/[0.02] rounded-full relative z-10">
      <p className="font-lora italic text-lg text-dim-brand overflow-hidden">
        "The profile needs to earn its place in a first meeting. Right now, it does not quite get there."
      </p>
    </div>
  </div>
);

export const Slide11 = () => (
  <div className="flex flex-col h-full bg-navy p-12 md:px-20 md:py-16 overflow-hidden">
    <div className="mb-10">
      <Label color="orange">High Priority — Full Detail</Label>
      <h2 className="font-bricolage text-5xl md:text-[52px] tracking-tight text-white-brand mt-3 italic">Four Items That Matter</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 h-0 overflow-auto pr-2 custom-scrollbar pb-10">
      {[
        { title: 'Inconsistent Visual Design (3 Styles)', desc: 'Pages 5, 6, 10, 14, 17, 18, 19 each use a different design language. None are compatible. The profile reads like three separate documents spliced together.' },
        { title: 'Incomplete & Unbalanced Team Page', desc: 'One co-founder\'s bio names a full-time external role. Photos are inconsistent. No LinkedIn links. No achievements. For a trust-based service business, this page actively undermines confidence.' },
        { title: 'Contact Page Missing Key Details', desc: 'Email and website only. No WhatsApp — the primary Saudi business contact channel. No physical address. Social icons appear without URLs or handles.' },
        { title: '90-Day Roadmap — No Visual Logic', desc: 'Five stages scattered with no clear reading direction. Arrows pointing downward while the sequence moves horizontally. One of PEAK\'s best assets — buried.' },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-4 p-7 bg-orange-brand/[0.04] border border-orange-brand/[0.12] rounded h-full"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-orange-brand mt-1.5 shrink-0" />
          <div>
            <h4 className="font-bricolage text-[16px] text-white-brand mb-2">{item.title}</h4>
            <p className="text-[13.5px] text-dim-brand leading-relaxed font-light">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
