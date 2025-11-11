import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Container, Typography } from "@mui/material";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Typography>Projeto não encontrado.</Typography>;

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4">{project.title}</Typography>
      <Typography color="text.secondary" mb={3}>
        {project.description}
      </Typography>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </Container>
  );
}
