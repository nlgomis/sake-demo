import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navigation = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="bg-navy text-cream dark:bg-gray-800 dark:text-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
              </a>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink href="/intro" text="日本酒のイロハ" />
            <NavLink href="/ishimoto" text="石本酒造" />
            <NavLink href="/shop" text="Shop" />
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="p-2 bg-cream text-navy dark:bg-gray-600 dark:text-white rounded-md"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && (
                theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
          isActive
            ? 'border-gold text-gold'
            : 'border-transparent text-cream hover:border-cream hover:text-gold'
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Navigation;