import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#CB6D2B" },
    secondary: { main: "#333333" },
    background: {
      default: "#1B1B1B",
      paper: "#2A2A2A",
    },
    text: {
      primary: "#E0E0E0", // Body text
      secondary: "#B0B0B0", // Subtext
      disabled: "#7A7A7A", // Disabled text
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
