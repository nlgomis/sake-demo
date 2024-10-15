import React from 'react';
import Head from 'next/head';

export default function IntroPage() {
  return (
    <div className="bg-background text-primary">
      <Head>
        <title>日本酒のイロハ - 日本酒入門</title>
        <meta name="description" content="日本酒の基礎知識、種類、楽しみ方をわかりやすく解説します。" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-serif text-primary mb-2">日本酒のイロハ</h1>
          <p className="text-secondary font-medium">日本酒入門 - 基礎から楽しみ方まで</p>
        </header>
        
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6 border-b border-primary pb-2">日本酒とは？</h2>
          <div className="space-y-4">
            <p>
              日本酒（にほんしゅ）は、発酵させたお米から作られるアルコール飲料です。
              1000年以上にわたり、日本文化の重要な一部となっています。
            </p>
            <p>
              日本の気候風土に育まれた米と水、そして長年培われてきた醸造技術が融合して生まれる日本酒は、
              その奥深い味わいと香りで世界中の人々を魅了しています。
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6 border-b border-primary pb-2">日本酒の種類</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-secondary mb-2">純米酒</h3>
              <p>米と米麹のみで醸された日本酒。純粋な米の旨味が楽しめます。</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-secondary mb-2">吟醸酒</h3>
              <p>米を高度に精米し、低温でじっくり醸された香り高い日本酒。</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-secondary mb-2">大吟醸酒</h3>
              <p>さらに高度に精米し、丁寧に醸造された最高級の日本酒。</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-secondary mb-2">生酒</h3>
              <p>火入れ（殺菌）をしていない、フレッシュな味わいの日本酒。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-6 border-b border-primary pb-2">日本酒の楽しみ方</h2>
          <div className="space-y-4">
            <p>
              日本酒は、種類や個人の好みによって、冷やや常温、またはぬる燗で楽しむことができます。
              多くの場合、お猪口（おちょこ）と呼ばれる小さな杯で提供されますが、香りをより楽しむためにワイングラスで飲むこともあります。
            </p>
            <p>
              料理とのペアリングも日本酒の楽しみ方の一つです。和食はもちろん、様々な料理と合わせることで、
              新たな味わいの発見があるでしょう。季節や場面に応じて、様々な日本酒を試してみてください。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}