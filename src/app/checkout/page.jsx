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
                    <>
                        <div className='badge rounded-pill bg-primary rounded-2 mb-5' role="alert">
                            <small className='text-capitalize'> count: <b>{products.length}</b></small>
                        </div>

                        <Cart />
                    </>
                )}
            </div>
        </div>
    );
}

export default CheckOut;
