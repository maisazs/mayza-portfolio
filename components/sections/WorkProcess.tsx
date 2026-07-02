"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    index: "01",
    title: "Entendimento",
    description:
      "Compreendo contexto, objetivo, público e restrições antes de abrir o editor.",
  },
  {
    index: "02",
    title: "Estruturação",
    description:
      "Organizo conteúdo, componentes, comportamento e hierarquia da experiência.",
  },
  {
    index: "03",
    title: "Desenvolvimento",
    description:
      "Transformo a proposta em uma interface responsiva, funcional e bem construída.",
  },
  {
    index: "04",
    title: "Refinamento",
    description:
      "Reviso detalhes, acessibilidade, performance e comportamento em diferentes telas.",
  },
];

export function WorkProcess() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;

      if (!section) {
        return;
      }

      const content =
        section.querySelector<HTMLElement>(
          ".process__reveal-content",
        );

      const projectsSection =
        document.querySelector<HTMLElement>(".projects");

      if (!content || !projectsSection) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          /*
           * O conteúdo permanece totalmente parado.
           * Somente a opacidade evolui enquanto a borda
           * de nuvens sobe e descobre a seção por baixo.
           */
          gsap.set(content, {
            y: 0,
            autoAlpha: 0.18,
          });

          const revealTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: projectsSection,
              start: "bottom bottom",
              end: "bottom top-=120",
              scrub: 0.84,
              invalidateOnRefresh: true,
            },
          });

          revealTimeline
            .to(
              content,
              {
                autoAlpha: 0.48,
                ease: "none",
                duration: 0.8,
              },
              0,
            )
            .to(
              content,
              {
                autoAlpha: 1,
                ease: "none",
                duration: 0.2,
              },
              0.8,
            );

          return () => {
            revealTimeline.kill();
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    {
      scope: root,
    },
  );

  return (
    <section
      ref={root}
      id="processo"
      className="process process--actual"
    >
      <div className="process__sticky section-shell">
        <div className="process__reveal-content">
          <SectionHeading
            eyebrow="Como trabalho / 06"
            title="Um processo leve, organizado e próximo."
            description="Boa execução começa com clareza. Cada etapa reduz ruído e aumenta a qualidade da entrega."
          />

          <div className="process__notes">
            {steps.map((step, index) => (
              <article
                key={step.index}
                className={`process-note process-note--${index + 1}`}
              >
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <i aria-hidden="true">✦</i>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
