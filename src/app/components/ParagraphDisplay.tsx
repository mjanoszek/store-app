import React, { ReactNode } from 'react';

interface ParagraphDisplayProps {
  text: (string | ReactNode)[];
}
const ParagraphDisplay = ({ text }: ParagraphDisplayProps) => {
  return (
    <div className='flex flex-col justify-center gap-2 text-xs text-gray-400'>
      {text.map((paragraph, indx) => (
        <p key={indx}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ParagraphDisplay;
