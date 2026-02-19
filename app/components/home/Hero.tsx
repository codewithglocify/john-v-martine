'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import HeroBackground from '../common/HeroBackground';
import ConsultationButton from '../common/ConsultationButton';
import { ROUTES } from '../../config/env';

const HERO_CTA = {
  text: 'Schedule Your Consultation',
  href: ROUTES.CONTACT,
};

export default function Hero() {
  return (
    <div className="w-full relative overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] flex flex-col items-center justify-center pt-10">
        <div className="w-full grid grid-cols-1 min-[640px]:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="w-full sm:w-[700px] flex flex-col justify-center items-start gap-6 sm:gap-5 md:gap-5 lg:gap-20 pt-16 sm:pt-2 md:pt-2 lg:pt-0">
            <div className="w-full max-w-full min-[640px]:max-w-[420px] md:max-w-[540px] lg:max-w-[650px] xl:max-w-[807px] flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <div className="flex items-center gap-1.5 sm:gap-2 text-primary">
                <Icon icon="mdi:scale-balance" className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden />
                <span className="text-xs sm:text-sm md:text-base underline">Excellence in Legal Services</span>
              </div>
              <h1 className="font-[family-name:var(--font-playfair-display)] w-full font-bold capitalize leading-tight sm:leading-snug md:leading-normal">
                <span className="block text-2xl text-white sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] mb-0.5 sm:mb-1 md:mb-2 lg:mb-4">
                  Protecting People, Not Just Cases
                </span>
                <span className="block text-3xl text-primary sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px]">
                  We fight for you!
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-100 w-full max-w-full min-[640px]:max-w-[360px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[707px] leading-relaxed">
                We protect your rights and stand with you at every step, because this isn&apos;t just a case — it&apos;s your life.
              </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-3 sm:gap-4 md:gap-5 mt-2 sm:mt-0">
              <ConsultationButton {...HERO_CTA} />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    { src: '/images/client1.svg', alt: 'Client 1' },
                    { src: '/images/client2.svg', alt: 'Client 2' },
                    { src: '/images/client3.svg', alt: 'Client 3' },
                  ].map((client) => (
                    <Image
                      key={client.src}
                      src={client.src}
                      alt={client.alt}
                      width={40}
                      height={40}
                      className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full border-2 border-bg object-cover"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-zinc-100">
                  <span className="font-bold text-white">1,000+ </span>
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full sm:min-h-[410px] sm:min-w-[450px] md:min-h-[460px] md:min-w-[550px] lg:min-w-[750px] lg:min-h-[630px] relative hidden min-[640px]:block mx-auto sm:ml-[-44px] md:ml-[-90px] lg:ml-[-100px]">
            <Image
              src="/images/home/john.png"
              alt="John V. Martine"
              fill
              className="object-contain object-bottom"
              priority

            />
          </div>
        </div>
        <div className="w-full max-w-full h-[400px] sm:h-[260px] relative min-[640px]:hidden mt-6 sm:mt-8 flex-shrink-0">
          <Image
            src="/images/home/john.png"
            alt="John V. Martine"
            fill
            className="object-cover object-bottom"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
