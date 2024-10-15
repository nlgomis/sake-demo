import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const products = [
  { id: 1, name: '獺祭 純米大吟醸 磨き二割三分', price: 8000, category: 'Daiginjo', image: 'dassai-23.jpg' },
  { id: 2, name: '久保田 千寿 純米吟醸', price: 3500, category: 'Ginjo', image: 'kubota-senju.jpg' },
  { id: 3, name: '八海山 特別本醸造', price: 2500, category: 'Honjozo', image: 'hakkaisan-tokubetsu.webp' },
  { id: 4, name: '白鶴 特撰 純米酒', price: 2000, category: 'Junmai', image: 'hakatsuru-tokusen.jpg' },
  { id: 5, name: '黒龍 純米大吟醸', price: 7000, category: 'Daiginjo', image: 'kokuryu-junmai-daiginjo.jpg' },
  { id: 6, name: '天狗舞 山廃仕込純米', price: 4000, category: 'Junmai', image: 'tengumai-yamahai.webp' },
  { id: 7, name: '〆張鶴 純米吟醸 gold', price: 4500, category: 'Ginjo', image: 'shimeharitsuru-gold.jpg' },
  { id: 8, name: '伯楽星 純米大吟醸', price: 6500, category: 'Daiginjo', image: 'hakurakusei-junmai-daiginjo.png' },
  { id: 9, name: '獺祭 純米大吟醸 スパークリング45', price: 5500, category: 'Sparkling', image: 'dassai-sparkling.jpg' },
  { id: 10, name: '久保田 碧寿 純米大吟醸', price: 7500, category: 'Daiginjo', image: 'kubota-hekiju.jpeg' },
  { id: 11, name: '八海山 純米吟醸', price: 3000, category: 'Ginjo', image: 'hakkaisan-junmai-ginjo.webp' },
  { id: 12, name: '天狗舞 山廃純米大吟醸', price: 6000, category: 'Daiginjo', image: 'tengumai-yamahai-daiginjo.jpg' },
  { id: 13, name: '〆張鶴 純米酒', price: 2500, category: 'Junmai', image: 'shimeharitsuru-junmai.webp' },
  // Ishimoto Sake Brewery items
  { id: 14, name: '浹（amane', price: 3795, category: 'Ginjo', image: 'ishimoto-amane.webp' },
  { id: 15, name: '灑', price: 3795, category: 'Ginjo', image: 'ishimoto-sai.webp' },
  { id: 16, name: '超特撰', price: 13200, category: 'Daiginjo', image: 'ishimoto-chotokusen.webp' },
  { id: 17, name: '特撰', price: 4400, category: 'Ginjo', image: 'ishimoto-tokusen.webp' },
  { id: 18, name: '澵', price: 4235, category: 'Ginjo', image: 'ishimoto-so.webp' },
  { id: 19, name: '別撰', price: 3036, category: 'Ginjo', image: 'ishimoto-bessen.webp' },
  { id: 20, name: '金無垢', price: 11000, category: 'Daiginjo', image: 'ishimoto-kinmuku.webp' },
];

const categories = ['All', 'Daiginjo', 'Ginjo', 'Junmai', 'Honjozo', 'Sparkling'];

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
    <div className="bg-background text-primary">
      <Head>
        <title>日本酒ショップ - 厳選された銘酒をお届け</title>
        <meta name="description" content="獺祭、久保田、八海山、石本酒造など、日本各地の銘酒を取り揃えています。純米大吟醸から本醸造まで、幅広い種類の日本酒をお楽しみいただけます。" />
      </Head>

      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif text-primary mb-2">日本酒ショップ</h1>
          <p className="text-secondary font-medium">厳選された銘酒をお届けします</p>
        </header>

        <div className="mb-8">
          <input
            type="text"
            placeholder="商品を検索..."
            className="w-full p-2 border border-primary rounded-sm bg-background text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-8 flex flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`m-1 px-4 py-2 rounded-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-accent text-background'
                  : 'bg-background text-primary border border-primary hover:bg-primary hover:text-background'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border border-primary rounded-sm p-4 bg-background">
              <div className="w-full h-48 relative mb-4">
                <Image 
                  src={`/images/${product.image}`}
                  layout="fill" 
                  objectFit="contain" 
                  alt={product.name} 
                  className="rounded-sm"
                />
              </div>
              <h3 className="text-lg font-medium text-primary mb-1">{product.name}</h3>
              <p className="text-secondary mb-3">¥{product.price.toLocaleString()}</p>
              <button className="w-full bg-accent text-background px-4 py-2 rounded-sm hover:bg-secondary transition-colors duration-200">
                カートに追加
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}