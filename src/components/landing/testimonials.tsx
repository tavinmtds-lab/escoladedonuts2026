import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export function Testimonials() {
  const testimonialImages = PlaceHolderImages.filter(img => 
    img.id.startsWith('testimonial-')
  );

  return (
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto text-center px-4">
        <p className="text-primary font-medium font-headline text-xl sm:text-2xl">Depoimentos de Alunas</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2">Histórias de <b>Sucesso</b> da Nossa Comunidade</h2>
        <p className="mt-4 max-w-2xl mx-auto text-foreground/80 text-lg sm:text-xl">
          Nossas alunas não apenas aprendem a cozinhar — elas <b>criam um novo estilo de vida</b>. Veja como mulheres comuns estão faturando de <b>R$100 a R$300 por dia</b> com Donuts caseiros.
        </p>
        <div className="mt-8 flex justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
          >
            <CarouselContent>
              {testimonialImages.map((image) => (
                <CarouselItem key={image.id} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-card rounded-lg shadow-md border border-border overflow-hidden">
                        <CardContent className="p-0">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                width={400}
                                height={800}
                                className="object-cover w-full h-full"
                                data-ai-hint={image.imageHint}
                            />
                        </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
