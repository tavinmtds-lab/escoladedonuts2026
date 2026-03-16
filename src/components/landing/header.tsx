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
    <div className="flex flex-col items-center gap-1">
      <div className="text-2xl sm:text-3xl font-black bg-white text-red-600 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg border border-red-100">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[10px] sm:text-xs font-extrabold text-red-700 uppercase tracking-tighter">{label}</span>
    </div>
  );

  return (
    <header className="bg-red-50/30 py-8 px-4 sm:px-6 lg:px-8 border-b border-red-100">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-headline italic text-red-700 leading-tight tracking-tight max-w-3xl">
          Inscrições abertas até dia 21 de março
        </h2>
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <CountdownBlock value={timeLeft.days} label="Dias" />
            <CountdownBlock value={timeLeft.hours} label="Horas" />
            <CountdownBlock value={timeLeft.minutes} label="Minutos" />
            <CountdownBlock value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </header>
  );
}
