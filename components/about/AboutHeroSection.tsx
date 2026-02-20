import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/config/env';

export function AboutHeroSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <div className="flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          {/* Breadcrumb */}
          <nav className="mb-4 text-base font-normal leading-normal text-[#5b5b5b] sm:mb-5 md:mb-6">
            <Link href={ROUTES.HOME} className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">About Us</span>
          </nav>

          {/* Main Heading */}
          <h1 className="mb-[50px] max-w-[936px] text-center text-[28px] font-semibold leading-normal text-[#1b1b1b] sm:text-[32px] md:text-[38px] lg:text-[42px]">
            Protecting Your Rights With Strategic, Honest,
            <br />
            And Dedicated Legal Defense.
          </h1>
        </div>

        {/* Hero Image Section */}
        <div className="relative mx-auto mb-0 w-full max-w-[1239px] overflow-hidden rounded-[20px]">
          <div className="relative aspect-[1239/559] w-full">
            <Image
              src="/images/about/about-hero-image.png"
              alt="John V. Martine"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

