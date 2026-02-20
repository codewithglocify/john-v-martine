import { homeMetadata } from '@/config/metadata';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import BlogSection from '@/components/home/BlogSection';
import ContactForm from '@/components/common/contact/ContactForm';
import NewsSection from '@/components/home/NewsSection';

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <NewsSection />
      <BlogSection />
      <ContactForm />
    </>
  );
}
