'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa6';
import Searchbar from '../Searchbar';
import CheckoutBag from '../CheckoutBag';

const menuItemVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const DesktopNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='fixed left-0 right-0 top-0 z-10 bg-white p-5'>
      <div className='flex items-center justify-center text-black '>
        <div className='flex w-full flex-row items-center justify-center text-xs text-gray-600 '>
          <ul className='hidden items-center gap-7 font-light min-[900px]:flex'>
            <motion.li {...menuItemVariants}>
              <Link href='/'>
                <FaApple />
              </Link>
            </motion.li>

            <motion.li
              {...menuItemVariants}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <Link href='/store'>
                <p>Store</p>
              </Link>
              {isHovered && (
                <ul className='sub-menu'>
                  <p>sdfdsf</p>
                </ul>
              )}
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/mac'>
                <p>Mac</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/ipad'>
                <p>iPad</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/iphone'>
                <p>iPhone</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/watch'>
                <p>Watch</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/apple-vision-pro'>
                <p>Vision</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/airpods'>
                <p>AirPods</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/tv-home'>
                <p>TV & Home</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/services'>
                <p>Entertainment</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/accessories'>
                <p>Accessories</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/support'>
                <p>Support</p>
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/search'>
                <Searchbar />
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/bag'>
                <CheckoutBag />
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavigation;
