import {createTheme} from "@mui/material/styles";

const lightPalette = {
palette: {
        primary: {
          main: "#007FFF",
        },
        secondary: {
          main: "#FF4081",
        },
        background: {
          default: "#f8f9fb",
          paper: "#ffffff",
        },
      },
}

const darkPalette = {
    palette: {
        primary: {
          main: "#90caf9",
        },
        secondary: {
          main: "#f48fb1",
        },
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
      },
}

const theme = createTheme({
    colorSchemes: {
        light: lightPalette,
        dark: darkPalette
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

export default theme;