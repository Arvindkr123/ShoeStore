import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Store/CartContextProvider';

const Navbar = () => {
    const cartCtx = useContext(CartContext);
    return (
        <div className='bg-black text-white'>
            <div className='max-w-[1280px] mx-auto flex justify-between items-center p-2'>
                <div className='pl-20 text-2xl'>NIKE</div>
                <ul className='flex justify-center items-center gap-4'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/cart'>
                        <li>Cart Items ({cartCtx.shoes.length})</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
