import React from 'react';
interface HeroHeadingProps {
  heading: string;
}
function HeroHeading({ heading }: HeroHeadingProps) {
  return <p className='text-3xl font-medium mx-12 md:text-5xl lg:text-6xl'>{heading}</p>;
}

export default HeroHeading;
