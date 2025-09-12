'use client';

import { cn } from '@/lib/utils';

export function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col bg-card/80 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up backdrop-blur-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
