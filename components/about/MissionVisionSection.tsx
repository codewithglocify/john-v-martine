import Image from 'next/image';

const missionPoints = [
    'Dedicated criminal defense representation from investigation through trial',
    'Strategic case analysis tailored to your unique legal situation',
    'Aggressive courtroom advocacy to protect your rights and freedom',
    'Clear communication and honest legal guidance at every stage',
    'Commitment to achieving the best possible outcome for every client',
];

const visionPoints = [
    'To uphold justice with unwavering commitment',
    'To deliver results through preparation and precision',
    'To build lasting client relationships based on trust',
    'To continuously adapt to evolving legal challenges',
    'To stand as a strong voice for those in need of defense',
];

function CheckmarkIcon({ isFirst = false }: { isFirst?: boolean }) {
    const maskImage = isFirst
        ? '/images/about/checkmark-first.png'
        : '/images/about/checkmark.png';
    const maskSize = isFirst ? '42px 42px' : '34px 34px';
    const maskPosition = isFirst ? '-4px 0px' : '0px 0px';

    return (
        <div
            className="h-[34px] w-[34px] shrink-0 bg-primary"
            style={{
                maskImage: `url('${maskImage}')`,
                WebkitMaskImage: `url('${maskImage}')`,
                maskSize: maskSize,
                WebkitMaskSize: maskSize,
                maskPosition: maskPosition,
                WebkitMaskPosition: maskPosition,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
            }}
        />
    );
}

export function MissionVisionSection() {
    return (
        <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[100px]">
                {/* Our Mission Section */}
                <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-center lg:gap-[57px]">
                    {/* Mission Image Group */}
                    <div className="relative order-2 shrink-0 lg:order-1">
                        <div className="relative h-[452px] w-[556px] max-w-full">
                            <Image
                                src="/images/about/about-mission-combined.png"
                                alt="Our Mission"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Mission Content */}
                    <div className="relative order-1 z-10 flex w-full flex-col items-start lg:order-2 lg:w-[621px]">
                        {/* Heading and Paragraph */}
                        <div className="mb-[30px] flex w-full flex-col items-start">
                            <h2 className="mb-[10px] text-[32px] font-bold leading-normal tracking-[1px] text-[#1b1b1b]">
                                Our Mission
                            </h2>
                            <p className="w-full text-[16px] font-normal leading-auto tracking-[0] text-[#5b5b5b]">
                                Our mission is to provide strategic, honest, and results-driven legal defense for individuals facing criminal charges. We believe that every client deserves a fair trial, a strong defense, and a lawyer who truly listens. We are committed to protecting your rights at every stage of the legal process, from investigation to trial. Through careful case analysis and strong courtroom advocacy, we work tirelessly to achieve the best possible outcome.
                            </p>
                        </div>
                        {/* Bullet Points */}
                        <ul className="flex w-full flex-col gap-[10px]">
                            {missionPoints.map((point, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="shrink-0">
                                        <CheckmarkIcon isFirst={index === 0} />
                                    </div>
                                    <span className="ml-[41px] text-base font-normal leading-normal text-[#1b1b1b]">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Our Vision Section */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[57px]">
                    {/* Vision Content */}
                    <div className="relative z-10 flex w-full flex-col items-start">
                        {/* Heading and Paragraph */}
                        <div className="mb-[30px] flex w-full flex-col items-start">
                            <h2 className="mb-[10px] text-[32px] font-bold leading-normal tracking-[1px] text-[#1b1b1b]">
                                Our Vision
                            </h2>
                            <p className="w-full text-[16px] font-normal leading-auto tracking-[0] text-[#5b5b5b]">
                                Our vision is to be a trusted and respected law firm known for excellence, integrity, and unwavering commitment to justice. We strive to set the standard in criminal defense by combining legal expertise with compassionate client service. Our goal is to build lasting trust within the community while consistently delivering strong, ethical, and results-focused representation.
                            </p>
                        </div>
                        {/* Bullet Points */}
                        <ul className="flex w-full flex-col gap-[10px]">
                            {visionPoints.map((point, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="shrink-0">
                                        <CheckmarkIcon isFirst={index === 0} />
                                    </div>
                                    <span className="ml-[41px] text-base font-normal leading-normal text-[#1b1b1b]">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vision Image Group */}
                    <div className="relative shrink-0">
                        <div className="relative h-[452px] w-[556px] max-w-full">
                            <Image
                                src="/images/about/about-vision-combined.png"
                                alt="Our Vision"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
