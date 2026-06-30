"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { DecorativeStar } from "@/components/ui/DecorativeStar";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const introTimeline = gsap.timeline({
          paused: true,
          defaults: {
            ease: "power3.out",
          },
        });

        introTimeline
          .from("[data-hero=eyebrow]", {
            y: 22,
            opacity: 0,
            duration: 0.7,
          })
          .from(
            "[data-hero=title] .hero-title__line",
            {
              yPercent: 115,
              rotate: 2,
              duration: 1,
              stagger: 0.12,
            },
            "-=0.35",
          )
          .from(
            "[data-hero=copy]",
            {
              y: 28,
              opacity: 0,
              duration: 0.75,
            },
            "-=0.55",
          )
          .from(
            "[data-hero=actions] > *",
            {
              y: 18,
              opacity: 0,
              duration: 0.55,
              stagger: 0.1,
            },
            "-=0.45",
          )
          .from(
            "[data-hero=visual]",
            {
              x: 42,
              opacity: 0,
              rotate: 1.5,
              duration: 1,
            },
            "-=0.9",
          )
          .from(
            "[data-hero=decor]",
            {
              scale: 0,
              rotate: -24,
              opacity: 0,
              stagger: 0.08,
              duration: 0.65,
            },
            "-=0.55",
          );

        const startHeroAnimation = () => {
          introTimeline.play(0);
        };

        const loaderAlreadyFinished =
          document.documentElement.dataset.portfolioReady === "true";

        if (loaderAlreadyFinished) {
          startHeroAnimation();
        } else {
          window.addEventListener(
            "portfolio:ready",
            startHeroAnimation,
            {
              once: true,
            },
          );
        }

        gsap.to("[data-hero=float]", {
          y: -14,
          rotate: 2,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        return () => {
          window.removeEventListener(
            "portfolio:ready",
            startHeroAnimation,
          );
        };
      });

      return () => mm.revert();
    },
    {
      scope: root,
    },
  );

  return (
    <section ref={root} id="inicio" className="hero paper-texture">
      <div className="hero__content">
        <p className="eyebrow" data-hero="eyebrow">
          Engenheira de Software <span>✦</span> Front-end Developer
        </p>

        <h1 className="hero-title" data-hero="title" aria-label="Mayza Ester">
          <span className="hero-title__mask">
            <span className="hero-title__line">Mayza</span>
          </span>
          <span className="hero-title__mask hero-title__mask--offset">
            <span className="hero-title__line hero-title__line--accent">Ester</span>
          </span>
        </h1>

        <div className="hero__copy" data-hero="copy">
          <p className="hero__headline">
            Desenvolvo interfaces que aproximam pessoas, ideias e produtos.
          </p>
          <p className="hero__description">
            Desenvolvedora front-end freelancer, com experiência na criação de páginas e experiências digitais responsivas, funcionais e visualmente cuidadosas.
          </p>
        </div>

        <div className="hero__actions" data-hero="actions">
          <a className="button button--dark" href="#projetos">
            Ver projetos <span aria-hidden="true">↘</span>
          </a>
          <a className="button button--ghost" href="#contato">
            Falar comigo <span aria-hidden="true">✦</span>
          </a>
        </div>

        <div className="hero__signature" aria-hidden="true">
          <span>CODE WITH CARE</span>
          <span>2026</span>
        </div>
      </div>

      <div className="hero__visual" data-hero="visual">
        <div className="hero__code-panel numeric-texture" aria-hidden="true">
          <span>01 / HUMAN INTERFACE</span>
          <strong>soft code</strong>
          <span>strong craft / responsive / accessible</span>
        </div>

        <div className="hero__photo-frame">
          <PhotoPlaceholder className="hero__photo" />
          <span className="hero__photo-caption">portrait_01.jpg — adicionar depois</span>
        </div>

        <DecorativeStar
          variant="burst"
          className="hero__star hero__star--burst"
          size={150}
          data-hero="decor"
        />
        <DecorativeStar
          variant="sparkles"
          className="hero__star hero__star--sparkles"
          size={88}
          data-hero="decor"
        />

        <div className="hero__note" data-hero="float">
          <span>interfaces</span>
          <strong>com intenção</strong>
          <span>e personalidade.</span>
        </div>
      </div>
    </section>
  );
}
