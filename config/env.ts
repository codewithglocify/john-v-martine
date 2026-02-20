/**
 * Environment config - no hardcoded values
 */
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const ROUTES = {
  HOME: process.env.NEXT_PUBLIC_HOME_ROUTE || '/',
  PRICING: process.env.NEXT_PUBLIC_PRICING_ROUTE || '/pricing',
  ABOUT: process.env.NEXT_PUBLIC_ABOUT_ROUTE || '/about',
  PRACTICE_AREAS: process.env.NEXT_PUBLIC_PRACTICE_AREAS_ROUTE || '/practice-areas',
  PAYMENT: process.env.NEXT_PUBLIC_PAYMENT_ROUTE || '/payment',
  BLOGS: process.env.NEXT_PUBLIC_BLOGS_ROUTE || '/blogs',
  PRIVACY: process.env.NEXT_PUBLIC_PRIVACY_ROUTE || '/privacy',
  TERMS: process.env.NEXT_PUBLIC_TERMS_ROUTE || '/terms',
  CONTACT: process.env.NEXT_PUBLIC_CONTACT_ROUTE || '/contact',
};
