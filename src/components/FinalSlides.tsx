import React from 'react';
import { motion } from 'motion/react';
import { Label, Divider, Tag } from './UI';

export const Slide12 = () => (
  <div className="flex flex-col h-full bg-navy p-12 md:px-20 md:py-16 overflow-hidden">
    <div className="mb-10 text-right">
      <Label color="aqua">Medium Priority — 6 Items</Label>
      <h2 className="font-bricolage text-5xl md:text-[52px] tracking-tight text-white-brand mt-3 italic">Visible, But Fixable</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 h-0 overflow-auto pr-2 custom-scrollbar pb-10">
      {[
        { n: '09', t: 'No Table of Contents', d: 'The annex has one. The main 13-page profile does not. The logic is backwards.' },
        { n: '10', t: 'Three Empty Pages', d: 'Pages 6, 10, 14 show one word and a logo. 14% of the doc carries zero info.' },
        { n: '11', t: 'Cursive Font Overused', d: 'Appears on 6+ pages. Works on cover; by the sixth use, personality is gone.' },
        { n: '12', t: 'Divided Pillars', d: 'Pillars split across p.7 and p.8. Page 8 looks abandoned with only 3 small cards.' },
        { n: '13', t: 'Final Wall of Text', d: 'Page 21 has 15+ bullets and 6 sections. Needs a summary visual.' },
        { n: '14', t: 'Silent Social Icons', d: 'Icons with no handles or URLs. A PDF isn\'t always clickable.' },
      ].map((item, i) => (
        <div key={i} className="p-6 rounded bg-aqua-brand/[0.03] border border-aqua-brand/[0.12] flex flex-col gap-3 group hover:border-aqua-brand/40 transition-colors">
          <div className="font-bricolage text-2xl text-aqua-brand opacity-30 group-hover:opacity-100 transition-opacity italic">{item.n}</div>
          <h4 className="font-bricolage text-[15px] text-white-brand">{item.t}</h4>
          <p className="font-work text-[11.5px] tracking-wide text-dim-brand leading-relaxed">{item.d}</p>
        </div>
      ))}
    </div>
  </div>
);

