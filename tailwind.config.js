module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#EDE9DE',
        navy: '#00053A',
        burgundy: '#800020',
        'burgundy-light': '#A0304D',
        gold: '#FFD700',
        sage: '#87AE73',
        'light-blue': '#ADD8E6',
        'deep-red': '#8B0000',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#EDE9DE',
        'primary-dark': '#1A1A1A',  // Dark theme background
      }),
      textColor: {
        'primary': '#00053A',
        'primary-dark': '#EDE9DE',  // Dark theme text
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}