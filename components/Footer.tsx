import Link from 'next/link';
import { Icon } from '@iconify/react';
import { ROUTES } from '@/config/env';

const ABOUT_LINKS = [
  { label: 'About us', href: ROUTES.ABOUT },
  { label: 'Practice Areas', href: ROUTES.PRACTICE_AREAS },
  { label: 'Payment', href: ROUTES.PAYMENT },
];

const RESOURCES_LINKS = [
  { label: 'Blogs', href: ROUTES.BLOGS },
  { label: 'Privacy', href: ROUTES.PRIVACY },
  { label: 'Terms', href: ROUTES.TERMS },
];

const PHONE = '+1 (801) 900-5864';
const CLEAN_PHONE = PHONE.replace(/\s/g, '');

const ADDRESS_LINE =
  'HUNTSVILLE: 605 Madison St SE, Suite 200, Huntsville, AL 35801';

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_LINE
)}&output=embed`;
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

const SOCIAL_LINKS = [
  { icon: 'fa6-brands:facebook-f', label: 'Facebook' },
  { icon: 'fa6-brands:pinterest', label: 'Pinterest' },
  { icon: 'fa6-brands:x-twitter', label: 'X' },
  { icon: 'fa6-brands:instagram', label: 'Instagram' },
];

function IconCircle({ icon }: { icon: string }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-50 sm:h-10 sm:w-10">
      <Icon icon={icon} className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
    </div>
  );
}

/* Pokato-style: text-sm → sm:text-base → md:text-lg for headings & links */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
       <h2 className="text-white text-sm uppercase tracking-wide sm:text-base md:text-lg mb-8">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-normal text-white/90 transition-colors hover:text-primary sm:text-base md:text-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialLink({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <Link
      href="#"
      className="transition-colors hover:text-text"
      aria-label={label}
    >
      <Icon icon={icon} className="h-5 w-5 sm:h-6 sm:w-6" />
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Design: left 100px, right ~100px on 1440px; responsive on smaller */}
      <div className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Contact – Pokato-style font scale: text-sm sm:text-base md:text-lg */}
          <div className="min-w-0 md:col-span-2 lg:col-span-4">
            <h2 className="text-white text-sm uppercase tracking-wide sm:text-base md:text-lg mb-8">
              CONTACT
            </h2>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <IconCircle icon="mdi:phone" />
                <Link
                  href={`tel:${CLEAN_PHONE}`}
                  className="break-all text-sm font-normal leading-6 text-white/90 hover:text-primary sm:text-base md:text-lg"
                >
                  {PHONE}
                </Link>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <IconCircle icon="mdi:map-marker" />
                <Link
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 max-w-full text-sm font-normal leading-6 text-white/90 transition-colors hover:text-primary sm:max-w-[16rem] sm:text-base md:text-lg"
                >
                  {ADDRESS_LINE}
                </Link>
              </div>
            </div>

            {/* Social – spacing between contact menu and icons */}
            <div className="mt-12 flex items-center gap-3 text-primary sm:mt-16">
              {SOCIAL_LINKS.map((item) => (
                <SocialLink
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </div>
          </div>

          {/* About Company */}
          <div className="lg:col-span-2">
            <FooterColumn title="About Company" links={ABOUT_LINKS} />
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <FooterColumn title="Resources" links={RESOURCES_LINKS} />
          </div>

          {/* Google Map */}
          <div className="md:col-span-2 lg:col-span-4 lg:flex lg:justify-end">
            <div className="h-48 w-full overflow-hidden rounded-[5px] min-[480px]:h-56 sm:h-64 lg:w-[453px]">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location - John V. Martine, Huntsville AL"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar – height & font scale with screen so full text shows */}
      <div className="w-full min-h-12 bg-[#222222] py-3 sm:min-h-14 sm:py-4 md:min-h-10 md:py-4">
        <p className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 px-4 text-center text-xs font-normal leading-snug text-white sm:text-sm md:text-sm">
          © {currentYear} All Rights Reserved | Abogado Amable- John V. Martine, Attorney at Law LLC
        </p>
      </div>
    </footer>
  );
}
