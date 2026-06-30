import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayza Ester — Front-end Developer",
  description:
    "Portfólio de Mayza Ester, engenheira de software e desenvolvedora front-end.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
