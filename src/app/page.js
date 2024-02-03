"use client";
import { useState, useEffect } from 'react';
import { Header, ProductList, Tabs, PriceRange, NotFound } from '@/app/components/index'

export default function Home() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  // fetch API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Search in data
  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(searchQuery));
  }

  useEffect(() => {
    const categories = items.map(product => product.category);
    const uniqueCategories = ["All", ...new Set(categories)];
    setUniqueCategories(uniqueCategories);
  }, [items]);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeChange = event => {
    setSelectedPriceRange(event.target.value);
  };

  // Filter in Product using selection
  const filteredProducts = selectedCategory === 'All'
      ? items
      : items.filter(product => product.category === selectedCategory);


  // Filter in Product by price
  const filteredProductsByPrice =
    selectedPriceRange === 'All'
      ? filteredProducts
      : filteredProducts.filter(product => {
        const price = parseFloat(product.price);
        if (selectedPriceRange === 'less25') {
          return price < 25;
        } else if (selectedPriceRange === '25to50') {
          return price >= 25 && price < 50;
        } else {
          return price >= 50;
        }
      });

  // displayProducts data
  const displayProducts = searchQuery === '' ? filteredProductsByPrice : search(filteredProductsByPrice);

  return (
    <main className="main">
      <Header />
      <div className='container mt-5 pt-5'>
        <div className='col-md-12'>
          <div className='handleSearch d-flex'>
            <div className='search'>
              <label>Search by product name</label>
              <input type="text" className='form-control mt-2' placeholder="Search by name..." value={searchQuery} onChange={e => setSearchQuery(e.target.value.toLowerCase())} />
            </div>
            <Tabs onChange={handleCategoryChange} uniqueCategories={uniqueCategories} />
            <PriceRange value={selectedPriceRange} onChange={handlePriceRangeChange} />
          </div>
        </div>
        <div className="productList mt-5">
          {loading ? (
            <div>Wait while loading the products...</div>
          ) : (
            <>
              <div className='col-md-12'>
                <div className='badge rounded-pill bg-primary rounded-2 mb-5' role="alert">
                  <small className='text-capitalize'> count: <b>{displayProducts.length}</b></small>
                </div>
              </div>
              {displayProducts.length > 0 ? (
                <ProductList items={displayProducts} />
              ) : (
                <NotFound />
              )}
            </>
          )}

        </div>
      </div>
    </main>
  );
}