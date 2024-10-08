import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function IshimotoPage() {
  return (
    <div className="bg-white">
      <Head>
        <title>石本酒造 - 石本酒造蔵元</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">石本酒造</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">石本酒造について</h2>
          <p className="text-gray-700 mb-4">
            石本酒造は1907年（明治40年）に創業しました。水が豊かでありながら生産性の低い低湿地帯にある亀田地域で、
            過酷な農作業に従事する人々のために「疲れを癒し、明日への活力となる酒」を造ることを目指して始まりました。
          </p>
          <p className="text-gray-700 mb-4">
            初代蔵元の石本龍蔵は、日々の料理を引き立て、食の味わいと心を豊かにする酒造りに励みました。
            そこから「淡麗でありながら力強い味わい、飲み口の良さ」という越乃寒梅の特徴が生まれました。
          </p>
          <p className="text-gray-700 mb-4">
            当時、地方には指導機関がなく、高品質の酒を醸す技術が十分に普及していませんでしたが、
            石本龍蔵は良い酒を造るために原料米にこだわり、新潟県北蒲原郡加治川村（現･新発田市）産の「亀の尾」という
            優良米を選びました。自分の舌で確かめた「旨い」と思う酒だけを造り続ける姿勢が、石本酒造の伝統となっています。
          </p>
        </section>

        
      </main>
    </div>
  );
}