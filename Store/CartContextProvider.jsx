import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [shoes, setShoes] = useState([]);
    const addToCart = (shoe) => {
        setShoes([...shoes,shoe]);
    }
    console.log(shoes)

    return (
        <CartContext.Provider value={{ shoes, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
