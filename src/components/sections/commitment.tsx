import { CheckCircle } from 'lucide-react';

export function Commitment() {
  return (
    <section id="commitment" className="w-full py-16 md:py-24 lg:py-32 bg-accent/10">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Our Commitment to Quality
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At Soni Exim, we are dedicated to providing you with premium-quality essential oils
            that meet the highest industry standards. Our sourcing process involves working
            closely with experienced farmers and distillers, ensuring sustainability and fair
            practices.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <p className="text-sm italic text-muted-foreground">
            “Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
            sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh.”
          </p>
        </div>
      </div>
    </section>
  );
}
