
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Trophy, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

export function About() {
  const julianaImage = PlaceHolderImages.find((img) => img.id === 'juliana-fiorentelli-avatar');

  const highlights = [
    {
      icon: <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />,
      title: 'Método validado por +800 alunas',
      description: 'Seu método de ensino foi <b>comprovado por mais de 800 alunas</b> que agora vendem com sucesso!',
    },
    {
      icon: <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />,
      title: 'Nossa Missão',
      description: 'Ajuda-la a transformar suas habilidades na cozinha ou confeitaria em uma <b>fonte de renda, alegria e realização pessoal</b>.',
    },
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4">
        <div className="text-center max-w-3xl">
          <p className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium font-headline">Sobre a Expert</p>
          <h2 className="text-3xl sm:text-5xl font-bold font-headline mt-4" style={{ color: '#C45440' }}>Conheça <b>Juliana Fiorentelli</b></h2>
          <p className="mt-4 text-lg sm:text-xl text-foreground/80">
            Juliana Fiorentelli transformou sua <b>paixão pela confeitaria</b> em um negocio prospero e na missão de capacitar outras pessoas. Ela acredita que o donuts é mais que um artesanato, é um caminho para a <b>independência e aumento da autoestima</b>.
          </p>
        </div>

        <Card className="mt-8 bg-white/50 border-primary/20 w-full max-w-3xl">
          <CardContent className="p-6 sm:p-8 space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index}>
                {index > 0 && <Separator className="mb-6" />}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-secondary bg-secondary/10 p-2 rounded-full">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-3xl font-bold font-headline">{highlight.title}</h3>
                    <p className="mt-2 text-base sm:text-2xl text-foreground/80" dangerouslySetInnerHTML={{ __html: highlight.description }}></p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          {julianaImage && (
            <Image
              src={julianaImage.imageUrl}
              alt={julianaImage.description}
              width={300}
              height={300}
              className="rounded-full shadow-lg"
              data-ai-hint={julianaImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
