module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'nav-background': 'var(--color-nav-background)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-primary)',  // Dark theme background
      }),
      textColor: {
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-background)',  // Dark theme text
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}