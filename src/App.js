import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";
import theme from "./theme";
export default function App() {
    const helmetContext = {};
    return (_jsx(HelmetProvider, { context: helmetContext, children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(AppRoutes, {})] }) }));
}
