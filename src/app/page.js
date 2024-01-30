"use client";
import { useState, useEffect } from 'react';
import { Header, ProductList } from '@/app/components/index'

import logo from "../../public/next.svg"

export default function Home() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log('data: ', data)
        setItems(data);
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
      setItems(data);
      setLoading(false);
    } else {
      const filteredProducts = items.filter(product =>
        product.name && product.name.toLowerCase().includes(query.toLowerCase())
      );
      setItems(filteredProducts);
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
          <div>Loading...</div>
        ) : (
          <>
            {searchQuery === '' ? (
              <ProductList items={items} />
            ) : (
              items.map(item => (
                <>
                  {loading ? (`<div>Loading...</div>`
                  ) : (

                    <ProductList key={item.id} items={items} />
                  )}
                </>
              ))
            )}
          </>
        )}
      </div>
    </main >
  );
}
