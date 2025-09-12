'use client';

import Image from 'next/image';
import { useState } from 'react';
import { products, Oil } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Check } from 'lucide-react';
import { ContactCard } from './contact-card';
import { HorizontalScroll } from '../ui/horizontal-scroll';
import { cn } from '@/lib/utils';

const essentialOils = products.filter((p) => p.category === 'essential');
const carrierOils = products.filter((p) => p.category === 'carrier');
const scfOils = products.filter((p) => p.category === 'scf');

const oilCategories = [
  { title: 'Essential Oils', oils: essentialOils },
  { title: 'Carrier Oils', oils: carrierOils },
  { title: 'SCF CO₂ & Oleoresins', oils: scfOils },
];

export function Products() {
  const [selectedOil, setSelectedOil] = useState<Oil | null>(null);

  const ProductCard = ({ oil, className }: { oil: Oil; className?: string }) => {
    const productImage = PlaceHolderImages.find((img) => img.id === oil.id);
    return (
      <Card
        className={cn(
          'group cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2',
          className
        )}
        onClick={() => setSelectedOil(oil)}
      >
        <CardHeader className="p-0">
          <div className="relative aspect-4/3 w-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={oil.name}
                width={400}
                height={300}
                className="h-full w-full object-cover"
                data-ai-hint={productImage.imageHint}
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold">{oil.name}</h3>
          <p className="text-sm text-muted-foreground">{oil.shortDescription}</p>
        </CardContent>
      </Card>
    );
  };

  const ProductGrid = ({ oils }: { oils: Oil[] }) => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {oils.map((oil, i) => (
        <ProductCard
          key={oil.id}
          oil={oil}
          className="animate-fade-in-up"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );

  const selectedOilImage = selectedOil ? PlaceHolderImages.find((img) => img.id === selectedOil.id) : null;

  return (
    <>
      <section id="products" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in-up">
              Our Products
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl animate-fade-in-up">
              Explore our diverse range of pure and natural oils, crafted for your well-being.
            </p>
          </div>
        </div>

        <HorizontalScroll>
          {oilCategories.map((category) => (
            <div key={category.title} className="flex h-full min-w-full flex-col justify-center px-4 md:px-8 lg:px-16">
               <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
                {category.title}
              </h3>
              <ProductGrid oils={category.oils} />
            </div>
          ))}
        </HorizontalScroll>

        <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
          <ContactCard />
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
                    fill
                    className="object-contain w-full"
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
