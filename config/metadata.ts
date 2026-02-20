import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  robots: { index: false, follow: false },
};

export const homeMetadata: Metadata = {
  title: 'John V Martine',
  description: 'John V Martine',
  ...defaultMetadata,
};

export const pricingMetadata: Metadata = {
  title: 'Pricing - John V Martine',
  description: 'Pricing',
  ...defaultMetadata,
};

export const aboutMetadata: Metadata = {
  title: 'About Us - John V Martine',
  description: 'About Us',
  ...defaultMetadata,
};
