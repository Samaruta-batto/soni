import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, ShieldCheck, Warehouse, Users } from 'lucide-react';

const contentPoints = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    content:
      'Knowing the fact the oil extraction from sources such as flowers, seeds, is a delicate process, we have developed a quality-centric manufacturing process where each of the stages is monitored by our experts.',
  },
  {
    icon: Warehouse,
    title: 'Infrastructure',
    content:
      'Strengthened by a modern infrastructure set up, we are having access to latest machines and tools. Our company is focused towards delivering complete value to the clients which is why we leave no stone unturned in our way.',
  },
  {
    icon: Users,
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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="h-6 w-6" />
              <span className="font-semibold">Soni Exim</span>
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to Soni Exim
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
              With a commitment to quality, sustainability, and customer satisfaction, we take
              pride in bringing you the finest and purest essential oils from nature’s bounty. Our
              journey began with a simple mission: to share the therapeutic benefits of essential
              oils with the world. Today, we have grown into a trusted name in the industry, known
              for our unwavering dedication to excellence.
            </p>
            <div className="grid gap-6 pt-4 sm:grid-cols-1">
              {contentPoints.map((point) => (
                <Card key={point.title} className="bg-background/50">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{point.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={550}
                height={550}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-lg"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
