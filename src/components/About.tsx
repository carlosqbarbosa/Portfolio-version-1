import { Container, Typography, Box, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid"; 
import { motion } from "framer-motion";
import minhaFoto from "../assets/minhaFoto.jpg";

const MotionAvatar = motion(Avatar);

export default function About() {
  return (
    <Container id="about" className="section page-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography className="overline" align="center">
          SOBRE MIM
        </Typography>

        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, mt: 1 }}
        >
          Desenvolvedor Full Stack & Designer
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={4}
        sx={{ mt: 6, alignItems: "flex-start", justifyContent: "center" }}
      >
      <Grid size={{ xs: 12, md: 7 }}>
        <Box
          sx={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            boxShadow: "0 10px 40px rgba(2,6,23,0.4)",
            backdropFilter: "blur(10px)",
            "&:hover": {
                transform: "translateY(-5px)",
                borderColor: "#3b82f6ff",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#fff", mb: 2 }}
          >
            Desenvolvimento Web e Colaboração
          </Typography>
          {/*
          <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
            Desenvolvedor (Full Stack, UI/UX e QA). Atuo na criação de soluções web completas, desde a concepção visual e de usabilidade ( UI/UX) até a implementação escalável e testável. 
            Minha experiência abrange o ciclo de desenvolvimento de ponta a ponta, garantindo código limpo, performance otimizada e alta qualidade (QA), em colaboração contínua com times 
            de Design, Back-end, Front-end e DevOps.
          </Typography> */}

          <Grid container spacing={2}>
            {[
              // ** Linguagens **
              "JavaScript / TypeScript",
              "Java / Python",
              "HTML / CSS",

              // ** Frameworks **
              "React / Next.js / Nest.js",
              "Angular / Vue.js",
              "Express.js",
              "Python Flask/Djando",
              
              // ** Estilização e Design **
              "Tailwind CSS / Bootstrap",
              "Quasar / Material UI",
              "Desenvolvimento Responsivo",
              "Figma / Otimização Visual", 
              
              // ** Boas Práticas e Processos **
              "APIs RESTful (Integração)",
              "Testes Unitários (Jest/JUnit)",
              "Git / GitHub (Versionamento)",
              "Postman / Swagger",
              "DBeaver/ MySQL Workbench/ MongoDB Compass/ Mongoose/ Nodemon ",

              // ** Ferramentas e Colaboração **
              "Jira / Trello (Gestão Ágil)",
              "Colaboração com DevOps",
            ].map((skill, i) => (
              <Grid size={{ xs: 6, sm: 4 }} key={i}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "var(--muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "default",
                  }}
                >
                  • {skill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 10px 40px rgba(2,6,23,0.45)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              textAlign: "center",
              "&:hover": {
                transform: "translateY(-5px)",
                borderColor: "#3b82f6ff",
            },
            }}
          >
            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Sou um Analista, Desenvolvedor e Designer de sistema, apaixonado
              por criar interfaces e experiências digitais, trabalho na
              interseção entre código e design. Além de ser apaixonado pelo
              design e front-end, também estou me aprofundando no desenvolvimento
              back-end para me tornar um desenvolvedor full-stack, também tenho interesse no desenvolvimento mobile. Gosto também
              de entender todo o funcionamento e processos através da Engenharia
              de Software e QA. Busco constantemente aprimorar minhas habilidades
              e aprender novas tecnologias para entregar soluções inovadoras e
              eficientes.
            </Typography>

            <MotionAvatar
              src={minhaFoto}
              alt="Carlos"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              sx={{
                width: 140,
                height: 140,
                borderRadius: "16px",
                border: "3px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 10px 30px rgba(2,6,23,0.5), 0 0 15px rgba(96,165,250,0.3)",
                background:
                  "linear-gradient(145deg, rgba(17,25,40,0.9), rgba(17,25,40,0.7))",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
