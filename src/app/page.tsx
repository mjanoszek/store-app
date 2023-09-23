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
  appleWatch9: importAllImages('appleWatch9/appleWatch9', 'jpeg'),
  appleWatchUltra2: importAllImages(
    'appleWatchUltra2/appleWatchUltra2',
    'jpeg',
  ),
  watchLogo: importAllImages('appleWatch/watchLogo', 'png'),
  watch9Logo: importAllImages('appleWatch9/watchLogo', 'png'),
  watchUltra2Logo: importAllImages('appleWatchUltra2/watchLogo', 'png'),
  backToSchool: importAllImages('backToSchool/backToSchool', 'jpeg'),
  iPadPro: importAllImages('iPadPro/iPadPro', 'jpeg'),
  M2Chip: importAllImages('iPadPro/m2Chip', 'png'),
  iPhone14: importAllImages('iPhone14/iPhone14', 'jpeg'),
  iPhone15: importAllImages('iPhone15/iPhone15', 'jpeg'),
  iPhone14Pro: importAllImages('iPhone14Pro/iPhone14Pro', 'jpeg'),
  iPhone15Pro: importAllImages('iPhone15Pro/iPhone15Pro', 'jpeg'),
  macbookAir: importAllImages('gmacbookAir/macbookAir', 'jpeg'),
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
          heading={'iPhone 15 Pro'}
          description={'Titanium. So strong. So light. So Pro.'}
          CTAButtonLabel={'Learn more'}
          SecondCTAButtonLabel='Buy'
          imageSrc={getImageSource('iPhone15Pro')}
          textColor='white'
          CTAButtonLink={'iphone15pro'}
        />
        <HeroSectionWrapper
          SectionBackgroundColor={'bg-pale'}
          heading={'iPhone 15'}
          description={'New camera. New design. Newphoria'}
          CTAButtonLabel={'Learn more'}
          SecondCTAButtonLabel={'Buy'}
          imageSrc={getImageSource('iPhone15')}
          textColor='black'
          CTAButtonLink={'iphone15'}
        />
        <HeroSectionWrapper
          SectionBackgroundColor={'bg-pale'}
          headingType='image'
          headingImage={getImageSource('watch9Logo')}
          description={'Smarter. Brighter. Mightier.'}
          CTAButtonLabel={'Learn more'}
          SecondCTAButtonLabel={'Buy'}
          imageSrc={getImageSource('appleWatch9')}
          textColor='white'
          heading={''}
          CTAButtonLink={'applewatch9'}
        />
      </div>
      <div className='flex flex-col gap-3 md:mx-3'>
        <div className='flex flex-col gap-3 md:flex-row'>
          <HeroSectionWrapper
            SectionBackgroundColor={'bg-pale'}
            description={'Next level adventure.'}
            CTAButtonLabel={'Learn more'}
            SecondCTAButtonLabel='Buy'
            headingImage={getImageSource('watchUltra2Logo')}
            headingType='image'
            imageSrc={getImageSource('appleWatchUltra2')}
            isLarge={false}
            textPosition={'end'}
            textColor='black'
            heading={''}
            CTAButtonLink={'applewatchultra2'}
          />
          <HeroSectionWrapper
            SectionBackgroundColor={'bg-pale'}
            heading={'iPhone 14 Pro'}
            description={'Pro. Beyond.'}
            CTAButtonLabel={'Learn more'}
            SecondCTAButtonLabel={'Buy'}
            imageSrc={getImageSource('iPhone14Pro')}
            isLarge={false}
            CTAButtonLink={'iphone14pro'}
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
            CTAButtonLink={'ipadpro'}
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
            CTAButtonLink={'applewatch8'}
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
