import type { Metadata } from "next";
import type { CSSProperties } from "react";

import { PageLoader } from "@/components/ui/PageLoader";
import { withBasePath } from "@/lib/paths";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "Mayza Ester — Front-end Developer",
  description:
    "Portfólio de Mayza Ester, engenheira de software e desenvolvedora front-end.",
};

const textureVariables = {
  "--paper-texture": `url("${withBasePath(
    "/textures/paper.png",
  )}")`,
  "--numeric-texture": `url("${withBasePath(
    "/textures/numeric-grid.png",
  )}")`,
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="is-loading"
        style={textureVariables}
      >
        <PageLoader />

        {children}
      </body>
    </html>
  );
}
