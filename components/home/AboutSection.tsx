'use client';

import Image from 'next/image';
import { ROUTES } from '@/config/env';
import ConsultationButton from '../common/ConsultationButton';

const STATS = [
  { value: '95', suffix: '%', label: 'Client satisfaction' },
  { value: '1,000', suffix: '+', label: 'Successful Case Outcomes' },
  { value: '20', suffix: '+', label: 'Practice Areas Covered' },
] as const;

const statNumberClass =
  'font-[family-name:var(--font-inter-tight)] text-xl sm:text-2xl md:text-3xl lg:text-[42px] xl:text-[42px] font-medium tracking-wide text-secondary';
const statLabelClass = 'mt-2 text-sm sm:text-base lg:text-[16px] font-normal tracking-wide text-desc';
const statItemClass =
  'text-center sm:text-left border-t border-secondary/20 pt-8 sm:border-t-0 sm:border-l sm:border-secondary/20 sm:px-8 sm:pt-0 first:border-t-0 first:pt-0 sm:first:border-l-0 sm:first:pl-0';

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
          <div className="min-w-0">
            <div className="mb-5 inline-flex h-7 sm:h-8 items-center rounded-[19px] outline outline-1 outline-secondary/40 outline-offset-[-1px] overflow-hidden px-3 sm:px-4">
              <span className="text-xs sm:text-sm lg:text-base font-medium text-secondary">About Us</span>
            </div>
            <h2 className="mb-6 max-w-[542px] text-2xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[32px] font-bold tracking-wide text-secondary leading-tight sm:leading-snug md:leading-normal">
              Strong Strategy. Clear Guidance. Real Results.
            </h2>
            <p className="mb-6 max-w-[620px] text-sm sm:text-base md:text-base lg:text-[16px] font-normal text-desc leading-relaxed">
            At Amable Lawyer, we are dedicated to providing experienced legal representation, unwavering commitment, and truly personalized service to every client we serve. With offices conveniently located in Huntsville, Russellville, and Winfield, Alabama, our firm proudly represents individuals and families across the region, working tirelessly to protect their rights and best interests.
            </p>
            <p className="mb-10 max-w-[627px] text-sm sm:text-base md:text-base lg:text-[16px] font-normal text-desc leading-relaxed">
            We understand that every legal matter is unique, which is why we take the time to listen, evaluate your situation carefully, and develop strategies tailored to your specific needs. Our team combines deep legal knowledge with a client-first approach, ensuring you receive clear guidance, honest communication, and strong advocacy.
            </p>
            <ConsultationButton
              href={ROUTES.CONTACT}
              text="Discuss Your Case With Us"
              widthClassName="max-w-[214px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[334px]"
              className="!border-bg"
            />
          </div>
          <div className="relative w-full min-h-[420px] sm:min-h-[520px] md:min-h-[650px] lg:min-h-[520px]">
            <div className="relative h-96 w-full overflow-hidden rounded-lg sm:h-[520px] md:h-[600px] lg:h-[600px] lg:w-full ">
              <Image
                src="/images/home/about.png"
                alt="About us"
                fill
                className="object-cover object-top block min-[768px]:hidden"
                sizes="100vw"
              />
              <Image
                src="/images/home/about-new.png"
                alt="About us"
                fill
                className="object-contain object-center hidden min-[768px]:block min-[1024px]:hidden"
                sizes="(min-width: 768px) 50vw, 0"
              />
              <Image
                src="/images/home/about.svg"
                alt="About us"
                fill
                className="object-contain hidden min-[1024px]:block"
                sizes="520px"
              />
            </div>
          </div>
        </div>

        <div className="mt- border-t border-secondary/20 pt-5 sm:mt-10 sm:pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className={statItemClass}>
                <p className={statNumberClass}>
                  {stat.value}<span className="text-primary">{stat.suffix}</span>
                </p>
                <p className={statLabelClass}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
