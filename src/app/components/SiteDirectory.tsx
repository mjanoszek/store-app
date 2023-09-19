import Link from 'next/link';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaPlus } from 'react-icons/fa6';

const categories = [
  {
    categoryName: 'Shop and Learn',
    directories: [
      { name: 'Store', link: '/store' },
      { name: 'Mac', link: '/mac' },
      { name: 'iPad', link: '/ipad' },
      { name: 'iPhone', link: '/iphone' },
      { name: 'Watch', link: '/watch' },
      { name: 'Vision', link: '/apple-vision-pro' },
      { name: 'AirPods', link: '/airpods' },
      { name: 'TV & Home', link: '/tv-home' },
      { name: 'AirTag', link: '/airtag' },
      { name: 'Accessories', link: '/accessories' },
      { name: 'Gift Cards', link: '/gift-cards' },
    ],
  },
  {
    categoryName: 'Apple Wallet',
    directories: [
      { name: 'Wallet', link: '/wallet' },
      { name: 'Apple Card', link: '/apple-card' },
      { name: 'Apple Pay', link: '/apple-pay' },
      { name: 'Apple Cash', link: '/apple-cash' },
    ],
  },
  {
    categoryName: 'Account',
    directories: [
      { name: 'Manage Your Apple ID', link: '/manage-your-apple-id' },
      { name: 'Apple Store Account', link: '/apple-store-account' },
      { name: 'iCloud.com', link: 'https://www.icloud.com' },
    ],
  },
  {
    categoryName: 'Entertainment',
    directories: [
      { name: 'Apple One', link: '/apple-one' },
      { name: 'Apple TV+', link: '/apple-tv-plus' },
      { name: 'Apple Music', link: '/apple-music' },
      { name: 'Apple Arcade', link: '/apple-arcade' },
      { name: 'Apple Fitness+', link: '/apple-fitness-plus' },
      { name: 'Apple News+', link: '/apple-news-plus' },
      { name: 'Apple Podcasts', link: '/apple-podcasts' },
      { name: 'Apple Books', link: '/apple-books' },
      { name: 'App Store', link: '/app-store' },
    ],
  },
  {
    categoryName: 'Apple Store',
    directories: [
      { name: 'Find a Store', link: '/find-a-store' },
      { name: 'Genius Bar', link: '/genius-bar' },
      { name: 'Today at Apple', link: '/today-at-apple' },
      { name: 'Apple Camp', link: '/apple-camp' },
      { name: 'Apple Store App', link: '/apple-store-app' },
      { name: 'Certified Refurbished', link: '/certified-refurbished' },
      { name: 'Apple Trade In', link: '/apple-trade-in' },
      { name: 'Financing', link: '/financing' },
      { name: 'Carrier Deals at Apple', link: '/carrier-deals' },
      { name: 'Order Status', link: '/order-status' },
      { name: 'Shopping Help', link: '/shopping-help' },
    ],
  },
  {
    categoryName: 'For Business',
    directories: [
      { name: 'Apple and Business', link: '/apple-and-business' },
      { name: 'Shop for Business', link: '/shop-for-business' },
    ],
  },
  {
    categoryName: 'For Education',
    directories: [
      { name: 'Apple and Education', link: '/apple-and-education' },
      { name: 'Shop for K-12', link: '/shop-for-k-12' },
      { name: 'Shop for College', link: '/shop-for-college' },
    ],
  },
  {
    categoryName: 'For Healthcare',
    directories: [
      { name: 'Apple in Healthcare', link: '/apple-in-healthcare' },
      { name: 'Health on Apple Watch', link: '/health-on-apple-watch' },
      { name: 'Health Records on iPhone', link: '/health-records-on-iphone' },
    ],
  },
  {
    categoryName: 'For Government',
    directories: [
      { name: 'Shop for Government', link: '/shop-for-government' },
      {
        name: 'Shop for Veterans and Military',
        link: '/shop-for-veterans-and-military',
      },
    ],
  },
  {
    categoryName: 'Apple Values',
    directories: [
      { name: 'Accessibility', link: '/accessibility' },
      { name: 'Education', link: '/education' },
      { name: 'Environment', link: '/environment' },
      { name: 'Inclusion and Diversity', link: '/inclusion-and-diversity' },
      { name: 'Privacy', link: '/privacy' },
      { name: 'Racial Equity and Justice', link: '/racial-equity-and-justice' },
      { name: 'Supplier Responsibility', link: '/supplier-responsibility' },
    ],
  },
  {
    categoryName: 'About Apple',
    directories: [
      { name: 'Ethics & Compliance', link: '/ethics-and-compliance' },
      { name: 'Events', link: '/events' },
      { name: 'Contact Apple', link: '/contact-apple' },
    ],
  },
];

const SiteDirectory = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 735 });

  const column1 = categories.slice(0, 2);
  const column2 = categories.slice(2, 4);
  const column3 = categories.slice(4, 5);
  const column4 = categories.slice(5, 9);
  const column5 = categories.slice(9, 11);

  const columns = [column1, column2, column3, column4, column5];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName === activeCategory ? null : categoryName);
  };

  return !isMediumScreen ? (
    <div className='flex flex-col flex-nowrap'>
      {categories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className='flex h-full w-full flex-col items-start justify-center pb-2'
        >
          <div className='w-full border-t border-gray-300' />

          <div key={category.categoryName} className='w-full'>
            <div
              className='flex w-full items-center justify-between'
              onClick={() => handleCategoryClick(category.categoryName)}
            >
              <h3
                className={`text-thin flex-1 cursor-pointer py-4 text-xs ${
                  activeCategory === category.categoryName
                    ? 'text-blue-500'
                    : ''
                }`}
              >
                {category.categoryName}
              </h3>
              {activeCategory ? <FaXmark /> : <FaPlus />}
            </div>
            <AnimatePresence>
              {activeCategory === category.categoryName && (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className='flex flex-col gap-3 overflow-hidden pb-2 text-xs font-thin'
                >
                  {category.directories.map((directory, directoryIndex) => (
                    <motion.li
                      key={directoryIndex}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                    >
                      <Link href={directory.link}>{directory.name}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className='flex flex-nowrap'>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className='flex w-1/5 flex-col gap-5 pr-4'>
          {column.map((category) => (
            <div key={category.categoryName}>
              <h3 className='text-thin my-2 text-xs'>
                {category.categoryName}
              </h3>
              <ul className='flex flex-col gap-3 text-xs font-thin'>
                {category.directories.map((directory) => (
                  <li key={directory.name}>
                    <Link href={directory.link}>{directory.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SiteDirectory;
