import React from 'react';
import { motion } from 'motion/react';
import { Label, Divider, Tag } from './UI';

interface IssueSlideProps {
  num: string;
  title: string | React.ReactNode;
  desc: string;
  pages: string;
  impact: string;
  visualLabel: string;
  bars: { label: string, value: number, color?: 'red' | 'sage' | 'aqua', pctLabel: string }[];
  points: string[];
  extraVisual?: React.ReactNode;
}

export const IssueSlideTemplate = ({ num, title, desc, pages, impact, visualLabel, bars, points, extraVisual }: IssueSlideProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] h-full bg-navy overflow-hidden">
    <div className="p-10 md:p-20 bg-navy-light flex flex-col justify-center border-r border-white-brand/10 relative overflow-hidden">
      <div className="absolute -bottom-4 -left-2 font-bricolage text-[180px] leading-none tracking-tighter text-red-brand/[0.055] pointer-events-none italic">{num}</div>
      <Label color="red">Issue {parseInt(num) === 1 ? 'One' : parseInt(num) === 2 ? 'Two' : parseInt(num) === 3 ? 'Three' : 'Four'} · Critical</Label>
      <h2 className="font-bricolage text-4xl md:text-[44px] leading-[1.1] tracking-tight text-white-brand my-4 italic">
        {title}
      </h2>
      <Divider color="red" />
      <p className="text-[14.5px] leading-relaxed text-dim-brand max-w-xs font-light">
        {desc}
      </p>
      <div className="flex flex-col gap-2 mt-6">
        <Tag color="red">{pages}</Tag>
        <Tag color="orange">{impact}</Tag>
      </div>
    </div>
    
    <div className="p-10 md:p-20 flex flex-col justify-center gap-4 overflow-auto custom-scrollbar">
      <div className="bg-slate border border-white-brand/10 rounded p-6 mb-1 relative overflow-hidden">
        <div className="uppercase font-work text-[9.5px] tracking-[0.22em] text-red-brand mb-4">{visualLabel}</div>
        <div className="space-y-3">
          {bars.map((bar, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-work text-[11px] text-dim-brand w-36 shrink-0">{bar.label}</span>
              <div className="h-1.5 flex-1 bg-slate-l rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: `${bar.value}%` }} 
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`h-full rounded-full ${
                    bar.color === 'sage' ? 'bg-sage-brand' : bar.color === 'aqua' ? 'bg-aqua-brand' : 'bg-red-brand'
                  }`} 
                />
              </div>
              <span className="font-work text-[11px] text-dim-brand w-10 text-right">{bar.pctLabel}</span>
            </div>
          ))}
        </div>
        {extraVisual}
      </div>

      {points.map((pt, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + (i * 0.1) }}
          className="flex gap-3.5 items-start p-4 md:p-5 bg-red-brand/[0.04] border border-red-brand/[0.15] rounded"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-red-brand mt-1.5 shrink-0" />
          <p className="text-sm text-dim-brand leading-relaxed [text-wrap:pretty]">
            <span dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white-brand font-bold">$1</strong>') }} />
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Slide5 = () => (
  <IssueSlideTemplate 
    num="01"
    title={<>AI Imagery<br />with Broken<br />Arabic Text</>}
    desc="The profile claims deep cultural understanding of Saudi Arabia — then shows AI images with garbled, unreadable Arabic text."
    pages="Pages 5 · 18 · 19"
    impact="Immediate Trust Loss"
    visualLabel="AI Image Failure Points Identified"
    bars={[
      { label: 'Garbled Arabic wall text', value: 90, pctLabel: 'P.18' },
      { label: 'Deformed figure + text', value: 85, pctLabel: 'P.5' },
      { label: 'AI-fabricated globe labels', value: 80, pctLabel: 'P.19' },
      { label: '3 conflicting visual styles', value: 100, color: 'aqua', pctLabel: 'Global' },
    ]}
    points={[
      "**The core contradiction:** A cultural intelligence firm cannot present a Saudi client with AI images containing broken Arabic. This is the first thing they will notice.",
      "**Three visual styles competing:** Navy split layouts (pages 5, 17, 19), olive/khaki tones (pages 10, 15, 18), and clean minimal white (pages 1, 2, 7). None designed to coexist.",
      "**The irony is hard to miss.** PEAK positions itself as a high-end creative production house — while using AI-generated stock that any Saudi client will identify instantly."
    ]}
  />
);

export const Slide6 = () => (
  <IssueSlideTemplate 
    num="02"
    title={<>A Full Division<br />Mentioned,<br />Then Dropped</>}
    desc="Investment & Real Estate is named as a core division on page 2. It receives three lines across 21 pages. Nothing more."
    pages="Entire Document"
    impact="Looks Unfinished"
    visualLabel="Division Coverage — Actual Page Count"
    bars={[
      { label: 'Strategic Advisory', value: 85, color: 'sage', pctLabel: '4 pages' },
      { label: 'Creative Studio', value: 60, color: 'aqua', pctLabel: '3 pages' },
      { label: 'Investment & Real Estate', value: 3, pctLabel: '3 lines' },
    ]}
    points={[
      "**A real estate client opens this profile** looking for evidence that PEAK operates in their world. The document gives them nothing. They assume the offering doesn't exist.",
      "**Three lines on page 2** are the only mention of this division in the entire document. No methodology, no examples, no process, no partners, no annex page.",
      "**The result:** A profile that looks unfinished on first read — and a potential revenue stream that is invisible to the clients who would need it most."
    ]}
  />
);

export const Slide7 = () => (
  <IssueSlideTemplate 
    num="03"
    title={<>Strong Claims.<br />Zero<br />Evidence.</>}
    desc="World-class, proven, validated — these words appear throughout the document. Not one is backed by a number, a name, or a client result."
    pages="All 21 Pages"
    impact="Smart Clients Walk Away"
    visualLabel="Claim vs. Evidence — Full Document Scan"
    bars={[
      { label: 'Claims made about PEAK', value: 95, pctLabel: 'High' },
      { label: 'Specific metrics / numbers', value: 2, color: 'sage', pctLabel: 'Zero' },
      { label: 'Case studies', value: 2, color: 'aqua', pctLabel: 'Zero' },
      { label: 'Client references', value: 2, color: 'sage', pctLabel: 'Zero' },
    ]}
    points={[
      "**The Saudi Context page** is full of impressive Kingdom statistics. PEAK itself gets zero equivalent data. The contrast is visible on a single scroll-through.",
      "**Adjectives are doing all the work.** \"World-class advisory.\" \"Proven execution.\" \"Validated partnerships.\" Without a fact behind them, these phrases carry no weight whatsoever.",
      "**No company founding date, no client count, no project volume.** A profile that tells the Kingdom's story with statistics but tells PEAK's story with adjectives."
    ]}
  />
);

export const Slide8 = () => (
  <IssueSlideTemplate 
    num="04"
    title={<>The Copy<br />Has No<br />Human Voice</>}
    desc="Authenticity is listed as a core value on page 3. The body copy across all 21 pages reads as if generated by AI in under a minute."
    pages="All Core Pages"
    impact="Contradicts Core Values"
    visualLabel="AI Signature Phrases — Detected in Body Copy"
    bars={[
      { label: '"seamless"', value: 60, pctLabel: 'x2' },
      { label: '"rigorous"', value: 80, pctLabel: 'x4' },
      { label: '"strategic"', value: 100, pctLabel: 'x10+' },
      { label: '"precision"', value: 70, pctLabel: 'x3' },
    ]}
    points={[
      "**A company listing Authenticity as a core value** cannot have its own copy feel machine-made. The Creative Studio pitch is built on brand voice expertise — a client will read the profile and draw conclusions fast.",
      "**AI images + AI copy = fully automated profile.** That is the exact opposite of what a cultural intelligence firm should present in Saudi Arabia."
    ]}
    extraVisual={
      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white-brand/10 mt-4">
        {['ecosystem', 'end-to-end', 'orchestrate'].map((w) => (
          <div key={w} className="px-3 py-2 bg-red-brand/10 border border-red-brand/20 rounded text-[10px] text-white-brand text-center uppercase tracking-wider">{w}</div>
        ))}
      </div>
    }
  />
);
