import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { label: "Início", to: "hero" },
  { label: "Sobre", to: "about" },
  { label: "Projetos", to: "projects" },
  { label: "Contato", to: "contact" },
];

export default function Header() {
  return (
    <AppBar position="fixed" className="appbar-transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Carlos Barbosa
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {links.map((l) => (
            <Button key={l.to} color="inherit" sx={{ textTransform: "none", fontWeight: 600 }}>
              <ScrollLink to={l.to} smooth duration={600} offset={-80}>
                {l.label}
              </ScrollLink>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}