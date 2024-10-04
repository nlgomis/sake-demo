import React from 'react';
import Head from 'next/head';

export default function IntroPage() {
  return (
    <div className="bg-white">
      <Head>
        <title>日本酒のイロハ - Sake Introduction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">日本酒のイロハ</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Sake?</h2>
          <p className="text-gray-700 mb-4">
            Sake, also known as 日本酒 (nihonshu) in Japanese, is an alcoholic beverage made from fermented rice. 
            It has been an integral part of Japanese culture for over 1,000 years.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Sake</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Junmai: Pure rice sake</li>
            <li>Ginjo: Premium sake</li>
            <li>Daiginjo: Super premium sake</li>
            <li>Namazake: Unpasteurized sake</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Enjoy Sake</h2>
          <p className="text-gray-700 mb-4">
            Sake can be enjoyed chilled, at room temperature, or warm, depending on the type and personal preference. 
            It's often served in small cups called ochoko, but can also be served in wine glasses to better appreciate its aroma.
          </p>
        </section>
      </main>
    </div>
  );
}