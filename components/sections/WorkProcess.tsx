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

      const heading =
        section.querySelector<HTMLElement>(
          ".process__reveal-content > .section-heading",
        );

      const notes =
        section.querySelector<HTMLElement>(
          ".process__reveal-content > .process__notes",
        );

      if (!content || !heading || !notes) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(content, {
            autoAlpha: 1,
          });

          /*
           * Como a seção Process começa com margin-top: -100svh,
           * este gatilho inicia exatamente quando o final de
           * Projects alcança a base da viewport.
           *
           * O fim considera também os 120px da borda de nuvens.
           */
          const revealTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () =>
                `+=${window.innerHeight + 120}`,
              scrub: 0.82,
              invalidateOnRefresh: true,
            },
          });

          revealTimeline
            .fromTo(
              heading,
              {
                y: 46,
                autoAlpha: 0.18,
              },
              {
                y: 16,
                autoAlpha: 0.58,
                ease: "none",
                duration: 0.72,
              },
              0,
            )
            .fromTo(
              notes,
              {
                y: 68,
                autoAlpha: 0.08,
              },
              {
                y: 24,
                autoAlpha: 0.44,
                ease: "none",
                duration: 0.72,
              },
              0.08,
            )
            .to(
              heading,
              {
                y: 0,
                autoAlpha: 1,
                ease: "none",
                duration: 0.28,
              },
              0.72,
            )
            .to(
              notes,
              {
                y: 0,
                autoAlpha: 1,
                ease: "none",
                duration: 0.26,
              },
              0.74,
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
