import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
export default function Contact() {
    return (_jsx(Container, { id: "contact", sx: { py: 10, textAlign: "center" }, children: _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Entre em Contato" }), _jsx(Typography, { color: "text.secondary", mb: 3, children: "Quer conversar sobre oportunidades ou projetos? Me envie uma mensagem!" }), _jsxs(Stack, { direction: "row", justifyContent: "center", spacing: 2, children: [_jsx(Button, { variant: "contained", color: "primary", href: "mailto:carloshenrique29.qb@gmail.com", children: "E-mail" }), _jsx(Button, { variant: "outlined", color: "primary", href: "https://www.linkedin.com/in/carlos-barbosa-7b9758260", target: "_blank", children: "LinkedIn" })] })] }) }));
}
