'use client';

import React from 'react';
import { Icon } from '@iconify/react';

interface TestimonialCardProps {
  rating: number;
  quote: string;
  authorName: string;
  avatarUrl?: string;
}

export function TestimonialCard({
  rating,
  quote,
  authorName,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <div className="flex h-72 w-full max-w-[384px] flex-col overflow-hidden rounded-[10px] bg-white p-5 max-md:max-w-full max-md:min-h-72 max-md:h-auto">
      {/* Stars + rating – design: left 20px top 20px, 5 stars then rating at 154px */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Icon
            key={i}
            icon="mdi:star"
            className="h-4 w-4 shrink-0 text-primary"
            aria-hidden
          />
        ))}
        <span className="ml-2 text-lg font-bold tracking-wide text-secondary">
          {rating}
        </span>
      </div>

      {/* Quote – design: left 20px top 61px, w-80, text-zinc-600 text-sm */}
      <p className="mt-4 max-w-[320px] flex-1 text-sm font-normal leading-relaxed text-desc line-clamp-4">
        {quote}
      </p>

      {/* Author row – design: avatar 15px left 214px top, name 79px left, quote icon bottom right */}
      <div className="mt-auto flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-secondary/10">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={authorName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-primary">
                <Icon icon="mdi:format-quote-close" className="h-6 w-6" aria-hidden />
              </div>
            )}
          </div>
          <span className="text-base font-bold text-secondary">{authorName}</span>
        </div>
        <Icon
          icon="mdi:format-quote-close"
          className="h-8 w-7 shrink-0 rotate-180 text-secondary"
          aria-hidden
        />
      </div>
    </div>
  );
}
