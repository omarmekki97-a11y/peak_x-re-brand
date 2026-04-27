import React from 'react';

export const Label = ({ children, color = 'gold' }: { children: React.ReactNode, color?: 'gold' | 'red' | 'aqua' | 'dim' | 'orange' }) => {
  const colors = {
    gold: 'text-gold-brand',
    red: 'text-red-brand',
    aqua: 'text-aqua-brand',
    dim: 'text-dim-brand',
    orange: 'text-orange-brand',
  };
  return (
    <span className={`font-work text-[11px] uppercase tracking-[0.26em] ${colors[color]}`}>
      {children}
    </span>
  );
};

export const Divider = ({ color = 'gold' }: { color?: 'gold' | 'red' | 'aqua' | 'orange' }) => {
  const colors = {
    gold: 'bg-gold-brand',
    red: 'bg-red-brand',
    aqua: 'bg-aqua-brand',
    orange: 'bg-orange-brand',
  };
  return <div className={`w-[52px] h-[2px] my-[22px] ${colors[color]}`} />;
};

export const Tag = ({ children, color = 'gold' }: { children: React.ReactNode, color?: 'gold' | 'red' | 'aqua' | 'orange' | 'sage' }) => {
  const styles = {
    gold: 'bg-gold-brand/10 border-gold-brand/30 text-gold-brand',
    red: 'bg-red-brand/10 border-red-brand/30 text-red-brand',
    aqua: 'bg-aqua-brand/10 border-aqua-brand/30 text-aqua-brand',
    orange: 'bg-orange-brand/10 border-orange-brand/30 text-orange-brand',
    sage: 'bg-sage-brand/10 border-sage-brand/30 text-sage-brand',
  };
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] font-work text-[11px] uppercase tracking-[0.12em] border ${styles[color]}`}>
      {children}
    </div>
  );
};
