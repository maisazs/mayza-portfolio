export type SkillOrbit = "inner" | "middle" | "outer";

export type SkillIconName =
  | "react"
  | "next"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "html"
  | "css"
  | "gsap"
  | "wordpress";

export type Skill = {
  id: string;
  name: string;
  icon: SkillIconName;
  orbit: SkillOrbit;
  angle: number;
};

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    icon: "react",
    orbit: "inner",
    angle: -90,
  },
  {
    id: "next",
    name: "Next.js",
    icon: "next",
    orbit: "inner",
    angle: 30,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    orbit: "inner",
    angle: 150,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
    orbit: "middle",
    angle: -20,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind",
    orbit: "middle",
    angle: 100,
  },
  {
    id: "gsap",
    name: "GSAP",
    icon: "gsap",
    orbit: "middle",
    angle: 220,
  },
  {
    id: "html",
    name: "HTML",
    icon: "html",
    orbit: "outer",
    angle: 15,
  },
  {
    id: "css",
    name: "CSS",
    icon: "css",
    orbit: "outer",
    angle: 135,
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: "wordpress",
    orbit: "outer",
    angle: 255,
  },
];
