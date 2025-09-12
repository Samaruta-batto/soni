
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Eye, Gem, Target } from 'lucide-react';
import { FlippingCard } from '@/components/ui/flipping-card';

const whySoniExim = [
  {
    text: 'We believe in matching the highest standards of quality & purity in our products by using industry-recognized practices.',
  },
  {
    text: 'We price our products competitively to stay ahead in the line of customer’s preference.',
  },
  {
    text: 'We cater to a huge number of clients across a diverse industry range.',
  },
  {
    text: 'We have developed financially and ethically sound services through an experience of over the years.',
  },
  {
    text: 'Our dedicated customer service approach is backed by a 100% satisfaction guarantee policy.',
  },
];

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'section-about');

  const VisionFront = (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <Eye className="h-8 w-8" />
      </div>
      <h3 className="font-headline text-2xl font-bold">Our Vision</h3>
      <p className="mt-2 text-sm text-muted-foreground italic">Hover to reveal</p>
    </div>
  );

  const VisionBack = (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <p className="text-muted-foreground">
        SONI EXIM has the vision to grow into the world’s largest and the most trusted
        manufacturer & supplier of the purest natural products priced competitively.
      </p>
    </div>
  );

  const MissionFront = (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <Target className="h-8 w-8" />
      </div>
      <h3 className="font-headline text-2xl font-bold">Our Mission</h3>
      <p className="mt-2 text-sm text-muted-foreground italic">Hover to reveal</p>
    </div>
  );

  const MissionBack = (
     <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <p className="text-muted-foreground">
        We collectively work towards our mission to ensure a memorable and pleasant
        experience to every customer through dedicated customer service.
      </p>
    </div>
  );

  const WhySoniEximFront = (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
       <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <Gem className="h-8 w-8" />
      </div>
      <h3 className="font-headline text-2xl font-bold">Why Soni Exim?</h3>
      <p className="mt-2 text-sm text-muted-foreground italic">Hover to reveal</p>
    </div>
  );

  const WhySoniEximBack = (
    <Card className="h-full w-full">
       <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Gem className="h-6 w-6" />
          </div>
          <CardTitle className="font-headline">Why Soni Exim?</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {whySoniExim.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span className="text-muted-foreground">{item.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );


  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 animate-fade-in-up">
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={550}
                height={550}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-2xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Soni Exim
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              At SONI EXIM, we are proud to be a leading exporter of premium Essential oils, Carrier
              oils, SCF CO2 oils and Oleoresins from India. Our commitment to quality and
              sustainability ensures that our products meet the highest standards, catering to the
              diverse needs of our global clientele. We believe in the power of nature and are
              committed to providing 100% natural oils.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:mt-24 md:grid-cols-2 animate-fade-in-up">
           <FlippingCard front={VisionFront} back={VisionBack} />
           <FlippingCard front={MissionFront} back={MissionBack} />
        </div>

        <div className="mt-16 md:mt-24 animate-fade-in-up">
           <FlippingCard front={WhySoniEximFront} back={WhySoniEximBack} className="h-80" />
        </div>
      </div>
    </section>
  );
}
