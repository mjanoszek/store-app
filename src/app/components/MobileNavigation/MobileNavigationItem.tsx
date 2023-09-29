import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.03,
    },
  },
  closed: {
    transition: {
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
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

const MobileNavigationItem = () => {
  return (
    <motion.li
      variants={variants}
      className='mb-20 flex cursor-pointer list-none items-center p-10'
    >
      <div className='flex flex-col gap-5'>
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={linkVariants}
            className='text-2xl font-bold text-black'
          >
            <Link href={link.href}>
              <p>{link.label}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.li>
  );
};
export default MobileNavigationItem;
