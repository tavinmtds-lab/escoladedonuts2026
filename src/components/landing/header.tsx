'use client';
import { useState, useEffect } from 'react';

export function Header() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set a target date for December 11th of the current year.
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 11, 11); // Month is 0-indexed, so 11 is December.

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
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-2xl font-bold bg-primary text-primary-foreground rounded-md px-2 py-1">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs uppercase">{label}</span>
    </div>
  );

  return (
    <header className="bg-secondary text-secondary-foreground py-3 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <p className="flex-shrink-0">Inscrições abertas até dia 11 de dezembro</p>
      </div>
    </header>
  );
}
