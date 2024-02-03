import Image from 'next/image';
import { useContext } from 'react';
import CartContext from '@/app/CartContext';

const Cart = () => {

  const {products}  = useContext(CartContext);
  return (
    <div>

          <div className="products">
              <div className="row">
                    {products &&
                        products.map((product, i) => (
                          <div className="col-md-4 mb-4" key={i}>
                              <div className="border p-4">
                                  <div className='bg-white text-center py-4'>
                                      <Image src={product.image} className='rounded-2 bg-white object-fit-contain' width={200} height={200} alt={`aaa`} />
                                  </div>
                                  <div className="mt-4 text-center">
                                      <h6>{product.title.slice(0,20)}</h6>
                                      <p className='fw-100'> Price: <b>$ {product.price}</b></p>
                                  </div>
                              </div>
                          </div>
                        )
                    )}
              </div>
          </div>
    </div>
  );
};

export default Cart;
