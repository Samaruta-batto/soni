
'use client';

import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function Contact() {
  const { toast } = useToast();
  const contactImage = PlaceHolderImages.find((img) => img.id === 'contact-section-bg');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API endpoint.
    // For this demo, we'll just show a success toast.
    toast({
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="relative z-10 w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 animate-fade-in-up items-center">
              <div className="space-y-4 rounded-xl bg-card/50 p-6 shadow-lg">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                  Contact Us Today
                </h2>
                <p className="text-muted-foreground">
                  Have a question or ready to place an order? Get in touch with our team.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-card/80 hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Export Inquiries</h3>
                      <p className="text-muted-foreground">+1 (234) 567-890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-card/80 hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">General Support</h3>
                      <p className="text-muted-foreground">contact@soniexim.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will get back to you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
