import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function IshimotoPage() {
  return (
    <div className="bg-background text-primary">
      <Head>
        <title>石本酒造 - 伝統の日本酒</title>
        <meta name="description" content="1907年創業、新潟の石本酒造。伝統と革新が織りなす日本酒の世界。" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-serif text-primary mb-2">石本酒造</h1>
          <p className="text-secondary font-medium">1907年創業 - 新潟県新潟市</p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6 border-b border-primary pb-2">伝統と革新</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p>
                石本酒造は1907年（明治40年）、新潟の亀田地域で創業しました。
                豊かな水と厳しい農作業に従事する人々のために、「疲れを癒し、明日への活力となる酒」を目指して始まりました。
              </p>
              <p>
                初代蔵元の石本龍蔵は、日々の料理を引き立て、食の味わいと心を豊かにする酒造りに励みました。
                そこから「淡麗でありながら力強い味わい、飲み口の良さ」という越乃寒梅の特徴が生まれました。
              </p>
            </div>
            <div className="relative h-64 md:h-80">
              <Image 
                src="/images/ishimoto-brewery.jpg" 
                alt="石本酒造の外観"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6 border-b border-primary pb-2">石本酒造の哲学</h2>
          <div className="space-y-4">
            <p>
              石本龍蔵は良い酒を造るために原料米にこだわり、新潟県産の「亀の尾」という
              優良米を選びました。自分の舌で確かめた「旨い」と思う酒だけを造り続ける姿勢が、
              石本酒造の伝統となっています。
            </p>
            <p>
              時代と共に変化する消費者の嗜好に応えつつ、伝統の技と新しい挑戦のバランスを
              取りながら、品質の高い日本酒を提供し続けています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-6 border-b border-primary pb-2">代表銘柄</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['越乃寒梅', '灑', '石本正宗'].map((brand) => (
              <div key={brand} className="text-center">
                <h3 className="text-xl font-medium text-secondary mb-2">{brand}</h3>
                <p className="text-sm">石本酒造が誇る銘酒</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}