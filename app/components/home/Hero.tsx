'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import HeroBackground from '../common/HeroBackground';
import ConsultationButton from '../../components/common/ConsultationButton';
import { ROUTES } from '../../config/env';

const HERO_CTA = {
  text: 'Schedule Your Consultation',
  href: ROUTES.CONTACT,
};

export default function Hero() {
  return (
    <>
      <HeroBackground />

      <section className="z-10 flex min-h-screen w-full px-4 pb-12 pt-8 sm:px-6 sm:pt-12 sm:pb-16 md:px-8 lg:px-[100px] lg:pb-20 lg:pt-16 overflow-hidden">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 ">

          <div className="flex min-w-0 flex-1 flex-col gap-[80px] lg:max-w-[60%] mt-[-100px]">

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary">
                <Icon icon="mdi:scale-balance" className="h-5 w-5 shrink-0" aria-hidden />
                <span className="text-base underline">
                  Excellence in Legal Services
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-playfair-display)] max-w-[807px] font-bold capitalize leading-[87.70px]">
                <span className="block text-3xl text-white sm:text-4xl lg:text-[46px] mb-2">
                  Protecting People, Not Just Cases
                </span>
                <span className="block text-5xl text-primary sm:text-6xl lg:text-[60px]">
                  We fight for you!
                </span>
              </h1>

              <p className="text-base text-zinc-100 sm:text-lg max-w-[707px]">
                We protect your rights and stand with you at every step,
                because this isn&apos;t just a case — it&apos;s your life.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <ConsultationButton {...HERO_CTA} />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 shrink-0 rounded-full border-2 border-bg bg-zinc-400"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-base text-zinc-100">
                  <span className="font-bold text-white">1,000+ </span>
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>

          <Image
            src="/images/home/john.png"
            alt="John V. Martine"
            priority
            width={900}
            height={100}
            className="absolute right-0 bottom-0  overflow-hidden"
          />

        </div>
      </section>
    </>
  );
}
