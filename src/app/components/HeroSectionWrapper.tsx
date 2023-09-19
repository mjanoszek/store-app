import React from 'react';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import CTAButton from './CTAButton';
import Image from 'next/image';

interface HeroSectionWrapperProps {
  SectionBackgroundColor: string;
  headingType?: 'text' | 'image';
  heading: string;
  headingImage?: string;
  description: string | JSX.Element;
  isLarge?: boolean;
  CTAButtonLabel: string;
  SecondCTAButtonLabel?: string;
  imageSrc: string;
  textPosition?: 'end' | 'start' | 'center';
}

const HeroSectionWrapper = ({
  heading,
  headingType = 'text',
  headingImage,
  description,
  CTAButtonLabel,
  isLarge = true,
  textPosition = 'start',
  SecondCTAButtonLabel,
  imageSrc,
  SectionBackgroundColor,
}: HeroSectionWrapperProps) => {
  const containerStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundColor: SectionBackgroundColor,
  };

  return (
    <div
      className={`w-full bg-cover bg-center ${
        isLarge
          ? 'h-[512px] md:h-[662px] lg:h-[692px]'
          : 'h-[500px] md:h-[490px] lg:h-[580px] '
      }`}
      style={containerStyle}
    >
      <div
        className={`flex h-full
        flex-col items-center py-10 text-center ${
          isLarge ? 'items-center' : 'items-end '
        }`}
      >
        <div
          className={`${
            isLarge
              ? 'max-w-[280px] text-black md:max-w-md lg:max-w-lg '
              : 'max-w-[280px] text-white md:max-w-xs lg:max-w-md '
          } flex h-full flex-col gap-1 text-center justify-${textPosition}`}
        >
          {headingType === 'text' && (
            <HeroHeading heading={heading} isLarge={isLarge} />
          )}
          {headingType === 'image' && headingImage && (
            <div className='flex items-center justify-center'>
              <Image
                src={headingImage}
                alt='image'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                height={42}
                width={109}
                loading='lazy'
              />
            </div>
          )}
          <HeroDescription description={description} isLarge={isLarge} />
          <div className='flex justify-center gap-5'>
            <CTAButton
              label={CTAButtonLabel}
              url={'back-to-school'}
              isLarge={isLarge}
            />
            {SecondCTAButtonLabel && (
              <CTAButton
                label={SecondCTAButtonLabel}
                url={'back-to-school'}
                isLarge={isLarge}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWrapper;
