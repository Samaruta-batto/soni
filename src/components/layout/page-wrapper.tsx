'use client';

import { cn } from '@/lib/utils';

export function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col w-full bg-transparent',
        className
      )}
    >
      {children}
    </div>
  );
}
