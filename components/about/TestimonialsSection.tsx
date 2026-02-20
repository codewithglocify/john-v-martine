import Image from 'next/image';

interface TestimonialCardProps {
  rating: number;
  text: string;
  reviewerName: string;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const decimal = rating % 1;
  const hasPartialStar = decimal > 0;
  const partialPercentage = hasPartialStar ? decimal : 0;
  
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            // Full star
            return (
              <svg
                key={index}
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="#E2BC74"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            );
          } else if (index === fullStars && hasPartialStar) {
            // Partial star using clipPath
            const uniqueId = `star-clip-${index}-${rating}`;
            return (
              <div key={index} className="relative w-5 h-5">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id={uniqueId}>
                      <rect x="0" y="0" width={24 * partialPercentage} height="24" />
                    </clipPath>
                  </defs>
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#E2BC74"
                    clipPath={`url(#${uniqueId})`}
                  />
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="none"
                    stroke="#E2BC74"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            );
          } else {
            // Empty star
            return (
              <svg
                key={index}
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="none"
                  stroke="#E2BC74"
                  strokeWidth="1"
                />
              </svg>
            );
          }
        })}
      </div>
      <span className="font-bold text-[16px] text-[#1b1b1b]">{rating}</span>
    </div>
  );
}

function TestimonialCard({ rating, text, reviewerName }: TestimonialCardProps) {
  return (
    <div 
      className="relative rounded-[10px] p-6 shadow-sm flex flex-col h-full w-full"
      style={{ backgroundColor: '#f6f6f6' }}
    >
      {/* Star Rating */}
      <StarRating rating={rating} />
      
      {/* Testimonial Text */}
      <p className="font-normal text-[14px] text-[#5b5b5b] leading-relaxed mb-6 flex-grow">
        {text}
      </p>
      
      {/* Reviewer Info - Pushed to bottom with mt-auto */}
      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar Icon */}
        <div className="relative w-10 h-10 rounded-full bg-yellow flex items-center justify-center flex-shrink-0 overflow-hidden">
          <Image
            src="/images/about/avatar-icon.png"
            alt="User"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        
        {/* Reviewer Name */}
        <span className="font-bold text-[16px] text-[#1b1b1b]">{reviewerName}</span>
      </div>
      
      {/* Quotation Mark Icon */}
      <div className="absolute bottom-4 right-4">
        <Image
          src="/images/about/quote-icon.png"
          alt="Quote"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      rating: 4.5,
      text: "Amazing lawyer, he handled my divorce and criminal cases perfectly. He did exactly what he said he would, when he said he would. I highly recommend him!",
      reviewerName: "Matthew Page",
    },
    {
      rating: 4.8,
      text: "I have known John Martine for 13 years, and he is one of the best attorneys in Northwest Alabama. He is dedicated to ensuring that the people of this community have access to legal services that are essential to their clients. He has been an active member of the community and has served as a leader, teacher, and coach.",
      reviewerName: "Ella Lewis",
    },
    {
      rating: 4.9,
      text: "The attorneys were not only highly skilled but also compassionate and understanding. They treated my case with priority and delivered results beyond my expectations. Truly a firm you can trust.",
      reviewerName: "William Davis",
    },
  ];

  return (
    <section className="relative bg-white py-16">
      <div 
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]"
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-[32px] md:text-[40px] text-[#1b1b1b] leading-normal mb-4">
            Real Results for Real Clients
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full lg:w-1/3 lg:flex-shrink-0">
              <TestimonialCard
                rating={testimonial.rating}
                text={testimonial.text}
                reviewerName={testimonial.reviewerName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

