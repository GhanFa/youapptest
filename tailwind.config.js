/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
      "2xl": "1536px",
    },
    fontFamily: {
      Inter: "var(--font-inter)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          hover: "#2f2f2f",
        },
        accent: {
          DEFAULT: "#ed1d24",
          hover: "#d6001c",
        },
      },
      backgroundImage: {
        "form-gradient":
          "radial-gradient(121.73% 121.49% at 100% -3.39%, #1f4247 0%, #0d1d23 56.18%, #09141a 100%)",
        "link-gradient":
          "linear-gradient(74.08deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%)",
      },
    },
  },
  plugins: [],
};
