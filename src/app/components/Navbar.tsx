'use client';
import Link from 'next/link';
import React from 'react';
import { FaApple } from 'react-icons/fa6';
import Searchbar from './Searchbar';
import CheckoutBag from './CheckoutBag';
import NavigationMenu from './Navigation/NavigationMenu';
import { motion } from 'framer-motion';

const menuItemVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Navbar = () => {
  return (
    <div className='bg-white p-5'>
      <div className='flex items-center justify-center text-black'>
        <div className='flex w-full flex-row text-sm text-gray-600 '>
          <ul className='flex w-full items-center justify-between font-light md:hidden'>
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
              <div className='flex items-center ml-5'>
                <li>
                  <NavigationMenu />
                </li>
              </div>
            </div>
          </ul>

          <ul className='hidden items-center gap-7 font-light md:flex'>
            <motion.li {...menuItemVariants}>
              <Link href='/'>
                <FaApple />
              </Link>
            </motion.li>
            <motion.li {...menuItemVariants}>
              <Link href='/store'>
                <p>Store</p>
              </Link>
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

export default Navbar;
