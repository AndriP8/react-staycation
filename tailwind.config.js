module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3252DF",
        gray: {
          900: "#152C5B",
        },
      },
      fontSize: {
        logo: "1.625rem",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
