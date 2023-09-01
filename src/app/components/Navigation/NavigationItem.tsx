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

const links = [
  { href: '/store', label: 'Store' },
  { href: '/mac', label: 'Mac' },
  { href: '/ipad', label: 'iPad' },
  { href: '/iphone', label: 'iPhone' },
  { href: '/watch', label: 'Watch' },
  { href: '/apple-vision-pro', label: 'Vision' },
  { href: '/airpods', label: 'AirPods' },
  { href: '/tv-home', label: 'TV & Home' },
  { href: '/services', label: 'Entertainment' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/support', label: 'Support' },
];

const NavigationItem = () => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='z-10 mb-20 flex cursor-pointer list-none items-center p-10 '
    >
      <div className='flex flex-col gap-5'>
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <p className='text-black font-bold text-3xl'>{link.label}</p>
          </Link>
        ))}
      </div>
    </motion.li>
  );
};
export default NavigationItem;
