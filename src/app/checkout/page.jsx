"use client";
import { Header, Cart, CartEmpty } from '@/app/components/index';
import { useContext } from 'react';
import CartContext from '@/app/CartContext';

const CheckOut = () => {
    const {products}  = useContext(CartContext);

    return (
        <div>
            <Header />
            <div className="container mt-5 pt-5">
                <h2 className="mb-5">Shopping Cart</h2>
                {products.length <= 0 ? (
                    <CartEmpty />
                ):(
                    <Cart />
                )}
            </div>
        </div>
    );
}

export default CheckOut;
