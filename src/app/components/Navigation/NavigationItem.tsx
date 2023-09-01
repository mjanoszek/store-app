import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavigationItem = () => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='z-10 mb-20 flex cursor-pointer list-none items-center p-10 '
    >
      <div className='flex flex-col gap-5'>
        <p className='text-3xl font-bold text-black'>link</p>
      </div>
    </motion.li>
  );
};
export default NavigationItem;
