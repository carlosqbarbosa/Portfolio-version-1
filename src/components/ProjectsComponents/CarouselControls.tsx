import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";

interface CarouselControlsProps {
  emblaApi: EmblaCarouselType | undefined;
  total: number;
  current: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const arrowStyle = (active: boolean): React.CSSProperties => ({
  padding: 8,
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "inherit",
  cursor: active ? "pointer" : "not-allowed",
  opacity: active ? 1 : 0.3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "border-color 0.2s, opacity 0.2s",
});

const CarouselControls = ({
  emblaApi,
  total,
  current,
  canScrollPrev,
  canScrollNext,
}: CarouselControlsProps) => {
  return (
    <>
      <div className="carousel-arrows" style={{ display: "flex", gap: 8 }}>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          style={arrowStyle(canScrollPrev)}
          onMouseEnter={(e) => {
            if (canScrollPrev)
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(139,92,246,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
          }}
          aria-label="Anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          style={arrowStyle(canScrollNext)}
          onMouseEnter={(e) => {
            if (canScrollNext)
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(139,92,246,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
          }}
          aria-label="Próximo"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir para projeto ${i + 1}`}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              background: i === current ? "#8b5cf6" : "rgba(255,255,255,0.2)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s, background 0.3s",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselControls;