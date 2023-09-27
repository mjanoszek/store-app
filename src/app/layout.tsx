'use client';
import './globals.css';
import { Roboto } from 'next/font/google';
import MobileNavbar from './components/MobileNavbar';
import DesktopNavbar from './components/DesktopNavbar';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { metadata } from './components/MetaData';
import Head from 'next/head';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  const isDesktopScreen = useMediaQuery({ minWidth: 900 });

  useEffect(() => {
    setIsDesktop(isDesktopScreen);
  }, [isDesktopScreen]);

  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name='description' content={metadata.description as string} />
      </Head>
      <body className={roboto.className}>
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
        {children}
      </body>
    </html>
  );
}
