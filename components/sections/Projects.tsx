"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "@/lib/gsap";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectVisual({
  name,
  category,
}: {
  name: string;
  category: string;
}) {
  return (
    <div
      className="project-visual"
      role="img"
      aria-label={`Espaço reservado para a imagem do projeto ${name}`}
    >
      <div className="project-visual__browser">
        <span />
        <span />
        <span />
      </div>

      <div className="project-visual__content">
        <span>ADICIONAR</span>
        <strong>CAPA DO PROJETO</strong>
        <small>public/projects/</small>
      </div>

      <span className="project-visual__category">
        {category}
      </span>
    </div>
  );
}

export function Projects() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;

      if (!section) {
        return;
      }

      const cards =
        gsap.utils.toArray<HTMLElement>(".project-card");

      const introHeading =
        section.querySelector<HTMLElement>(
          ".projects__intro-heading",
        );

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          mobile: "(max-width: 1023px)",
          reduceMotion:
            "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, mobile, reduceMotion } =
            context.conditions as {
              desktop: boolean;
              mobile: boolean;
              reduceMotion: boolean;
            };

          if (reduceMotion) {
            return;
          }

          /*
           * Enquanto a borda sobe pela viewport,
           * o desenho das nuvens deriva lateralmente.
           * A própria seção subindo produz o movimento vertical.
           */
          gsap.to(section, {
            "--projects-cloud-x-top": "92px",
            "--projects-cloud-x-bottom": "-76px",
            ease: "none",

            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });

          /*
           * No desktop, a tela branca é fixada somente
           * depois que a borda de nuvens alcança o topo.
           * O título entra durante essa etapa.
           */
          if (desktop && introHeading) {
            gsap.set(introHeading, {
              autoAlpha: 0,
              y: 130,
              scale: 0.985,
            });

            gsap.set(".projects__intro-heading .eyebrow", {
              x: -24,
            });

            const revealTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: ".projects__cloud-intro",
                start: "top top",
                end: "+=950",
                pin: true,
                pinSpacing: true,
                scrub: 0.85,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            revealTimeline
              /*
               * Pequena pausa com a viewport totalmente branca.
               */
              .to({}, { duration: 0.16 })

              /*
               * O conteúdo começa a subir somente depois
               * que a cobertura branca está completa.
               */
              .to(introHeading, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
              })

              .to(
                ".projects__intro-heading .eyebrow",
                {
                  x: 0,
                  duration: 0.28,
                  ease: "power2.out",
                },
                "-=0.38",
              )

              .from(
                ".projects__intro-heading .section-title",
                {
                  clipPath: "inset(0 0 100% 0)",
                  y: 45,
                  duration: 0.42,
                  ease: "power3.out",
                },
                "-=0.32",
              )

              .from(
                ".projects__intro-heading .section-description",
                {
                  y: 34,
                  autoAlpha: 0,
                  duration: 0.32,
                  ease: "power2.out",
                },
                "-=0.2",
              )

              /*
               * Mantém a composição visível por um pequeno
               * trecho antes de liberar o restante da seção.
               */
              .to({}, { duration: 0.2 });
          }

          /*
           * No tablet e no celular não usamos pin,
           * mas preservamos a entrada depois da cobertura.
           */
          if (mobile && introHeading) {
            gsap.from(introHeading, {
              y: 68,
              autoAlpha: 0,
              duration: 0.85,
              ease: "power3.out",

              scrollTrigger: {
                trigger: introHeading,
                start: "top 86%",
                once: true,
              },
            });
          }

          /*
           * Os cards entram somente quando a grade começa
           * a alcançar a viewport.
           */
          cards.forEach((card, index) => {
            gsap.from(card, {
              y: index % 2 === 0 ? 58 : 88,
              rotate: index % 2 === 0 ? -0.6 : 0.8,
              opacity: 0,
              duration: 0.9,
              delay: index * 0.035,
              ease: "power3.out",

              scrollTrigger: {
                trigger: card,
                start: "top 84%",
                once: true,
              },
            });
          });
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
      id="projetos"
      className="projects paper-texture"
    >
      {/*
       * Este bloco funciona como a grande área branca.
       * A borda de nuvens chega primeiro; o título aparece
       * apenas quando a viewport já está completamente clara.
       */}
      <div className="projects__cloud-intro">
        <div className="projects__intro-heading section-shell">
          <SectionHeading
            title="Ideias que ganharam estrutura, interface e movimento."
            description="Os cards abaixo estão preparados para receber os projetos reais, capas, links e estudos de caso da Mayza."
          />
        </div>
      </div>

      <div className="projects__content section-shell">
        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`project-card project-card--${project.tone} ${project.featured
                ? "project-card--featured"
                : ""
                }`}
            >
              <a
                className="project-card__visual-link"
                href={project.link}
                aria-label={`Abrir projeto ${project.name}`}
              >
                <ProjectVisual
                  name={project.name}
                  category={project.category}
                />
              </a>

              <div className="project-card__content">
                <div className="project-card__index">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{project.category}</span>
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-card__tags">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                <details className="project-card__details">
                  <summary>Contexto do projeto</summary>

                  <div>
                    <p>
                      <strong>Desafio:</strong>{" "}
                      {project.challenge}
                    </p>

                    <p>
                      <strong>Solução:</strong>{" "}
                      {project.solution}
                    </p>
                  </div>
                </details>

                <div className="project-card__links">
                  <a href={project.link}>
                    Ver projeto{" "}
                    <span aria-hidden="true">↗</span>
                  </a>

                  {project.github ? (
                    <a href={project.github}>
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
