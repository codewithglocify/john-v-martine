/**
 * Home page first section – 747px height, background, left blur overlay.
 * Hero image from env (NEXT_PUBLIC_HERO_IMAGE) or gradient fallback – no hardcoded URL.
 */

const HERO_IMAGE_URL = process.env.NEXT_PUBLIC_HERO_IMAGE || '';

export function HeroSection() {
  return (
    <section
      className="relative min-h-[747px] w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Background – image from env or gradient */}
      {HERO_IMAGE_URL ? (
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE_URL}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(135deg, var(--bg) 0%, #0f172a 50%, var(--secondary) 100%)',
          }}
        />
      )}

      {/* Left overlay – w-[706px] h-[561px] left-[100px] top-[111px] bg-black/50 blur-xl */}
      <div
        className="absolute left-4 top-[111px] h-[280px] w-[90%] max-w-[400px] bg-black/50 blur-xl sm:left-12 sm:h-[360px] sm:max-w-[500px] md:left-[100px] md:h-[461px] md:max-w-[606px] lg:h-[561px] lg:w-[706px]"
        aria-hidden="true"
      />

      {/* Optional: content area – add headline/CTA here later */}
      <div className="relative z-10 flex min-h-[747px] items-center px-4 sm:px-6 lg:px-8" />
    </section>
  );
}
