import { motion } from "framer-motion";
import { ExternalLink, Github, Figma } from "lucide-react";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardStyle: React.CSSProperties = {
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "border-color 0.3s, box-shadow 0.3s",
  boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
};

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: 13,
  color: "rgba(255,255,255,0.5)",
  textDecoration: "none",
  transition: "color 0.2s",
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ height: "100%" }}
    >
      <div
        style={cardStyle}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(139,92,246,0.3)";
          el.style.boxShadow = "0 8px 32px rgba(139,92,246,0.12)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(255,255,255,0.08)";
          el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.15)";
        }}
      >
        {/* Image */}
        <div style={{ aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: project.image?.endsWith(".svg") ? "contain" : "cover",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: 20, display: "flex", flexDirection: "column", flexGrow: 1, gap: 12 }}>
          <div>
            <h3 style={{ margin: "0 0 6px", fontSize: "1.05rem", fontWeight: 600 }}>
              {project.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "2px 8px",
                    borderRadius: 4,
                    fontSize: 11,
                    background: "rgba(139,92,246,0.12)",
                    color: "#a78bfa",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div style={{ display: "flex", gap: 16, marginTop: "auto" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
              >
                <Github size={15} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
              >
                <ExternalLink size={15} /> Live
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
              >
                <Figma size={15} /> Figma
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;