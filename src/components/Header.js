import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
const links = [
    { label: "Início", to: "hero" },
    { label: "Sobre", to: "about" },
    { label: "Projetos", to: "projects" },
    { label: "Contato", to: "contact" },
];
export default function Header() {
    return (_jsx(AppBar, { position: "fixed", className: "appbar-transparent", elevation: 0, children: _jsxs(Toolbar, { sx: { justifyContent: "space-between", px: { xs: 2, md: 6 } }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 800 }, children: "Carlos Barbosa" }), _jsx(Box, { sx: { display: { xs: "none", md: "flex" }, gap: 2 }, children: links.map((l) => (_jsx(Button, { color: "inherit", sx: { textTransform: "none", fontWeight: 600 }, children: _jsx(ScrollLink, { to: l.to, smooth: true, duration: 600, offset: -80, children: l.label }) }, l.to))) })] }) }));
}
