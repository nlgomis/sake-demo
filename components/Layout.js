import Head from 'next/head'
import Navigation from './Navigation'

export default function Layout({ children, title = 'Sake Discovery' }) {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900 text-navy dark:text-cream">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}