import React from 'react';
import Head from 'next/head';

export default function IntroPage() {
  return (
    <div className="bg-white">
      <Head>
        <title>日本酒のイロハ - 日本酒入門</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">日本酒のイロハ</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">日本酒とは？</h2>
          <p className="text-gray-700 mb-4">
            日本酒（にほんしゅ）は、発酵させたお米から作られるアルコール飲料です。
            1000年以上にわたり、日本文化の重要な一部となっています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">日本酒の種類</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>純米酒：米のみで作られた日本酒</li>
            <li>吟醸酒：高級な日本酒</li>
            <li>大吟醸酒：超高級な日本酒</li>
            <li>生酒：非加熱の日本酒</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">日本酒の楽しみ方</h2>
          <p className="text-gray-700 mb-4">
            日本酒は、種類や個人の好みによって、冷やや常温、またはぬる燗で楽しむことができます。
            多くの場合、お猪口（おちょこ）と呼ばれる小さな杯で提供されますが、香りをより楽しむためにワイングラスで飲むこともあります。
          </p>
        </section>
      </main>
    </div>
  );
}