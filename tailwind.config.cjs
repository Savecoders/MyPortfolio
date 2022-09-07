/*@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      screen: {
        tablet: '960px',
        desktop: '1280px',
      },
      fontFamily: {
        Sora: ['Sora', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
    colors: {
      bg: '#131417',
      sec: '#17191F',
      ter: '#14131D',
      icons: '#FEFEFE',
      primary: '#E7ECEF',
      title: '#E1ECF7',
      title_sec: '#EBF0FF',
      blue: '#6277D7',
      cyan: '#4773BA',
    },
  },
  plugins: [],
};
