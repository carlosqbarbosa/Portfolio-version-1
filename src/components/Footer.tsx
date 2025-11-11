import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 4, bgcolor: "transparent", mt: 6 }}>
      <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Carlos Barbosa — Todos os direitos reservados.</Typography>
    </Box>
  );
}
