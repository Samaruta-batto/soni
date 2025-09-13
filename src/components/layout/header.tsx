
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';
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

const NavLink = ({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link href={href} className={className} data-active={isActive} {...props}>
      {children}
    </Link>
  );
};


export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  const Logo = () => (
    <div className="flex items-center gap-2 rounded-md p-2">
      <Leaf className="h-6 w-6 text-primary" />
      <div className="flex flex-col leading-none">
        <span className="font-logo text-sm font-bold tracking-wider text-primary">SONI</span>
        <span className="font-logo text-sm font-bold tracking-wider text-primary">EXIM</span>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center">
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/90">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" onClick={() => setSheetOpen(false)}>
                    <Logo />
                  </Link>
                </div>
                <nav className="mt-6 flex flex-col gap-6">
                  <Link
                    key="home"
                    href="/"
                    className={cn(
                      'text-lg font-medium transition-colors duration-300',
                      pathname === '/' ? 'text-primary' : 'hover:text-primary'
                    )}
                    onClick={() => setSheetOpen(false)}
                  >
                    Home
                  </Link>
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
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="transition-transform duration-300 hover:scale-105">
            <Logo />
          </Link>
        </div>

        <nav className="hidden w-full items-center justify-center md:flex">
          <div className="flex items-center gap-8">
            <NavLink href="/" className="nav-link">
              Home
            </NavLink>
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href} className="nav-link">
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="flex flex-1 items-center justify-end" />
      </div>
    </header>
  );
}
