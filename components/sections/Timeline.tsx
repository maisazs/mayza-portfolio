"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { timelineItems } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px)",
          mobile: "(max-width: 1023px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, mobile, reduceMotion } = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) return;

          const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
          const dots = gsap.utils.toArray<HTMLElement>(".timeline-index__dot");

          if (desktop) {
            gsap.set(cards, { autoAlpha: 0, y: 48, rotate: 1.2 });
            gsap.set(cards[0], { autoAlpha: 1, y: 0, rotate: 0 });
            dots[0]?.classList.add("is-active");

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: ".timeline__stage",
                start: "top top+=80",
                end: `+=${timelineItems.length * 580}`,
                scrub: 0.8,
                pin: true,
                anticipatePin: 1,
              },
            });

            tl.to(".timeline-progress__fill", {
              scaleY: 1,
              ease: "none",
              duration: timelineItems.length,
            }, 0);

            cards.forEach((card, index) => {
              if (index === 0) return;
              const previous = cards[index - 1];
              tl.to(previous, {
                autoAlpha: 0,
                y: -42,
                rotate: -1.2,
                duration: 0.45,
              }, index - 0.25)
                .fromTo(card, {
                  autoAlpha: 0,
                  y: 54,
                  rotate: 1.4,
                }, {
                  autoAlpha: 1,
                  y: 0,
                  rotate: 0,
                  duration: 0.55,
                  onStart: () => {
                    dots.forEach((dot) => dot.classList.remove("is-active"));
                    dots[index]?.classList.add("is-active");
                  },
                  onReverseComplete: () => {
                    dots.forEach((dot) => dot.classList.remove("is-active"));
                    dots[Math.max(0, index - 1)]?.classList.add("is-active");
                  },
                }, index);
            });

            gsap.to(".timeline__orb", {
              rotate: 240,
              x: 36,
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: ".timeline__stage",
                start: "top top+=80",
                end: `+=${timelineItems.length * 580}`,
                scrub: true,
              },
            });
          }

          if (mobile) {
            cards.forEach((card) => {
              gsap.from(card, {
                y: 32,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 84%",
                },
              });
            });
          }
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="trajetoria" className="timeline section-shell">
      <SectionHeading
        eyebrow="Trajetória / 03"
        title="Cada etapa adicionou uma nova camada ao meu trabalho."
        description="Uma linha do tempo entre formação, experiência prática e o próximo capítulo profissional."
      />

      <div className="timeline__stage">
        <div className="timeline-index" aria-hidden="true">
          <div className="timeline-progress">
            <span className="timeline-progress__fill" />
          </div>
          {timelineItems.map((item, index) => (
            <span key={item.title} className="timeline-index__dot">
              {String(index + 1).padStart(2, "0")}
            </span>
          ))}
        </div>

        <div className="timeline__cards">
          {timelineItems.map((item, index) => (
            <article key={item.title} className="timeline-card">
              <div className="timeline-card__meta">
                <span>{item.kicker}</span>
                <strong>{item.year}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="timeline-card__number">{String(index + 1).padStart(2, "0")}</div>
            </article>
          ))}
        </div>

        <div className="timeline__aside" aria-hidden="true">
          <div className="timeline__orb numeric-texture">
            <span>LEARNING</span>
            <strong>→</strong>
            <span>BUILDING</span>
          </div>
          <p>scroll para acompanhar a progressão</p>
        </div>
      </div>
    </section>
  );
}
