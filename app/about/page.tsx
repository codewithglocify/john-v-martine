import { AboutHeroSection } from '../components/about/AboutHeroSection';
import { MissionVisionSection } from '../components/about/MissionVisionSection';
import { WhyChooseUsSection } from '../components/about/WhyChooseUsSection';
import { TestimonialsSection } from '../components/about/TestimonialsSection';
import { CTASection } from '../components/about/CTASection';
import { aboutMetadata } from '../config/metadata';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

