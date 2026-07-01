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
    width: 34,
    height: 34,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="4.5" fill="currentColor" />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="9.5"
            stroke="currentColor"
            strokeWidth="2.7"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="9.5"
            stroke="currentColor"
            strokeWidth="2.7"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="25"
            ry="9.5"
            stroke="currentColor"
            strokeWidth="2.7"
            transform="rotate(120 32 32)"
          />
        </svg>
      );

    case "next":
      return (
        <svg {...commonProps}>
          <circle
            cx="32"
            cy="32"
            r="25"
            stroke="currentColor"
            strokeWidth="2.6"
          />
          <path
            d="M20 44V20l25 31"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43 20v17"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg {...commonProps}>
          <rect
            x="8"
            y="8"
            width="48"
            height="48"
            rx="7"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M18 24h21M28.5 24v22"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M42 31c-5-3-9-1.5-9 2 0 5 11 2.5 11 8 0 4-4 6-10 3"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg {...commonProps}>
          <rect
            x="8"
            y="8"
            width="48"
            height="48"
            rx="6"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M29 22v22c0 5-3 7-7 7-3 0-5-1-7-3"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M48 28c-3-3-9-3-9 1 0 5 11 3 11 9 0 5-6 7-12 3"
            stroke="currentColor"
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
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 42c6-10 13-14 22-12 7 1 10 6 14 10 4 4 7 5 12 2-6 10-13 14-22 12-7-1-10-6-14-10-4-4-7-5-12-2Z"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "html":
      return (
        <svg {...commonProps}>
          <path
            d="M13 8h38l-4 44-15 4-15-4-4-44Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M22 20h21l-1 8H24l1 8h16l-1 9-8 2-8-2-.5-5"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "css":
      return (
        <svg {...commonProps}>
          <path
            d="M13 8h38l-4 44-15 4-15-4-4-44Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M22 20h21l-1 8H26l-1 7h16l-1 10-8 2-8-2-.5-5"
            stroke="currentColor"
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
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          <path
            d="m44 25 8 7-8 7"
            stroke="currentColor"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "wordpress":
      return (
        <svg {...commonProps}>
          <circle
            cx="32"
            cy="32"
            r="25"
            stroke="currentColor"
            strokeWidth="2.6"
          />
          <path
            d="m18 22 10 25 6-16 7 16 7-23M16 22h14M37 22h10"
            stroke="currentColor"
            strokeWidth="2.7"
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

      const orbitElements = ORBIT_ORDER.map((orbitName) => {
        return section.querySelector<HTMLElement>(
          `[data-orbit="${orbitName}"]`,
        );
      });

      if (orbitElements.some((orbit) => !orbit)) {
        return;
      }

      const speedByOrbit: Record<SkillOrbit, number> = {
        inner: 8.5,
        middle: 5.8,
        outer: 3.8,
      };

      const directionByOrbit: Record<SkillOrbit, 1 | -1> = {
        inner: 1,
        middle: -1,
        outer: 1,
      };

      const initialAngleByOrbit: Record<SkillOrbit, number> = {
        inner: -12,
        middle: 26,
        outer: -34,
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
      let lastWidth = 0;

      const updateRadii = () => {
        const currentWidth = section.clientWidth;

        if (currentWidth === lastWidth) {
          return;
        }

        lastWidth = currentWidth;

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

            item.dataset.side = x > 0 ? "left" : "right";
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

        targetSpeed += (1 - targetSpeed) * Math.min(1, delta * 2.8);
        currentSpeed +=
          (targetSpeed - currentSpeed) * Math.min(1, delta * 8);

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
              window.matchMedia("(hover: hover) and (pointer: fine)")
                .matches
            ) {
              orbit.paused = true;
            }
          };

          const resumeOrbit = () => {
            if (
              window.matchMedia("(hover: hover) and (pointer: fine)")
                .matches
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
              !window.matchMedia("(hover: none), (pointer: coarse)")
                .matches
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
            item.removeEventListener("pointerenter", pauseOrbit);
            item.removeEventListener("pointerleave", resumeOrbit);
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

      document.addEventListener("pointerdown", clearActiveItems);

      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const pinTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=2600",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const velocity = Math.abs(self.getVelocity());

              targetSpeed = gsap.utils.clamp(
                1,
                7,
                1 + velocity / 420,
              );
            },
          });

          const entrance = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          });

          entrance
            .from(".skills__header", {
              x: -34,
              autoAlpha: 0,
              duration: 0.8,
              ease: "power3.out",
            })
            .from(
              ".skills__universe",
              {
                scale: 0.88,
                autoAlpha: 0,
                duration: 1,
                ease: "power3.out",
              },
              "-=0.55",
            )
            .from(
              ".skills-orbit__item",
              {
                scale: 0.4,
                autoAlpha: 0,
                duration: 0.55,
                stagger: 0.045,
                ease: "back.out(1.8)",
              },
              "-=0.65",
            );

          return () => {
            pinTrigger.kill();
            entrance.kill();
          };
        },
      );

      const handleResize = () => {
        lastWidth = 0;
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

        window.removeEventListener("resize", handleResize);
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
      <div
        className="skills__ambient skills__ambient--one"
        aria-hidden="true"
      />

      <div
        className="skills__ambient skills__ambient--two"
        aria-hidden="true"
      />

      <div className="skills__layout">
        <div className="skills__header">
          <SectionHeading
            eyebrow="Ferramentas / 04"
            title="Tecnologias em órbita."
            description="Uma stack em movimento, conectando código, interface e experiências digitais."
            light
          />

          <div className="skills__meta" aria-hidden="true">
            <span>09 tecnologias</span>
            <span>movimento contínuo</span>
          </div>

          <div className="skills__scroll-hint" aria-hidden="true">
            <span />
            role para acelerar
          </div>
        </div>

        <div
          className="skills__universe"
          aria-label="Tecnologias utilizadas no desenvolvimento"
        >
          <div className="skills__core">
            <span>stack</span>

            <strong>
              código
              <br />
              em movimento
            </strong>

            <small>hover para identificar</small>
          </div>

          {ORBIT_ORDER.map((orbitName) => (
            <div
              key={orbitName}
              className={`skills-orbit skills-orbit--${orbitName}`}
              data-orbit={orbitName}
              aria-label={`Órbita ${orbitName}`}
            >
              {skills
                .filter((skill) => skill.orbit === orbitName)
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

          <span
            className="skills__spark skills__spark--one"
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="skills__spark skills__spark--two"
            aria-hidden="true"
          >
            +
          </span>

          <span
            className="skills__coordinate skills__coordinate--one"
            aria-hidden="true"
          >
            04 / STACK
          </span>

          <span
            className="skills__coordinate skills__coordinate--two"
            aria-hidden="true"
          >
            360° / LOOP
          </span>
        </div>
      </div>
    </section>
  );
}
