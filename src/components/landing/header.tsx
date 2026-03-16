'use client';
import { useState, useEffect } from 'react';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Definindo a data alvo para 21 de Março
    const now = new Date();
    let targetYear = now.getFullYear();
    const targetDate = new Date(targetYear, 2, 21); // Março é o índice 2 (Janeiro = 0, Fevereiro = 1, Março = 2)

    // Se a data já passou este ano, define para o próximo ano
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
    <div className="flex flex-col items-center gap-3">
      <div className="text-3xl sm:text-5xl font-extrabold bg-white text-primary rounded-[2rem] w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-xl shadow-primary/5 border-2 border-primary/10">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <header className="bg-[#FFF7F5] py-12 px-4 sm:px-6 lg:px-8 border-b border-primary/5">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-headline italic text-primary leading-tight tracking-tight max-w-4xl">
          Inscrições abertas até dia 21 de março
        </h2>
        <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center">
            <CountdownBlock value={timeLeft.days} label="Dias" />
            <CountdownBlock value={timeLeft.hours} label="Horas" />
            <CountdownBlock value={timeLeft.minutes} label="Minutos" />
            <CountdownBlock value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </header>
  );
}
