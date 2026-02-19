import { homeMetadata } from './config/metadata';
import Hero from './components/home/Hero';

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
