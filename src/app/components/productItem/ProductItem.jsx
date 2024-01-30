import React from 'react';
import Image from 'next/image';


const ProductItem = (item) => {
    return (
        <div className="item border p-5 mb-4">
            <Image src={item.image} className='rounded-2 bg-white object-fit-contain' width={200} height={200} alt={`aaa`} />

            <div className="mt-4">
                <span className='badge text-bg-success'>{item.category}</span>
                <h5>{item.title.slice(0,20)}</h5>
                <p className='small'>{item.description.slice(0,80)}</p>
                <p>{item.price}</p>
                <button className='btn btn-warning'>add to cart</button> 
            </div>
        </div>
    );
}

export default ProductItem;
