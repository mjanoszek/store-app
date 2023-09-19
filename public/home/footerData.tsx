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
