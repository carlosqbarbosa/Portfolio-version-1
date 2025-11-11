import { Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Container id="contact" sx={{ py: 10, textAlign: "center" }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <Typography variant="h4" gutterBottom>Entre em Contato</Typography>
        <Typography color="text.secondary" mb={3}>Quer conversar sobre oportunidades ou projetos? Me envie uma mensagem!</Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button variant="contained" color="primary" href="mailto:carloshenrique29.qb@gmail.com">E-mail</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            href="https://www.linkedin.com/in/carlos-barbosa-7b9758260" 
            target="_blank"
        >
            LinkedIn
        </Button>
        </Stack>
      </motion.div>
    </Container>
  );
}
