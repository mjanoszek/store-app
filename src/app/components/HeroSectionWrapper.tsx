import React from 'react';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import CTAButton from './CTAButton';

//add headingColor
interface HeroSectionWrapperProps {
  SectionBackgroundColor: string;
  heading: string;
  description: string;
  contentColor?: 'white' | 'black';
  isLarge?: boolean;
  CTAButtonLabel: string;
  SecondCTAButtonLabel?: string;
  imageSrc: string;
}

const HeroSectionWrapper = ({
  heading,
  description,
  CTAButtonLabel,
  isLarge = true,
  SecondCTAButtonLabel,
  contentColor,
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
          ? 'h-[500px] md:h-[490px] lg:h-[580px]'
          : 'h-[512px] md:h-[662px] lg:h-[692px]'
      }`}
      style={containerStyle}
    >
      <div
        className={`flex flex-col items-center justify-center pt-12 text-center text-black`}
      >
        <div className={`text-${contentColor} flex max-w-xl flex-col gap-1 `}>
          <HeroHeading heading={heading} isLarge={isLarge} />
          <HeroDescription description={description} isLarge={isLarge} />
          <div className='flex justify-center gap-5'>
            <CTAButton label={CTAButtonLabel} url={'back-to-school'} />
            {SecondCTAButtonLabel && (
              <CTAButton label={SecondCTAButtonLabel} url={'back-to-school'} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWrapper;
