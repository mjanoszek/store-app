'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXmark, FaPlus } from 'react-icons/fa6';
import { siteDirectories } from '../../../public/home/footerData';

const SiteDirectory = () => {
  const [isMedium, setIsMedium] = useState(false);
  const isMediumScreen = useMediaQuery({ minWidth: 735 });

  const categories = siteDirectories;
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

  useEffect(() => {
    setIsMedium(isMediumScreen);
  }, [isMediumScreen]);

  return !isMedium ? (
    <div className='flex flex-col flex-nowrap'>
      {siteDirectories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className='flex h-full w-full flex-col items-start justify-center '
        >
          <div className='w-full border-t border-gray-300' />

          <div key={category.categoryName} className='w-full'>
            <div
              className='text-thin flex w-full items-center justify-between text-xs'
              onClick={() => handleCategoryClick(category.categoryName)}
            >
              <h3
                className={`flex-1 cursor-pointer py-4 ${
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
