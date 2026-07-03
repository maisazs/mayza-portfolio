import { withBasePath } from "@/lib/paths";

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
  image: string;
};

export const projects: Project[] = [
  {
    slug: "dra-luiza-matte-fujii",
    name: "Dra. Luiza Matté Fujii",
    category: "Site Institucional · Psiquiatria",
    description:
      "Site institucional desenvolvido para posicionar um atendimento psiquiátrico humano, individualizado e baseado em evidências.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Comunicar acolhimento e autoridade médica sem tornar a experiência fria, genérica ou excessivamente clínica.",
    solution:
      "Criação de uma narrativa centrada na pessoa, com hierarquia clara, explicação do acompanhamento, prova social, perguntas frequentes e chamadas estratégicas para agendamento.",
    link: "https://draluizamattefujii.com.br",
    tone: "paper",
    image: withBasePath("/images/luiza-matte-banner.png"),
  },
  {
    slug: "codev-leadership-school",
    name: "Code V Leadership School",
    category: "Site Institucional · Educação e Liderança",
    description:
      "Ecossistema digital criado para apresentar a filosofia, os programas e a jornada de formação da Code V Leadership School.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Organizar uma oferta ampla e conceitual sem diluir a mensagem central de identidade, liderança e propósito.",
    solution:
      "Construção de uma experiência narrativa estruturada por etapas, conectando posicionamento, programas, comunidade, prova social e conversão.",
    link: "https://codev.pt",
    featured: true,
    tone: "black",
    image: withBasePath("/images/codev-banner.png"),
  },
  {
    slug: "dr-hugo-melo",
    name: "Dr. Hugo Melo",
    category: "Site Institucional · Saúde Integrativa",
    description:
      "Site institucional para posicionar um atendimento otorrinolaringológico clínico e cirúrgico com abordagem integrativa.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Explicar uma proposta médica ampla e diferenciada mantendo clareza, confiança e facilidade de compreensão.",
    solution:
      "Desenvolvimento de uma jornada baseada em sintomas, diferenciais, tratamentos, autoridade profissional, depoimentos e agendamento direto pelo WhatsApp.",
    link: "https://drhugomelo.com",
    tone: "gray",
    image: withBasePath("/images/hugo-melo-banner.png"),
  },
  {
    slug: "dra-gabriela-kettner",
    name: "Dra. Gabriela Kettner",
    category: "Site Institucional · Oftalmologia",
    description:
      "Site institucional voltado à oftalmologia geral, cirurgia de catarata e cirurgia refrativa, com foco em segurança e acolhimento.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Reduzir o medo relacionado aos procedimentos oculares e transformar informações técnicas em uma decisão mais segura para o paciente.",
    solution:
      "Uso de conteúdo educativo, narrativa pessoal, diferenciais de atendimento, depoimentos e chamadas claras para conduzir o visitante até o agendamento.",
    link: "https://dragabrielakettner.com",
    tone: "paper",
    image: withBasePath("/images/gabriela-kettner-banner.png"),
  },
];