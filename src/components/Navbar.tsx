import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          backdropFilter: "blur(10px)",
          px: { xs: 2, md: 8 },
        }}
      >
        <Typography variant="h6" color="primary" fontWeight="bold">
          Portfólio
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Sobre", "Experiência", "Projetos", "Contato"].map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Vamos conversar
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
