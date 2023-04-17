import React, { useContext, useEffect, useState } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
//import icons
import { BsBag } from 'react-icons/bs';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../img/logo.svg';
import {AiOutlineSearch} from 'react-icons/ai';
import gucci_logo from '../img/gucci_logo.png';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
<header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
  <div className='container mx-auto flex flex-row items-center justify-between h-full'>
    {/* Logo */}
    <div className={`${isActive ? 'visible' : 'invisible'}`}>
      <div className='flex flex-row z-30 items-center'>
        <AiOutlineSearch className='cursor-pointer hover:scale-125 transition duration-300' size={30}/>
        <div className='absolute flex flex-row z-30 ml-12 text-black '>
          <div className='cursor-pointer'>GIFTS</div>
          <div className='ml-4 cursor-pointer flex'>WHAT'S NEW</div>
          <div className='ml-4 cursor-pointer'>HANDBAGS</div>
          <div className='ml-4 cursor-pointer'>WOMEN</div>
          <div className='ml-4 cursor-pointer'>MEN</div>
          <div className='ml-4 cursor-pointer'>CHILDREN</div>
          <div className='ml-80 lg:opacity-0 xl:opacity-100 cursor-pointer'>JEWELRY & WATCHES</div>
          <div className='ml-4 lg:opacity-0 xl:opacity-100 cursor-pointer'>DECOR & LIFESTYLE</div>
          <div className='ml-4 lg:opacity-0 xl:opacity-100 cursor-pointer'>BEAUTY</div>
          <div className='ml-4 lg:opacity-0 xl:opacity-100 font-bold text-green-300 cursor-pointer'>VAULT</div>
          </div>
      </div>
    </div>
    <Link to={'/'}>
      <div className={`${isActive ? 'visible' : 'invisible'} text-[10px] lg:opacity-0 xl:opacity-100`}>
        <img src={gucci_logo} alt='' className='text-white scale-75'/>
      </div>
    </Link>
    {/* cart */}
    <div onClick={() => setIsOpen(!isOpen)} className={`${isActive ? 'visible' : 'invisible'} cursor-pointer flex relative hover:scale-125 transition duration-300`}>
      <BsBag className='text-2xl' />
      <div className={`${isActive ? 'visible' : 'invisible'} bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center`}>
        {itemAmount}
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
