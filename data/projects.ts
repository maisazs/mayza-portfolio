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
  showOnHome?: boolean;
  tone:
  | "pink"
  | "paper"
  | "black"
  | "gray";
  image?: string;
};

export const projects: Project[] = [
  /*
   * PROJETOS PRINCIPAIS DA HOME
   */

  {
    slug: "dra-luiza-matte-fujii",
    name: "Dra. Luiza Matté Fujii",
    category:
      "Site Institucional · Psiquiatria",
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
    link:
      "https://draluizamattefujii.com.br",
    showOnHome: true,
    tone: "paper",
    image: withBasePath(
      "/images/luiza-matte-banner.png",
    ),
  },
  {
    slug: "codev-leadership-school",
    name: "Code V Leadership School",
    category:
      "Site Institucional · Educação e Liderança",
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
    showOnHome: true,
    tone: "black",
    image: withBasePath(
      "/images/codev-banner.png",
    ),
  },
  {
    slug: "dr-hugo-melo",
    name: "Dr. Hugo Melo",
    category:
      "Site Institucional · Saúde Integrativa",
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
    showOnHome: true,
    tone: "gray",
    image: withBasePath(
      "/images/hugo-melo-banner.png",
    ),
  },
  {
    slug: "dra-gabriela-kettner",
    name: "Dra. Gabriela Kettner",
    category:
      "Site Institucional · Oftalmologia",
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
    link:
      "https://dragabrielakettner.com",
    showOnHome: true,
    tone: "paper",
    image: withBasePath(
      "/images/gabriela-kettner-banner.png",
    ),
  },

  /*
   * PROJETOS EXIBIDOS SOMENTE NO ARQUIVO
   */

  {
    slug: "bere-suzuki-loja-lucrativa",
    name: "Bêre Suzuki — Loja Lucrativa",
    category:
      "Landing Page · Mentoria para Lojistas",
    description:
      "Landing page desenvolvida para apresentar a oferta Loja Lucrativa e conduzir lojistas por uma narrativa de transformação, método, prova e conversão.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Transformar uma oferta educacional voltada a lojistas em uma comunicação objetiva, valorizando aplicabilidade, posicionamento e resultado.",
    solution:
      "Estruturação da página em problema, oportunidade, método, benefícios, autoridade, prova social e chamadas estratégicas para inscrição.",
    link:
      "https://beresuzuki.com.br/loja-lucrativa/",
    showOnHome: false,
    tone: "pink",
    image: withBasePath(
      "/images/loja-lucrativa-banner.png",
    ),
  },
  {
    slug: "viver-de-proteses",
    name: "Viver de Próteses",
    category:
      "Landing Page · Prótese Capilar",
    description:
      "Página de vendas voltada ao mercado de prótese capilar, organizando oportunidade profissional, benefícios, formação e chamada para ação.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Apresentar um mercado especializado de forma acessível, reduzindo dúvidas e tornando clara a transformação oferecida pela capacitação.",
    solution:
      "Criação de uma jornada com contexto de mercado, proposta de valor, conteúdo, diferenciais, provas e conversão para a oferta.",
    link:
      "https://viverdeproteses.com.br/protese-capilar/",
    showOnHome: false,
    tone: "gray",
    image: withBasePath(
      "/images/jotta-banner.png",
    ),
  },
  {
    slug: "agora-eu-sou-a-chefe-novo-mapa",
    name: "Agora Eu Sou a Chefe",
    category:
      "Landing Page · Imersão Novo Mapa",
    description:
      "Landing page criada para divulgar a Imersão Novo Mapa, conectando transformação, conteúdo, experiência e inscrição.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Traduzir a proposta de uma experiência imersiva em uma narrativa emocional, clara e orientada à decisão.",
    solution:
      "Organização da página em promessa, identificação com o público, agenda, entregáveis, autoridade, prova e chamadas para inscrição.",
    link:
      "https://agoraeusouachefe.com.br/imersao-novo-mapa/",
    showOnHome: false,
    tone: "black",
    image: withBasePath(
      "/images/novo-mapa-banner.png",
    ),
  },
  {
    slug: "legendarios-vale-do-sol",
    name: "Legendários Vale do Sol",
    category:
      "Site Institucional · Comunidade e Eventos",
    description:
      "Site institucional desenvolvido para apresentar a comunidade regional, sua proposta, agenda e caminhos de participação.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Reunir identidade, propósito e informações práticas em uma experiência capaz de mobilizar novos participantes.",
    solution:
      "Construção de uma jornada com apresentação do movimento, valores, eventos, registros e chamadas claras para participação.",
    link:
      "https://legendariosvaledosol.com.br",
    showOnHome: false,
    tone: "paper",
    image: withBasePath(
      "/images/legendarios-banner.png",
    ),
  },
  {
    slug: "segue-a-dii-lpm",
    name: "Segue a Dii — LPM",
    category:
      "Landing Page · Produto Digital",
    description:
      "Landing page desenvolvida para apresentar o programa LPM, organizando proposta, benefícios, conteúdo e conversão em uma jornada direta.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Transformar uma oferta digital em uma página fácil de compreender, mantendo personalidade e ritmo de leitura.",
    solution:
      "Estruturação de uma narrativa com promessa, contexto, entregáveis, diferenciais, prova e chamadas recorrentes para ação.",
    link:
      "https://segueadii.com.br/lpm-v1/",
    showOnHome: false,
    tone: "pink",
    image: withBasePath(
      "/images/lpm-banner.jpg",
    ),
  },
  {
    slug: "caisan-vision",
    name: "Caisan Vision",
    category:
      "Landing Page · Marca e Conversão",
    description:
      "Landing page criada para apresentar a Caisan Vision, combinando clareza, autoridade e uma jornada orientada à conversão.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Organizar uma proposta de valor especializada de maneira simples, confiável e visualmente consistente.",
    solution:
      "Desenvolvimento de uma estrutura com posicionamento, benefícios, diferenciais, explicação da solução e chamadas estratégicas para contato.",
    link:
      "https://caisanvision.com.br/caisan-vision/",
    showOnHome: false,
    tone: "paper",
    image: withBasePath(
      "/images/caisan-banner.png",
    ),
  },
  {
    slug: "agencia-tuca",
    name: "Agência Tuca",
    category:
      "Site Institucional · Branding e Marketing",
    description:
      "Site institucional desenvolvido para apresentar uma abordagem de branding baseada em personalidade, posicionamento e conexão entre marcas e público.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Demonstrar uma metodologia estratégica e autoral sem perder leveza, personalidade e objetividade comercial.",
    solution:
      "Construção de uma experiência com posicionamento, portfólio, método, serviços, diferenciais, perguntas frequentes e conversão.",
    link:
      "https://agtuca.com.br",
    showOnHome: false,
    tone: "black",
    image: withBasePath(
      "/images/tuca-banner.png",
    ),
  },
  {
    slug: "prado-e-co",
    name: "Prado & Co",
    category:
      "Site Institucional · Growth e Vendas",
    description:
      "Site institucional criado para apresentar uma operação de crescimento que conecta estratégia, tecnologia, marketing e estrutura comercial.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Organizar um portfólio amplo de soluções e provas de resultado sem tornar a navegação excessivamente complexa.",
    solution:
      "Estruturação da experiência em diagnóstico, método, soluções, equipe, áreas de atuação, cases e formulários de conversão.",
    link:
      "https://weareprado.com/weareprado/",
    showOnHome: false,
    tone: "pink",
    image: withBasePath(
      "/images/prado-banner.png",
    ),
  },
  {
    slug: "bionic-pulse",
    name: "Bionic Pulse",
    category:
      "Site Institucional · Marca e Soluções",
    description:
      "Site institucional desenvolvido para apresentar a Bionic Pulse e organizar sua proposta de valor, soluções e diferenciais em uma experiência contemporânea.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "CSS",
      "JavaScript",
    ],
    challenge:
      "Transformar uma proposta de marca ampla em uma narrativa clara, moderna e fácil de explorar.",
    solution:
      "Criação de uma arquitetura com posicionamento, apresentação das soluções, diferenciais, provas e chamadas direcionadas para contato.",
    link:
      "https://bionicpulse.com.br",
    showOnHome: false,
    tone: "gray",
    image: withBasePath(
      "/images/bionic-banner.png",
    ),
  },
];

/*
 * Somente os projetos com showOnHome: true
 * aparecem na seção de projetos da home.
 */
export const homeProjects =
  projects.filter(
    (project) => project.showOnHome,
  );
