import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/config/env';

export function CTASection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: '605px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/about-cta-bg.png"
          alt="Legal Team"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Title and Description */}
      <div className="relative z-20 px-4">
        <h2 
          className="text-center text-white mb-6"
          style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '72px',
            letterSpacing: '2.07px',
            fontWeight: 'bold',
            lineHeight: 'normal',
            width: '100%'
          }}
        >
          Expert Legal Support, Just One Click Away!
        </h2>
        <p 
          className="text-center text-white mx-auto mb-8"
          style={{ width: '70%' }}
        >
          Lorem ipsum dolor sit amet consectetur. Nibh consequat nunc pharetra lectus adipiscing est elementum eu integer. Quam odio feugiat vel consectetur pharetra. Pellentesque pretium feugiat amet urna facilisis
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href={ROUTES.CONTACT}
            className="flex items-center gap-4 rounded-full border border-white bg-black px-6 py-2 text-white transition-colors hover:bg-gray-900"
          >
            <span className="text-lg font-semibold">Start Your Case Now</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <Image
                src="/images/about/arrow-icon.png"
                alt="Arrow"
                width={30}
                height={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

