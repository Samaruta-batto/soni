import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const qualityPoints = [
  {
    title: 'Quality Assurance',
    content:
      'Knowing the fact the oil extraction from sources such as flowers, seeds, is a delicate process, we have developed a quality-centric manufacturing process where each of the stages is monitored by our experts.',
  },
  {
    title: 'Infrastructure',
    content:
      'Strengthened by a modern infrastructure set up, we are having access to latest machines and tools. Our company is focused towards delivering complete value to the clients which is why we leave no stone unturned in our way.',
  },
  {
    title: 'Team of Experts',
    content:
      'What is that one thing which drives a company to optimum success? Its team. We are proud of our team which consists of highly qualified and experienced experts who are the masters of their respective fields.',
  },
];

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'section-about');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Soni Exim
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your trusted partner in the world of essential oils. With a commitment to quality,
              sustainability, and customer satisfaction, we take pride in bringing you the finest
              and purest essential oils from nature’s bounty.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {qualityPoints.map((point) => (
                <AccordionItem key={point.title} value={point.title}>
                  <AccordionTrigger className="font-bold">{point.title}</AccordionTrigger>
                  <AccordionContent>{point.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={550}
                height={550}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
