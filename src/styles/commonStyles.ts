export const cardHoverStyle = (color: string = "rgba(255,255,255,0.08)") => ({
  p: { xs: 3, md: 4 },
  borderRadius: 3,
  border: "1px solid rgba(255,255,255,0.08)",
  backgroundColor: "rgba(255,255,255,0.02)",
  boxShadow: "0 10px 40px rgba(2,6,23,0.4)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: color,
    boxShadow: `0 12px 45px ${color}40`,
  },
});

