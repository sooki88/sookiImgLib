import plugin from "tailwindcss/plugin";

export const fonts = plugin(({ addUtilities }) => {
  addUtilities({
    ".large-bold": {
      fontSize: "26px",
      lineHeight: "36px",
      fontWeight: "700",
    },
    ".base-bold": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "700",
    },
    ".base-medium": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "600",
    },
    ".base-regular": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
    },
    ".small-bold": {
      fontSize: "14px",
      lineHeight: "21px",
      fontWeight: "700",
    },
    ".small-regular": {
      fontSize: "14px",
      lineHeight: "21px",
      fontWeight: "400",
    },
  });
});
