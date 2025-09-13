
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageWrapper } from '@/components/layout/page-wrapper';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
