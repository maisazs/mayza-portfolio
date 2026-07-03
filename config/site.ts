import { withBasePath } from "@/lib/paths";

export const siteConfig = {
  name: "Mayza Ester",
  role: "Engenheira de Software & Front-end Developer",
  description:
    "Desenvolvo interfaces que aproximam pessoas, ideias e produtos.",

  email: "contatomayza@hotmail.com",

  // Substitua pelos dados reais.
  phoneLabel: "(31)99216-6917",
  whatsappUrl: "https://wa.me/5531992166917",
  linkedinUrl: "https://www.linkedin.com/in/mayza-ester-assis-silva-6a9b55233?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  githubUrl: "https://www.instagram.com/mayza.dev?igsh=MWVsMW8xa2ZtdnV6Zg%3D%3D&utm_source=qr",

  cvUrl: withBasePath("/cv/ADICIONAR-CV-AQUI.pdf"),

  formEndpoint: "https://formspree.io/f/xojoydjd",
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