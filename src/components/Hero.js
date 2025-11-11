import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Button, Container, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};
export default function Hero() {
    return (_jsx(Box, { id: "hero", sx: {
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
        }, children: _jsx(Container, { className: "page-container", children: _jsx(Stack, { direction: { xs: "column", md: "row" }, spacing: 6, alignItems: "center", justifyContent: "space-between", children: _jsxs(motion.div, { initial: "hidden", animate: "show", variants: fadeUp, transition: { duration: 0.7 }, style: { flex: 1 }, children: [_jsx(Chip, { label: "Pronto para Transformar Ideias em Realidade Digital", sx: {
                                mb: 3,
                                backgroundColor: "rgba(59,130,246,0.1)",
                                color: "var(--accent)",
                                fontWeight: 500,
                                borderRadius: "999px",
                            } }), _jsxs(Typography, { variant: "h2", sx: {
                                fontWeight: 800,
                                fontSize: { xs: "2.5rem", md: "4rem" },
                                lineHeight: 1.2,
                                mb: 2,
                            }, children: ["Desenvolvedor", " ", _jsx(Box, { component: "span", sx: { color: "var(--accent)" }, children: "Full Stack & UI/UX" })] }), _jsx(Typography, { variant: "h6", sx: {
                                color: "var(--muted)",
                                fontWeight: 400,
                                mb: 4,
                                maxWidth: "600px",
                            }, children: "Desenvolvedor Full Stack e Designer UI/UX criando experi\u00EAncias digitais que conectam pessoas e tecnologia de forma intuitiva." }), _jsx(Box, { sx: { display: "flex", gap: 2, mb: 6 }, children: _jsx(Button, { variant: "contained", color: "primary", size: "large", href: "#projects", children: "Ver Projetos \u2192" }) }), _jsx(motion.div, { initial: "hidden", whileInView: "show", variants: fadeUp, transition: { duration: 0.7, delay: 0.12 }, viewport: { once: true }, children: _jsx(Stack, { direction: "row", flexWrap: "wrap", useFlexGap: true, spacing: 2, justifyContent: "center", children: [
                                    { icon: "💻", title: "Development", color: "#3b82f6ff" },
                                    { icon: "🎨", title: "UI/UX Design", color: "#14b8a6" },
                                    { icon: "⚡", title: "Performance", color: "#f97316" },
                                    { icon: "🚀", title: "Innovation", color: "#8b5cf6" },
                                ].map((item, index) => (_jsxs(Box, { sx: {
                                        width: { xs: "45%", md: "23%" },
                                        p: 3,
                                        borderRadius: 3,
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        backgroundColor: "rgba(255,255,255,0.02)",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            borderColor: item.color,
                                        },
                                    }, children: [_jsx(Box, { sx: { fontSize: 28 }, children: item.icon }), _jsx(Typography, { sx: { fontWeight: 600, color: "#fff", fontSize: 15 }, children: item.title })] }, index))) }) })] }) }) }) }));
}
