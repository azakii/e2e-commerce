import Image from 'next/image';
import CartContext from '@/app/CartContext';
import { useContext } from 'react';


const ProductItem = (item) => {
    const {addToCart} = useContext(CartContext)
    return (
        <div className="item border p-2 mb-4 rounded-1">
            <div className='bg-white text-center py-4'>
                <Image src={item.image} className='rounded-2 bg-white object-fit-contain' width={200} height={200} alt={`aaa`} />
            </div>
            <div className="mt-4">
                <span className='badge bg-warning text-dark rounded-2 mb-3'>{item.category}</span>
                <h6>{item.title.slice(0,20)}</h6>
                <p className='small'>{item.description.slice(0,40)}</p>
                <p className='fw-100'> Price: <b>$ {item.price}</b></p>
                <button className='btn btn-primary w-100 rounded-2' onClick={() => addToCart(item.image, item.title, item.price)}>add to cart</button> 
            </div>
        </div>
    );
}

export default ProductItem;
