import ProductItem from "../productItem/ProductItem";

const ProductList = ({ items }) => {
  return (
    <div className="container">
      <div className="item-list row">
        {items &&
          items.map((item, i) => {
            return (
              <>
                <div className="col-md-4" key={i}>
                  <ProductItem {...item} />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
