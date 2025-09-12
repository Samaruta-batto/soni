
'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-react';

const testimonials = [
  {
    quote:
      'The quality of the essential oils from Soni Exim is unmatched. Our customers have noticed the difference, and our sales have never been better. Truly a trusted partner.',
    author: 'John Doe',
    company: 'CEO, AromaTherapy Inc.',
  },
  {
    quote:
      'Working with Soni Exim has been a seamless experience. Their commitment to sustainability and fair practices aligns perfectly with our brand values. Highly recommended.',
    author: 'Jane Smith',
    company: 'Founder, Natural Beauty Co.',
  },
  {
    quote:
      'From sourcing to delivery, the professionalism of the Soni Exim team is top-notch. They are reliable, and their product purity is consistently excellent.',
    author: 'Samuel Lee',
    company: 'Purchasing Manager, Wellness Essentials',
  },
];

export function Commitment() {
  return (
    <section id="commitment" className="w-full py-16 md:py-24 lg:py-32 bg-accent/10">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Our Commitment to Quality
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At Soni Exim, we are dedicated to providing you with premium-quality essential oils that
            meet the highest industry standards. Our sourcing process involves working closely
            with experienced farmers and distillers, ensuring sustainability and fair practices.
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <p className="text-lg italic text-muted-foreground md:text-xl">
                        “{testimonial.quote}”
                      </p>
                      <div className="text-right">
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
