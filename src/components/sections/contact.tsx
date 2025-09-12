
'use client';

import { Mail, Phone, MessageSquare, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FlippingCard } from '@/components/ui/flipping-card';

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const ContactFront = (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <MessageSquare className="h-8 w-8" />
      </div>
      <h3 className="font-headline text-3xl font-bold">Contact Us Today</h3>
      <p className="mt-2 text-muted-foreground">
        Have a question or ready to place an order? Get in touch with our team.
      </p>
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-left">Export Inquiries</h3>
            <p className="text-muted-foreground">+1 (234) 567-890</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-left">General Support</h3>
            <p className="text-muted-foreground">contact@soniexim.com</p>
          </div>
        </div>
      </div>
       <p className="mt-4 text-sm text-muted-foreground italic">Hover to flip for more</p>
    </div>
  );

  const ContactBack = (
    <div className="p-6 h-full flex flex-col">
      <CardHeader className="p-0 mb-4">
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Fill out the form or connect with us on social media.
        </CardDescription>
      </CardHeader>
      <div className="flex-1">
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
              className="min-h-[80px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
      </div>
    </div>
  );

  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="relative z-10 w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-md animate-fade-in-up">
            <FlippingCard front={ContactFront} back={ContactBack} className="h-[34rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
