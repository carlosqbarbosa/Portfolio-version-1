import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}
        >
          <div>
            <span style={{ color: "#8b5cf6", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
              Portfólio
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
              Projetos{" "}
              <span style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Selecionados
              </span>
            </h2>
          </div>

          {/* Arrows */}
          <div className="carousel-arrows" style={{ display: "flex", gap: 8 }}>
            {[
              { label: "Anterior", fn: () => emblaApi?.scrollPrev(), active: canScrollPrev, icon: "‹" },
              { label: "Próximo",  fn: () => emblaApi?.scrollNext(), active: canScrollNext, icon: "›" },
            ].map(({ label, fn, active, icon }) => (
              <button
                key={label}
                onClick={fn}
                disabled={!active}
                aria-label={label}
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  color: "inherit", fontSize: 20, lineHeight: 1,
                  cursor: active ? "pointer" : "not-allowed",
                  opacity: active ? 1 : 0.3,
                  transition: "border-color 0.2s, opacity 0.2s",
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div ref={emblaRef} style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", marginLeft: -16 }}>
            {projects.map((project, i) => (
              <div key={project.id} className="carousel-slide" style={{ flex: "0 0 100%", minWidth: 0, paddingLeft: 16 }}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Projeto ${i + 1}`}
              style={{
                width: i === current ? 24 : 8, height: 8, borderRadius: 4,
                border: "none", padding: 0, cursor: "pointer",
                background: i === current ? "#8b5cf6" : "rgba(255,255,255,0.2)",
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px)  { .carousel-slide { flex: 0 0 50%     !important; } }
        @media (min-width: 1024px) { .carousel-slide { flex: 0 0 33.333% !important; } }
        @media (max-width: 767px)  { .carousel-arrows { display: none    !important; } }
      `}</style>
    </section>
  );
};

export default ProjectsSection;