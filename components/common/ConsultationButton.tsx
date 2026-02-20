'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ConsultationButtonProps {
  href?: string;
  text: string;
  type?: 'submit' | 'button';
  widthClassName?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

const buttonBaseClass =
  'relative flex h-10 sm:h-11 md:h-14 lg:h-16 w-full cursor-pointer items-center rounded-full border pl-2 pr-6 sm:pl-3 sm:pr-8 md:pl-5 md:pr-12';

export default function ConsultationButton({
  href,
  text,
  type,
  widthClassName = 'max-w-[214px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[334px]',
  className = '',
  variant = 'light',
}: ConsultationButtonProps) {
  const isDark = variant === 'dark';
  const styleClass = `${buttonBaseClass} ${isDark ? 'border-bg bg-bg text-text shadow-lg hover:bg-bg/90 transition-colors' : 'border-secondary/20 bg-white text-secondary shadow-lg'} ${widthClassName} ${className}`;

  const content = (
    <>
      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
        {text}
      </span>
      <div className="absolute right-0.5 sm:right-1 top-1/2 flex h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-14 lg:w-14 shrink-0 -translate-y-1/2 items-center justify-center">
        <Image
          src={isDark ? '/images/home/arrow-light.svg' : '/images/home/arrow-dark.svg'}
          alt=""
          width={57}
          height={57}
          className="h-full w-full object-contain"
          aria-hidden
        />
      </div>
    </>
  );

  if (type === 'submit' || type === 'button') {
    return (
      <button type={type} className={styleClass}>
        {content}
      </button>
    );
  }

  return <Link href={href ?? '#'} className={styleClass}>{content}</Link>;
}
