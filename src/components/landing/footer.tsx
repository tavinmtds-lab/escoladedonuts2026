
import { Button } from "../ui/button";
import Image from 'next/image';
import Link from "next/link";

export function Footer() {
    return (
      <footer className="bg-[#C45440] text-white py-12 px-4 sm:px-6 border-t border-white/10">
        <div className="container mx-auto text-center flex flex-col items-center">
            <h3 className="text-3xl sm:text-4xl font-bold font-headline text-white">Pronta para Começar sua <b>Jornada Doce?</b></h3>
            <p className="mt-4 text-white/90 max-w-2xl text-lg">Não perca a chance de transformar simples ingredientes em um <b>negócio lucrativo e prazeroso</b>. As vagas encerram em breve!</p>
            <Button size="lg" variant="secondary" className="mt-8 h-16 px-12 text-xl font-bold bg-[#0f4d3d] text-white hover:bg-[#0a3a2e] shadow-xl" asChild>
              <Link href="#oferta">
                QUERO ME INSCREVER
              </Link>
            </Button>
            <div className="mt-8 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <Image
                  src="https://i.imgur.com/xaayq08.png"
                  alt="Formas de pagamento"
                  width={300}
                  height={54}
                  className="mx-auto"
              />
            </div>
            <p className="text-base mt-12 font-medium opacity-90">&copy; {new Date().getFullYear()} Escola de Donuts – <b>Todos os direitos reservados</b>.</p>
            <div className="flex justify-center gap-6 mt-4 text-sm opacity-70">
                <Link href="#" className="hover:underline">Compra 100% Segura</Link>
                <span>|</span>
                <Link href="#" className="hover:underline">Política de Privacidade</Link>
                <span>|</span>
                <Link href="#" className="hover:underline">Termos de Uso</Link>
            </div>
        </div>
      </footer>
    );
  }
