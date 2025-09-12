
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MoveRight } from 'lucide-react';

export function ContactCard() {
  const cardBgImage = PlaceHolderImages.find((img) => img.id === 'contact-card-bg');

  return (
    <Card className="group relative w-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl animate-fade-in-up">
      <div className="absolute inset-0 z-0">
        {cardBgImage && (
          <Image
            src={cardBgImage.imageUrl}
            alt={cardBgImage.description}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-0"
            data-ai-hint={cardBgImage.imageHint}
            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
          />
        )}
        <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center text-primary-foreground">
        <h3 className="font-headline text-3xl font-bold">Have Questions?</h3>
        <p className="mt-2 max-w-sm text-lg">
          Our team is ready to help you with your needs. Reach out to us today.
        </p>
        <Button asChild className="mt-6 transition-transform duration-300 group-hover:scale-105" size="lg">
          <Link href="/contact">
            Contact Us
            <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
