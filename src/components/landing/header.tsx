'use client';
import { useState, useEffect } from 'react';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const now = new Date();
    // Definindo a data alvo para 12 de Janeiro
    let targetYear = now.getFullYear();
    if (now.getMonth() > 0 || (now.getMonth() === 0 && now.getDate() > 12)) {
      targetYear += 1;
    }
    const targetDate = new Date(targetYear, 0, 12);

    const timer = setInterval(() => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const CountdownBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-1">
      <div className="text-3xl sm:text-5xl font-extrabold bg-white text-primary rounded-xl w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center shadow-lg border border-primary/5">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-foreground/60 uppercase tracking-widest mt-1">{label}</span>
    </div>
  );

  return (
    <header className="bg-[#FFF7F5] py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/5">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-headline italic text-primary leading-tight tracking-tight">
          Inscrições abertas até dia 12 de janeiro
        </h2>
        <div className="flex items-center gap-3 sm:gap-6">
            <CountdownBlock value={timeLeft.days} label="Dias" />
            <CountdownBlock value={timeLeft.hours} label="Horas" />
            <CountdownBlock value={timeLeft.minutes} label="Minutos" />
            <CountdownBlock value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </header>
  );
}
