import ProductItem from "../productItem/ProductItem";

const ProductList = ({ items }) => {
  return (
      <div className="item-list row">
        {items &&
          items.map((item) => {
            // console.log(item)
            return (
                <div className="col-md-4" key={item.id}>
                  <ProductItem item {...item} />
                </div>
            );
          })}
    </div>
  );
};

export default ProductList;
