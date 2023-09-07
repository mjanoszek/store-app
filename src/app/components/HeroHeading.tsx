import React from 'react';
interface HeroHeadingProps {
  heading: string;
  isLarge?: boolean;
}
function HeroHeading({ heading, isLarge }: HeroHeadingProps) {
  return (
    <p className={isLarge ? 'text-3xl font-medium md:text-5xl' : 'text-3xl'}>
      {heading}
    </p>
  );
}

export default HeroHeading;
