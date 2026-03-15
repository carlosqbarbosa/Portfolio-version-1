import { Box, Container, Typography, Button, Stack, Divider } from "@mui/material";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Box sx={{ backgroundColor: "rgba(255,255,255,0.015)", py: 12 }} id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ maxWidth: 520, mx: "auto", textAlign: "center" }}>
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
              Contato
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}>
              Vamos{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                conversar?
              </Box>
            </Typography>

            <Typography
              sx={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, mb: 5, fontSize: "0.95rem" }}
            >
              Quer conversar sobre oportunidades ou projetos? Me envie uma mensagem!
            </Typography>

            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
              <Button
                component="a"
                href="mailto:carloshenrique29.qb@gmail.com"
                variant="contained"
                startIcon={<Mail size={16} />}
                sx={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  px: 3,
                  "&:hover": { opacity: 0.9 },
                }}
              >
                E-mail
              </Button>

              <Button
                component="a"
                href="https://www.linkedin.com/in/carlos-barbosa-7b9758260"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<Linkedin size={16} />}
                sx={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  px: 3,
                  "&:hover": {
                    borderColor: "rgba(139,92,246,0.5)",
                    backgroundColor: "rgba(139,92,246,0.05)",
                  },
                }}
              >
                LinkedIn
              </Button>

              <Button
                component="a"
                href="https://github.com/carlosqbarbosa"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<Github size={16} />}
                sx={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  px: 3,
                  "&:hover": {
                    borderColor: "rgba(139,92,246,0.5)",
                    backgroundColor: "rgba(139,92,246,0.05)",
                  },
                }}
              >
                GitHub
              </Button>
            </Stack>
          </Box>
        </motion.div>

        {/* Footer */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mt: 10, mb: 4 }} />
        <Typography
          sx={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.3)" }}
        >
          © {new Date().getFullYear()} Carlos Barbosa. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}