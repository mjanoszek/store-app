import React from 'react';

interface HeroDescriptionProps {
  description: string;
}
const HeroDescription = ({ description }: HeroDescriptionProps) => {
  return <p className='text-lg md:text-xl lg:text-2xl'>{description}</p>;
};

export default HeroDescription;
