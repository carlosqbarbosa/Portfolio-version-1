import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/ProjectsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Experience from "../components/Experience";

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
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
