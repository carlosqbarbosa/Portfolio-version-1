import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Carlos Barbosa \u2014 Desenvolvedor & Designer" }), _jsx("meta", { name: "description", content: "Portf\u00F3lio de Carlos Barbosa, Desenvolvedor e Designer criando experi\u00EAncias digitais modernas." })] }), _jsx(Header, {}), _jsx(Hero, {}), _jsx(About, {}), _jsx(Experience, {}), _jsx(Education, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
