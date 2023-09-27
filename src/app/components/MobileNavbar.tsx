'use client';
import Link from 'next/link';
import React from 'react';
import { FaApple } from 'react-icons/fa6';
import Searchbar from './Searchbar';
import CheckoutBag from './CheckoutBag';
import MobileNavigationMenu from './MobileNavigation/MobileNavigationMenu';
import { motion } from 'framer-motion';

const menuItemVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MobileNavbar = () => {
  return (
    <div className='fixed left-0 right-0 top-0 z-10 bg-white p-5'>
      <div className='flex items-center justify-center text-black '>
        <div className='flex w-full flex-row items-center justify-center text-xs text-gray-600 '>
          <ul className='flex w-full items-center justify-between font-light min-[900px]:hidden '>
            <div className='flex items-center'>
              <motion.li {...menuItemVariants} className='mr-6'>
                <Link href='/'>
                  <FaApple />
                </Link>
              </motion.li>
            </div>
            <div className='flex '>
              <div className='flex items-center'>
                <motion.li {...menuItemVariants} className='mr-6'>
                  <Link href='/search'>
                    <Searchbar />
                  </Link>
                </motion.li>
              </div>
              <div className='flex items-center'>
                <motion.li {...menuItemVariants}>
                  <Link href='/bag'>
                    <CheckoutBag />
                  </Link>
                </motion.li>
              </div>
              <motion.div
                {...menuItemVariants}
                className='ml-5 flex items-center'
              >
                <li>
                  <MobileNavigationMenu />
                </li>
              </motion.div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
