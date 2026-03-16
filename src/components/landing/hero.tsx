import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const heroImageDesktop = PlaceHolderImages.find((img) => img.id === 'hero-woman-desktop');
  const heroImageMobile = PlaceHolderImages.find((img) => img.id === 'hero-woman-mobile');

  return (
    <section className="relative bg-background overflow-hidden">
      {/* --- Desktop View --- */}
      <div className="hidden sm:block min-h-[650px] lg:min-h-[850px]">
        {heroImageDesktop && (
          <Image
            src={heroImageDesktop.imageUrl}
            alt={heroImageDesktop.description}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        <div className="relative z-10 container mx-auto flex flex-col sm:items-start sm:justify-start text-center sm:text-left py-16 sm:py-32">
            <div className="bg-white/90 p-4 rounded-2xl inline-block shadow-sm backdrop-blur-sm mb-4">
              <Image
                  src="https://i.imgur.com/SkEtdKt.jpeg"
                  alt="Escola de Donuts Logo"
                  width={150}
                  height={150}
                  className="rounded-lg"
              />
            </div>
            <p className="font-bold font-headline text-2xl text-primary drop-shadow-sm">Escola de Donuts</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-montserrat mt-2 max-w-3xl text-primary" style={{ textShadow: '2px 2px 8px rgba(255,255,255,0.9)' }}>
              Aprenda a fazer <b className="font-extrabold">Donuts deliciosos e vendáveis</b> na sua própria cozinha!
            </h1>
            <p className="mt-6 text-xl max-w-2xl font-body text-primary-foreground font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
              Estão abertas as inscrições para a Escola de Donuts, onde você vai aprender a criar uma coleção incrível com <b>+de 12 receitas que vão te fazer lucrar o ano todo</b>.
            </p>
            <div className="mt-8 flex flex-col items-center sm:items-start bg-white/40 p-4 rounded-xl backdrop-blur-md border border-white/20">
              <Image
                src="https://i.imgur.com/LF43K6e.png"
                alt="Avaliações de alunas"
                width={220}
                height={45}
              />
              <p className="mt-3 text-lg text-primary font-bold">
                Já somos mais de <span className="font-extrabold border-2 border-red-600 rounded-full px-3 py-1 bg-white inline-block shadow-sm">1.280 confeiteiras</span>, só falta VOCÊ!
              </p>
            </div>
            <Button
              size="lg"
              className="mt-10 h-16 px-10 text-xl font-bold text-white bg-green-600 hover:bg-green-700 shadow-xl transition-all hover:scale-105"
              asChild
            >
              <Link href="#oferta">
                <Star className="mr-2 h-6 w-6" />
                QUERO ME INSCREVER NO CURSO
              </Link>
            </Button>
        </div>
      </div>
      
      {/* --- Mobile View --- */}
      <div className="sm:hidden flex flex-col">
        {heroImageMobile && (
          <div className="relative w-full aspect-[3/4]">
            <Image
              src={heroImageMobile.imageUrl}
              alt={heroImageMobile.description}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}
        <div className="bg-white p-6 relative z-10 flex flex-col items-center text-center mt-[-80px] mx-4 rounded-3xl shadow-2xl mb-12 border border-primary/5">
            <Image
                src="https://i.imgur.com/SkEtdKt.jpeg"
                alt="Escola de Donuts Logo"
                width={100}
                height={100}
                className="mb-2 rounded-lg"
            />
            <p className="font-bold font-headline text-xl text-primary">Escola de Donuts</p>
            <h1 className="text-3xl font-bold font-montserrat mt-4 text-primary leading-tight">
              Aprenda a fazer <b className="font-extrabold">Donuts deliciosos</b> na sua cozinha!
            </h1>
            <p className="mt-4 text-base font-body text-foreground/80 leading-relaxed">
              Inscrições abertas para a Escola de Donuts: aprenda <b>+de 12 receitas lucrativas</b>.
            </p>
            <div className="mt-6 flex flex-col items-center bg-primary/5 p-4 rounded-2xl w-full">
              <Image
                src="https://i.imgur.com/LF43K6e.png"
                alt="Avaliações de alunas"
                width={180}
                height={36}
              />
              <p className="mt-3 text-base text-foreground font-bold">
                Já somos mais de <span className="font-extrabold border-2 border-red-600 rounded-full px-2 py-0.5 bg-white shadow-sm">1.280 confeiteiras</span>
              </p>
            </div>
            <Button
              size="lg"
              className="mt-8 w-full h-14 text-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg"
              asChild
            >
              <Link href="#oferta">
                <Star className="mr-2 h-5 w-5" />
                QUERO ME INSCREVER
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
