// theme.ts
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: "#007FFF" },
            secondary: { main: "#FF4081" },
            background: {
              default: "#f8f9fb",
              paper: "#ffffff",
            },
          }
        : {
            primary: { main: "#90caf9" },
            secondary: { main: "#f48fb1" },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
          }),
    },
    typography: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
      button: {
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          fullWidth: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });
};
