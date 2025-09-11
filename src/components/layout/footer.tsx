import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-logo text-xl font-bold tracking-wider">Soni Exim</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Soni Exim. All rights reserved.
          </p>
          <div className="text-center text-sm font-bold md:text-right">
            <p>EXPORT</p>
            <p>SONI EXIM CONTACT US</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
