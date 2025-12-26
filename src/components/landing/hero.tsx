
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const heroImageDesktop = PlaceHolderImages.find((img) => img.id === 'hero-woman-desktop');
  const heroImageMobile = PlaceHolderImages.find((img) => img.id === 'hero-woman-mobile');

  return (
    <section className="relative bg-background">
      {/* --- Desktop View --- */}
      <div className="hidden sm:block">
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
            <Image
                src="https://i.imgur.com/JYMca6b.png"
                alt="Escola de Donuts Logo"
                width={180}
                height={180}
                className="mb-2"
            />
            <p className="font-medium font-headline text-2xl text-primary" style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.7)' }}>Escola de Donuts</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat mt-2 max-w-3xl text-primary" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Aprenda a fazer <b className="font-extrabold">Donuts deliciosos e vendáveis</b> na sua própria cozinha!
            </h1>
            <p className="mt-4 text-xl max-w-2xl font-body text-primary-foreground" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Estão abertas as inscrições para a Escola de Donuts, onde você vai aprender a criar uma coleção incrível com <b>+de 12 receitas que vão te fazer lucrar o ano todo</b>.
            </p>
            <div className="mt-6 flex flex-col items-center sm:items-start">
              <Image
                src="https://i.imgur.com/LF43K6e.png"
                alt="Avaliações de alunas"
                width={200}
                height={40}
              />
              <p className="mt-2 text-lg text-primary-foreground font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Já somos mais de <span className="font-bold">1.280 confeiteiras</span>, só falta VOCÊ!
              </p>
            </div>
            <Button
              size="lg"
              className="mt-8 h-14 text-lg font-bold text-white bg-green-600 hover:bg-green-700"
              asChild
            >
              <Link href="#oferta">
                <Star className="mr-2 h-5 w-5" />
                QUERO ME INSCREVER NO CURSO
              </Link>
            </Button>
        </div>
      </div>
      
      {/* --- Mobile View --- */}
      <div className="sm:hidden flex flex-col">
        {heroImageMobile && (
          <div className="relative w-full aspect-[9/10]">
            <Image
              src={heroImageMobile.imageUrl}
              alt={heroImageMobile.description}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}
        <div className="bg-white p-6 relative z-10 flex flex-col items-center text-center mt-[-100px] mx-4 rounded-t-3xl rounded-b-lg shadow-2xl">
            <Image
                src="https://i.imgur.com/JYMca6b_1.png"
                alt="Escola de Donuts Logo"
                width={150}
                height={150}
                className="mb-2"
            />
            <p className="font-medium font-headline text-xl text-primary" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Escola de Donuts</p>
            <h1 className="text-3xl font-bold font-montserrat mt-4 text-primary">
              Aprenda a fazer <b className="font-extrabold">Donuts deliciosos e vendáveis</b> na sua própria cozinha!
            </h1>
            <p className="mt-4 text-base font-body" style={{ color: '#4A3B36', fontFamily: "'Poppins', sans-serif" }}>
              Estão abertas as inscrições para a Escola de Donuts, onde você vai aprender a criar uma coleção incrível com <b>+de 12 receitas que vão te fazer lucrar o ano todo</b>.
            </p>
            <div className="mt-6 flex flex-col items-center">
              <Image
                src="https://i.imgur.com/LF43K6e.png"
                alt="Avaliações de alunas"
                width={200}
                height={40}
              />
              <p className="mt-2 text-base text-foreground font-semibold">
                Já somos mais de <span className="font-bold">1.280 confeiteiras</span>, só falta VOCÊ!
              </p>
            </div>
            <Button
              size="lg"
              className="mt-8 w-full h-14 text-lg font-bold text-white bg-green-600 hover:bg-green-700"
              asChild
            >
              <Link href="#oferta">
                <Star className="mr-2 h-5 w-5" />
                QUERO ME INSCREVER NO CURSO
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
