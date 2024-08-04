import { fonts } from "./tailwind.plugin";

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      md: "1200px",
      lg: "1440px",
      xl: "1900px",
    },
    extend: {
      colors: {
        main: {
          DEFAULT: "#4869DC",
          hover: "#2449CA",
        },
        gray: {
          100: "#FFF",
          200: "#F7F7F7",
          300: "#EEEEEE",
          400: "#DBDBDB",
          500: "#535353",
          600: "#000",
        },
        overlay: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      height: {
        screenImageList: "calc(100vh - 260px)",
      },
    },
  },
  plugins: [fonts],
};
