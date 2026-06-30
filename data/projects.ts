export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  link: string;
  github?: string;
  featured?: boolean;
  tone: "pink" | "paper" | "black" | "gray";
};

// TODO: substitua estes projetos de demonstração pelos projetos reais da Mayza.
export const projects: Project[] = [
  {
    slug: "landing-page-autoral",
    name: "Landing page autoral",
    category: "Front-end / Conversão",
    description:
      "Experiência responsiva com direção visual editorial, componentes reutilizáveis e animações leves.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    challenge: "Transformar uma proposta de valor complexa em uma jornada clara.",
    solution: "Arquitetura de informação, hierarquia visual e interações orientadas à leitura.",
    link: "#adicionar-link-projeto-1",
    github: "#adicionar-github-projeto-1",
    featured: true,
    tone: "pink",
  },
  {
    slug: "dashboard-operacional",
    name: "Dashboard operacional",
    category: "Produto digital",
    description:
      "Interface para acompanhar indicadores e organizar informações sem comprometer a clareza.",
    technologies: ["React", "TypeScript", "CSS"],
    challenge: "Exibir dados densos sem criar sobrecarga visual.",
    solution: "Componentes consistentes, agrupamento lógico e estados de interface bem definidos.",
    link: "#adicionar-link-projeto-2",
    tone: "black",
  },
  {
    slug: "site-institucional",
    name: "Site institucional",
    category: "WordPress",
    description:
      "Site gerenciável, responsivo e preparado para apresentar serviços com credibilidade.",
    technologies: ["WordPress", "Elementor", "CSS"],
    challenge: "Equilibrar autonomia do cliente e consistência visual.",
    solution: "Sistema de seções reutilizáveis e padrões claros de edição.",
    link: "#adicionar-link-projeto-3",
    tone: "paper",
  },
  {
    slug: "portfolio-interativo",
    name: "Portfólio interativo",
    category: "Motion / Desenvolvimento",
    description:
      "Narrativa de scroll que transforma trajetória profissional em uma experiência memorável.",
    technologies: ["Next.js", "GSAP", "Tailwind"],
    challenge: "Criar movimento sem prejudicar leitura e performance.",
    solution: "Animações progressivas, breakpoints específicos e suporte a reduced motion.",
    link: "#adicionar-link-projeto-4",
    github: "#adicionar-github-projeto-4",
    tone: "gray",
  },
];
