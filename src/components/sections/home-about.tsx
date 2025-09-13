
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Card } from '../ui/card';

export function HomeAbout() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'section-about');

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-card/80 backdrop-blur-sm">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center p-8">
            <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-card-foreground sm:text-4xl">
                  Your Partner in Purity
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  At SONI EXIM, we are a leading exporter of premium Essential oils, Carrier
                  oils, and natural extracts from India. Our commitment to quality and
                  sustainability ensures our products meet the highest standards for our global clientele.
                </p>
                <div className='flex'>
                  <Button asChild>
                      <Link href="/about">
                          Learn More About Us
                          <MoveRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
                </div>
            </div>
            <div className="flex items-center justify-center animate-fade-in-up group">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={550}
                    height={310}
                    className="mx-auto aspect-video w-full max-w-md overflow-hidden rounded-xl object-cover shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
