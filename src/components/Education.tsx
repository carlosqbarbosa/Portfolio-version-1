import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

interface AcademicData {
  period: string;
  title: string;
  university: string;
}

interface CertificateData {
  title: string;
  issuer: string;
  area: string;
}

const cardStyle = {
  bgcolor: "rgba(33, 43, 54, 0.9)",
  borderRadius: 2,
  p: 4,
  minHeight: "100%",
  color: "white",
  border: "1px solid transparent",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "#f97316",
    boxShadow: "0px 4px 20px rgba(139, 92, 246, 0.3)",
  },
}

const AcademicItem = ({ period, title, university }: AcademicData) => (
  <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', p: 0, mb: 3 }}>
    <Typography variant="body2" sx={{ color: '#4FC3F7', fontWeight: 'bold' }}>{period}</Typography>
    <Typography variant="body1" fontWeight="bold" sx={{ mt: 0.5 }}>{title}</Typography>
    <Typography variant="body2" color="text.secondary">{university}</Typography>
  </ListItem>
);

const CertificateItem = ({ title, issuer, area }: CertificateData) => (
  <ListItem
    sx={{
      justifyContent: 'space-between',
      p: 0,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      '&:last-child': { borderBottom: 'none' },
      py: 1.5,
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: { xs: 'flex-start', sm: 'center' },
      gap: { xs: 1, sm: 0 }
    }}
  >
    <ListItemText
      primary={<Typography variant="body1" fontWeight="bold">{title}</Typography>}
      secondary={<Typography variant="body2" color="text.secondary">{issuer}</Typography>}
      sx={{ m: 0 }}
    />
    <Typography variant="body2" sx={{ color: '#4FC3F7', fontWeight: 'bold', ml: { sm: 2 } }}>
      {area}
    </Typography>
  </ListItem>
);

export default function Education() {
  const academicData: AcademicData[] = [
    { period: "2024.1 - 2025.2", title: "Análise e Desenvolvimento de Sistemas", university: "Universidade Tiradentes e Centro Universitário Tiradentes - PE" },
    { period: "2025.1", title: "Formação profissional em Design de UX pela Google", university: "Coursera" },
    { period: "2023.1 - 2023.2", title: "Análise e Desenvolvimento de Sistemas", university: "UniFBV" },
  ];

  const certificateData: CertificateData[] = [
    { title: "Introdução à Programação Orientada a Objetos", issuer: "Fundação Bradesco", area: "Programação & Desenvolvimento" },
    { title: "Introdução à Programação Orientada a Objetos", issuer: "Instituto Federal Sul-rio-grandense", area: "Programação & Desenvolvimento" },
    { title: "Java Básico", issuer: "Loiane.training", area: "Programação & Desenvolvimento" },
    { title: "JavaScript do Zero", issuer: "Trybe", area: "Programação & Desenvolvimento" },
    { title: "Algoritmos", issuer: "Curso em Vídeo", area: "Programação & Desenvolvimento" },
    { title: "Lógica de Programação: Explore Funções e Listas", issuer: "Alura", area: "Lógica de Programação" },
    { title: "Lógica de Programação: Laços e Listas com JavaScript", issuer: "Alura", area: "Lógica de Programação" },
    { title: "Lógica de Programação: Mergulhe em Programação com JavaScript", issuer: "Alura", area: "Lógica de Programação" },
    { title: "Lógica de Programação: Comece em Lógica com o Jogo Pong e JavaScript", issuer: "Alura", area: "Lógica de Programação" },
    { title: "Cybersecurity Essentials", issuer: "CISCO", area: "Segurança" },
    { title: "Fundamentos de Data Science e Inteligência Artificial", issuer: "Data Science Academy", area: "Ciência de Dados" },
    { title: "Microsoft Power BI Para Business Intelligence e Data Science", issuer: "Data Science Academy", area: "Ciência de Dados" },
    { title: "Como dominar a qualidade do Software do Início ao Fim", issuer: "Udemy", area: "QA" },
  ];

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: 12,
        bgcolor: "transparent",
      }}
      id="education"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Typography
          align="center"
          variant="h4"
          fontWeight="bold"
          sx={{ color: "white" }}
        >
          Educação & Certificados
        </Typography>

        <Typography
          align="center"
          variant="subtitle1"
          sx={{ mt: 1, mb: 6, color: "text.secondary" }}
        >
          Formação acadêmica e Certificados
        </Typography>

        {/* Container principal centralizado */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 4, 
            maxWidth: 1200,
            mx: "auto",
          }}
        >
          {/* Card 1 - Formação Acadêmica */}
          <Box sx={{ ...cardStyle, flex: "1 1 450px", maxWidth: 550 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3, }}>
              <SchoolIcon sx={{ color: "#4FC3F7", mr: 1, fontSize: 28 }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                Formação Acadêmica
              </Typography>
            </Box>
            <List disablePadding>
              {academicData.map((item, index) => (
                <AcademicItem key={index} {...item} />
              ))}
            </List>
          </Box>

          {/* Card 2 - Certificados */}
          <Box sx={{ ...cardStyle, flex: "1 1 450px", maxWidth: 550 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <WorkspacePremiumIcon
                sx={{ color: "#7E57C2", mr: 1, fontSize: 28 }}
              />
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "white" }}
              >
                Certificados
              </Typography>
            </Box>
            <List disablePadding>
              {certificateData.map((item, index) => (
                <CertificateItem key={index} {...item} />
              ))}
            </List>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );

}
