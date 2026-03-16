
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Bot, CheckCircle, MessageSquare, Goal } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { cn } from '@/lib/utils';

export function CallToAction() {
  const benefits = [
    { icon: '🍩', text: 'Sugere sabores e combinações para <b>vender mais</b>' },
    { icon: '✅', text: 'Responde dúvidas sobre <b>massas e coberturas</b>' },
    { icon: '📋', text: 'Cria ideias de cardápios e kits promocionais' },
    { icon: '✨', text: 'Te motiva quando você <b>pensa em desistir</b>' },
  ];

  return (
    <section className="bg-[#0f4d3d] text-white py-12 sm:py-24 shadow-inner">
      <div className="container mx-auto flex flex-col items-center text-center gap-8 px-4">
        <div className="flex flex-col items-center">
            <div className="bg-white rounded-full px-8 py-3 inline-block mb-6 shadow-md border-2 border-white/20">
                <p className="font-bold font-headline text-xl sm:text-3xl text-[#0f4d3d] leading-none">Sua Mentora Digital de Confeitaria</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-headline text-white leading-tight">
                Você <b>não vai</b> aprender sozinha.
            </h2>

            <div className="w-full max-w-xs sm:max-w-md mt-8 bg-black/10 p-2 rounded-2xl">
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
            
            <div className="flex flex-col items-center w-full max-w-lg mt-10">
                <ul className="space-y-4 text-left self-start w-full px-4 sm:px-0">
                    {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-lg sm:text-xl text-white">
                        <span className="text-2xl mt-1">{benefit.icon}</span>
                        <span className="flex-1" dangerouslySetInnerHTML={{ __html: benefit.text }} />
                    </li>
                    ))}
                </ul>
                <div className="mt-10 p-4 border-l-4 border-white bg-white/10 rounded-r-lg w-full text-left">
                  <p className="text-lg sm:text-xl italic text-white font-medium">“Cada receita é um passo para a sua <b>liberdade financeira</b>.” – DONNIE IA</p>
                </div>
            </div>
            <Button size="lg" className="mt-10 h-20 text-xl sm:text-2xl px-12 w-full max-w-md sm:w-auto bg-[#16a34a] hover:bg-[#148b3f] text-white font-black rounded-2xl shadow-2xl transition-transform hover:scale-105 uppercase tracking-tight" asChild>
                <Link href="#oferta">
                QUERO DESBLOQUEAR MINHA MENTORA
                </Link>
            </Button>
            <p className="mt-6 text-base text-white/90 font-bold">🔐 Exclusiva para alunas da Escola de Donuts</p>
        </div>
      </div>
    </section>
  );
}
