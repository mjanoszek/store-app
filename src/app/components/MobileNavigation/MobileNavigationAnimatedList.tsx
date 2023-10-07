import * as React from 'react';
import { motion } from 'framer-motion';
import MobileNavigationItem from './MobileNavigationItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavigationAnimatedListProps {
  isOpen: boolean;
}
const MobileNavigationAnimatedList = ({
  isOpen,
}: NavigationAnimatedListProps) => (
  <motion.ul
    variants={variants}
    className={`${!isOpen && 'hidden'} absolute left-0 top-12 z-40 w-screen`}
  >
    <MobileNavigationItem />
  </motion.ul>
);

export default MobileNavigationAnimatedList;
