'use client';
import { useState, useEffect } from 'react';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Definindo a data alvo para 21 de Março
    const now = new Date();
    let targetYear = now.getFullYear();
    const targetDate = new Date(targetYear, 2, 21); // Março é o índice 2

    if (now > targetDate) {
      targetDate.setFullYear(targetYear + 1);
    }

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
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl sm:text-6xl font-black bg-white text-primary rounded-[1.5rem] w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center shadow-lg border-2 border-primary/5">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[10px] sm:text-sm font-bold text-gray-700 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <header className="bg-[#FFF7F5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-headline italic text-primary leading-tight tracking-tight max-w-4xl">
          Inscrições abertas até dia 21 de março
        </h2>
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <CountdownBlock value={timeLeft.days} label="Dias" />
            <CountdownBlock value={timeLeft.hours} label="Horas" />
            <CountdownBlock value={timeLeft.minutes} label="Minutos" />
            <CountdownBlock value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </header>
  );
}
