const base = import.meta.env.BASE_URL; // adiciona o caminho base automático

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags?: string[];
  type?: string;
  focus?: string[];
}

export const projects: Project[] = [
  {
    id: "clinicbeauty",
    title: "Clinic Beauty",
    description: "Sistema de agendamento com painel administrativo.",
    image: `${base}projects/clinicbeauty.png`,
    github: "https://github.com/carlosqbarbosa/clinicbeauty",
    demo: "https://carlosqbarbosa.github.io/ClinicBeauty/",
    tags: ["Vue.js", "Tailwind CSS", "Vite"],
    type: "Projeto Pessoal",
    focus: ["Frontend", "Design"],
  },
  {
    id: "zenup",
    title: "ZenUp",
    description:
      "Sistema de monitoramento de saúde mental de colaboradores e estudantes.",
    image: `${base}projects/zenUp.png`,
    github: "https://github.com/carlosqbarbosa/ZenUp-Frontend",
    demo: "https://www.figma.com/design/PWq19a6yADxjTVniC6Il6o/ZenUp?node-id=0-1&t=AqU2pcbIjwc8X8kz-1",
    tags: ["React.js", "Material UI", "Vite", "Web", "Mobile"],
    type: "Projeto Acadêmico",
    focus: ["Frontend", "Design", "Mobile", "Web"],
  },
  {
    id: "fraudx",
    title: "FraudX",
    description:
      "Sistema de Detecção de Fraudes em Transações Financeiras.",
    image: `${base}projects/fraudx.png`,
    github: "https://github.com/carlosqbarbosa/FraudX",
    demo: "https://www.figma.com/design/vrfC9YIaYqdr71z2RVQoGU/FraudX---Projeto-IA?node-id=0-1&t=AhqhO2lic01Mmfv9-1",
    tags: ["Python", "Django", "Machine Learning", "Scikit-learn"],
    type: "Projeto Acadêmico",
    focus: ["Fullstack", "Machine Learning"],
  },
  {
    id: "diabetter",
    title: "dIa Better",
    description:
      "Sistema para prever a probabilidade de uma pessoa ter diabetes com base em informações clínicas e pessoais.",
    image: `${base}projects/dIABetter.png`,
    github: "https://github.com/Marolanda/projeto-dIA.better",
    tags: ["Python", "Flask", "Machine Learning", "Pandas"],
    type: "Projeto Acadêmico",
    focus: ["Fullstack", "Machine Learning"],
  },
  {
    id: "skilltrack",
    title: "SkillTrack",
    description:
      "Auxiliar empresas no gerenciamento das informações de seus colaboradores.",
    image: `${base}projects/SkillTrack.png`,
    github: "https://github.com/edbbarros/Skilltrack",
    tags: ["Java", "APIs REST", "Spring Boot", "SQL"],
    type: "Projeto Acadêmico",
    focus: ["Fullstack"],
  },
  {
    id: "travelgram",
    title: "Travelgram",
    description: "Rede social minimalista para compartilhar viagens.",
    image: `${base}projects/travelgram.png`,
    github: "https://github.com/carlosqbarbosa/travelgram",
    demo: "https://carlosqbarbosa.github.io/travelgram/",
    tags: ["CSS", "HTML", "Design"],
    type: "Projeto - Curso",
    focus: ["Design", "Frontend"],
  },
  {
    id: "Paginadereceita",
    title: "Página de Receita",
    description: "Página web para exibir receita culinária.",
    image: `${base}projects/PaginaReceita.png`,
    github:
      "https://github.com/carlosqbarbosa/projeto-receitas-forma-o-fullstack",
    tags: ["HTML", "CSS"],
    type: "Projeto - Curso",
    focus: ["Frontend"],
  },
  {
    id: "reforcamais",
    title: "Reforça+",
    description: "Protótipo de plataforma educacional para reforço escolar.",
    image: `${base}projects/reforcar.png`,
    demo: "https://www.figma.com/design/iD2RxGvVDjf7qdl11LCida/REFOR%C3%87O-?node-id=0-1&t=R6xAJlcQVoyVGYzl-1",
    tags: ["Figma", "Design", "Web"],
    type: "Projeto Acadêmico",
    focus: ["Design"],
  },
  {
    id: "connectmar",
    title: "ConnectMar",
    description:
      "Protótipo de aplicativo móvel para monitoramento ambiental marinho.",
    image: `${base}projects/logoConnectMar 1.png`,
    demo: "https://www.figma.com/design/VqxxWI5rUCzo5d51W5qcxT/connectMar?node-id=1-2&t=bgKxfSvwZnXZFEA4-1",
    tags: ["Figma", "Design", "Mobile"],
    type: "Projeto Acadêmico",
    focus: ["Design"],
  },
  {
    id: "smartchill",
    title: "SmartChill",
    description:
      "Protótipo de aplicativo móvel para geladeira inteligente.",
    image: `${base}projects/SmartChill.png`,
    demo: "https://www.figma.com/design/Sorew7ohqjf7yRupGKSX7M/SmartChill?node-id=0-1&t=OE4ABl2hFXHwPr9x-1",
    tags: ["Figma", "Design", "Mobile"],
    type: "Projeto Acadêmico",
    focus: ["Design"],
  },
];

export default projects;
