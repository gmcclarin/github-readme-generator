import { useState, useMemo } from "react";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./theme.ts";


function Root() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

export default Root;