import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://media.gucci.com/content/HeroRegularStandard_1600x675/1678788088/HeroRegularStandard_Gucci-Nojum-Mar-2023-11_001_Default.jpg',
    'https://media.gucci.com/content/HeroRegularStandard_1600x675/1676039503/HeroRegularStandard_Gucci-Spring-Summer-23-001_001_Default.jpg',
    'https://media.gucci.com/content/HeroRegularStandard_1600x675/1680003118/HeroRegularStandard_AdidasxGucci-WaveII-Mar23-019_001_Default.jpg',
    'https://media.gucci.com/content/HeroRegularStandard_1600x675/1680021962/HeroRegularStandard_Gucci-Blondie-Tophandle-Mar23-brown-leather_001_Default.jpg',
  ];

  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <section className='h-[800px] py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center z-20'>
          <AiOutlineLeft
            className='absolute left-10 text-white hover:scale-150 transition duration-300 cursor-pointer'
            size={40}
            onClick={handlePrevClick}
          />
          <div className=''>
          <h1 className='absolute z-20 text-[50px] top-72 left-72 text-white leading-[1.1] font-light mb-4'>
            GUCCI <br />
            <span className='font-semibold z-20 absolute text-white'>
              SHOP SPRING
            </span>
          </h1>
          </div>
        </div>
        <div className='w-full scale-y-125 z-0'>
          <img className='bg-cover z-0 transition duration-1000' src={images[currentImage]} alt='' />
        </div>
        <AiOutlineRight
          className='absolute right-10 top-96 z-30 text-white hover:scale-150 transition duration-300 cursor-pointer'
          size={40}
          onClick={handleNextClick}
        />
      </div>
    </section>
  );
};

export default Hero;