export const Slide13 = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] h-full bg-navy overflow-hidden">
    <div className="p-10 md:p-20 bg-navy-light flex flex-col justify-center border-r border-white-brand/10 relative overflow-hidden">
      <div className="absolute -bottom-4 -left-2 font-bricolage text-[180px] leading-none tracking-tighter text-red-brand/[0.05] pointer-events-none italic">AI</div>
      <Label color="red">Deep Dive — Issue #4</Label>
      <h2 className="font-bricolage text-4xl md:text-[44px] leading-[1.1] tracking-tight text-white-brand my-4 italic">
        The Three<br />AI Writing<br />Patterns
      </h2>
      <Divider color="red" />
      <p className="text-[14.5px] leading-relaxed text-dim-brand max-w-xs font-light">
        Evidence is structural and consistent across the full document.
      </p>
    </div>
    
    <div className="p-10 md:p-20 flex flex-col justify-center gap-6 overflow-auto custom-scrollbar">
      <div className="p-6 bg-slate border border-white-brand/10 rounded">
        <div className="uppercase font-work text-[9.5px] tracking-[0.22em] text-red-brand mb-4">Detected AI Markers</div>
        <div className="grid grid-cols-3 gap-2">
          {['seamless', 'rigorous x4', 'strategic x10+', 'precision', 'ecosystem', 'orchestrate'].map((w) => (
            <div key={w} className="px-3 py-2 bg-red-brand/10 border border-red-brand/20 rounded text-[10px] text-dim-brand text-center uppercase tracking-wider">{w}</div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {[
          { t: 'Pattern 1: The Three-Part List', d: 'AI defaults to lists of three. Seen 8 times: "...precision, control, and impact", "...thinking, working, and communicating".' },
          { t: 'Pattern 2: Uniform Sentence Structure', d: '[Strong verb] + [abstract noun] + [qualifying clause]. No sentence breaks the mould across 21 pages.' },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-red-brand/[0.04] border border-red-brand/[0.15] rounded">
             <div className="uppercase font-work text-[9.5px] tracking-[0.22em] text-red-brand mb-2">{item.t}</div>
             <p className="text-[13.5px] text-dim-brand leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Slide14 = () => (
  <div className="flex flex-col h-full bg-navy p-12 md:px-20 md:py-16 overflow-hidden">
    <div className="mb-8">
      <Label color="gold">Complete Audit Summary</Label>
      <h2 className="font-bricolage text-5xl md:text-[50px] tracking-tight text-white-brand mt-2 italic">Priority Table</h2>
    </div>

    <div className="flex-1 border border-white-brand/10 rounded-lg overflow-hidden flex flex-col min-h-0 bg-navy-light">
      <div className="grid grid-cols-[2fr_1fr_1fr] bg-white-brand/5 p-4 border-b border-white-brand/10 uppercase font-work text-[10px] tracking-[0.2em] text-dim-brand">
        <div>Issue</div>
        <div>Priority</div>
        <div className="text-right">Pages</div>
      </div>
      <div className="flex-1 overflow-auto custom-scrollbar shadow-inner">
        {[
          { i: 'AI Images with Broken Arabic', p: 'Critical', pg: '5, 18, 19' },
          { i: 'Missing 3rd Division Content', p: 'Critical', pg: 'Global' },
          { i: 'Zero Proof / Case Studies', p: 'Critical', pg: 'Global' },
          { i: 'Non-Authentic AI Copy', p: 'Critical', pg: 'Global' },
          { i: 'Conflicting Design Styles', p: 'High', pg: '5, 6, 17+' },
          { i: 'Unbalanced Team Bios', p: 'High', pg: '20' },
          { i: 'Vague Contact Details', p: 'High', pg: '13' },
          { i: 'Unclear 90-Day Roadmap', p: 'High', pg: '9' },
          { i: 'Missing Main TOC', p: 'Medium', pg: '1-13' },
        ].map((row, idx) => (
          <div key={idx} className="grid grid-cols-[2fr_1fr_1fr] p-4 border-b border-white-brand/5 hover:bg-white-brand/[0.02] transition-colors last:border-0 items-center">
            <div className="font-bricolage text-[14px] text-white-brand">{row.i}</div>
            <div>
              <span className={`text-[10px] uppercase tracking-wider font-bold ${row.p === 'Critical' ? 'text-red-brand' : 'text-orange-brand'}`}>
                {row.p}
              </span>
            </div>
            <div className="font-work text-[11px] text-dim-brand text-right">{row.pg}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Slide15 = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-navy-mid overflow-hidden">
    <div className="p-10 md:p-20 flex flex-col justify-center border-r border-white-brand/10 relative">
      <div className="absolute -bottom-20 -left-20 w-80 h-80 border border-gold-brand/[0.05] rounded-full" />
      <div className="absolute -bottom-5 -left-5 w-40 h-40 border border-gold-brand/[0.05] rounded-full" />
      
      <Label color="gold">Ready to Begin</Label>
      <h2 className="font-bricolage text-6xl md:text-[72px] leading-tight tracking-tight text-white-brand my-4 italic">
        Let's <span className="text-gold-brand underline decoration-gold-brand/30 underline-offset-4">Elevate</span><br />Your Brand
      </h2>
      <Divider color="gold" />
      <p className="text-[15px] leading-relaxed text-dim-brand max-w-sm font-light">
        The strategy is sound. The Saudi market positioning is specific and credible. What this profile needs is execution that matches the ambition.
      </p>
      <button className="mt-10 px-10 py-5 bg-gold-brand text-navy font-bricolage font-bold text-sm uppercase tracking-widest rounded hover:bg-amber-brand active:scale-95 transition-all w-fit shadow-lg shadow-gold-brand/10">
        Schedule a Working Session
      </button>
    </div>

    <div className="p-10 md:p-20 flex flex-col justify-center gap-6 relative bg-navy/30">
      <div className="absolute top-12 right-16 font-bricolage text-sm tracking-[0.22em] text-white-brand/20 uppercase">REBRAND SOLUTIONS</div>
      
      <div className="p-6 rounded bg-white-brand/[0.03] border border-white-brand/10 flex flex-col gap-3">
        <Label color="gold">Your Point of Contact</Label>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border border-gold-brand/40 rounded-full flex items-center justify-center bg-navy-mid">
            <span className="font-bricolage text-[11px] text-gold-brand">RE</span>
          </div>
          <div>
            <div className="font-bricolage text-xl text-white-brand mb-1">Rebrand Solutions</div>
            <div className="text-xs text-dim-brand uppercase tracking-wider leading-relaxed">
              Research & Development Division<br />Brand Audit & Optimization
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded bg-aqua-brand/[0.04] border border-aqua-brand/20 flex flex-col gap-4">
        <Label color="aqua">Proposed Engagement</Label>
        <div className="space-y-4">
          {[
            { n: '1', t: 'Strategy & scope alignment session' },
            { n: '2', t: '4–5 week full profile rebuild' },
            { n: '3', t: 'Print-ready + digital masters delivered' },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-4">
               <div className="w-6 h-6 rounded-full bg-aqua-brand/10 border border-aqua-brand/40 flex items-center justify-center text-[10px] text-aqua-brand font-bold">{s.n}</div>
               <span className="font-work text-[13px] text-white-brand/80">{s.t}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-[11px] uppercase tracking-widest text-dim-brand/50 mt-4 h-5 px-1">
        Confidential — Prepared for PEAK Ventures
      </div>
    </div>
  </div>
);
