"use client";
import { useState, useEffect } from 'react';
import { Header, ProductList } from '@/app/components/index'

import logo from "../../public/next.svg"

export default function Home() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [productItems, setProductItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log('data: ', data)
        setItems(data);
        setProductItems(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setItems(productItems);
      setLoading(false);
    } else {
      setLoading(true);
      console.log("productItems:", productItems);
      const filteredProducts = productItems.filter(product =>
        product.name && product.name.includes(query.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
      setLoading(false);
    }
  };

  return (
    <main className="main">
      <div className='handleSearch'>
        <Header src={logo} />
      </div>
      <div className='handleSearch w-50'>
        <input type="text" className='form-control' placeholder="Search by name..." value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div className="productList mt-5">
        {loading ? (
          <div>Wait while loading the products...</div>
        ) : (
          <>
            {searchQuery === '' ? (
                <ProductList items={items} />
            ) : (
              filteredProducts.map(filteredProduct  => (
                <ProductList key={filteredProduct.id} items={filteredProduct} />
              ))
            )}
          </>
        )}
      </div>
    </main >
  );
}
