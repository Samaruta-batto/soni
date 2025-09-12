'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Leaf, Menu, Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Input } from '../ui/input';

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-logo text-xl font-bold tracking-wider">Soni Exim</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-md">
            <Input type="search" placeholder="Search for products..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon">
            <ShoppingCart />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                    <Leaf className="h-6 w-6 text-primary" />
                    <span className="font-logo text-xl font-bold tracking-wider">Soni Exim</span>
                  </Link>
                </div>
                <div className="mt-6">
                  <div className="relative w-full">
                     <Input type="search" placeholder="Search..." className="pl-10" />
                     <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  </div>
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
      </div>
      <nav className="hidden border-t bg-background/80 py-2 md:flex">
        <div className="container flex items-center justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'text-sm font-medium relative transition-colors duration-300 hover:text-foreground',
                  pathname === item.href ? 'text-foreground' : 'text-muted-foreground',
                  'after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'
                )}
              >
                {item.label}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
}
