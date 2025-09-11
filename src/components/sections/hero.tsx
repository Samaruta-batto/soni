
export function Hero() {
  return (
    <section
      className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center bg-no-repeat md:h-[70vh]"
      style={{ backgroundImage: `url('/banner.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative z-10 flex h-full items-end justify-center pb-12 text-center md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
              Soni Exim Product Range
            </h1>
            <p className="text-lg text-foreground/90 md:text-xl">
              Our company is focused towards delivering complete value. Discover the pure essence of nature with our premium oils.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
