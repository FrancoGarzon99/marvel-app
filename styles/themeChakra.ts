// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "400px",
  sm: "576px",
  md: "768px",
  lg: "1000px",
  xl: "1200px",
  xxl: "1400px",
});

const themeChakra = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: {
          base: "14px",
        },
        fontFamily: "Roboto Condensed",
      },
    },
  },
  colors: {},
  fonts: {
    primary: "Roboto Condensed",
    secondary: "Roboto",
  },
  breakpoints,
});
export default themeChakra;
