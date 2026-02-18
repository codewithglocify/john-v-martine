import { homeMetadata } from './config/metadata';
import { HeroSection } from './components/HeroSection';

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text">John V Martine</h1>
        <p className="mt-4 text-text/90">Welcome.</p>
      </div>
    </>
  );
}
