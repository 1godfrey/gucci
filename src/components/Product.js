import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsCircleFill, BsCircle } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { AiOutlineLeft, AiOutlineRight, AiOutlineHeart, AiFillHeart, AiFillFolder } from 'react-icons/ai';
import { VscCircleFilled, VscCircleLarge } from 'react-icons/vsc';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

    // Add a state to toggle the heart icons
    const [liked, setLiked] = useState(false);
  
    // Toggle the state when heart icon is clicked
    const handleLikeToggle = () => {
      setLiked(!liked);
    }

  return (
    <div className=''>
      <div className='border border-[white] z-5 h-[492px] mb-0 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center'>
          <div className='w-full mx-auto flex justify-center items-center relative'>
            {/* <Link to={`/product/${id}`}> */}
              <img className='max-h-[1220px] scale-y-150 z-5 transition duration-300' src={image} alt='' />
            {/* </Link> */}
          </div>
        </div>

        <div className='absolute top-2 right-2 p-2 flex flex-col items-center justify-center gap-y-2 transition-all duration-300'>

        
        <button onClick={() => {addToCart(product, id); handleLikeToggle()}}>
            <div className='flex justify-center items-center text-black w-12 h-12 relative'>
            {liked ? (
                <AiFillHeart size={20} className='absolute text-3xl z-15 opacity-100' />
              ) : (
                <AiOutlineHeart size={20} className='absolute text-3xl opacity-100' />
              )}
            </div>
          </button>
        </div>

        <div className='relative -top-16 text-center z-1 opacity-0 group-hover:opacity-100 transition duration-300'>
          <Link to={`/product/${id}`}>
            <h2 className='mb-1'>{title}</h2>
          </Link>
          <div className=''>$ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
