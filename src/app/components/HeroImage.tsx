import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HeroImageProps {
  imageSrc: StaticImageData;
  imageAlt: string;
}

const HeroImage = ({ imageSrc, imageAlt }: HeroImageProps) => {
  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      height={548}
      width={734}
      loading='lazy'
    />
  );
};

export default HeroImage;
