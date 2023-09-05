import React from 'react';
import HeroSectionWrapper from './components/HeroSectionWrapper';
import { useMediaQuery } from 'react-responsive';

const Page = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 734 });
  const isMediumScreen = useMediaQuery({ minWidth: 735, maxWidth: 1068 });
  const isLargeScreen = useMediaQuery({ minWidth: 1069 });

  return <div>Page</div>;
};

export default Page;
