
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface FlippingCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

const FlippingCard = React.forwardRef<HTMLDivElement, FlippingCardProps>(
  ({ className, front, back, ...props }, ref) => (
    <div
      className={cn('group h-52 w-full [perspective:1000px]', className)}
      ref={ref}
      {...props}
    >
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Card className="h-full w-full">{front}</Card>
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="h-full w-full">{back}</Card>
        </div>
      </div>
    </div>
  )
);
FlippingCard.displayName = 'FlippingCard';

const FlippingCardFront = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('h-full w-full', className)} {...props} />
  )
);
FlippingCardFront.displayName = 'FlippingCardFront';

const FlippingCardBack = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('h-full w-full', className)} {...props} />
  )
);
FlippingCardBack.displayName = 'FlippingCardBack';

export { FlippingCard, FlippingCardFront, FlippingCardBack };
