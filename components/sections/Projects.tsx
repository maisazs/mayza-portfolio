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
      const cards =
        gsap.utils.toArray<HTMLElement>(".project-card");

      const mobileHeading =
        root.current?.querySelector<HTMLElement>(
          ".projects__mobile-heading",
        );

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion:
            "(prefers-reduced-motion: no-preference)",
          mobile:
            "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { motion, mobile } =
            context.conditions as {
              motion: boolean;
              mobile: boolean;
            };

          if (mobile && mobileHeading) {
            gsap.from(mobileHeading, {
              y: 62,
              autoAlpha: 0,
              duration: 0.82,
              ease: "power3.out",

              scrollTrigger: {
                trigger: mobileHeading,
                start: "top 86%",
                once: true,
              },
            });
          }

          if (motion) {
            cards.forEach((card, index) => {
              gsap.from(card, {
                y: index % 2 === 0 ? 58 : 88,
                rotate:
                  index % 2 === 0 ? -0.6 : 0.8,
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
          }
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
      aria-labelledby="projects-title"
    >
      {/*
       * Título acessível da seção.
       * No desktop, o título visual aparece dentro da cobertura
       * de nuvens da Skills. No mobile, ele aparece abaixo.
       */}
      <h2
        id="projects-title"
        className="projects__sr-title"
      >
        Alguns projetos que desenvolvi.
      </h2>

      <div className="projects__mobile-heading section-shell">
        <SectionHeading
          title="Alguns projetos que desenvolvi."
          description="Uma seleção de sites e interfaces que desenvolvi, unindo código, responsividade e atenção aos detalhes."
        />
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
