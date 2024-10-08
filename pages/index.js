import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>酒発見 - あなたの完璧な日本酒を見つけよう</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl w-full text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-navy dark:text-cream mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           自分好みの日本酒を見つけよう
          </motion.h1>
          
        {/*  <motion.p 
            className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-5 md:mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            日本の米から作られるお酒の静かな探索に出かけましょう。
            あなたにぴったりの日本酒を見つけ、何世紀も続く伝統に浸りましょう。
          </motion.p>
           */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/test">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-burgundy hover:bg-burgundy-light md:py-4 md:text-lg md:px-10 transition duration-300">
                  診断を始める
                </a>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/intro">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-navy dark:border-cream text-base font-medium rounded-md text-navy dark:text-cream bg-transparent hover:bg-navy hover:text-cream dark:hover:bg-cream dark:hover:text-navy md:py-4 md:text-lg md:px-10 transition duration-300">
                  日本酒について学ぶ
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      <motion.footer 
        className="py-4 text-center text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>© 2023 酒発見. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}