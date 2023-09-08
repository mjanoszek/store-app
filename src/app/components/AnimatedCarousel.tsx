import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className='min-w-screen flex flex-col items-center justify-center text-center'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.3 }}
        >
          <Image
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            width={980}
            height={551}
          />
        </motion.div>
      </AnimatePresence>

      <div className=' py-18 flex items-center justify-center'>
        <div className='flex gap-10 '>
          <div className='flex flex-col px-4 '>
            <div className='flex py-8 '>
              {images.map((item, indx) => (
                <div key={indx} className='relative flex h-full'>
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
                      className='absolute mx-2 h-3 w-3 rounded-full bg-black'
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
