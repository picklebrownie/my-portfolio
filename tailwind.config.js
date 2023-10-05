/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-purple-100',
    'text-slate-50',
    'text-red-800',
    'text-red-900',
    'hover:text-orange-600',
  ],
  theme: {
    extend: {
      dropShadow: {
        'purple-600': '0 1px 1px rgb(124 58 237 / .5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hanging-plant-mobile': "url('/hanging-plant-mobile.png')",
        'hanging-plant': "url('/hanging-plant.png')",
        'anderson-tower': "url('/anderson-tower.jpg')",
        'anderson-tower-mobile': "url('/anderson-tower-mobile.jpg')",
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        antic: ['Antic', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        marquee2: 'marquee2 42s linear infinite',
        marquee3: 'marquee3 42s linear infinite',
        marquee4: 'marquee4 42s linear infinite',
        fadeIn: 'fadeIn 3s ease-in forwards',
        variants: {
          animation: ['motion-safe'],
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
