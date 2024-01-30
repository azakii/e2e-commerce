import ProductItem from "../productItem/ProductItem";
import { Image } from 'next/image';

const ProductList = ({ products, items }) => {
    return (
        <div className="container">
            <div className="item-list row">
                {items && items.map(item => {
                        return (
                            <>
                                <div className="col-md-4"><ProductItem key={item.id} {...item} /></div>
                            </>
                        )
                    }
                )}
            </div> 
        </div>
    )
}

export default ProductList;



// {items.map(item => {
//     return (
//         <div key={item.id} className="col-md-4">
//             <div className="item">
//                 <h3>{item.title}</h3>
//                 {/* <Image src={item.image} width={200} height={200} alt={`aaa`} /> */}
//                 {/* <small>{category}</small>
//                 <p>{description}</p>
//                 <p>{price}</p>
//                 <button>add to cart</button> */}
//             </div>
//         </div>
//     );
// })}