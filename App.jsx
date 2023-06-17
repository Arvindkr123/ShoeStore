import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import CartContextProvider from './Store/CartContextProvider'

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
