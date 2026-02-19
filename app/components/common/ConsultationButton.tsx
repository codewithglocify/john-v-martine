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
  widthClassName = 'sm:w-82',
  className = '',
  variant = 'light',
}: ConsultationButtonProps) {
  const isDark = variant === 'dark';

  return (
    <Link
      href={href}
      className={`relative flex h-16 w-full items-center rounded-full border pl-4 pr-10 ${isDark ? 'border-white/30 bg-secondary' : 'border-white/10 bg-white shadow-lg'} ${widthClassName} ${className}`}
    >
      <span
        className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}
      >
        {text}
      </span>

      <div className="absolute right-1 top-1/2 flex h-[57px] w-[57px] shrink-0 -translate-y-1/2 items-center justify-center">
        {isDark ? (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
            <Icon icon="mdi:arrow-right" className="h-10 w-10 text-secondary" aria-hidden />
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
