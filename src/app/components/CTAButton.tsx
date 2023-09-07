import Link from 'next/link';
import React from 'react';

interface CTAButtonProps {
  label: string;
  url: string;
  isLarge?: boolean;
}
const CTAButton = ({ label, url, isLarge }: CTAButtonProps) => {
  return (
    <Link href={`/${url}`}>
      <p
        className={
          isLarge
            ? 'text-lg text-blue-500 md:text-xl lg:text-2xl'
            : 'text-lg font-light text-blue-500 lg:text-2xl'
        }
      >
        {label} &rsaquo;
      </p>
    </Link>
  );
};

export default CTAButton;
