'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface ConsultationButtonProps {
  href: string;
  text: string;
  widthClassName?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function ConsultationButton({
  href,
  text,
  widthClassName = '',
  className = '',
  variant = 'light',
}: ConsultationButtonProps) {
  const isDark = variant === 'dark';

  return (
    <Link
      href={href}
      className={`relative flex h-10 sm:h-11 md:h-14 lg:h-16 w-full max-w-[214px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[360px] items-center rounded-full border pl-2 pr-6 sm:pl-3 sm:pr-8 md:pl-5 md:pr-12 ${isDark ? 'border-white/30 bg-secondary' : 'border-white/10 bg-white shadow-lg'} ${widthClassName} ${className}`}
    >
      <span
        className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}
      >
        {text}
      </span>

      <div className="absolute right-0.5 sm:right-1 top-1/2 flex h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-14 lg:w-14 shrink-0 -translate-y-1/2 items-center justify-center">
        {isDark ? (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
            <Icon icon="mdi:arrow-right" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-secondary" aria-hidden />
          </div>
        ) : (
          <Image
            src="/images/home/arrow.svg"
            alt=""
            width={57}
            height={57}
            className="h-full w-full object-contain"
            aria-hidden
          />
        )}
      </div>
    </Link>
  );
}
