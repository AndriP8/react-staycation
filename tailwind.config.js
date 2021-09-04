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
        70: "4.5rem",
        215: "13.438rem",
        245: "15.313rem",
        270: "16.875rem",
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
      backgroundImage: (theme) => ({
        stepper:
          "url('data:image/svg+xml;utf8,<svg width:30 height:20 viewBox:0 0 30 20 fill:none xmlns:http://www.w3.org/2000/svg><path d:M2.62961 7.52668L7.82252 16.2306C8.46805 17.3126 9.94113 17.5354 10.8778 16.6927L27.1842 2.02177 stroke:white stroke-width:4 stroke-linecap:round/></svg>')",
      }),
      content: {
        empty: "",
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
