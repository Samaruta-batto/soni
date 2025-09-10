import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Leaf } from 'lucide-react';

const aboutContent = [
  {
    value: 'item-1',
    trigger: 'Our Philosophy',
    content:
      'Our journey began with a simple mission: to share the therapeutic benefits of essential oils with the world. We believe in nature’s power to heal and soothe, and we are committed to providing products that are pure, potent, and ethically sourced. This philosophy guides every decision we make, from our fields to your home.',
  },
  {
    value: 'item-2',
    trigger: 'Unwavering Commitment to Quality',
    content:
      'Knowing that oil extraction is a delicate process, we have developed a quality-centric manufacturing process where each stage is monitored by our experts. From sourcing the finest raw materials to employing state-of-the-art distillation techniques, we ensure that every drop of our oil meets the highest standards of purity and potency.',
  },
  {
    value: 'item-3',
    trigger: 'Modern Infrastructure',
    content:
      'Strengthened by a modern infrastructure setup, we have access to the latest machines and tools. Our state-of-the-art facilities allow for precise extraction and quality control, ensuring that we deliver complete value to our clients. We continuously invest in technology to stay at the forefront of the industry.',
  },
  {
    value: 'item-4',
    trigger: 'Team of Experts',
    content:
      'What is that one thing which drives a company to optimum success? Its team. We are proud of our team, which consists of highly qualified and experienced experts who are masters of their respective fields. Their dedication and expertise are the cornerstones of our success.',
  },
];

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'section-about');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="h-6 w-6" />
              <span className="font-semibold">Soni Exim</span>
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Soni Exim
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              With a commitment to quality, sustainability, and customer satisfaction, we take pride
              in bringing you the finest and purest essential oils from nature’s bounty.
            </p>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              {aboutContent.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.content}
                  </AccordionContent>
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
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-2xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
