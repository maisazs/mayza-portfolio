export type Skill = {
  index: string;
  name: string;
  description: string;
  note: string;
};

export const skills: Skill[] = [
  {
    index: "01",
    name: "Next.js",
    description: "Aplicações modernas, componentizadas e preparadas para crescer.",
    note: "APP ROUTER / REACT",
  },
  {
    index: "02",
    name: "TypeScript",
    description: "Código mais seguro, previsível e fácil de manter em equipe.",
    note: "TYPES / DX",
  },
  {
    index: "03",
    name: "JavaScript",
    description: "Interações, comportamento e lógica para experiências funcionais.",
    note: "ESNEXT / DOM",
  },
  {
    index: "04",
    name: "Tailwind CSS",
    description: "Sistemas visuais consistentes com agilidade e responsividade.",
    note: "UI / TOKENS",
  },
  {
    index: "05",
    name: "HTML + CSS",
    description: "Estrutura semântica, acessível e visualmente bem resolvida.",
    note: "SEMANTICS / A11Y",
  },
  {
    index: "06",
    name: "GSAP",
    description: "Movimento com intenção, ritmo e narrativa orientada pelo scroll.",
    note: "MOTION / SCROLL",
  },
  {
    index: "07",
    name: "WordPress",
    description: "Páginas gerenciáveis e experiências digitais para negócios reais.",
    note: "CMS / ELEMENTOR",
  },
];
