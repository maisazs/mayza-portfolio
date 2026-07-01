"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { DecorativeStar } from "@/components/ui/DecorativeStar";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { gsap } from "@/lib/gsap";
import { withBasePath } from "@/lib/paths";
import styles from "./Hero.module.css";

/*
 * Quando sua foto estiver pronta:
 * 1. Salve o arquivo em public/images/mayza-hero.png
 * 2. Troque a string vazia abaixo por "/images/mayza-hero.png"
 *
 * Dê preferência a uma imagem PNG ou WebP com fundo transparente.
 */
const HERO_IMAGE = "/images/mayza-3-V2.png"

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
          .from("[data-hero=topline]", {
            y: 18,
            opacity: 0,
            duration: 0.6,
          })
          .from(
            "[data-hero-line]",
            {
              yPercent: 115,
              rotate: 2,
              duration: 1.05,
              stagger: 0.1,
            },
            "-=0.28",
          )
          .from(
            "[data-hero=visual]",
            {
              y: 52,
              scale: 0.94,
              opacity: 0,
              duration: 1,
            },
            "-=0.72",
          )
          .from(
            "[data-hero=copy]",
            {
              y: 24,
              opacity: 0,
              duration: 0.72,
              stagger: 0.12,
            },
            "-=0.58",
          )
          .from(
            "[data-hero=decor]",
            {
              scale: 0,
              rotate: -24,
              opacity: 0,
              duration: 0.65,
              stagger: 0.08,
            },
            "-=0.54",
          )
          .from(
            "[data-hero=footer] > *",
            {
              y: 16,
              opacity: 0,
              duration: 0.55,
              stagger: 0.08,
            },
            "-=0.42",
          );

        const startHeroAnimation = () => {
          introTimeline.play(0);
        };

        const loaderAlreadyFinished =
          document.documentElement.dataset.portfolioReady === "true";

        if (loaderAlreadyFinished) {
          startHeroAnimation();
        } else {
          window.addEventListener("portfolio:ready", startHeroAnimation, {
            once: true,
          });
        }

        gsap.to("[data-hero-float]", {
          y: -9,
          rotate: 1.5,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        return () => {
          window.removeEventListener("portfolio:ready", startHeroAnimation);
        };
      });

      mm.add(
        "(pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const section = root.current;
          const stage = section?.querySelector<HTMLElement>(
            "[data-tilt-stage]",
          );
          const layers = gsap.utils.toArray<HTMLElement>(
            "[data-depth]",
            section ?? undefined,
          );

          if (!section || !stage) {
            return;
          }

          gsap.set(stage, {
            transformPerspective: 1200,
            transformOrigin: "50% 50%",
          });

          const rotateXTo = gsap.quickTo(stage, "rotationX", {
            duration: 0.65,
            ease: "power3.out",
          });

          const rotateYTo = gsap.quickTo(stage, "rotationY", {
            duration: 0.65,
            ease: "power3.out",
          });

          const layerMotion = layers.map((layer) => {
            const depth = Number(layer.dataset.depth ?? 1);

            return {
              xTo: gsap.quickTo(layer, "x", {
                duration: 0.7,
                ease: "power3.out",
              }),
              yTo: gsap.quickTo(layer, "y", {
                duration: 0.7,
                ease: "power3.out",
              }),
              depth,
            };
          });

          const handlePointerMove = (event: PointerEvent) => {
            const bounds = section.getBoundingClientRect();
            const normalizedX =
              ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
            const normalizedY =
              ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

            rotateYTo(normalizedX * 7);
            rotateXTo(normalizedY * -6);

            layerMotion.forEach(({ xTo, yTo, depth }) => {
              xTo(normalizedX * 11 * depth);
              yTo(normalizedY * 9 * depth);
            });
          };

          const resetTilt = () => {
            rotateXTo(0);
            rotateYTo(0);

            layerMotion.forEach(({ xTo, yTo }) => {
              xTo(0);
              yTo(0);
            });
          };

          section.addEventListener("pointermove", handlePointerMove);
          section.addEventListener("pointerleave", resetTilt);

          return () => {
            section.removeEventListener("pointermove", handlePointerMove);
            section.removeEventListener("pointerleave", resetTilt);
          };
        },
      );

      return () => mm.revert();
    },
    {
      scope: root,
    },
  );

  return (
    <section ref={root} id="inicio" className={styles.hero}>
      <h1
        className={styles.displayTitle}
        aria-label="Portfólio front-end de Mayza Ester"
      >
        <span className={styles.titleMask}>
          <span className={styles.titlePrimary} data-hero-line>
            Front-end
          </span>
        </span>

        <span className={`${styles.titleMask} ${styles.titleMaskAccent}`}>
          <span className={styles.titleAccent} data-hero-line>
            Portfolio
          </span>
        </span>
      </h1>

      <div className={styles.composition}>
        <aside className={styles.identity} data-hero="copy">

          <h2>Mayza Ester</h2>

          <p>
            Desenvolvo interfaces responsivas que aproximam pessoas, ideias e
            produtos com clareza, cuidado e personalidade.
          </p>

          <a
            className={styles.scrollLink}
            href="#sobre"
            aria-label="Ir para a seção sobre mim"
          >
            <span>Explorar</span>
            <i aria-hidden="true">↘</i>
          </a>
        </aside>

        <div className={styles.portraitZone} data-hero="visual">
          <div className={styles.portraitStage} data-tilt-stage>
            <div
              className={styles.orbitOuter}
              data-depth="0.25"
              aria-hidden="true"
            />

            <div
              className={styles.orbitInner}
              data-depth="0.4"
              aria-hidden="true"
            />

            <div
              className={styles.portraitGlow}
              data-depth="0.55"
              aria-hidden="true"
            />

            <div
              className={styles.portraitShadow}
              data-depth="0.75"
              aria-hidden="true"
            />

            <div className={styles.portrait} data-depth="1.05">
              {HERO_IMAGE ? (
                <Image
                  className={styles.portraitImage}
                  src={withBasePath(HERO_IMAGE)}
                  alt="Mayza Ester"
                  fill
                  priority
                  sizes="(max-width: 720px) 82vw, (max-width: 1023px) 520px, 430px"
                  draggable={false}
                />
              ) : (
                <PhotoPlaceholder
                  className={styles.portraitPlaceholder}
                  label="ADICIONE SUA FOTO PNG AQUI"
                />
              )}
            </div>

            <div
              className={`${styles.tagShell} ${styles.tagShellTop}`}
              data-depth="1.35"
            >
              <div className={styles.floatingTag}>
                <i aria-hidden="true" />
                Interfaces com intenção
              </div>
            </div>

            <div
              className={`${styles.tagShell} ${styles.tagShellBottom}`}
              data-depth="1.55"
            >
              <div className={styles.floatingTag} data-hero-float>
                <i aria-hidden="true" />
                Código + design
              </div>
            </div>

            <DecorativeStar
              variant="burst"
              className={`${styles.decorativeStar} ${styles.starBurst}`}
              size={120}
              data-depth="1.25"
              data-hero="decor"
            />

            <DecorativeStar
              variant="sparkles"
              className={`${styles.decorativeStar} ${styles.starSparkles}`}
              size={72}
              data-depth="1.5"
              data-hero="decor"
            />
          </div>
        </div>

        <aside className={styles.expertise} data-hero="copy">
          <p className={styles.expertiseIntro}>
            Transformo conceitos em experiências digitais funcionais,
            acessíveis e visualmente cuidadosas.
          </p>

          <ul aria-label="Especialidades">
            <li>UI / Front-end</li>
            <li>Landing pages</li>
            <li>Next.js &amp; TypeScript</li>
            <li>WordPress &amp; Elementor</li>
          </ul>
        </aside>
      </div>

      <div className={styles.footer} data-hero="footer">
        <div className={styles.actions}>
          <a className="button button--dark" href="#projetos">
            Ver projetos <span aria-hidden="true">↘</span>
          </a>

          <a className="button button--ghost" href="#contato">
            Falar comigo <span aria-hidden="true">✦</span>
          </a>
        </div>
      </div>
    </section>
  );
}
