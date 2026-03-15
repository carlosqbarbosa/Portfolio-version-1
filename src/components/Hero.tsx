import { Box, Typography, Button, Container, Chip, Stack } from "@mui/material";
import { ArrowDown, Code2, Palette, Zap, Rocket, Download } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Code2,   label: "Development" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Zap,     label: "Performance" },
  { icon: Rocket,  label: "Innovation" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1,  y: 0  },
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orb */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "25%",
          right: -128,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.05)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ px: 3, pt: 12, pb: 8, position: "relative", zIndex: 1 }}>
        {/* Top row: text + photo */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          gap={{ xs: 6, md: 8 }}
        >
          {/* Text block */}
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
                mb: 4,
                px: 1,
                height: 32,
                borderRadius: "999px",
                border: "1px solid rgba(139,92,246,0.3)",
                backgroundColor: "rgba(139,92,246,0.05)",
                color: "#a78bfa",
                fontSize: 12,
                fontWeight: 500,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.75rem", md: "4.5rem" },
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Desenvolvedor{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Full Stack
              </Box>
              <br />
              {"& "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                UI/UX
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1.1rem",
                maxWidth: 520,
                lineHeight: 1.7,
                mb: 5,
              }}
            >
              Desenvolvedor Full Stack e Designer UI/UX criando experiências digitais
              que conectam pessoas e tecnologia de forma intuitiva.
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={2}>
              <Button
                component="a"
                href="#projects"
                variant="contained"
                size="large"
                endIcon={<ArrowDown size={16} />}
                sx={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  px: 3,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                Ver Projetos
              </Button>

              <Button
                component="a"
                href="https://carlosqbarbosa.github.io/Portfolio-version-1/assets/curriculo_carlos-vAqZB_jS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                endIcon={<Download size={16} />}
                sx={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  px: 3,
                  "&:hover": { borderColor: "rgba(139,92,246,0.5)", backgroundColor: "rgba(139,92,246,0.05)" },
                }}
              >
                Baixar CV
              </Button>
            </Stack>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ flexShrink: 0 }}
          >
            <Box
              sx={{
                width: { xs: 200, md: 280 },
                height: { xs: 200, md: 280 },
                borderRadius: 4,
                overflow: "hidden",
                border: "2px solid rgba(139,92,246,0.25)",
                boxShadow: "0 0 40px rgba(139,92,246,0.15)",
              }}
            >
              <img
                src="https://carlosqbarbosa.github.io/Portfolio-version-1/assets/minhaFoto-C3tFEVZG.jpg"
                alt="Carlos Barbosa"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
          </motion.div>
        </Stack>

        {/* Highlight cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            gap={2}
            sx={{ mt: 10 }}
          >
            {highlights.map(({ icon: Icon, label }, i) => (
              <Box
                key={i}
                sx={{
                  flex: { xs: "1 1 calc(50% - 8px)", md: "1 1 0" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(8px)",
                  transition: "border-color 0.2s",
                  "&:hover": {
                    borderColor: "rgba(139,92,246,0.35)",
                    "& .card-icon": { transform: "scale(1.1)" },
                  },
                }}
              >
                <Box
                  className="card-icon"
                  sx={{ color: "#a78bfa", transition: "transform 0.2s", display: "flex" }}
                >
                  <Icon size={24} />
                </Box>
                <Typography sx={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}