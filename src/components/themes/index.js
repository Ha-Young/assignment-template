import { reversePalette } from "styled-theme/composer";

const theme = {
};

theme.palette = {
  primary: ["#35c5f0", "#09ADDB"],
  secondary: ["#FF7777"],
  danger: ["#d32f2f"],
  alert: ["#ffa000"],
  success: ["#388e3c"],

  grayscale: [
    "#212121",
    "#414141",
    "#616161",
    "#9e9e9e",
    "#bdbdbd",
    "#e0e0e0",
    "#eeeeee",
    "#ffffff"
  ],
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: "Noto Sans KR, Apple SD Gothic Neo, 맑은 고딕, Malgun Gothic",
  pre: "sans-serif, Consolas, Liberation Mono, Menlo, Courier, monospace",
  quote: "Georgia, serif",
};

theme.sizes = {
  mobileLayout: "768px",
};

export default theme;
