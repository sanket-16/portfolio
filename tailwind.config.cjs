/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#03001C',
        'mint-green': '#03C988',
        'light-purple': '#301E67',
      },
      fontFamily: {
        Inter: ['Inter'],
        Montserrat: ['Montserrat'],
      },
      backgroundImage: {
        'hero-img': 'url("hero.svg")',
      },
      backgroundSize: {
        '60%': '60%',
        '95%': '95%',
      },
    },
  },
  plugins: [],
};
