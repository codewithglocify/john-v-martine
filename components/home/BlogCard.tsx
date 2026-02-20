'use client';

import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface BlogCardProps {
  imageUrl: string;
  category: string;
  title: string;
  description: React.ReactNode;
  date: string;
}

export function BlogCard({
  imageUrl,
  category,
  title,
  description,
  date,
}: BlogCardProps) {
  return (
    <article className="flex w-full max-w-[384px] flex-col overflow-hidden rounded-[10px] bg-white shadow-[0px_4px_22px_0px_rgba(0,0,0,0.12)] min-h-[380px]  md:h-[560px] max-md:max-w-full">
      {/* Image – responsive height */}
      <div className="relative h-52 w-full shrink-0 sm:h-60 md:h-72">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
        />
        {/* Category badge – theme primary, text from global (white/text) */}
        <div className="absolute bottom-3 right-3 z-10 rounded-[5px] bg-primary px-2 py-1.5 sm:bottom-4 sm:right-4 sm:px-2.5 sm:py-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-text sm:text-sm md:text-base">
            {category}
          </span>
        </div>
      </div>

      {/* Content – theme colors, responsive font size */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-[15px] sm:pt-5">
        <h3 className="text-base font-bold leading-snug tracking-wide text-secondary sm:text-lg">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm font-normal tracking-wide text-desc sm:mt-4 sm:text-base">
          {description}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-4 sm:gap-3">
          <Icon
            icon="mdi:calendar"
            className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6"
            aria-hidden
          />
          <time dateTime={date} className="text-sm font-medium tracking-wide text-secondary sm:text-base">
            {date}
          </time>
        </div>
      </div>
    </article>
  );
}
