"use client";
import { useState, useEffect } from 'react';
import { Header, ProductList, Tabs } from '@/app/components/index'

import logo from "../../public/next.svg"

export default function Home() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        // console.log('data: ', data)
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(items.filter(item => item.title.toLowerCase().includes(searchQuery)))

  const search = (data) => {
    return (
      data.filter(
        (item) => {
          return (
            item.title.toLowerCase().includes(searchQuery)
          )
        }
      )
    )
  }

  //catFilter
  const catFilter = (data) => {
    console.log(data)
    return (
      data.filter(
        (item) => {
          const categoryMatches = item.category && item.category.toLowerCase();
          return categoryMatches
        })
    )
  };


  return (
    <main className="main">
      <div className='handleSearch'>
        <Header src={logo} />
      </div>
      <div className='handleSearch w-50'>
        <input type="text" className='form-control' placeholder="Search by name..." value={searchQuery} onChange={e => setSearchQuery(e.target.value.toLowerCase())} />
      </div>
      <div className="productList mt-5">

        {loading ? (
          <div>Wait while loading the products...</div>
        ) : (
          <>
            {searchQuery === '' ? (
              <>
                <p> count: {items.length}</p>
                {catFilter(items).map((cat) => (
                  <>
                    <Tabs item={catFilter(cat)} />
                  </>
                ))}
                <ProductList items={items} />
              </>
            ) : (
              <>

                {search(items).length > 0 ? (
                  <>
                    <p> count: {search(items).length}</p>
                    <ProductList items={search(items)} />
                  </>
                ) : (
                  <> <p>No matching products found.</p></>
                )}
              </>
            )}
          </>
        )}
      </div>
    </main >
  );
}
