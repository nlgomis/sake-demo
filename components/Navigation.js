import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { colorPalettes } from '../styles/colorPalettes';

const Navigation = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentPalette, setCurrentPalette] = useState(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-background', colorPalettes[currentPalette].colors.background);
    document.documentElement.style.setProperty('--color-nav-background', colorPalettes[currentPalette].colors.navBackground);
    document.documentElement.style.setProperty('--color-primary', colorPalettes[currentPalette].colors.primary);
    document.documentElement.style.setProperty('--color-secondary', colorPalettes[currentPalette].colors.secondary);
    document.documentElement.style.setProperty('--color-accent', colorPalettes[currentPalette].colors.accent);
  }, [currentPalette]);

  const handlePaletteChange = (index) => {
    setCurrentPalette(index);
    localStorage.setItem('selectedPalette', index);
  };

  useEffect(() => {
    const savedPalette = localStorage.getItem('selectedPalette');
    if (savedPalette !== null) {
      setCurrentPalette(parseInt(savedPalette, 10));
    }
  }, []);

  return (
    <nav className="bg-nav-background text-background shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center">
                <img className="h-10 w-auto" src="/images/logo.png" alt="Logo" />
              </a>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink href="/intro" text="日本酒のイロハ" />
            <NavLink href="/ishimoto" text="石本酒造" />
            <NavLink href="/shop" text="Shop" />
            <div className="flex flex-wrap max-w-[128px] gap-1">
              {colorPalettes.map((palette, index) => (
                <button
                  key={palette.name}
                  aria-label={`Select ${palette.name} color palette`}
                  className={`w-5 h-5 rounded-full border-2 ${
                    currentPalette === index ? 'border-secondary' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: palette.colors.accent }}
                  onClick={() => handlePaletteChange(index)}
                />
              ))}
            </div>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="p-2 bg-background text-primary rounded-md"
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
            ? 'border-secondary text-secondary'
            : 'border-transparent text-background hover:border-background hover:text-secondary'
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Navigation;