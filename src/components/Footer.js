import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
export default function Footer() {
    return (_jsx(Box, { sx: { textAlign: "center", py: 4, bgcolor: "transparent", mt: 6 }, children: _jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["\u00A9 ", new Date().getFullYear(), " Carlos Barbosa \u2014 Todos os direitos reservados."] }) }));
}
