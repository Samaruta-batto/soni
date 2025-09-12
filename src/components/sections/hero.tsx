'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Beaker, Droplets, Leaf } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const categories = [
  {
    name: 'Essential Oils',
    slug: 'essential',
    icon: <Leaf className="h-8 w-8" />,
    image: PlaceHolderImages.find((img) => img.id === 'category-essential-bg'),
  },
  {
    name: 'Carrier Oils',
    slug: 'carrier',
    icon: <Droplets className="h-8 w-8" />,
    image: PlaceHolderImages.find((img) => img.id === 'category-carrier-bg'),
  },
  {
    name: 'SCF CO₂ & Oleoresins',
    slug: 'scf',
    icon: <Beaker className="h-8 w-8" />,
    image: PlaceHolderImages.find((img) => img.id === 'category-scf-bg'),
  },
];

export function Hero() {
  const defaultHeroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [hoveredCategory, setHoveredCategory] = useState(defaultHeroImage);
  const heroImage = hoveredCategory;

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="relative h-[60vh] min-h-[500px] w-full transition-all duration-500 ease-in-out">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="h-full w-full object-cover object-center"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 -mt-32 pb-12 text-center md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in-up">
            <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Soni Exim Product Range
            </h1>
            <p className="text-lg text-foreground/90 md:text-xl">
              Our company is focused towards delivering complete value. Discover the pure essence
              of nature with our premium oils.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 animate-fade-in-up">
            {categories.map((category) => (
              <Link key={category.slug} href="/products">
                <div
                  className="group"
                  onMouseEnter={() => setHoveredCategory(category.image)}
                  onMouseLeave={() => setHoveredCategory(defaultHeroImage)}
                >
                  <Card className="flex h-full flex-col items-center justify-center p-6 text-center transition-all duration-300 ease-in-out hover:bg-card/90 hover:shadow-2xl hover:-translate-y-2">
                    <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <h3 className="font-headline text-xl font-bold">{category.name}</h3>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
