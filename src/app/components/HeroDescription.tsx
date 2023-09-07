import React from 'react';

interface HeroDescriptionProps {
  description: string | JSX.Element;
  isLarge?: boolean;
}
const HeroDescription = ({ description, isLarge }: HeroDescriptionProps) => {
  return (
    <p
      className={
        isLarge ? 'text-lg md:text-xl lg:text-2xl' : 'text-xl font-light '
      }
    >
      {description}
    </p>
  );
};

export default HeroDescription;
