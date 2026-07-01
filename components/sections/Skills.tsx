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

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = root.current?.querySelector<HTMLElement>(".skills__track");
        if (!track) return;

        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 120);

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${getDistance() + 700}`,
            pin: true,
            scrub: 0.85,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="skills" className="skills numeric-texture">
      <div className="skills__header">
        <SectionHeading
          title="Ferramentas que fazem parte do meu trabalho."
          description="Tecnologias que utilizo para transformar layouts em interfaces funcionais."
          light
        />
      </div>

      <div className="skills__viewport">
        <div className="skills__track">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-card__top">
                <span>{skill.index}</span>
                <span>✦</span>
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
              <span className="skill-card__note">{skill.note}</span>
            </article>
          ))}
          <article className="skill-card skill-card--closing" aria-label="Aprendizado contínuo">
            <span>∞</span>
            <h3>Em constante evolução.</h3>
            <p>A stack cresce, mas o compromisso com uma boa experiência permanece.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
