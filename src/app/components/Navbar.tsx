import Link from 'next/link';
import React from 'react';
import { FaApple } from 'react-icons/fa6';
import Searchbar from './Searchbar';
import CheckoutBag from './CheckoutBag';

const Navbar = () => {
  return (
    <div className='w-screen bg-white p-4'>
      <div className='flex items-center justify-center text-black'>
        <div className='flex flex-row text-sm text-gray-600'>
          <ul className='flex items-center gap-7'>
            <li>
              <Link href='/'>
                <FaApple />
              </Link>
            </li>
            <li>
              <Link href='/store'>
                <p>Store</p>
              </Link>
            </li>
            <li>
              <Link href='/mac'>
                <p>Mac</p>
              </Link>
            </li>
            <li>
              <Link href='/ipad'>
                <p>iPad</p>
              </Link>
            </li>
            <li>
              <Link href='/iphone'>
                <p>iPhone</p>
              </Link>
            </li>
            <li>
              <Link href='/watch'>
                <p>Watch</p>
              </Link>
            </li>
            <li>
              <Link href='/apple-vision-pro'>
                <p>Vision</p>
              </Link>
            </li>
            <li>
              <Link href='/airpods'>
                <p>AirPods</p>
              </Link>
            </li>
            <li>
              <Link href='/tv-home'>
                <p>TV & Home</p>
              </Link>
            </li>
            <li>
              <Link href='/services'>
                <p>Entertainment</p>
              </Link>
            </li>
            <li>
              <Link href='/accessories'>
                <p>Accessories</p>
              </Link>
            </li>
            <li>
              <Link href='/support'>
                <p>Support</p>
              </Link>
            </li>
            <li>
              <Link href='/search'>
                <Searchbar />
              </Link>
            </li>
            <li>
              <Link href='/bag'>
                <CheckoutBag />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
