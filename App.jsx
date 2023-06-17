import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CartContextProvider from './Store/CartContextProvider'
import CartItems from './components/cartItems'

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<CartItems />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
