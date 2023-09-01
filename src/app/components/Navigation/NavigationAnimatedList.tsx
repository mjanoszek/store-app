import * as React from 'react';
import { motion } from 'framer-motion';
import NavigationItem from './NavigationItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavigationAnimatedList = () => (
  <motion.ul
    variants={variants}
    className='absolute left-0 top-12 z-40 w-screen '
  >
    <NavigationItem />
  </motion.ul>
);

export default NavigationAnimatedList;
