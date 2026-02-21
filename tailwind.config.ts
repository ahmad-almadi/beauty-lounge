import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f8',
          100: '#fbe8f1',
          200: '#f9d1e5',
          300: '#f5aad0',
          400: '#ef7ab3',
          500: '#e54d96',
          600: '#d12f77',
          700: '#b3205f',
          800: '#941d4f',
          900: '#7c1c44',
        },
        lilac: {
          50: '#faf7fd',
          100: '#f3edfa',
          200: '#e9ddf6',
          300: '#d8c2ee',
          400: '#c19ce3',
          500: '#a876d5',
          600: '#8f57c3',
          700: '#7844a8',
          800: '#653a8a',
          900: '#543371',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#ede6d9',
          400: '#e0d3bf',
          500: '#d1bea0',
          600: '#bfa47f',
          700: '#a88a66',
          800: '#8b7256',
          900: '#735f49',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(135deg, #fdf4f8 0%, #faf7fd 50%, #fdfcfb 100%)',
        'gradient-primary': 'linear-gradient(135deg, #f9d1e5 0%, #e9ddf6 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
