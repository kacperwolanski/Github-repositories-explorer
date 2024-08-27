import { createTheme } from "@mui/material";

export const breakpointsValues = {
  xl: 1920,
  lg: 1440,
  md: 1200,
  sm: 600,
  xs: 375,
  xxs: 200,
  mobile: 1050,
};
export const theme = createTheme({
  breakpoints: {
    values: breakpointsValues,
  },
  palette: {
    primary: {
      main: "#309cdc",
    },
    secondary: {
      main: "#e4e4e4",
    },

    custom: {
      background: "#fff",
      inputGrey: "#f4f4f4",
      fontDark: "#191919",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "unset",
          padding: 0,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          cursor: "default",
          userSelect: "none",
        },
      },
    },
  },
});
