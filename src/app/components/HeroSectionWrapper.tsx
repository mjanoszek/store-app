import React from 'react';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import CTAButton from './CTAButton';

interface HeroSectionWrapperProps {
  SectionBackgroundColor: string;
  heading: string;
  description: string | JSX.Element;
  isLarge?: boolean;
  CTAButtonLabel: string;
  SecondCTAButtonLabel?: string;
  imageSrc: string;
  textPosition?: 'end' | 'start' | 'center';
}

const HeroSectionWrapper = ({
  heading,
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
        className={`flex h-full flex-col items-center py-8 text-center ${
          isLarge ? 'items-center' : 'items-end '
        }`}
      >
        <div
          className={`${
            isLarge
              ? 'max-w-[280px] text-black md:max-w-md lg:max-w-lg '
              : 'max-w-[280px] text-white md:max-w-xs lg:max-w-md '
          } flex h-full flex-col gap-1 justify-${textPosition}`}
        >
          <HeroHeading heading={heading} isLarge={isLarge} />
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
