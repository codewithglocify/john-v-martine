'use client';

import React from 'react';
import { BlogCard } from './BlogCard';

const blogPosts = [
  {
    id: 1,
    imageUrl: '/images/home/blog1.png',
    category: 'Immigration Law',
    title: 'What documents do I need for my immigration application?',
    description: (
      <>
        Proper preparation can strengthen your immigration case significantly. Discover which documents, timelines, and procedures matter most before submitting your application....
        <span className="text-primary font-medium"> read more</span>
      </>
    ),
    date: 'Jan 13, 2026',
  },
  {
    id: 2,
    imageUrl: '/images/home/blog2.png',
    category: 'Car Accident',
    title: 'How to Cope with Anxiety During DUI Tests',
    description: (
      <>
        DUI (driving under the influence) checkpoints can cause anxiety, even for sober, law-abiding drivers. Knowing your rights is crucial to ensuring...
        <span className="text-primary font-medium"> read more</span>
      </>
    ),
    date: 'Jan 18, 2026',
  },
  {
    id: 3,
    imageUrl: '/images/home/blog3.png',
    category: 'Personal Injury',
    title: 'Understanding Personal Injury Claims: Know Your Rights',
    description: (
      <>
        If you&apos;ve been injured due to someone else&apos;s negligence, you may be entitled to compensation. Personal injury cases cover accidents, workplace injuries, and more....
        <span className="text-primary font-medium"> read more</span>
      </>
    ),
    date: 'Jan 28, 2026',
  },
];

export function BlogSection() {
  return (
    <section className="w-full bg-white pt-66 md:pt-80 py-10">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <header className="flex max-w-[715px] flex-col items-center text-center">
            <div className="inline-flex h-7 items-center overflow-hidden rounded-[19px] bg-white px-4 outline outline-1 outline-offset-[-1px] outline-secondary/20 sm:h-8 sm:px-[18px]">
              <span className="text-sm font-medium text-secondary sm:text-base">Our blog</span>
            </div>
            <h2 className="mt-6 max-w-full text-xl font-bold leading-tight tracking-wide text-secondary sm:text-2xl md:text-3xl lg:text-[32px]">
              Built on Experience. Written With Authority.
            </h2>
          </header>

          <div className="mt-8 w-full max-w-full sm:mt-10 md:mt-12">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  imageUrl={post.imageUrl}
                  category={post.category}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
