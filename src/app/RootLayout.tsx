'use client';
import MobileNavbar from './components/MobileNavigation/MobileNavigation';
import { Roboto } from 'next/font/google';
import DesktopNavbar from './components/DestkopNavigation/DesktopNavigation';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { metadata } from './components/MetaData';

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
      <title>{metadata.title as string}</title>
      <meta name='description' content={metadata.description as string} />
      <body className={roboto.className}>
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
        {children}
      </body>
    </html>
  );
}
