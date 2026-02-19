import Image from 'next/image';

interface HeroBackgroundProps {
  className?: string;
  src?: string;
  alt?: string;
  bgColor?: string;
}

export default function HeroBackground({
  className = '',
  src = '/images/home/hero.png',
  alt = 'Hero Background',
  bgColor = 'var(--bg)',
}: HeroBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 h-full w-full -z-10 ${className}`}
      style={{ zIndex: -10, backgroundColor: bgColor }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
    </div>
  );
}
