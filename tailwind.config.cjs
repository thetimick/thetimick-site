module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: '#1E1E1E'
      },
      textColor: {
        main: '#A4A4A4'
      },
      dropShadow: {
        main: '0px 10px 20px rgba(30, 30, 30, 0.8)',
        icon: '0px 10px 20px rgba(30, 30, 30, 0.25)',
        black: '0px 10px 20px rgba(0, 0, 0, 0.99)'
      },
      colors: {
        main: '#A4A4A4'
      }
    },
  },
  plugins: [],
}