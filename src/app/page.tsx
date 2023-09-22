'use client';
import React from 'react';
import HeroSectionWrapper from './components/HeroSectionWrapper';
import { useMediaQuery } from 'react-responsive';
import AnimatedCarousel from './components/AnimatedCarousel';
import FooterWrapper from './components/FooterWrapper';
import { footerData, footerLegal } from '../../public/home/footerData';

const importAllImages = (category: string, extension: string) => {
  return {
    Sm: `/home/${category}Sm.${extension}`,
    Md: `/home/${category}Md.${extension}`,
    Lg: `/home/${category}Lg.${extension}`,
  };
};

interface CategoryImages {
  [key: string]: {
    Sm: string;
    Md: string;
    Lg: string;
  };
}

const categoryImages: CategoryImages = {
  appleCard: importAllImages('appleCard/appleCard', 'jpeg'),
  appleEvent: importAllImages('appleEvent/appleEvent', 'jpeg'),
  appleWatch: importAllImages('appleWatch/appleWatch', 'jpeg'),
  watchLogo: importAllImages('appleWatch/watchLogo', 'png'),
  backToSchool: importAllImages('backToSchool/backToSchool', 'jpeg'),
  iPadPro: importAllImages('iPadPro/iPadPro', 'jpeg'),
  M2Chip: importAllImages('iPadPro/m2Chip', 'png'),
  iPhone14: importAllImages('iPhone14/iPhone14', 'jpeg'),
  iPhone14Pro: importAllImages('iPhone14Pro/iPhone14Pro', 'jpeg'),
  macbookAir: importAllImages('macbookAir/macbookAir', 'jpeg'),
  foundation: importAllImages('tvPlus/foundation/foundation', 'jpeg'),
  hijack: importAllImages('tvPlus/hijack/hijack', 'jpeg'),
  invasion: importAllImages('tvPlus/invasion/invasion', 'jpeg'),
  physical: importAllImages('tvPlus/physical/physical', 'jpeg'),
  theMorning: importAllImages('tvPlus/theMorning/theMorning', 'jpeg'),
};

const Page = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 734 });
  const isMediumScreen = useMediaQuery({ minWidth: 735, maxWidth: 1068 });
  const isLargeScreen = useMediaQuery({ minWidth: 1069 });

  const getImageSource = (category: keyof CategoryImages) => {
    if (isSmallScreen) return categoryImages[category].Sm;
    else if (isMediumScreen) return categoryImages[category].Md;
    else if (isLargeScreen) return categoryImages[category].Lg;

    return categoryImages[category].Lg;
  };

  return (
    <>
      <div className='flex flex-col gap-5 pb-2 pt-10'>
        <HeroSectionWrapper
          SectionBackgroundColor={'bg-pale'}
          heading={'Save on Mac or iPad for college.'}
          description={'Plus get a gift card up to $150.'}
          CTAButtonLabel={'Shop now'}
          imageSrc={getImageSource('backToSchool')}
        />
        <HeroSectionWrapper
          SectionBackgroundColor={'bg-pale'}
          heading={'Macbook Air 15"'}
          description={'Impressively big. Impossibly thin.'}
          CTAButtonLabel={'Learn more'}
          SecondCTAButtonLabel={'Shop now'}
          imageSrc={getImageSource('macbookAir')}
        />
        <HeroSectionWrapper
          SectionBackgroundColor={'bg-pale'}
          heading={'iPhone 14'}
          description={'Wonderfull.'}
          CTAButtonLabel={'Learn more'}
          SecondCTAButtonLabel={'Shop now'}
          imageSrc={getImageSource('iPhone14')}
        />
      </div>
      <div className='flex flex-col gap-3 md:mx-3'>
        <div className='flex flex-col gap-3 md:flex-row'>
          <HeroSectionWrapper
            SectionBackgroundColor={'bg-pale'}
            heading={'Apple Event'}
            description={'Watch online on 9/12 at 10 a.m. PT.'}
            CTAButtonLabel={'Learn more'}
            imageSrc={getImageSource('appleEvent')}
            isLarge={false}
            textPosition={'end'}
          />
          <HeroSectionWrapper
            SectionBackgroundColor={'bg-pale'}
            heading={'iPhone 14 Pro'}
            description={'Pro. Beyond.'}
            CTAButtonLabel={'Learn more'}
            SecondCTAButtonLabel={'Buy'}
            imageSrc={getImageSource('iPhone14Pro')}
            isLarge={false}
          />
        </div>
        <div className='flex flex-col gap-3 md:flex-row'>
          <HeroSectionWrapper
            SectionBackgroundColor={'bg-pale'}
            heading={'iPad Pro'}
            description={
              <>
                Supercharged by
                <span
                  className='ml-2 inline-block h-6 w-6'
                  style={{
                    backgroundImage: `url(${getImageSource('M2Chip')})`,
                    backgroundSize: 'cover',
                  }}
                ></span>
              </>
            }
            CTAButtonLabel={'Learn more'}
            SecondCTAButtonLabel={'Buy'}
            imageSrc={getImageSource('iPadPro')}
            isLarge={false}
          />
          <HeroSectionWrapper
            SectionBackgroundColor={'bg-pale'}
            heading={'Watch 8'}
            description={'A healthy leap ahead.'}
            CTAButtonLabel={'Learn more'}
            SecondCTAButtonLabel={'Buy'}
            imageSrc={getImageSource('appleWatch')}
            isLarge={false}
            headingType='image'
            headingImage={getImageSource('watchLogo')}
          />
        </div>
      </div>
      <div className='pt-10'>
        <AnimatedCarousel
          images={[
            getImageSource('foundation'),
            getImageSource('physical'),
            getImageSource('hijack'),
            getImageSource('invasion'),
            getImageSource('theMorning'),
          ]}
        />
      </div>
      <div className='bg-paleGray py-10'>
        <FooterWrapper footerText={footerData} footerLegal={footerLegal} />
      </div>
    </>
  );
};

export default Page;
