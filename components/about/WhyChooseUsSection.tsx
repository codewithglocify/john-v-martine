import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/config/env';

interface FeatureCardProps {
  icon: string;
  iconSize: number;
  title: string;
  description: string;
}

function FeatureCard({ icon, iconSize, title, description }: FeatureCardProps) {
  return (
    <div className="relative rounded-[10px] border border-primary bg-[#f8f4f0] w-full h-full">
      <div className="relative w-full h-full overflow-clip rounded-[inherit] p-5 flex flex-col">
        {/* Icon */}
        <div
          className="bg-primary mb-12"
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            maskImage: `url('/images/about/${icon}')`,
            maskSize: `${iconSize}px ${iconSize}px`,
            maskRepeat: 'no-repeat',
            maskPosition: '0px 0px',
            WebkitMaskImage: `url('/images/about/${icon}')`,
            WebkitMaskSize: `${iconSize}px ${iconSize}px`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: '0px 0px',
          }}
        />
        
        <div className="space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-[24px] text-[#1b1b1b] leading-normal max-w-[264px]">
          {title}
        </h3>
        
        {/* Description */}
        <p className="font-normal text-[16px] text-[#5b5b5b] leading-normal">
          {description}
        </p>
        </div>
      </div>
    </div>
  );
}

function DecorativeElements() {
  return (
    <>
      {/* Top Left Decoration - Cap Icon */}
      <div className="absolute left-[4px] top-[44px] w-[135px] h-[87px] rotate-[-5.75deg] opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/about/cap-icon.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Right Small Decoration - Roll Icon */}
      <div className="absolute right-[39px] bottom-[39px] w-[105px] h-[67px] -rotate-15 opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/about/roll-icon.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Left Large Decoration - Roll Icon */}
      <div className="absolute left-[167px] bottom-[28px] w-[171px] h-[74px] opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/about/roll-icon.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Top Right Decoration - Cap Icon */}
      <div className="absolute right-[-17px] top-[71px] w-[111px] h-[48px] opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/about/cap-icon.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}

function CTAButton() {
  return (
    <Link
      href={ROUTES.CONTACT}
      className="relative bg-white border border-[#1d3645] rounded-[42px] h-[57px] w-[383px] flex items-center justify-center hover:bg-[#1d3645] transition-colors group overflow-hidden"
    >
      <span className="font-semibold text-[18px] text-[#1d3645] group-hover:text-white text-center pr-[50px]">
        Ready to Discuss your legal needs?
      </span>
      <div className="absolute right-[2px] top-[2px] w-[50px] h-[50px] flex items-center justify-center">
        <svg className="absolute w-full h-full" viewBox="0 0 50.1954 50.1954" fill="none">
          <circle cx="25.0977" cy="25.0977" r="25.0977" fill="#1D3645" className="group-hover:fill-white transition-colors" />
        </svg>
        <div
          className="absolute w-[29px] h-[29px] bg-white group-hover:bg-[#1d3645] transition-colors"
          style={{
            maskImage: "url('/images/about/ctabutton.png')",
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: "url('/images/about/ctabutton.png')",
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
          }}
        />
      </div>
    </Link>
  );
}

export function WhyChooseUsSection() {
  const features = [
    {
      icon: 'first.png',
      iconSize: 62,
      title: 'Proven criminal defense experience',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh consequat nunc pharetra lectus adipiscing est elementum eu integer. Quam odio feugiat vel consectetur pharetra. Pellentesque pretium feugiat amet urna facilisis ',
    },
    {
      icon: 'second.png',
      iconSize: 67,
      title: 'Personalized attention to every case',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh consequat nunc pharetra lectus adipiscing est elementum eu integer. Quam odio feugiat vel consectetur pharetra. Pellentesque pretium feugiat amet urna facilisis ',
    },
    {
      icon: 'third.png',
      iconSize: 56,
      title: 'Clear and honest communication.',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh consequat nunc pharetra lectus adipiscing est elementum eu integer. Quam odio feugiat vel consectetur pharetra. Pellentesque pretium feugiat amet urna facilisis ',
    },
    {
      icon: 'fourth.png',
      iconSize: 56,
      title: 'Strong courtroom advocacy',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh consequat nunc pharetra lectus adipiscing est elementum eu integer. Quam odio feugiat vel consectetur pharetra. Pellentesque pretium feugiat amet urna facilisis ',
    },
  ];

  return (
    <section className="relative bg-[#f8f4f0] py-12 overflow-x-hidden">
      {/* Decorative Background Elements */}
      <DecorativeElements />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-[32px] text-[#1b1b1b] leading-normal mb-2.5 tracking-[1px]">
            Why Choose Us
          </h2>
          <p className="font-normal text-[16px] text-[#5b5b5b] leading-normal tracking-[1px]">
            Committed to protecting your rights with proven legal expertise.
          </p>
        </div>

        {/* Feature Cards - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] justify-center items-start mb-12 w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconSize={feature.iconSize}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

