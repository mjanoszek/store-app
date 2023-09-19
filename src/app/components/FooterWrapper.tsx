import React, { ReactNode } from 'react';
import ParagraphDisplay from './ParagraphDisplay';
import SiteDirectory from './SiteDirectory';

interface FooterWrapperProps {
  footerText: (string | ReactNode)[];
  footerLegal: (string | ReactNode)[];
}

const FooterWrapper = ({ footerText, footerLegal }: FooterWrapperProps) => {
  return (
    <div className='flex flex-col justify-center gap-5  self-center px-6 lg:mx-auto lg:max-w-[980px] lg:px-0 '>
      <ParagraphDisplay text={footerText} />
      <SiteDirectory />
      <ParagraphDisplay text={footerLegal} />
    </div>
  );
};

export default FooterWrapper;
