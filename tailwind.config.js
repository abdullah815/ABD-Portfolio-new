/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark',
  content: [ "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      backgroundImage: {
        'spooky': "url('../public/assests/Main-home.jpg')",
        'aboutsection': "url('../public/assests/about-bg.jpg')",
      }

      
    },
  },
  plugins: [],

  
}


