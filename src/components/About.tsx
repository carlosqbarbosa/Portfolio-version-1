import { Container, Typography, Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const skills = [
  "JavaScript / TypeScript",
  "Java / Python",
  "React / Next.js",
  "Vue.js / Angular",
  "Node.js / Express / Nest.js",
  "Tailwind CSS / Material UI",
  "APIs RESTful",
  "Git / GitHub",
  "Figma / UI Design",
  "Testes (Jest / JUnit)",
  "Python Flask / Django",
  "Metodologias Ágeis",
];

export default function About() {
  return (
    <Container id="about" className="section page-container" sx={{ py: 12 }}>
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
          Sobre Mim
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 6, lineHeight: 1.2 }}
        >
          Desenvolvedor Full Stack{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            & Designer
          </Box>
        </Typography>
      </motion.div>

      <Grid container spacing={6} alignItems="flex-start">
        {/* Bio */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Stack spacing={2.5}>
              {[
                "Sou um Analista, Desenvolvedor e Designer de sistema, apaixonado por criar interfaces e experiências digitais. Trabalho na interseção entre código e design.",
                "Além do front-end, estou me aprofundando no desenvolvimento back-end para me tornar um desenvolvedor full-stack completo. Tenho interesse também em desenvolvimento mobile, Engenharia de Software e QA.",
                "Busco constantemente aprimorar minhas habilidades e aprender novas tecnologias para entregar soluções inovadoras e eficientes.",
              ].map((text, i) => (
                <Typography
                  key={i}
                  sx={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: "0.95rem" }}
                >
                  {text}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </Grid>

        {/* Skills */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: "1rem", mb: 3, color: "#fff" }}
            >
              Habilidades & Tecnologias
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    px: 1.75,
                    py: 0.85,
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.7)",
                    cursor: "default",
                    transition: "border-color 0.2s, background 0.2s",
                    "&:hover": {
                      borderColor: "rgba(139,92,246,0.45)",
                      backgroundColor: "rgba(139,92,246,0.06)",
                    },
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}