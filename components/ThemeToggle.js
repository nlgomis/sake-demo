import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
    setIsDark(!isDark)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-background-alt-light dark:bg-background-alt-dark"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? '🌙' : '☀️'}
    </motion.button>
  )
}