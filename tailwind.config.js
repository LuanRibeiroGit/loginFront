/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'inter-tight': ['"Inter Tight"', 'sans-serif'],
          'sora': ['Sora', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}

