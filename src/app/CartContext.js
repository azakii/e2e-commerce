"use client";
import { createContext, useState, useEffect } from 'react';

const CartContext = createContext([]);

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Load cart data from local storage on component mount
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        if (storedCart.length > 0) {
            setProducts(storedCart);
        }
    }, []);

    useEffect(() => {
        // Save cart data to local storage whenever the products state changes
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products]);

    const addToCart = (image, title, price) => {
        setProducts((prevState) => [...prevState, { image, title, price }]);
    }

    return (
        <CartContext.Provider value={{ products, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
