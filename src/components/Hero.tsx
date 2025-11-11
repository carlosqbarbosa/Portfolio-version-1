import { Box, Typography, Button, Container, Chip, Stack } from "@mui/material";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container className="page-container">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            style={{ flex: 1 }}
          >
            <Chip
              label="Pronto para Transformar Ideias em Realidade Digital"
              sx={{
                mb: 3,
                backgroundColor: "rgba(59,130,246,0.1)",
                color: "var(--accent)",
                fontWeight: 500,
                borderRadius: "999px",
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "4rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Desenvolvedor{" "}
              <Box component="span" sx={{ color: "var(--accent)" }}>
                Full Stack & UI/UX
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "var(--muted)",
                fontWeight: 400,
                mb: 4,
                maxWidth: "600px",
              }}
            >
              Desenvolvedor Full Stack e Designer UI/UX criando experiências
              digitais que conectam pessoas e tecnologia de forma intuitiva.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 6 }}>
              <Button variant="contained" color="primary" size="large" href="#projects">
                Ver Projetos →
              </Button>
            </Box>

            {/* Cards abaixo do texto */}
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.12 }}
              viewport={{ once: true }}
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                useFlexGap
                spacing={2}
                justifyContent="center"
              >
                {[
                  { icon: "💻", title: "Development", color: "#3b82f6ff" },
                  { icon: "🎨", title: "UI/UX Design", color: "#14b8a6" },
                  { icon: "⚡", title: "Performance", color: "#f97316" },
                  { icon: "🚀", title: "Innovation", color: "#8b5cf6" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
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
                    }}
                  >
                    <Box sx={{ fontSize: 28 }}>{item.icon}</Box>
                    <Typography sx={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}
