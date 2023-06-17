import React, { useContext } from 'react'
import { CartContext } from '../Store/CartContextProvider'

const Cart = () => {
    const cartCtx = useContext(CartContext);
    return (
        <div className='flex justify-center flex-wrap mt-6 bg-slate-400 p-5 gap-5'>
            {/* description
                    id
                    name
                    price
                    quantity
                    selectedSize */}
            {
                cartCtx.shoes.map((shoe) => {
                    return <div key={shoe.id} className='shadow-lg shadow-yellow-50  bg-zinc-200 p-16'>
                        <h1 className='text-center text-2xl'>{shoe.name}</h1>
                        <p className='mt-3 text-gray-700'>{shoe.description}</p>
                        <div className='flex justify-around mt-3'>
                            <p>RS {shoe.price}</p>
                            <p className='font-bold'>{shoe.selectedSize}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Cart
