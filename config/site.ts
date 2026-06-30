import { withBasePath } from "@/lib/paths";

export const siteConfig = {
  name: "Mayza Ester",
  role: "Engenheira de Software & Front-end Developer",
  description:
    "Desenvolvo interfaces que aproximam pessoas, ideias e produtos.",

  email: "contatomayzaester@gmail.com",

  // Substitua pelos dados reais.
  phoneLabel: "ADICIONAR TELEFONE",
  whatsappUrl: "#adicionar-whatsapp",
  linkedinUrl: "#adicionar-linkedin",
  githubUrl: "#adicionar-github",

  cvUrl: withBasePath("/cv/ADICIONAR-CV-AQUI.pdf"),
};

export const navItems = [
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Trajetória",
    href: "#trajetoria",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projetos",
    href: "#projetos",
  },
  {
    label: "Contato",
    href: "#contato",
  },
] as const;