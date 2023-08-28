import Link from 'next/link';
import React from 'react';

interface CTAButtonProps {
  label: string;
  url: string;
}
const CTAButton = ({ label, url }: CTAButtonProps) => {
  return (
    <Link href={`/${url}`}>
      <p className='text-blue-500'>{label} &rsaquo; </p>
    </Link>
  );
};

export default CTAButton;
