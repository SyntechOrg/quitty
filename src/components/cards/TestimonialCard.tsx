import { FC } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  authorPosition: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  authorPosition,
}) => {
  return (
    <div
      data-aos="fade-up"
      key={author}
      className="relative min-w-[70vw] rounded-[30px] border border-[#2C2A2E] bg-dark-gradient p-6 transition-transform duration-300 hover:scale-105
      max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center max-sm:gap-4 max-sm:text-center sm:min-w-[400px] md:min-w-[560px] md:px-12 md:py-14"
    >
      <p className="text-[14px] leading-[1.666] md:text-[16px]">{quote}</p>
      <div className="sm:mt-16">
        <p className="text-[16px] font-bold leading-[1.5] tracking-[0.02em] md:text-[20px]">
          {author}
        </p>
        <p className="text-[14px] font-light leading-[1.666] tracking-[0.02em] text-primary">
          {authorPosition}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
