import React from 'react';

interface HeroDescriptionProps {
  description: string | JSX.Element;
  isLarge?: boolean;
  textColor?: 'black' | 'white';
}

const HeroDescription = ({
  description,
  isLarge,
  textColor,
}: HeroDescriptionProps) => {
  return (
    <p
      className={`${
        isLarge
          ? 'text-lg md:text-xl lg:text-2xl'
          : 'flex items-center justify-center text-xl font-light'
      } text-${textColor}`}
    >
      {description}
    </p>
  );
};

export default HeroDescription;
