'use client';

import { About } from '@/components/landing/about';
import { CallToAction } from '@/components/landing/call-to-action';
import { FAQ } from '@/components/landing/faq';
import { Features } from '@/components/landing/features';
import { Footer } from '@/components/landing/footer';
import { Gallery } from '@/components/landing/gallery';
import { Guarantee } from '@/components/landing/guarantee';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { PricingV2 } from '@/components/landing/pricing-v2';
import { Testimonials } from '@/components/landing/testimonials';

export default function CrochetPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <CallToAction />
        <Testimonials />
        <Features />
        <FAQ />
        <PricingV2 />
        <Guarantee />
        <About />
      </main>
      <Footer />
    </div>
  );
}
