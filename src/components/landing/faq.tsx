import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function FAQ() {
  const faqImage = PlaceHolderImages.find((img) => img.id === 'faq-image');

  return (
    <section className="py-12 sm:py-24 bg-[#FFF7F5]">
      <div className="container mx-auto flex justify-center">
        {faqImage && (
          <div className="flex justify-center">
            <Image
              src={faqImage.imageUrl}
              alt={faqImage.description}
              width={400}
              height={400}
              className="rounded-lg"
              data-ai-hint={faqImage.imageHint}
            />
          </div>
        )}
      </div>
    </section>
  );
}
