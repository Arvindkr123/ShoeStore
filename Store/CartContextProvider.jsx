import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [shoes, setShoes] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchCartItems();
    }, [shoes]);

    useEffect(() => {
        calculateTotalPrice();
    }, [shoes]);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('https://crudcrud.com/api/e93366e794d44abc96b4ef406a668877/CartItems');
            setShoes(response.data);
        } catch (error) {
            console.log('Error fetching cart items:', error);
        }
    };

    const addToCart = async (shoe) => {
        try {
            await axios.post('https://crudcrud.com/api/e93366e794d44abc96b4ef406a668877/CartItems', shoe);
            setShoes([...shoes, shoe]);
        } catch (error) {
            console.log('Error adding item to cart:', error);
        }
    };

    const calculateTotalPrice = () => {
        const totalPrice = shoes.reduce((acc, shoe) => acc + (shoe.price * shoe.quantity), 0);
        setTotalPrice(totalPrice);
    };

    return (
        <CartContext.Provider value={{ shoes, addToCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
