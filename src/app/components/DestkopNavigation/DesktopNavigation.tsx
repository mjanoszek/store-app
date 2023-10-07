import React, { useState } from 'react';
import DesktopNavigationMenu from './DesktopNavigationMenu';
import DesktopNavigationItem from './DestkopNavigationItem';
import { FaApple } from 'react-icons/fa6';

const links = [
  { href: '/', text: <FaApple /> },
  {
    href: '/store',
    text: 'Store',
    firstColumn: {
      category: 'Shop',
      content: {
        headings: [
          'Shop the Latest',
          'Mac',
          'iPad',
          'iPhone',
          'Apple Watch',
          'Accessories',
        ],
      },
    },
    secondColumn: {
      category: 'Quick Links',
      content: {
        paragraphs: [
          'Find a Store',
          'Order Status',
          'Apple Trade In',
          'Financing',
          'College Student Offer',
        ],
      },
    },
    thirdColumn: {
      category: 'Shop Special Stores',
      content: {
        paragraphs: [
          'Certified Refurbished',
          'Education',
          'Business',
          'Veternas and Military',
          'Government',
        ],
      },
    },
  },
  {
    href: '/mac',
    text: 'Mac',
    firstColumn: {
      category: 'Explore Mac',
      content: {
        headings: [
          'Explore All Mac',
          'MacBook Air',
          'MacBook Pro',
          'iMac',
          'Mac mini',
          'Mac Studio',
          'Mac Pro',
          'Mac Displays',
        ],
        paragraphs: ['Compare Mac', 'Mac Does That'],
      },
    },
    secondColumn: {
      category: 'Shop Mac',
      content: {
        paragraphs: [
          'Shop Mac',
          'Mac Accessories',
          'Apple Trade In',
          'Financng',
          'College Student Offer',
        ],
      },
    },
    thirdColumn: {
      category: 'More from Mac',
      content: {
        paragraphs: [
          'Mac Support',
          'AppleCare+ for Mac',
          'macOS Sonoma',
          'Apps by Apple',
          'Continuity',
          'iCloud+',
          'Mac for Business',
          'Education',
        ],
      },
    },
  },
  {
    href: '/ipad',
    text: 'iPad',
    firstColumn: {
      category: 'Explore iPad',
      content: {
        headings: [
          'Explore All iPad',
          'iPad Pro',
          'iPad Air',
          'iPad',
          'iPad mini',
          'Apple Pencil',
          'Keyboards',
        ],
        paragraphs: ['Compare iPad', 'Why iPad'],
      },
    },
    secondColumn: {
      category: 'Shop iPad',
      content: {
        paragraphs: [
          'Shop iPad',
          'iPad Accessories',
          'Apple Trade In',
          'Financng',
          'College Student Offer',
        ],
      },
    },
    thirdColumn: {
      category: 'More from iPad',
      content: {
        paragraphs: [
          'iPad Support',
          'AppleCare+ for iPad',
          'iPadOS 17',
          'Apps by Apple',
          'iCloud+',
          'Education',
        ],
      },
    },
  },
  {
    href: '/iphone',
    text: 'iPhone',
    firstColumn: {
      category: 'Explore iPhone',
      content: {
        headings: [
          'Explore All iPhone',
          'iPhone 15 Pro',
          'iPhone 15',
          'iPhone 14',
          'iPhone 13',
          'iPhone SE',
        ],
        paragraphs: ['Compare iPhone', 'Switch from Android'],
      },
    },
    secondColumn: {
      category: 'Shop iPhone',
      content: {
        paragraphs: [
          'Shop iPhone',
          'iPhone Accessories',
          'Apple Trade In',
          'Carier Deals at Apple',
          'College Student Offer',
        ],
      },
    },
    thirdColumn: {
      category: 'More from iPhone',
      content: {
        paragraphs: [
          'iPhone Support',
          'AppleCare+ for iPhone',
          'iOS 17',
          'Apps by Apple',
          'iPhone Privacy',
          'iCloud+',
          'Wallet, Pay, Card',
          'Siri',
        ],
      },
    },
  },
  {
    href: '/watch',
    text: 'Watch',
    firstColumn: {
      category: 'Explore Watch',
      content: {
        headings: [
          'Explore All Apple Watch',
          'Apple Watch Series 9',
          'Apple Watch Ultra 2',
          'Apple Watch SE',
          'Apple Watch NIKE',
          'Apple Watch Hermès',
        ],
        paragraphs: ['Compare Watch', 'Why Apple Watch'],
      },
    },
    secondColumn: {
      category: 'Shop Watch',
      content: {
        paragraphs: [
          'Shop Apple Watch',
          'Apple Watch Studio',
          'Apple Watch Bands',
          'Apple Watch Accessories',
          'Apple Trade In',
          'Financing',
        ],
      },
    },
    thirdColumn: {
      category: 'More from Watch',
      content: {
        paragraphs: [
          'Apple Watch Support',
          'AppleCare+',
          'watchOS 10',
          'Apps by Apple',
          'Apple Fitness+',
        ],
      },
    },
  },
  {
    href: '/vision-pro',
    text: 'Vision',
  },
  {
    href: '/airpods',
    text: 'AirPods',
    firstColumn: {
      category: 'Explore AirPods',
      content: {
        headings: [
          'Explore All AirPods',
          'AirPods Pro 2nd generation',
          'AirPods 2nd generation',
          'AirPods 3rd generation',
          'AirPods Max',
        ],
        paragraphs: ['Compare AirPods'],
      },
    },
    secondColumn: {
      category: 'Shop AirPods',
      content: {
        paragraphs: ['Shop AirPods', 'AirPods Accessories'],
      },
    },
    thirdColumn: {
      category: 'More from AirPods',
      content: {
        paragraphs: [
          'AirPods Support',
          'AppleCare+ for Headphones',
          'Apple Music',
        ],
      },
    },
  },
  {
    href: '/tv-home',
    text: 'TV & Home',
    firstColumn: {
      category: 'Explore TV & Home',
      content: {
        headings: [
          'Explore TV & Home',
          'Apple TV 4K',
          'HomePod',
          'HomePod mini',
        ],
      },
    },
    secondColumn: {
      category: 'Shop TV & Home',
      content: {
        paragraphs: [
          'Shop Apple TV 4K',
          'Shop HomePod',
          'Shop HomePod mini',
          'Shop Siri Remote',
          'TV & Home Accessories',
        ],
      },
    },
    thirdColumn: {
      category: 'More from TV & Home',
      content: {
        paragraphs: [
          'Apple TV Support',
          'HomePod Support',
          'AppleCare+',
          'Apple TV app',
          'Apple TV+',
          'Home app',
          'Apple Music',
          'Siri',
          'AirPlay',
        ],
      },
    },
  },
  {
    href: '/entertainment',
    text: 'Entertainment',
    firstColumn: {
      category: 'Explore Entertainment',
      content: {
        headings: [
          'Explore Entertainment',
          'Apple One',
          'Apple TV+',
          'Apple Music',
          'Apple Arcade',
          'Apple Fitness+',
          'Apple News+',
          'Apple Podcasts',
          'Apple Books',
          'App Store',
        ],
      },
    },
    secondColumn: {
      category: 'Support',
      content: {
        paragraphs: ['Apple TV+ Support', 'Apple Music Support'],
      },
    },
  },
  {
    href: '/accessories',
    text: 'Accessories',
    firstColumn: {
      category: 'Shop Accessories',
      content: {
        headings: [
          'Shop All Accessories',
          'Mac',
          'iPad',
          'iPhone',
          'Apple Watch',
          'AirPods',
          'TV & Home',
        ],
      },
    },
    secondColumn: {
      category: 'Explore Accessories',
      content: {
        paragraphs: ['Made by Apple', 'Beats by Dr. Dre', 'AirTag'],
      },
    },
  },
  {
    href: '/support',
    text: 'Support',
  },
];

const DesktopNavigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const handleMouseEnter = (href) => {
    setIsHovered(true);
    setHoveredNavItem(href);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredNavItem(null);
  };

  return (
    <div className='fixed left-0 right-0 top-0 z-10 bg-white p-5'>
      <div className='flex items-center justify-center text-black '>
        <div className='flex w-full flex-row items-center justify-center text-xs text-gray-600 '>
          <ul
            className='hidden items-center gap-7 font-light min-[900px]:flex'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {links.map((link, index) => (
              <DesktopNavigationItem
                key={index}
                href={link.href}
                onMouseEnter={() => handleMouseEnter(link.href)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {link.text}
              </DesktopNavigationItem>
            ))}
          </ul>
          {isHovered && hoveredNavItem && hoveredNavItem !== '/' && (
            <DesktopNavigationMenu
              href={hoveredNavItem}
              text={
                links.find((link) => link.href === hoveredNavItem)?.text || ''
              }
              firstColumn={
                links.find((link) => link.href === hoveredNavItem)?.firstColumn
              }
              secondColumn={
                links.find((link) => link.href === hoveredNavItem)?.secondColumn
              }
              thirdColumn={
                links.find((link) => link.href === hoveredNavItem)?.thirdColumn
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavigation;
