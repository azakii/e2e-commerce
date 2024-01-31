"use client";
import { useState, useEffect } from 'react';
import { Header, ProductList, Tabs } from '@/app/components/index'

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
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Flatten and deduplicate categories from products
    const categories = items.map(product => product.category);
    const uniqueCategories = ["All", ...new Set(categories)]; // Include 'All' option
    console.log(uniqueCategories);
    setUniqueCategories(uniqueCategories);
  }, [items]);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };


  const filteredProducts =
    selectedCategory === 'All'
      ? items
      : items.filter(product => product.categories.includes(selectedCategory));

console.log(filteredProducts)
  return (
    <main className="main">
      <div className='handleSearch'>
        <Header src={logo} />
      </div>
      <div className='handleSearch w-50'>
        <input type="text" className='form-control' placeholder="Search by name..." value={searchQuery} onChange={e => setSearchQuery(e.target.value.toLowerCase())} />
      </div>
      <div className="productList mt-5">
        <Tabs items={items} onChange={handleCategoryChange} uniqueCategories= {uniqueCategories} />

        {loading ? (
          <div>Wait while loading the products...</div>
        ) : (
          <>
            {searchQuery === '' || filteredProducts.length > 0 ? (
              <>
                <p> count: {items.length}</p>
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
