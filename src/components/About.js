import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, Box, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import minhaFoto from "../assets/minhaFoto.jpg";
const MotionAvatar = motion(Avatar);
export default function About() {
    return (_jsxs(Container, { id: "about", className: "section page-container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(Typography, { className: "overline", align: "center", children: "SOBRE MIM" }), _jsx(Typography, { variant: "h4", align: "center", sx: { fontWeight: 700, mt: 1 }, children: "Desenvolvedor Full Stack & Designer" })] }), _jsxs(Grid, { container: true, spacing: 4, sx: { mt: 6, alignItems: "flex-start", justifyContent: "center" }, children: [_jsx(Grid, { size: { xs: 12, md: 7 }, children: _jsxs(Box, { sx: {
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: 3,
                                p: { xs: 3, md: 4 },
                                boxShadow: "0 10px 40px rgba(2,6,23,0.4)",
                                backdropFilter: "blur(10px)",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    borderColor: "#3b82f6ff",
                                },
                            }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, color: "#fff", mb: 2 }, children: "Desenvolvimento Web e Colabora\u00E7\u00E3o" }), _jsx(Grid, { container: true, spacing: 2, children: [
                                        // ** Linguagens **
                                        "JavaScript / TypeScript",
                                        "Java / Python",
                                        "HTML / CSS",
                                        // ** Frameworks Front-end **
                                        "React / Next.js",
                                        "Angular / Vue.js",
                                        "Quasar / Material UI",
                                        // ** Estilização e Design **
                                        "Tailwind CSS / Bootstrap",
                                        "Desenvolvimento Responsivo",
                                        "Figma / Otimização Visual",
                                        // ** Boas Práticas e Processos **
                                        "APIs RESTful (Integração)",
                                        "Testes Unitários (Jest/JUnit)",
                                        "Git / GitHub (Versionamento)",
                                        // ** Ferramentas e Colaboração **
                                        "Jira / Trello (Gestão Ágil)",
                                        "Colaboração com DevOps",
                                        "Trabalho com Designers",
                                    ].map((skill, i) => (_jsx(Grid, { size: { xs: 6, sm: 4 }, children: _jsxs(Typography, { sx: {
                                                fontSize: 14,
                                                color: "var(--muted)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                cursor: "default",
                                            }, children: ["\u2022 ", skill] }) }, i))) })] }) }), _jsx(Grid, { size: { xs: 12, md: 5 }, children: _jsxs(Box, { sx: {
                                width: "100%",
                                borderRadius: 3,
                                p: { xs: 3, md: 4 },
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                backdropFilter: "blur(8px)",
                                boxShadow: "0 10px 40px rgba(2,6,23,0.45)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 4,
                                textAlign: "center",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    borderColor: "#3b82f6ff",
                                },
                            }, children: [_jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.8 }, children: "Sou um Analista, Desenvolvedor e Designer de sistema, apaixonado por criar interfaces e experi\u00EAncias digitais, trabalho na interse\u00E7\u00E3o entre c\u00F3digo e design. Al\u00E9m de ser apaixonado pelo design e front-end, tamb\u00E9m estou me aprofundando no desenvolvimento back-end para me tornar um desenvolvedor full-stack, tamb\u00E9m tenho interesse no desenvolvimento mobile. Gosto tamb\u00E9m de entender todo o funcionamento e processos atrav\u00E9s da Engenharia de Software e QA. Busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para entregar solu\u00E7\u00F5es inovadoras e eficientes." }), _jsx(MotionAvatar, { src: minhaFoto, alt: "Carlos", initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, viewport: { once: true }, sx: {
                                        width: 140,
                                        height: 140,
                                        borderRadius: "16px",
                                        border: "3px solid rgba(255,255,255,0.1)",
                                        boxShadow: "0 10px 30px rgba(2,6,23,0.5), 0 0 15px rgba(96,165,250,0.3)",
                                        background: "linear-gradient(145deg, rgba(17,25,40,0.9), rgba(17,25,40,0.7))",
                                    } })] }) })] })] }));
}
