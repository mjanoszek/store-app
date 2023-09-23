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
            ? 'text-lg text-blue-500 md:text-xl '
            : 'text-lg font-light text-blue-500'
        }
      >
        {label} &rsaquo;
      </p>
    </Link>
  );
};

export default CTAButton;
