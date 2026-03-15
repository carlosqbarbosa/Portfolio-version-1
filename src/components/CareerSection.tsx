import { Container, Typography, Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";


const experiences = [
    {
        title: "Tutor Tecnológico",
        company: "Cesar School",
        period: "Mar 2026 – Atualmente",
        highlights: [
        "Tutor do projeto Trilha TEC em parceria com o Governo de Pernambuco ",
        "Monitorando aulas e projetos",
        "Projetos web com Javascript, HTML/CSS e dados com python",
        ],
    },
    {
        title: "Desenvolvedor de Software",
        company: "Porto Digital",
        period: "Fev 2024 – Dez 2025",
        highlights: [
        "Full Stack, QA, Designer e Líder de Projeto",
        "Projeto NEUROTECH: API REST Java com Spring Boot — Destaque no Demoday",
        "Projeto VOLTZX: Plataforma para Energia Solar (Next.js + Nest.js + PostgreSQL)",
        ],
    },
    {
        title: "Estagiário em Desenvolvimento Front-end",
        company: "Senai",
        period: "Mai 2025 – Nov 2025",
        highlights: [
        "Desenvolvimento de interfaces web responsivas e acessíveis (Vue.js, Next.js, React, Angular)",
        "Implementação de funcionalidades Backend com APIs RESTful",
        "Criação de protótipos de alta fidelidade no Figma (UI/UX)",
        "Testes automatizados (unitários e E2E) e QA",
        "Dashboards interativos no Power BI",
        ],
    },
];

const education = [
  {
    period: "2024 – 2025",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UNIT - PE",
  },
  {
    period: "2025",
    title: "UX Design (Google)",
    institution: "Coursera",
  },
  {
    period: "2023",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UniFBV",
  },
];

const TimelineDot = () => (
  <Box
    sx={{
      position: "absolute",
      left: -5,
      top: 6,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "#8b5cf6",
      flexShrink: 0,
    }}
  />
);

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  index: number;
}

const ExperienceItem = ({ title, company, period, highlights, index }: ExperienceItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Box
      sx={{
        position: "relative",
        pl: 3,
        borderLeft: "2px solid rgba(255,255,255,0.1)",
        transition: "border-color 0.2s",
        "&:hover": { borderColor: "rgba(139,92,246,0.4)" },
      }}
    >
      <TimelineDot />
      <Typography sx={{ fontSize: 11, color: "#a78bfa", fontWeight: 600, letterSpacing: "0.05em" }}>
        {period}
      </Typography>
      <Typography sx={{ fontWeight: 600, color: "#fff", mt: 0.5, fontSize: "0.95rem" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.45)", mb: 1.5 }}>
        {company}
      </Typography>
      <Stack spacing={0.75}>
        {highlights.map((h, j) => (
          <Typography
            key={j}
            sx={{ fontSize: 13, color: "rgba(255,255,255,0.55)", display: "flex", gap: 1 }}
          >
            <Box component="span" sx={{ color: "#a78bfa", mt: "2px", flexShrink: 0 }}>›</Box>
            {h}
          </Typography>
        ))}
      </Stack>
    </Box>
  </motion.div>
);

interface EducationItemProps {
  period: string;
  title: string;
  institution: string;
  index: number;
}

const EducationItem = ({ period, title, institution, index }: EducationItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Box
      sx={{
        position: "relative",
        pl: 3,
        borderLeft: "2px solid rgba(255,255,255,0.1)",
        transition: "border-color 0.2s",
        "&:hover": { borderColor: "rgba(139,92,246,0.4)" },
      }}
    >
      <TimelineDot />
      <Typography sx={{ fontSize: 11, color: "#a78bfa", fontWeight: 600, letterSpacing: "0.05em" }}>
        {period}
      </Typography>
      <Typography sx={{ fontWeight: 600, color: "#fff", mt: 0.5, fontSize: "0.95rem" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
        {institution}
      </Typography>
    </Box>
  </motion.div>
);

export default function CareerSection() {
  return (
    <Box sx={{ backgroundColor: "rgba(255,255,255,0.015)", py: 12 }} id="career">
      <Container className="page-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              color: "#a78bfa",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Carreira
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 7, lineHeight: 1.2 }}>
            Trajetória{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Experiência
            </Box>
          </Typography>
        </motion.div>

        <Grid container spacing={6}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
              <Briefcase size={20} color="#a78bfa" />
              <Typography sx={{ fontWeight: 600, fontSize: "1.05rem", color: "#fff" }}>
                Experiência Profissional
              </Typography>
            </Box>
            <Stack spacing={4}>
              {experiences.map((exp, i) => (
                <ExperienceItem key={i} {...exp} index={i} />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
              <GraduationCap size={20} color="#a78bfa" />
              <Typography sx={{ fontWeight: 600, fontSize: "1.05rem", color: "#fff" }}>
                Formação Acadêmica
              </Typography>
            </Box>
            <Stack spacing={4}>
              {education.map((edu, i) => (
                <EducationItem key={i} {...edu} index={i} />
              ))}
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}