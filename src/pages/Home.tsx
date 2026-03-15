import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/ProjectsComponents/ProjectsSection";
import Contact from "../components/Contact";
import CareerSection from "../components/CareerSection"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Carlos Barbosa — Desenvolvedor & Designer</title>
        <meta
          name="description"
          content="Portfólio de Carlos Barbosa, Desenvolvedor e Designer criando experiências digitais modernas."
        />
      </Helmet>

      <Header />
      <Hero />
      <Projects />
      <About />
      <CareerSection />
      <Contact />
    </>
  );
}
