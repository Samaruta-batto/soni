
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { Cinzel, Playfair_Display, Lato } from 'next/font/google';
import { cn } from '@/lib/utils';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: '700',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: '700',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Soni Exim Enhanced',
  description: 'Your trusted partner in the world of essential oils.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn('scroll-smooth', cinzel.variable, playfairDisplay.variable, lato.variable)}
    >
      <body className="font-body antialiased relative">
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="https://picsum.photos/seed/naturebg/1920/1280"
            alt="Nature background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative min-h-dvh flex flex-col items-center">
          <Header />
          <main className="w-full flex-1 flex flex-col items-center py-8 md:py-16">
            <div className="w-full max-w-6xl">
              <PageWrapper>{children}</PageWrapper>
            </div>
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
