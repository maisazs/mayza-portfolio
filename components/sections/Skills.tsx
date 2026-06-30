"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "@/lib/gsap";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const section = root.current;

          const track =
            section?.querySelector<HTMLElement>(".skills__track");

          if (!section || !track) {
            return;
          }

          const getHorizontalDistance = () => {
            return Math.max(
              0,
              track.scrollWidth -
              document.documentElement.clientWidth,
            );
          };

          /*
           * Garante que a animação sempre comece em x: 0.
           * Isso evita que o track mantenha um transform antigo
           * depois de atualizar a página ou editar o código.
           */
          gsap.set(track, {
            x: 0,
          });

          const horizontalAnimation = gsap.fromTo(
            track,
            {
              x: 0,
            },
            {
              x: () => -getHorizontalDistance(),

              ease: "none",

              scrollTrigger: {
                trigger: section,

                start: "top top",

                end: () =>
                  `+=${Math.max(
                    getHorizontalDistance(),
                    window.innerHeight,
                  )}`,

                pin: true,
                pinSpacing: true,

                scrub: 0.85,

                anticipatePin: 1,

                invalidateOnRefresh: true,
              },
            },
          );

          return () => {
            horizontalAnimation.scrollTrigger?.kill();
            horizontalAnimation.kill();

            gsap.set(track, {
              clearProps: "transform",
            });
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
      id="skills"
      className="skills numeric-texture"
    >
      <div className="skills__header">
        <SectionHeading
          eyebrow="Ferramentas / 04"
          title="Tecnologia é ferramenta. O cuidado está em como ela é usada."
          description="Uma stack direcionada à construção de interfaces modernas, responsivas e fáceis de evoluir."
          light
        />
      </div>

      <div className="skills__viewport">
        <div className="skills__track">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="skill-card"
            >
              <div className="skill-card__top">
                <span>{skill.index}</span>

                <span aria-hidden="true">
                  ✦
                </span>
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>

              <span className="skill-card__note">
                {skill.note}
              </span>
            </article>
          ))}

          <article
            className="skill-card skill-card--closing"
            aria-label="Aprendizado contínuo"
          >
            <span aria-hidden="true">
              ∞
            </span>

            <h3>
              Em constante evolução.
            </h3>

            <p>
              A stack cresce, mas o compromisso com uma boa
              experiência permanece.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}