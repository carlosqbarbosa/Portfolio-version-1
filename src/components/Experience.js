import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};
export default function ExperienceSection() {
    const keySkills = [
        "Desenvolvimento Full Stack (JavaScript/Java/Python/Next.js/React/Vue.js)",
        "Design Thinking e Prototipação (Figma)",
        "Integração de APIs RESTful e Banco de Dados",
        "Metodologias Ágeis (Scrum/Kanban)",
        "Controle de Versão (Git/GitHub)",
        "Testes e Qualidade de Software (QA)",
        "Desenvolvimento Mobile Híbrido (Interesse)",
        "Otimização de Performance e Usabilidade",
    ];
    const careerData = [
        {
            id: 1,
            role: "Estagiário em Desenvolvimento Full Stack (Híbrido)",
            company: "Senai",
            period: "Maio 2025 – Novembro 2025",
            responsibilities: [
                "Desenvolvimento de interfaces web responsivas e acessíveis (Vue.js, Next.js, React, Angular, Quasar Framework, Tailwind CSS e Material UI).",
                "Implementação de funcionalidades Backend com APIs RESTful e integração com banco de dados, auxiliando o supervisor no desenvolvimento Backend.",
                "Colaboração em projetos de software em equipe multidisciplinar (análise de requisitos, resolução de problemas e entrega de soluções escaláveis).",
                "Planejamento e acompanhamento de tarefas com Trello e Jira, aplicando metodologias ágeis (Scrum).",
                "Criação de protótipos de alta fidelidade no Figma, priorizando a experiência do usuário (UI/UX e Design Systems).",
                "Manutenção e atualização de aplicações, garantindo estabilidade, performance e usabilidade.",
                "Elaboração de documentação técnica e de código para manutenção e evolução dos sistemas.",
                "Apoio na implementação de testes automatizados (unitários e E2E), garantindo a qualidade das entregas (QA).",
                "Desenvolvimento e manutenção de relatórios e dashboards interativos no Power BI, auxiliando a equipe de dados.",
                "Comunicação frequente com clientes internos e externos para levantamento de demandas e validação de entregas.",
            ],
            highlight: true,
            tags: [
                "Next.js", "React", "Angular", "Vue.js", "APIs RESTful",
                "UI/UX", "Figma", "Power BI", "Scrum", "QA",
            ],
        },
        {
            id: 2,
            role: "Residente em Desenvolvimento de Software",
            company: "Porto Digital",
            period: "Fevereiro 2025 – Presente",
            responsibilities: [
                "Colaboração em projetos de desenvolvimento de software, atuando como Full Stack, QA, Designer e Líder de Projeto (organização de tarefas via Trello).",
                "Criação de protótipos de interfaces web e mobile utilizando Figma, priorizando a experiência do usuário.",
                "Projeto NEUROTECH (Destaque): Construção de uma API REST Java com Spring Boot, integrada a banco de dados relacional (SQL) para gerenciamento de dados de colaboradores. Destaque no Demoday.",
                "Projeto VOLTZX: Plataforma de Conexão para Energia Solar. Tecnologias utilizadas: Next.Js + ShadCn (Front-end), Nest.js + Prisma (APIs RESTful) e postgreSQL (Banco de Dados).",
            ],
            highlight: true,
            tags: [
                "Java", "Spring Boot", "API REST", "SQL",
                "Next.Js", "Nest.js", "PostgreSQL", "Figma",
                "Liderança", "QA", "Trello",
            ],
        },
    ];
    return (_jsxs(Container, { id: "experience", className: "section page-container", children: [_jsxs(motion.div, { initial: "hidden", whileInView: "show", variants: fadeUp, viewport: { once: true }, children: [_jsx(Typography, { className: "overline", align: "center", children: "CARREIRA" }), _jsx(Typography, { variant: "h4", align: "center", sx: { fontWeight: 700, mt: 1, mb: 6 }, children: "Minha Trajet\u00F3ria & Experi\u00EAncia" })] }), _jsxs(Stack, { direction: { xs: "column", md: "row" }, spacing: 4, alignItems: "flex-start", justifyContent: "center", children: [_jsx(Box, { sx: {
                            flex: 1,
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 3,
                            p: { xs: 3, md: 4 },
                            boxShadow: "0 10px 40px rgba(2,6,23,0.4)",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                borderColor: "#14b8a6",
                            },
                        }, children: careerData.map((job, index) => (_jsxs(motion.div, { initial: "hidden", whileInView: "show", variants: fadeUp, transition: { delay: index * 0.1 }, viewport: { once: true, amount: 0.2 }, children: [_jsxs(Stack, { direction: "row", spacing: 2, sx: { mb: 1, alignItems: 'center' }, children: [job.highlight ? (_jsx(StarIcon, { sx: { color: 'primary.main', fontSize: 20 } })) : (_jsx(CircleIcon, { sx: { color: 'text.secondary', fontSize: 8 } })), _jsxs(Box, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600 }, children: job.role }), _jsxs(Typography, { variant: "body2", color: "text.secondary", children: [job.company, " | ", job.period] })] })] }), _jsx(Stack, { spacing: 1.2, sx: { pl: 4, mb: 3 }, children: job.responsibilities.map((item, i) => (_jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { display: "flex", alignItems: "flex-start", gap: 1 }, children: [_jsx(Box, { sx: { color: 'primary.main', fontSize: 10, mt: "6px" }, children: "\u2022" }), item] }, i))) })] }, job.id))) }), _jsxs(Box, { sx: {
                            flex: 0.8,
                            borderRadius: 3,
                            p: { xs: 3, md: 4 },
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            boxShadow: "0 10px 40px rgba(2,6,23,0.45)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                borderColor: "#14b8a6",
                            },
                        }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "Habilidades Chave" }), _jsx(Stack, { spacing: 1.5, children: keySkills.map((skill, i) => (_jsxs(Typography, { sx: { fontSize: 16, display: "flex", alignItems: "center", gap: 1 }, children: [_jsx(Box, { sx: { color: 'primary.main', fontSize: 16 }, children: ">" }), skill] }, i))) })] })] })] }));
}
