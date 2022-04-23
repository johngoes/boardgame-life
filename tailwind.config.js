module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Patrick Hand', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'splash-screen': "url('/public/images/bg2.jpg')"
      }
    },
  },
  plugins: [],
}
