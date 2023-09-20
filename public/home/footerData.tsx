import Link from 'next/link';
import React from 'react';

export const footerData = [
  '1. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to availability. While supplies last. View full terms and conditions of offer here.',
  '2. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.',
  'To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.',
  'If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.',
  <span key='link'>
    Learn more about how Apple Card applications are evaluated at{'  '}
    <Link href='#'>
      <u>test.com</u>
    </Link>
  </span>,
  'A subscription is required for Apple TV+.',
  'Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.',
];

export const footerLegal = [
  <span key='link'>
    More ways to{' '}
    <Link href='#' className='text-blue-700 underline'>
      Find an Apple Store
    </Link>{' '}
    or{' '}
    <Link href='#' className='text-blue-700 underline'>
      other retailer
    </Link>{' '}
    near you. Or call 1-800-MY-APPLE
  </span>,
  'United states',
  'Copyright © 2023',
  'Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map',
];

export const siteDirectories = [
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
