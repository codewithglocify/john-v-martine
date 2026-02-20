'use client';

import React from 'react';
import Image from 'next/image';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    rating: 4.5,
    quote:
      'Amazing lawyer, he handled my divorce and criminal cases perfectly. He did exactly what he said he would, when he said he would. I highly recommend him!',
    authorName: 'Matthew Page',
  },
  {
    id: 2,
    rating: 4.8,
    quote:
      'I have known John Martine for 13 years, and he is one of the best attorneys in Northwest Alabama. He is dedicated to ensuring that the people of this community have access to legal services that are essential to their clients. He has been an active member of the community and has served as a leader, teacher, and coach.',
    authorName: 'Ella Lewis',
  },
  {
    id: 3,
    rating: 4.9,
    quote:
      'The attorneys were not only highly skilled but also compassionate and understanding. They treated my case with priority and delivered results beyond my expectations. Truly a firm you can trust.',
    authorName: 'William Davis',
  },
];

export function NewsSection() {
  return (
    <section className="relative w-full bg-[#F8F4F0] pb-54 pt-16 sm:pt- md:pb-50 md:pt-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Header – testimonials badge + title */}
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex h-8 w-28 items-center justify-start overflow-hidden rounded-[19px] bg-white px-[10.5px] outline outline-1 outline-offset-[-1px] outline-neutral-200">
              <span className="text-base font-medium text-secondary">
                Testimonials
              </span>
            </div>
            <h2 className="text-center text-2xl font-bold tracking-wide text-secondary sm:text-3xl">
              Trusted by Our Clients
            </h2>
          </div>

          {/* Cards row – design: self-stretch inline-flex gap-2.5 */}
          <div className="grid w-full grid-cols-1 gap-2.5 sm:gap-4 md:grid-cols-2 md:gap-2.5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                rating={t.rating}
                quote={t.quote}
                authorName={t.authorName}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom quote banner – design: w-[928px] h-96 bg-slate-800, john2.png */}
      <div className="absolute left-1/2 top-[calc(100%-11rem)] py-8 px-10 sm:pr-80 lg:pr-80 z-10 h-96 w-[calc(100%-2rem)] max-w-[928px] -translate-x-1/2 rounded-[10px] bg-bg sm:top-[calc(100%-8rem)] overflow-hidden">
        {/* Decorative images for desktop/tablet:
            - sm (>=640 && <1024): left-top
            - lg (>=1024): right-top */}
        <div className="hidden sm:block absolute right-0 top-0 h-96 w-80 z-0">
          <Image
            src="/images/home/john2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        {/* SUCCESS – left-[3px] top-[262.61px], opacity-10, text-9xl Poppins */}
        <div
          className="pointer-events-none absolute left-0 bottom-[-50px] select-none text-9xl font-semibold uppercase leading-none text-white opacity-10 italic [font-family:var(--font-poppins),sans-serif]"
          aria-hidden
        >
          SUCCESS
        </div>
        {/* Quote icon block – w-8 h-7 left-[40px] top-[30px], bg-primary */}
        <div className="mb-8 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
          <path d="M31.5232 0.268384L30.7107 5.90139C29.0497 5.75696 27.7317 6.04583 26.7568 6.76801C25.7819 7.45408 25.1138 8.44708 24.7528 9.74701C24.4278 11.0108 24.3736 12.4552 24.5903 14.0801H31.5232V28.0001H18.1448V13.5385C18.1448 8.80817 19.2642 5.23338 21.5029 2.81407C23.7417 0.358656 27.0818 -0.489907 31.5232 0.268384ZM13.3784 0.268384L12.5659 5.90139C10.9049 5.75696 9.58695 6.04583 8.61201 6.76801C7.63706 7.45408 6.96905 8.44708 6.60795 9.74701C6.28297 11.0108 6.22881 12.4552 6.44546 14.0801H13.3784V28.0001H0V13.5385C0 8.80817 1.11938 5.23338 3.35814 2.81407C5.5969 0.358656 8.93699 -0.489907 13.3784 0.268384Z" fill="#E2BC74"/>
        </svg>
        </div>
        {/* Quote – w-[551px] left-[40px] top-[90px], text-white text-2xl Manrope */}
        <div className="mb-4 md:mb-10 w-[551px] max-w-[calc(100%-0rem)] font-sans text-2xl font-semibold text-text z-10">
          &ldquo;The law isn&apos;t about arguments - it&apos;s about protecting
          people when everything they value is at risk.&rdquo;
        </div>
        {/* Author – left-[40px] top-[229px], text-primary Manrope */}
        <div className="font-sans text-base font-medium text-primary z-10">
          <span className="uppercase">@j</span>
          <span className="normal-case">ohn V. Martine</span>
        </div>
      
      </div>
    </section>
  );
}

export default NewsSection;
