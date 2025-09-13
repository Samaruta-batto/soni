
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { products, Oil } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Function to shuffle an array
const shuffleArray = (array: Oil[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export function FeaturedOils() {
  const [selectedOil, setSelectedOil] = useState<Oil | null>(null);
  const [featuredOils, setFeaturedOils] = useState<Oil[]>([]);

  // useEffect to shuffle oils on client-side only to prevent hydration errors
  useEffect(() => {
    setFeaturedOils(shuffleArray(products).slice(0, 6));
  }, []);

  const ProductCard = ({ oil, className }: { oil: Oil; className?: string }) => {
    const productImage = PlaceHolderImages.find((img) => img.id === oil.id);
    return (
      <Card
        className={cn(
          'group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary',
          className
        )}
        onClick={() => setSelectedOil(oil)}
      >
        <div className="absolute inset-0 z-0">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={oil.name}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={productImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/40" />
        </div>
        <div className="relative z-10 flex h-full min-h-48 items-center justify-center p-4">
          <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-black/20 p-4 text-center shadow-md backdrop-blur-sm transition-all duration-300 group-hover:bg-black/30">
            <div className="font-semibold text-center text-white">{oil.name}</div>
          </div>
        </div>
      </Card>
    );
  };

  const selectedOilImage = selectedOil ? PlaceHolderImages.find((img) => img.id === selectedOil.id) : null;

  return (
    <>
      <section id="featured-oils" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover Our Oils
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              A selection of our finest essential, carrier, and specialty oils.
            </p>
          </div>
          {featuredOils.length > 0 && (
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full animate-fade-in-up"
            >
              <CarouselContent>
                {featuredOils.map((oil) => (
                  <CarouselItem key={oil.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <ProductCard oil={oil} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          )}
        </div>
      </section>

      <Dialog open={!!selectedOil} onOpenChange={(open) => !open && setSelectedOil(null)}>
        <DialogContent className="sm:max-w-lg p-0 flex flex-col max-h-[90vh] overflow-y-auto">
          {selectedOil && (
            <>
              {selectedOilImage && (
                <div className="relative aspect-video w-full flex-shrink-0">
                  <Image
                    src={selectedOilImage.imageUrl}
                    alt={selectedOil.name}
                    width={600}
                    height={400}
                    className="object-cover w-full"
                    data-ai-hint={selectedOilImage.imageHint}
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col min-h-0">
                <DialogHeader className="pb-2 flex-shrink-0">
                  <DialogTitle className="font-headline text-2xl">{selectedOil.name}</DialogTitle>
                  <DialogDescription>{selectedOil.shortDescription}</DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto pr-2">
                  <p className="text-sm text-muted-foreground mb-4">{selectedOil.longDescription}</p>
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {selectedOil.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-1 text-primary shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
