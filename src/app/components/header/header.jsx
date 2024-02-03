// Header.js

"use client";
import { LuShoppingBag } from 'react-icons/lu';
import CartContext from '@/app/CartContext';
import { useContext } from 'react';
import Link from 'next/link';

const Header = () => {
    const {products}  = useContext(CartContext);
    // console.log(products)
    return (
        <div className='w-100 d-flex justify-content-between border-bottom fixed-top bg-white px-4 py-4 brand'>
             <Link href={`/`}><span>Logo</span></Link>
            <Link href={`checkout`} className='outline bg-transparent border-0'>
                <span className='white-text'><LuShoppingBag />
                <span className='badge rounded-pill bg-danger white-text'>{products.length}</span></span>
            </Link>
        </div>
    );
}

export default Header;
