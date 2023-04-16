import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsCircleFill, BsCircle } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { VscCircleFilled, VscCircleLarge } from 'react-icons/vsc';

const Product = ({product}) => {
  const { addToCart } = useContext(CartContext);
  const {id, image, category, title, price} = product;
  
  
  return( 
    <div className=''>
      <div className='border border-[black] z-5 h-[600px] mb-0 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center'>
  <div className='w-full mx-auto flex justify-center items-center relative'>
    <AiOutlineLeft className='relative left-5 z-10 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-150 transition duration-150' size={40} />
    <Link to={`/product/${id}`}>
      <img className='max-h-[1220px] group-hover:scale-110 z-5 transition duration-300 cursor-pointer' src={image} alt=''  />
    </Link> 
    <AiOutlineRight className='relative right-5 z-10 cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-150 transition duration-150' size={40} />
    <div className='mx-auto'>
      <BsCircleFill className='absolute items-center top-[520px] right-60 lg:right-44 opacity-0 group-hover:opacity-100 transition duration-300' size={14}/>
      <BsCircle className='absolute top-[520px] right-56 lg:right-40 opacity-0 group-hover:opacity-100 transition duration-300' size={14}/>
      <BsCircle className='absolute top-[520px] right-52 lg:right-36 opacity-0 group-hover:opacity-100 transition duration-300' size={14}/>
    </div>
  </div>
</div>

        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className='text-center z-1'>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
