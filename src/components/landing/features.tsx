
import React from 'react';
import { FileText, Gift, KeyRound, Scissors, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function Features() {
  const featuresImage = PlaceHolderImages.find((img) => img.id === 'features-image');

  const bonuses = [
    { icon: '💰', title: 'Guia de Lucro Diário', description: 'Aprenda como organizar suas vendas e atingir <b>R$3.500 por mês</b> com Donuts caseiros.', price: 'De R$97 por Grátis' },
    { icon: '📋', title: 'Planilha de Precificação Perfeita', description: 'Descubra <b>exatamente quanto cobrar</b> em cada Donut e garanta lucro em todas as vendas.', price: 'De R$57 por Grátis' },
    { icon: '📖', title: 'E-book "20 Receitas Extras para Vender Mais"', description: 'Receitas <b>rápidas e irresistíveis</b> para variar o cardápio e atrair novos clientes.', price: 'De R$79 por Grátis' },
    { icon: '📲', title: 'Mini Curso "Marketing Doce"', description: 'Aprenda a <b>divulgar seus Donuts</b> no Instagram e WhatsApp de forma irresistível.', price: 'De R$67 por Grátis' }
  ];

  const appFeatures = [
      { 
        icon: <ShoppingCart className="h-6 w-6 text-primary" />,
        title: 'Escolha seu acesso', 
        description: 'Selecione o plano desejado, efetue seu pagamento de forma <b>segura</b> e receba o acesso <b>na hora</b>.' 
      },
      { 
        icon: <KeyRound className="h-6 w-6 text-primary" />,
        title: 'Receba o acesso na hora', 
        description: 'Assim que o pagamento for aprovado, você recebe no <b>e-mail e WhatsApp</b> seu login para a área exclusiva.' 
      },
      { 
        icon: <Scissors className="h-6 w-6 text-primary" />,
        title: 'Siga o passo a passo e crie', 
        description: 'As aulas são <b>diretas e práticas</b>. Basta assistir, seguir a receita e <b>começar a lucrar</b>.' 
      },
  ]

  return (
    <>
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto text-center px-4">
        <div className='inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1 text-lg sm:text-xl font-medium mb-4'>
            <Gift className="h-5 w-5" />
            Bônus Exclusivos
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-headline mt-2">Inscreva-se Hoje e Leve Estes <b>Presentes!</b></h2>
        <p className='mt-4 max-w-3xl mx-auto text-lg sm:text-2xl text-foreground/80'>Estes bônus foram criados para <b>acelerar seu sucesso</b> e estão inclusos <b>gratuitamente</b> na sua inscrição.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-center">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-primary/5 shadow-lg flex flex-col text-center items-center p-6 border-2 border-primary/20 rounded-xl transition-transform hover:scale-105">
              <div className="text-6xl sm:text-8xl">{bonus.icon}</div>
              <CardHeader className="p-2 pt-4">
                <CardTitle className="font-headline text-2xl sm:text-3xl text-primary">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-2">
                <p className="text-base sm:text-lg text-foreground/90 mt-2" dangerouslySetInnerHTML={{ __html: bonus.description }}></p>
              </CardContent>
              <div className="mt-auto pt-4">
                 <p className="font-bold text-lg sm:text-xl text-foreground/80"><span className='line-through'>{bonus.price.split(' por ')[0]}</span> por <span className='bg-green-200 text-green-800 font-extrabold px-2 py-1 rounded-md'>{bonus.price.split(' por ')[1]}</span></p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <section className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium mb-4'>
                <FileText className="h-4 w-4" />
                Passo a Passo
            </div>
            <h2 className="text-3xl sm:text-6xl font-bold font-headline mt-2">Super <b>fácil e simples</b> de usar</h2>
            <p className="mt-4 text-lg sm:text-2xl text-foreground/80 max-w-2xl mx-auto">Acesse de onde quiser — <b>celular, tablet ou computador</b>.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-0.5 bg-primary/20"></div>
            
            <ul className="space-y-12">
              {appFeatures.map((feature, index) => (
                <li key={index} className="relative flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center ring-4 ring-white z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {feature.icon}
                      <h3 className="font-bold font-headline text-2xl sm:text-3xl">{feature.title}</h3>
                    </div>
                    <p className="mt-2 text-base sm:text-xl text-foreground/80" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
                    {index === 2 && featuresImage && (
                      <div className="mt-6 bg-white p-2 rounded-lg shadow-2xl border">
                        <div className="flex items-center gap-1.5 p-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <Image
                          src={featuresImage.imageUrl}
                          alt={featuresImage.description}
                          width={600}
                          height={400}
                          className='rounded-b-md w-full h-auto'
                          data-ai-hint={featuresImage.imageHint}
                        />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
