import { getSweets } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SweetCard } from '@/components/sweets/sweet-card';
import { MenuGrid } from '@/components/sweets/menu-grid';
import Link from 'next/link';

export default async function Home() {
  const sweets = await getSweets();
  const specials = sweets.filter((sweet) => sweet.isSpecial);

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://dadus.co.in/cdn/shop/files/Untitled_design-5.png?v=1718970197"
          alt="Promotional banner for Indian sweets"
          data-ai-hint="indian sweets banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center text-primary-foreground p-4">
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            A Taste of Indian Tradition
          </h1>
          <p className="max-w-2xl text-lg md:text-xl">
            Discover a world of delightful mithai, handcrafted with love and the finest traditional ingredients.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="#menu">Explore Our Mithai</Link>
          </Button>
        </div>
      </section>

      {specials.length > 0 && (
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center font-headline text-4xl font-bold md:mb-12 md:text-5xl">
              Today&apos;s Specials
            </h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {specials.map((sweet) => (
                  <CarouselItem key={sweet.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <SweetCard sweet={sweet} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12 hidden sm:flex" />
              <CarouselNext className="mr-12 hidden sm:flex" />
            </Carousel>
          </div>
        </section>
      )}

      <section id="menu" className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center font-headline text-4xl font-bold md:mb-12 md:text-5xl">
            Our Full Mithai Menu
          </h2>
          <MenuGrid sweets={sweets} />
        </div>
      </section>
    </div>
  );
}
