import React, { useContext, useState } from 'react';
import { shoes } from '../data';
import { CartContext } from '../Store/CartContextProvider';

const Home = () => {
    const cartCtx = useContext(CartContext);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [shoesData, setShoesData] = useState(shoes);

    const handleAddToCart = (shoe) => {
        const selectedSize = selectedSizes[shoe.id];
        if (selectedSize) {
            const updatedShoe = { ...shoe, selectedSize };
            cartCtx.addToCart(updatedShoe);
            const updatedQuantity = shoe.quantity - 1;
            const updatedShoes = shoesData.map((s) => (s.id === shoe.id ? { ...s, quantity: updatedQuantity } : s));
            setShoesData(updatedShoes);
        } else {
            console.log('Please select a size.');
        }
    };

    const handleSelectSize = (shoeId, size) => {
        setSelectedSizes((prevSizes) => ({ ...prevSizes, [shoeId]: size }));
    };

    return (
        <div className='flex mt-3 justify-center items-center'>
            {shoesData.map((shoe) => (
                <div
                    className='shadow-lg w-[300px] m-auto p-6 rounded-sm hover:scale-105 duration-200 ease-out'
                    key={shoe.id}
                >
                    <h1 className='text-center text-xl font-bold'>{shoe.name}</h1>
                    <p className='text-green-700 text-justify mt-3'>{shoe.description}</p>
                    <div className='bg-slate-100 mt-3 flex justify-around items-center rounded-md p-2'>
                        <p className='font-semibold text-center'>Sizes:</p>
                        <select
                            className='bg-slate-800 rounded-md px-2 py-3 text-white'
                            value={selectedSizes[shoe.id] || ''}
                            onChange={(e) => handleSelectSize(shoe.id, e.target.value)}
                        >
                            <option value=''>Select Size</option>
                            {shoe.sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className='mt-3 text-xl'>RS: {shoe.price}</p>
                    <p className='mt-2'>Quantity available: {shoe.quantity}</p>
                    <button
                        className={`bg-purple-800 p-2 text-xl text-white rounded-md mt-2 cursor-pointer ${shoe.quantity === 0 ? 'bg-red-500' : ''
                            }`}
                        onClick={() => handleAddToCart(shoe)}
                        disabled={shoe.quantity === 0}
                    >
                        Add To Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Home;
