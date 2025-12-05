
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Lock } from 'lucide-react';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-'));

  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <p className="text-primary font-medium font-headline text-xl sm:text-2xl">Galeria de Donuts</p>
        <h2 className="text-3xl sm:text-6xl font-bold font-montserrat mt-2"><b>+ de 12 Receitas</b> que Vendem Todos os Dias</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-2xl text-foreground/80">
          Explore uma prévia das delícias que você aprenderá a fazer. Cada receita foi pensada para <b>encantar visualmente e conquistar o paladar</b> de qualquer cliente.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
          {galleryImages.slice(0, 11).map((image, index) => (
            <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card">
              <CardContent className="p-0 relative">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full aspect-square"
                  data-ai-hint={image.imageHint}
                />
              </CardContent>
            </Card>
          ))}
           <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-primary flex flex-col justify-between">
              <CardContent className="p-0 relative aspect-square w-full flex items-center justify-center">
                <div className="absolute w-full h-1/4 bg-[#FFC700]/80"></div>
                <div className="absolute h-full w-1/4 bg-[#FFC700]/80"></div>
                
                <div className="absolute w-12 h-12">
                    <div className="absolute w-16 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-transparent border-4 border-[#FFD700] rotate-[-45deg]"></div>
                    <div className="absolute w-16 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-transparent border-4 border-[#FFD700] rotate-[45deg]"></div>
                </div>
                 <div className="absolute w-6 h-6 rounded-full bg-[#FFD700] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </CardContent>
              <div className="p-4 text-center bg-primary text-primary-foreground">
                <div className='flex items-center justify-center gap-2'>
                  <Lock className="h-4 w-4" />
                  <p className="font-semibold">Bônus surpresa</p>
                </div>
              </div>
            </Card>
        </div>
      </div>
    </section>
  );
}
