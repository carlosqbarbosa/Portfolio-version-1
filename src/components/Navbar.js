import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
const Navbar = () => {
    return (_jsx(AppBar, { position: "fixed", color: "transparent", elevation: 0, children: _jsxs(Toolbar, { sx: {
                justifyContent: "space-between",
                backdropFilter: "blur(10px)",
                px: { xs: 2, md: 8 },
            }, children: [_jsx(Typography, { variant: "h6", color: "primary", fontWeight: "bold", children: "Portf\u00F3lio" }), _jsx(Box, { sx: { display: { xs: "none", md: "flex" }, gap: 3 }, children: ["Sobre", "Experiência", "Projetos", "Contato"].map((item) => (_jsx(Button, { color: "inherit", children: item }, item))) }), _jsx(Button, { variant: "contained", color: "primary", sx: { textTransform: "none" }, children: "Vamos conversar" })] }) }));
};
export default Navbar;
