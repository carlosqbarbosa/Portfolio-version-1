import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Card, CardContent, CardMedia, Typography, Stack, Button, Box, } from "@mui/material";
import { motion } from "framer-motion";
import projects from "../data/projects";
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};
export default function ProjectsSection() {
    return (_jsxs(Container, { id: "projects", className: "section page-container", sx: { pb: 8 }, children: [_jsx(motion.div, { initial: "hidden", whileInView: "show", variants: fadeUp, viewport: { once: true }, children: _jsxs(Box, { sx: { textAlign: "center", mb: 5 }, children: [_jsx(Typography, { className: "overline", children: "PORTF\u00D3LIO" }), _jsx(Typography, { variant: "h4", sx: { fontWeight: 700, mt: 1 }, children: "Projetos" })] }) }), _jsx(Box, { sx: {
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 4,
                    alignItems: "stretch",
                }, children: projects.map((p, idx) => (_jsx(Box, { sx: { display: "flex", flexDirection: "column" }, children: _jsx(motion.div, { initial: "hidden", whileInView: "show", variants: fadeUp, transition: { delay: idx * 0.1 }, viewport: { once: true }, style: {
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }, children: _jsxs(Card, { sx: {
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                minHeight: { xs: 420, md: 460 },
                                borderRadius: 3,
                                overflow: "hidden",
                                bgcolor: "background.paper",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    borderColor: "#8b5cf6",
                                },
                            }, children: [_jsx(Box, { sx: {
                                        height: 200,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        bgcolor: "rgba(255,255,255,0.03)",
                                        overflow: "hidden",
                                    }, children: _jsx(CardMedia, { component: "img", image: p.image, alt: p.title, sx: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: p.image?.endsWith(".svg") ? "contain" : "cover",
                                        } }) }), _jsxs(CardContent, { sx: {
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        p: 3,
                                    }, children: [_jsxs(Box, { sx: {
                                                flexGrow: 1,
                                                mb: 3,
                                                display: "flex",
                                                flexDirection: "column",
                                            }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 1 }, children: p.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                                                        mb: 2,
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 3,
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                    }, children: p.description }), _jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 1, sx: {
                                                        mt: "auto",
                                                        maxHeight: 56,
                                                        overflow: "hidden",
                                                        alignContent: "flex-start",
                                                    }, children: p.tags?.map((t) => (_jsx(Box, { sx: {
                                                            px: 1.2,
                                                            py: 0.4,
                                                            borderRadius: 2,
                                                            fontSize: 12,
                                                            bgcolor: "rgba(255,255,255,0.08)",
                                                        }, children: t }, t))) })] }), _jsxs(Stack, { direction: "row", spacing: 1, children: [p.github && (_jsx(Button, { variant: "outlined", size: "small", href: p.github, target: "_blank", children: "Code" })), p.demo && (_jsx(Button, { variant: "contained", size: "small", href: p.demo, target: "_blank", children: "Demo" }))] })] })] }) }) }, p.id))) })] }));
}
