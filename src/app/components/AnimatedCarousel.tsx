'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 274,
    height: 495,
  });
  const isSmallScreen = useMediaQuery({ maxWidth: 734 });
  const isMediumScreen = useMediaQuery({ minWidth: 735, maxWidth: 1068 });
  const isLargeScreen = useMediaQuery({ minWidth: 1069 });

  useEffect(() => {
    if (isSmallScreen) setImageDimensions({ width: 274, height: 495 });
    else if (isMediumScreen) setImageDimensions({ width: 689, height: 368 });
    else if (isLargeScreen) setImageDimensions({ width: 980, height: 523 });
  }, [isSmallScreen, isMediumScreen, isLargeScreen]);

  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (index: number) => {
    const newIndex = (currentImage + index + images.length) % images.length;
    setCurrentImage(newIndex);
  };

  return (
    <div className='min-w-screen flex  flex-col text-center'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
        >
          <div className='flex overflow-hidden'>
            {images[currentImage - 1] && (
              <div className='flex flex-1   opacity-50'>
                <button onClick={() => handleImageChange(-1)}>
                  <Image
                    src={images[currentImage - 1]}
                    alt={`Image ${currentImage - 1}`}
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    loading='lazy'
                  />
                </button>
              </div>
            )}
            <div className='flex'>
              <Image
                src={images[currentImage]}
                alt={`Image ${currentImage}`}
                width={imageDimensions.width}
                height={imageDimensions.height}
                loading='lazy'
              />
            </div>
            <div className='flex  flex-1 opacity-50'>
              <Image
                src={images[currentImage + 1]}
                alt={`Image ${currentImage + 1}`}
                width={imageDimensions.width}
                height={imageDimensions.height}
                loading='lazy'
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className='py-18 flex items-center justify-center '>
        <div className='flex gap-10 '>
          <div className='flex flex-col px-4'>
            <div className='flex py-8 '>
              {images.map((item, indx) => (
                <div key={indx} className=' flex h-full'>
                  <button
                    className={`mx-2 h-3 w-3 rounded-full border-2 border-transparent bg-gray-500 ${
                      indx === currentImage && 'bg-gray-100'
                    }`}
                    onClick={() => {
                      handleImageChange(indx);
                    }}
                  />
                  {indx === currentImage ? (
                    <motion.div
                      className='absolute mx-2 h-3 w-3 rounded-full bg-black '
                      layoutId='underline'
                      transition={{
                        type: 'tween',
                        ease: 'easeInOut',
                        duration: 0.3,
                      }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
