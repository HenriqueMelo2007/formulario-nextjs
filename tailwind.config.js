/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        box: '800px',
      },

      height: {
        box: '400px',
      },

      gridTemplateColumns: {
        columns3: '33% 1fr'
      }
    },
  },
  plugins: [],
}
