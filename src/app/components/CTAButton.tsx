import Link from 'next/link';
import React from 'react';

interface CTAButtonProps {
  label: string;
  url: string;
}
const CTAButton = ({ label, url }: CTAButtonProps) => {
  return (
    <Link href={`/${url}`}>
      <p className='text-lg text-blue-500 md:text-xl lg:text-2xl'>
        {label} &rsaquo;{' '}
      </p>
    </Link>
  );
};

export default CTAButton;
