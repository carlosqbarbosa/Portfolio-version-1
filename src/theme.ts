import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6CB5FF" },
    background: { default: "#071025", paper: "#0b1220" },
    text: { primary: "#E6F0FA", secondary: "#9FB0C7" },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    h1: { fontWeight: 800, letterSpacing: -1 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    body1: { color: "#B9C9DD" },
    button: { textTransform: "none", fontWeight: 700 }
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 12, padding: "10px 16px" },
        containedPrimary: { boxShadow: "0 8px 30px rgba(108,181,255,0.12)" },
        outlined: { borderColor: "rgba(255,255,255,0.06)" }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
          border: "1px solid rgba(255,255,255,0.03)"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: { root: { backdropFilter: "blur(8px)" } }
    }
  }
});

export default theme;
