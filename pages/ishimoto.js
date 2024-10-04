import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function IshimotoPage() {
  return (
    <div className="bg-white">
      <Head>
        <title>石本酒造 - Ishimoto Sake Brewery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">石本酒造</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Ishimoto Sake Brewery</h2>
          <p className="text-gray-700 mb-4">
            Ishimoto Sake Brewery, founded in 1860, has been crafting exceptional sake for over 160 years. 
            Located in Niigata Prefecture, known for its pristine water and high-quality rice, Ishimoto produces 
            some of Japan's finest sake.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Junmai Daiginjo', 'Tokubetsu Junmai', 'Nama Genshu'].map((product) => (
              <div key={product} className="border rounded-lg p-4">
                <div className="w-full h-48 relative mb-4">
                  <Image src={`/images/${product.toLowerCase().replace(' ', '-')}.jpg`} layout="fill" objectFit="cover" alt={product} />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{product}</h3>
                <a href="#" className="text-indigo-600 hover:text-indigo-800">Learn more</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}