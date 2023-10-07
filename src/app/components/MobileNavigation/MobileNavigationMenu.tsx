'use client';
import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import MobileNavigationToggle from './MobileNavigationToggle';
import MobileNavigationAnimatedList from './MobileNavigationAnimatedList';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    top: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 50% 0)',
    top: 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNavigationMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
    >
      <motion.div
        variants={sidebar}
        className='fixed bottom-0 right-0 w-screen bg-white'
      />
      <MobileNavigationAnimatedList isOpen={isOpen} />
      <MobileNavigationToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNavigationMenu;
