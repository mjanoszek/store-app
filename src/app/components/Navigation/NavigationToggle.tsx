import * as React from 'react';
import { motion } from 'framer-motion';

interface PathProps {
  variants: {
    closed: {
      d: string;
    };
    open: {
      d: string;
    };
  };
}

const Path = (props: PathProps) => (
  <motion.path
    fill='transparent'
    strokeWidth='2'
    stroke='#4B5563'
    strokeLinecap='round'
    {...props}
  />
);

interface NavigationToggleProps {
  toggle: () => void;
}
const NavigationToggle = ({ toggle }: NavigationToggleProps) => (
  <div className='h-3 w-4'>
    <button
      onClick={toggle}
      className='relative z-20 flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-transparent outline-none'
    >
      <svg width='36' height='16' viewBox='0 0 56 24'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />

        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  </div>
);
export default NavigationToggle;
