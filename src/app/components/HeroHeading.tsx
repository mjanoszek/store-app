import React from 'react';
interface HeroHeadingProps {
  heading: string;
  isLarge?: boolean;
  textColor?: 'black' | 'white';
}
function HeroHeading({ heading, isLarge, textColor }: HeroHeadingProps) {
  return (
    <p
      className={`text-${textColor} ${
        isLarge ? 'text-3xl font-medium md:text-5xl' : 'text-3xl'
      }`}
    >
      {heading}
    </p>
  );
}

export default HeroHeading;
