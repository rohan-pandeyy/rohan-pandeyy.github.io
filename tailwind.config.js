/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'serif'],
        'helvetica': ['"Helvetica Neue"', 'sans-serif'],
        'la-belle': ['"La Belle Aurore"', 'cursive'],
        'coolvetica': ['Coolvetica', 'sans-serif']
      },
      keyframes: {
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(80px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      colors: {
        primary: '#ffc552',
        secondary: '#ffffe4',
        dark: '#0f1a48'
      }
    },
  },
  plugins: [],
}
