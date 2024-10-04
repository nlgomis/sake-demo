import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Junmai Daiginjo', price: 50, category: 'Daiginjo' },
  { id: 2, name: 'Tokubetsu Junmai', price: 35, category: 'Junmai' },
  { id: 3, name: 'Nama Genshu', price: 40, category: 'Nama' },
  // Add more products as needed
];

const categories = ['All', 'Daiginjo', 'Junmai', 'Nama'];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
    );
  });

  return (
    <div className="bg-white">
      <Head>
        <title>Shop - Buy Sake Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shop</h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`mr-2 px-4 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <div className="w-full h-48 relative mb-4">
                <Image src={`/images/${product.name.toLowerCase().replace(' ', '-')}.jpg`} layout="fill" objectFit="cover" alt={product.name} />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}