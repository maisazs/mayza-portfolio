"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "@/lib/gsap";
import { homeProjects } from "@/data/projects";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;

      if (!section) {
        return;
      }

      const cards =
        gsap.utils.toArray<HTMLElement>(
          ".project-card",
          section,
        );

      const mobileHeading =
        section.querySelector<HTMLElement>(
          ".projects__mobile-heading",
        );

      const footer =
        section.querySelector<HTMLElement>(
          ".projects__footer",
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
                y:
                  index % 2 === 0
                    ? 58
                    : 88,
                rotate:
                  index % 2 === 0
                    ? -0.6
                    : 0.8,
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

            if (footer) {
              gsap.from(footer, {
                y: 34,
                autoAlpha: 0,
                duration: 0.72,
                ease: "power3.out",

                scrollTrigger: {
                  trigger: footer,
                  start: "top 90%",
                  once: true,
                },
              });
            }
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
          {homeProjects.map(
            (project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ),
          )}
        </div>

        <div className="projects__footer">
          <p>
            Conheça a seleção completa de sites,
            interfaces e experiências digitais que
            desenvolvi.
          </p>

          <a
            className="button button--dark projects__all-link"
            href={siteConfig.projectsUrl}
          >
            Ver todos os projetos
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
