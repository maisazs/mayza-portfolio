"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  skills,
  type SkillIconName,
  type SkillOrbit,
} from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ORBIT_ORDER: SkillOrbit[] = ["inner", "middle", "outer"];

type OrbitRuntime = {
  name: SkillOrbit;
  element: HTMLElement;
  items: HTMLElement[];
  radius: number;
  angle: number;
  baseSpeed: number;
  direction: 1 | -1;
  paused: boolean;
  setX: Array<(value: number) => void>;
  setY: Array<(value: number) => void>;
};

function SkillIcon({ name }: { name: SkillIconName }) {
  const commonProps = {
    viewBox: "0 0 64 64",
    width: 36,
    height: 36,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="4.5" fill="#61DAFB" />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="9.5"
            stroke="#61DAFB"
            strokeWidth="2.8"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="9.5"
            stroke="#61DAFB"
            strokeWidth="2.8"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="9.5"
            stroke="#61DAFB"
            strokeWidth="2.8"
            transform="rotate(120 32 32)"
          />
        </svg>
      );

    case "next":
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="25" fill="#050505" />
          <path
            d="M20 44V20l25 31"
            stroke="#fffefd"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43 20v17"
            stroke="#fffefd"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg {...commonProps}>
          <rect x="7" y="7" width="50" height="50" rx="7" fill="#3178C6" />
          <path
            d="M17 22h23M28.5 22v25"
            stroke="#fffefd"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M43 30c-5-3-9-1.5-9 2 0 5 11 2.5 11 8 0 4-4 6-10 3"
            stroke="#fffefd"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg {...commonProps}>
          <rect x="7" y="7" width="50" height="50" rx="5" fill="#F7DF1E" />
          <path
            d="M29 21v23c0 5-3 7-7 7-3 0-5-1-7-3"
            stroke="#050505"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M48 28c-3-3-9-3-9 1 0 5 11 3 11 9 0 5-6 7-12 3"
            stroke="#050505"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case "tailwind":
      return (
        <svg {...commonProps}>
          <path
            d="M10 25c6-10 13-14 22-12 7 1 10 6 14 10 4 4 7 5 12 2-6 10-13 14-22 12-7-1-10-6-14-10-4-4-7-5-12-2Z"
            fill="#06B6D4"
          />
          <path
            d="M10 42c6-10 13-14 22-12 7 1 10 6 14 10 4 4 7 5 12 2-6 10-13 14-22 12-7-1-10-6-14-10-4-4-7-5-12-2Z"
            fill="#06B6D4"
            opacity="0.76"
          />
        </svg>
      );

    case "html":
      return (
        <svg {...commonProps}>
          <path d="M13 8h38l-4 44-15 4-15-4-4-44Z" fill="#E34F26" />
          <path
            d="M22 20h21l-1 8H24l1 8h16l-1 9-8 2-8-2-.5-5"
            stroke="#fffefd"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "css":
      return (
        <svg {...commonProps}>
          <path d="M13 8h38l-4 44-15 4-15-4-4-44Z" fill="#1572B6" />
          <path
            d="M22 20h21l-1 8H26l-1 7h16l-1 10-8 2-8-2-.5-5"
            stroke="#fffefd"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "gsap":
      return (
        <svg {...commonProps}>
          <path
            d="M12 18h40M12 32h31M12 46h23"
            stroke="#88CE02"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="m44 25 8 7-8 7"
            stroke="#88CE02"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "wordpress":
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="26" fill="#21759B" />
          <circle
            cx="32"
            cy="32"
            r="20"
            stroke="#fffefd"
            strokeWidth="2.2"
          />
          <path
            d="m18 22 10 25 6-16 7 16 7-23M16 22h14M37 22h10"
            stroke="#fffefd"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

export function Skills() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;

      if (!section) {
        return;
      }

      const orbitFrame =
        section.querySelector<HTMLElement>(".skills__orbit-frame");

      const orbitElements = ORBIT_ORDER.map((orbitName) =>
        section.querySelector<HTMLElement>(
          `[data-orbit="${orbitName}"]`,
        ),
      );

      if (!orbitFrame || orbitElements.some((orbit) => !orbit)) {
        return;
      }

      const speedByOrbit: Record<SkillOrbit, number> = {
        inner: 7.6,
        middle: 5.2,
        outer: 3.4,
      };

      const directionByOrbit: Record<SkillOrbit, 1 | -1> = {
        inner: 1,
        middle: -1,
        outer: 1,
      };

      const initialAngleByOrbit: Record<SkillOrbit, number> = {
        inner: -14,
        middle: 24,
        outer: -32,
      };

      const runtime: OrbitRuntime[] = ORBIT_ORDER.map(
        (orbitName, index) => {
          const element = orbitElements[index] as HTMLElement;

          const items = Array.from(
            element.querySelectorAll<HTMLElement>(
              ".skills-orbit__item",
            ),
          );

          gsap.set(items, {
            xPercent: -50,
            yPercent: -50,
            force3D: true,
          });

          return {
            name: orbitName,
            element,
            items,
            radius: 0,
            angle: initialAngleByOrbit[orbitName],
            baseSpeed: speedByOrbit[orbitName],
            direction: directionByOrbit[orbitName],
            paused: false,

            setX: items.map(
              (item) =>
                gsap.quickSetter(item, "x", "px") as (
                  value: number,
                ) => void,
            ),

            setY: items.map(
              (item) =>
                gsap.quickSetter(item, "y", "px") as (
                  value: number,
                ) => void,
            ),
          };
        },
      );

      const allItems = runtime.flatMap((orbit) => orbit.items);
      const cleanupListeners: Array<() => void> = [];

      let targetSpeed = 1;
      let currentSpeed = 1;
      let lastFrameWidth = 0;

      const updateRadii = () => {
        const currentFrameWidth = orbitFrame.clientWidth;

        if (currentFrameWidth === lastFrameWidth) {
          return;
        }

        lastFrameWidth = currentFrameWidth;

        runtime.forEach((orbit) => {
          orbit.radius =
            orbit.element.getBoundingClientRect().width / 2;
        });
      };

      const renderOrbitPositions = () => {
        runtime.forEach((orbit) => {
          orbit.items.forEach((item, itemIndex) => {
            const offset = Number(item.dataset.angle ?? 0);

            const angleInRadians =
              ((orbit.angle + offset) * Math.PI) / 180;

            const x = Math.cos(angleInRadians) * orbit.radius;
            const y = Math.sin(angleInRadians) * orbit.radius;

            orbit.setX[itemIndex](x);
            orbit.setY[itemIndex](y);

            const horizontalDistance = Math.abs(x);
            const verticalDistance = Math.abs(y);

            if (horizontalDistance >= verticalDistance) {
              item.dataset.labelPosition =
                x >= 0 ? "right" : "left";
            } else {
              item.dataset.labelPosition =
                y >= 0 ? "bottom" : "top";
            }
          });
        });
      };

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      updateRadii();
      renderOrbitPositions();

      const ticker = (_time: number, deltaTime: number) => {
        const delta = Math.min(deltaTime / 1000, 0.05);

        updateRadii();

        targetSpeed +=
          (1 - targetSpeed) * Math.min(1, delta * 2.7);

        currentSpeed +=
          (targetSpeed - currentSpeed) *
          Math.min(1, delta * 7.5);

        runtime.forEach((orbit) => {
          if (!orbit.paused) {
            orbit.angle +=
              orbit.baseSpeed *
              orbit.direction *
              currentSpeed *
              delta;
          }
        });

        renderOrbitPositions();
      };

      if (!prefersReducedMotion) {
        gsap.ticker.add(ticker);
      }

      runtime.forEach((orbit) => {
        orbit.items.forEach((item) => {
          const pauseOrbit = () => {
            if (
              window.matchMedia(
                "(hover: hover) and (pointer: fine)",
              ).matches
            ) {
              orbit.paused = true;
            }
          };

          const resumeOrbit = () => {
            if (
              window.matchMedia(
                "(hover: hover) and (pointer: fine)",
              ).matches
            ) {
              orbit.paused = false;
            }
          };

          const pauseOnFocus = () => {
            orbit.paused = true;
          };

          const resumeOnBlur = () => {
            orbit.paused = false;
            item.classList.remove("is-active");
          };

          const toggleOnTouch = () => {
            if (
              !window.matchMedia(
                "(hover: none), (pointer: coarse)",
              ).matches
            ) {
              return;
            }

            const willActivate =
              !item.classList.contains("is-active");

            allItems.forEach((otherItem) => {
              otherItem.classList.remove("is-active");
            });

            runtime.forEach((otherOrbit) => {
              otherOrbit.paused = false;
            });

            if (willActivate) {
              item.classList.add("is-active");
              orbit.paused = true;
            }
          };

          item.addEventListener("pointerenter", pauseOrbit);
          item.addEventListener("pointerleave", resumeOrbit);
          item.addEventListener("focus", pauseOnFocus);
          item.addEventListener("blur", resumeOnBlur);
          item.addEventListener("click", toggleOnTouch);

          cleanupListeners.push(() => {
            item.removeEventListener(
              "pointerenter",
              pauseOrbit,
            );

            item.removeEventListener(
              "pointerleave",
              resumeOrbit,
            );

            item.removeEventListener("focus", pauseOnFocus);
            item.removeEventListener("blur", resumeOnBlur);
            item.removeEventListener("click", toggleOnTouch);
          });
        });
      });

      const clearActiveItems = (event: PointerEvent) => {
        const target = event.target as Node;

        if (allItems.some((item) => item.contains(target))) {
          return;
        }

        allItems.forEach((item) => {
          item.classList.remove("is-active");
        });

        runtime.forEach((orbit) => {
          orbit.paused = false;
        });
      };

      document.addEventListener(
        "pointerdown",
        clearActiveItems,
      );

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(orbitFrame, {
            scale: 0.58,
            y: 56,
            transformOrigin: "center center",
          });

          const pinnedTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=2800",
              pin: true,
              pinSpacing: true,
              scrub: 0.85,
              anticipatePin: 1,
              invalidateOnRefresh: true,

              onUpdate: (self) => {
                const velocity = Math.abs(self.getVelocity());

                targetSpeed = gsap.utils.clamp(
                  1,
                  6.2,
                  1 + velocity / 450,
                );
              },
            },
          });

          pinnedTimeline
            .to(
              orbitFrame,
              {
                scale: 1,
                y: 0,
                ease: "none",
                duration: 0.62,
              },
              0,
            )
            .fromTo(
              ".skills__cloud--one",
              {
                x: -18,
                rotate: -5,
              },
              {
                x: 34,
                rotate: 3,
                ease: "none",
                duration: 1,
              },
              0,
            )
            .fromTo(
              ".skills__cloud--two",
              {
                x: 24,
                rotate: 4,
              },
              {
                x: -28,
                rotate: -3,
                ease: "none",
                duration: 1,
              },
              0,
            )
            .fromTo(
              ".skills__photo-sticker",
              {
                rotate: -8,
                y: 18,
              },
              {
                rotate: 3,
                y: -12,
                ease: "none",
                duration: 1,
              },
              0,
            );

          const entrance = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 76%",
              once: true,
            },
          });

          entrance
            .from(".skills__header", {
              y: 30,
              autoAlpha: 0,
              duration: 0.75,
              ease: "power3.out",
            })
            .from(
              ".skills__collage-piece",
              {
                scale: 0.7,
                rotate: -5,
                autoAlpha: 0,
                duration: 0.55,
                stagger: 0.06,
                ease: "back.out(1.5)",
              },
              "-=0.4",
            )
            .from(
              ".skills-orbit__item",
              {
                scale: 0.62,
                autoAlpha: 0,
                duration: 0.42,
                stagger: 0.04,
                ease: "back.out(1.4)",
              },
              "-=0.42",
            );

          return () => {
            pinnedTimeline.kill();
            entrance.kill();
          };
        },
      );

      const handleResize = () => {
        lastFrameWidth = 0;
        updateRadii();
        renderOrbitPositions();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        mm.revert();

        if (!prefersReducedMotion) {
          gsap.ticker.remove(ticker);
        }

        cleanupListeners.forEach((cleanup) => cleanup());

        document.removeEventListener(
          "pointerdown",
          clearActiveItems,
        );

        window.removeEventListener(
          "resize",
          handleResize,
        );
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
      <div className="skills__layout">
        <div className="skills__header">
          <SectionHeading
            title="Tecnologias que fazem parte da minha stack."
            description="Ferramentas com as quais já trabalhei e continuo aprofundando meus conhecimentos no desenvolvimento front-end."
            light
          />

          <div className="skills__meta" aria-hidden="true">
          </div>
        </div>

        <div className="skills__stage">
          <div
            className="skills__cloud skills__cloud--one skills__collage-piece"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <div
            className="skills__cloud skills__cloud--two skills__collage-piece"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <span
            className="skills__tape skills__tape--one skills__collage-piece"
            aria-hidden="true"
          />

          <span
            className="skills__tape skills__tape--two skills__collage-piece"
            aria-hidden="true"
          />

          <div
            className="skills__checker skills__collage-piece"
            aria-hidden="true"
          >
            <span>stack club</span>
          </div>

          <div
            className="skills__photo-sticker skills__collage-piece"
            aria-hidden="true"
          >
            <span>build</span>
            <strong>✦</strong>
            <small>repeat</small>
          </div>

          <span
            className="skills__star skills__star--one skills__collage-piece"
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="skills__star skills__star--two skills__collage-piece"
            aria-hidden="true"
          >
            ✦
          </span>

          <div
            className="skills__orbit-frame"
            aria-label="Tecnologias utilizadas no desenvolvimento"
          >
            <div className="skills__paper-blob" aria-hidden="true" />

            <div className="skills__core">
              <span>SKILLS</span>
              <strong>&lt;/&gt;</strong>
              <small>hover nos ícones</small>
            </div>

            {ORBIT_ORDER.map((orbitName) => (
              <div
                key={orbitName}
                className={`skills-orbit skills-orbit--${orbitName}`}
                data-orbit={orbitName}
                aria-label={`Órbita ${orbitName}`}
              >
                {skills
                  .filter(
                    (skill) => skill.orbit === orbitName,
                  )
                  .map((skill) => (
                    <button
                      key={skill.id}
                      type="button"
                      className="skills-orbit__item"
                      data-angle={skill.angle}
                      data-skill={skill.id}
                      aria-label={skill.name}
                    >
                      <span className="skills-orbit__icon">
                        <SkillIcon name={skill.icon} />
                      </span>

                      <span className="skills-orbit__label">
                        {skill.name}
                      </span>
                    </button>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
