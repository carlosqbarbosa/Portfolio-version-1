import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Container, Typography } from "@mui/material";
export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    if (!project)
        return _jsx(Typography, { children: "Projeto n\u00E3o encontrado." });
    return (_jsxs(Container, { sx: { py: 10 }, children: [_jsx(Typography, { variant: "h4", children: project.title }), _jsx(Typography, { color: "text.secondary", mb: 3, children: project.description }), _jsx("img", { src: project.image, alt: project.title, style: { width: "100%", borderRadius: "8px" } })] }));
}
