module.exports = {
  mode: "",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3252DF",
        hoverPrimary: "#2d49c8",
        tagPrice: "#FF498B",
        gray: {
          900: "#152C5B",
        },
        redOrange: "#E74C3C",
        medGreen: "#1ABC9C",
      },
      fontSize: {
        logo: "1.625rem",
        header: "2.625rem",
      },
      fontFamily: {
        body: ["Poppins"],
      },
      spacing: {
        215: "13.438rem",
        245: "15.313rem",
        440: "440px",
        460: "28.75rem",
        370: "370px",
        365: "22.813rem",
        500: "31.25rem",
        inherit: "inherit",
      },
      borderRadius: {
        hero: "100px 15px 15px",
        heroSwap: "15px 15px 100px 15px",
      },
      boxShadow: {
        btn: "0px 8px 15px rgba(50, 82, 223, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    style: false,
    base: false,
    utils: true,
  },
};
