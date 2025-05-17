import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#ffc107", light: "#ffe082", dark: "#c79100" },
    secondary: { main: "#333333" },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    error: {
      main: colors.red.A400,
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
