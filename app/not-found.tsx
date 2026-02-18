import Link from 'next/link';
import { ROUTES } from './config/env';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-text">404</h1>
      <p className="mt-2 text-text/80">Page not found.</p>
      <Link
        href={ROUTES.HOME}
        className="mt-6 text-sm font-medium text-primary underline hover:no-underline"
      >
        Go home
      </Link>
    </main>
  );
}
