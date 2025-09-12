'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Leaf, Menu, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Our Products' },
  { href: '/ai-recommender', label: 'AI Recommender' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container flex h-20 items-center">
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex h-full flex-col">
                 <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                    <Leaf className="h-6 w-6 text-primary" />
                    <span className="font-logo text-xl font-bold tracking-wider">Soni Exim</span>
                  </Link>
                </div>
                <nav className="mt-6 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        'text-lg font-medium transition-colors duration-300',
                        pathname === item.href ? 'text-primary' : 'hover:text-primary'
                      )}
                      onClick={() => setSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto border-t pt-6 flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-12 w-12">
                      <ShoppingCart className="h-6 w-6" />
                      <span className="sr-only">Shopping Cart</span>
                    </Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-logo text-xl font-bold tracking-wider">Soni Exim</span>
          </Link>
        </div>

        <nav className="hidden w-full items-center justify-center md:flex">
           <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 hover:text-foreground',
                  pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end">
          <Button variant="ghost" size="icon">
            <ShoppingCart />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
      <div className="container">
        <hr className="border-t border-border" />
      </div>
    </header>
  );
}
