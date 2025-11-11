import { ThemeProvider, CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme";

export default function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </HelmetProvider>
  );
}
