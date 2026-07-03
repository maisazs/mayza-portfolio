import { withBasePath } from "@/lib/paths";

export const siteConfig = {
  name: "Mayza Ester",
  role:
    "Engenheira de Software & Front-end Developer",
  description:
    "Desenvolvo interfaces que aproximam pessoas, ideias e produtos.",

  email: "contatomayza@hotmail.com",

  phoneLabel: "(31) 99216-6917",
  whatsappUrl:
    "https://wa.me/5531992166917",

  linkedinUrl:
    "https://www.linkedin.com/in/mayza-ester-assis-silva-6a9b55233?utm_source=share_via&utm_content=profile&utm_medium=member_ios",

  /*
   * Mantido com o valor atual para não quebrar o
   * Instagram que já usa githubUrl em outros componentes.
   */
  githubUrl:
    "https://www.instagram.com/mayza.dev?igsh=MWVsMW8xa2ZtdnV6Zg%3D%3D&utm_source=qr",

  homeUrl:
    withBasePath("/#inicio"),

  projectsUrl:
    withBasePath("/projetos/"),

  cvUrl:
    withBasePath(
      "/cv/ADICIONAR-CV-AQUI.pdf",
    ),

  formEndpoint:
    "https://formspree.io/f/xojoydjd",
};

/*
 * Estes itens são somente as âncoras das seções da home.
 * Assim, "Projetos" continua levando até a seção da página inicial.
 */
export const navItems = [
  {
    label: "Sobre",
    href: withBasePath("/#sobre"),
  },
  {
    label: "Trajetória",
    href: withBasePath("/#trajetoria"),
  },
  {
    label: "Skills",
    href: withBasePath("/#skills"),
  },
  {
    label: "Projetos",
    href: withBasePath("/#projetos"),
  },
  {
    label: "Contato",
    href: withBasePath("/#contato"),
  },
] as const;

/*
 * Link independente exibido depois de todas as âncoras.
 * Ele abre a página interna com o arquivo completo de projetos.
 */
export const projectsArchiveNavItem = {
  label: "Arquivo de projetos",
  href: siteConfig.projectsUrl,
} as const;
