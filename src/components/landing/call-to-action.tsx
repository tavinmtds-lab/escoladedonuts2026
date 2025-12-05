
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Bot, CheckCircle, MessageSquare, Goal } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export function CallToAction() {
  const benefits = [
    { icon: '🍩', text: 'Sugere sabores e combinações para <b>vender mais</b>' },
    { icon: '✅', text: 'Responde dúvidas sobre <b>massas e coberturas</b>' },
    { icon: '📋', text: 'Cria ideias de <b>cardápios e kits</b> promocionais' },
    { icon: '✨', text: 'Te motiva quando você <b>pensa em desistir</b>' },
  ];

  return (
    <section className="bg-secondary text-secondary-foreground py-12 sm:py-24 shadow-inner">
      <div className="container mx-auto flex flex-col items-center text-center gap-8 px-4">
        <div className="flex flex-col items-center">
            <div className="bg-white rounded-full px-2 py-1 inline-block">
                <p className="font-medium font-headline text-xs sm:text-sm text-secondary">Sua Mentora Digital de Confeitaria</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-headline mt-4">
                Você <b>não vai</b> aprender sozinha.
            </h2>

            <div className="w-full max-w-xs sm:max-w-md mt-8">
              <Script src="https://fast.wistia.com/player.js" async />
              <Script src="https://fast.wistia.com/embed/gez09v8ptg.js" async type="module"/>
              <style jsx>{`
                  wistia-player[media-id='gez09v8ptg']:not(:defined) { 
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/gez09v8ptg/swatch'); 
                      display: block; 
                      filter: blur(5px); 
                      padding-top:177.78%; 
                  }
              `}</style>
              {/* @ts-ignore */}
              <wistia-player media-id="gez09v8ptg" aspect="0.5625"></wistia-player>
            </div>
            
            <div className="flex flex-col items-center w-full max-w-md">
                <ul className="mt-8 space-y-2 text-left self-start">
                    {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-base sm:text-lg">
                        <span className="text-xl sm:text-2xl mt-1">{benefit.icon}</span>
                        <span className="flex-1" dangerouslySetInnerHTML={{ __html: benefit.text }} />
                    </li>
                    ))}
                </ul>
                <p className="mt-8 text-lg sm:text-xl italic">“Cada receita é um passo para a sua <b>liberdade financeira</b>.” – DONNIE IA</p>
            </div>
            <Button size="lg" variant="default" className="mt-8 h-14 text-lg w-full sm:w-auto" asChild>
                <Link href="#oferta">
                QUERO DESBLOQUEAR MINHA MENTORA
                </Link>
            </Button>
            <p className="mt-2 text-sm text-secondary-foreground/80">🔐 Exclusiva para alunas da Escola de Donuts</p>
        </div>
      </div>
    </section>
  );
}
