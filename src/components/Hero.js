import React from 'react';
// import images
import WomanImg from '../img/woman_hero.png';
// import link
import {Link} from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* text */}
      <div className='flex flex-col justify-center'>
        {/* pretitle */}
        {/* <div className='font-semibold flex items-center uppercase'>
        <div className='w-10 h-[2px] bg-red-500 mr-3'>
          
          </div>New Trend
        </div> */}
        {/* title */}
        <AiOutlineLeft className='absolute left-3 text-white hover:scale-150 transition duration-300 cursor-pointer' size={40}/>
        <h1 className='text-[50px] leading-[1.1] font-light mb-4'>
          BALENCIAGA <br />
        <span className='font-semibold'>VINTAGE COLLECTION SP23</span>
         </h1>
         <Link to={'/'} className='self-start uppercase border-b-2 border-primary'>
         <button className='bg-white py-2 px-8'>BROWSE LOOKBOOK</button>
         </Link>
        </div>
      {/* image */}
      <div className='hidden lg:block'>
        <img className='bg-cover' src={WomanImg} alt="" />
      </div>
      <AiOutlineRight className='absolute right-3 top-96 text-white hover:scale-150 transition duration-300 cursor-pointer' size={40}/>
      </div>
  </section>;
};

export default Hero;
