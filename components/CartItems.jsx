
import React, { useContext } from 'react'
import { CartContext } from '../Store/CartContextProvider'

const CartItems = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {
        cartCtx.shoes.length > 0 ? <>

        </> : <>
          <h1 className='bg-black text-5xl text-red-600'>Cart is Empty</h1>
        </>
    }
    </div>  
  )
}

export  default CartItems; 
