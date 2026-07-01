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
          const { desktop, mobile, reduceMotion } =
            context.conditions as {
              desktop: boolean;
              mobile: boolean;
              reduceMotion: boolean;
            };

          if (reduceMotion) {
            return;
          }

          const cards =
            gsap.utils.toArray<HTMLElement>(".timeline-card");

          const dots =
            gsap.utils.toArray<HTMLElement>(
              ".timeline-index__dot",
            );

          const bookTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".timeline__intro",
              start: "top 76%",
              once: true,
            },
          });

          bookTimeline
            .from(".timeline__book", {
              y: 55,
              rotate: 2,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
            })
            .from(
              ".timeline__book-cover",
              {
                y: 25,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.7",
            )
            .from(
              ".timeline__book-page--left",
              {
                rotationY: 55,
                x: 45,
                opacity: 0,
                duration: 0.9,
                ease: "power4.out",
              },
              "-=0.55",
            )
            .from(
              ".timeline__book-page--right",
              {
                rotationY: -55,
                x: -45,
                opacity: 0,
                duration: 0.9,
                ease: "power4.out",
              },
              "-=0.82",
            )
            .from(
              ".timeline__book-page > *",
              {
                y: 12,
                opacity: 0,
                duration: 0.4,
                stagger: 0.035,
                ease: "power2.out",
              },
              "-=0.45",
            );

          if (desktop) {
            gsap.set(cards, {
              autoAlpha: 0,
              y: 48,
              rotate: 1.2,
            });

            gsap.set(cards[0], {
              autoAlpha: 1,
              y: 0,
              rotate: 0,
            });

            dots[0]?.classList.add("is-active");

            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: ".timeline__stage",
                start: "top top+=80",
                end: `+=${timelineItems.length * 580}`,
                scrub: 0.8,
                pin: true,
                anticipatePin: 1,
              },
            });

            timeline.to(
              ".timeline-progress__fill",
              {
                scaleY: 1,
                ease: "none",
                duration: timelineItems.length,
              },
              0,
            );

            cards.forEach((card, index) => {
              if (index === 0) {
                return;
              }

              const previous = cards[index - 1];

              timeline
                .to(
                  previous,
                  {
                    autoAlpha: 0,
                    y: -42,
                    rotate: -1.2,
                    duration: 0.45,
                  },
                  index - 0.25,
                )
                .fromTo(
                  card,
                  {
                    autoAlpha: 0,
                    y: 54,
                    rotate: 1.4,
                  },
                  {
                    autoAlpha: 1,
                    y: 0,
                    rotate: 0,
                    duration: 0.55,

                    onStart: () => {
                      dots.forEach((dot) =>
                        dot.classList.remove("is-active"),
                      );

                      dots[index]?.classList.add("is-active");
                    },

                    onReverseComplete: () => {
                      dots.forEach((dot) =>
                        dot.classList.remove("is-active"),
                      );

                      dots[
                        Math.max(0, index - 1)
                      ]?.classList.add("is-active");
                    },
                  },
                  index,
                );
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
      id="trajetoria"
      className="timeline section-shell"
    >
      <div className="timeline__intro">
        <SectionHeading
          title="Cada etapa adicionou uma nova camada ao meu trabalho."
          description="Uma linha do tempo entre formação, experiência prática e o próximo capítulo profissional."
        />

        <div
          className="timeline__book"
          aria-label="Livro aberto com referências pessoais de Mayza"
        >
          <div
            className="timeline__book-cover"
            aria-hidden="true"
          />

          <div
            className="timeline__book-shadow"
            aria-hidden="true"
          />

          <div className="timeline__book-spread">
            <article className="timeline__book-page timeline__book-page--left">
              <span className="timeline__book-page-number">
                01
              </span>

              <span className="timeline__book-chapter">
                random notes
              </span>

              <strong className="timeline__book-year">
                random-notes.js
              </strong>

              <span
                className="timeline__book-line"
                aria-hidden="true"
              />

              <div className="timeline__code-window">
                <div className="timeline__code-toolbar">
                  <span
                    className="timeline__code-dots"
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                    <i />
                  </span>

                  <span>random-notes.js</span>
                </div>

                <pre className="timeline__book-code">
                  <code>
                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        01
                      </span>

                      <span className="timeline__code-content">
                        <span className="timeline__code-keyword">
                          const
                        </span>{" "}
                        platform ={" "}
                        <span className="timeline__code-string">
                          "9¾"
                        </span>
                        ;
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        02
                      </span>

                      <span className="timeline__code-content">
                        playlist.
                        <span className="timeline__code-function">
                          play
                        </span>
                        (
                        <span className="timeline__code-string">
                          "Bad Omens"
                        </span>
                        );
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        03
                      </span>

                      <span className="timeline__code-content">
                        playlist.
                        <span className="timeline__code-function">
                          queue
                        </span>
                        (
                        <span className="timeline__code-string">
                          "Shawn Mendes"
                        </span>
                        );
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        04
                      </span>

                      <span className="timeline__code-content">
                        catCount{" "}
                        <span className="timeline__code-operator">
                          +=
                        </span>{" "}
                        2;
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        05
                      </span>

                      <span className="timeline__code-content">
                        git.
                        <span className="timeline__code-function">
                          commit
                        </span>
                        (
                        <span className="timeline__code-string">
                          "mischief managed"
                        </span>
                        );
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        06
                      </span>

                      <span className="timeline__code-content">
                        <span className="timeline__code-comment">
                          // somewhere between fiction and front-end
                        </span>
                      </span>
                    </span>
                  </code>
                </pre>
              </div>

              <span className="timeline__book-note timeline__book-note--left">
                music on, world off.
              </span>

              <span className="timeline__book-mini-note">
                currently debugging the plot...
              </span>

              <small className="timeline__book-footer">
                approved by the cats
              </small>
            </article>

            <article className="timeline__book-page timeline__book-page--right">
              <span className="timeline__book-page-number">
                02
              </span>

              <span className="timeline__book-chapter">
                side quests
              </span>

              <strong className="timeline__book-year">
                side-quests.md
              </strong>

              <span
                className="timeline__book-line"
                aria-hidden="true"
              />

              <div className="timeline__code-window">
                <div className="timeline__code-toolbar">
                  <span
                    className="timeline__code-dots"
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                    <i />
                  </span>

                  <span>side-quests.md</span>
                </div>

                <pre className="timeline__book-code">
                  <code>
                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        01
                      </span>

                      <span className="timeline__code-content">
                        nextDestination{" "}
                        <span className="timeline__code-operator">
                          ??=
                        </span>{" "}
                        <span className="timeline__code-string">
                          "unknown"
                        </span>
                        ;
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        02
                      </span>

                      <span className="timeline__code-content">
                        team.
                        <span className="timeline__code-function">
                          support
                        </span>
                        (
                        <span className="timeline__code-string">
                          "Cruzeiro"
                        </span>
                        );
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        03
                      </span>

                      <span className="timeline__code-content">
                        book.
                        <span className="timeline__code-function">
                          open
                        </span>
                        (
                        <span className="timeline__code-string">
                          "Off Campus"
                        </span>
                        );
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        04
                      </span>

                      <span className="timeline__code-content">
                        <span className="timeline__code-keyword">
                          if
                        </span>{" "}
                        (fear{" "}
                        <span className="timeline__code-operator">
                          &gt;
                        </span>{" "}
                        faith) {"{"}
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        05
                      </span>

                      <span className="timeline__code-content">
                        {"  "}remember(
                        <span className="timeline__code-string">
                          "grace"
                        </span>
                        );
                      </span>
                    </span>

                    <span className="timeline__code-line">
                      <span className="timeline__code-number">
                        06
                      </span>

                      <span className="timeline__code-content">
                        {"}"}
                      </span>
                    </span>
                  </code>
                </pre>
              </div>

              <span className="timeline__book-note timeline__book-note--right">
                another chapter, another plot twist.
              </span>

              <span className="timeline__book-mini-note">
                next trip: loading...
              </span>

              <small className="timeline__book-footer">
                blue heart, always
              </small>
            </article>
          </div>

          <span
            className="timeline__book-bookmark"
            aria-hidden="true"
          />

          <span
            className="timeline__book-star"
            aria-hidden="true"
          >
            ✦
          </span>
        </div>
      </div>

      <div className="timeline__stage">
        <div
          className="timeline-index"
          aria-hidden="true"
        >
          <div className="timeline-progress">
            <span className="timeline-progress__fill" />
          </div>

          {timelineItems.map((item, index) => (
            <span
              key={item.title}
              className="timeline-index__dot"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          ))}
        </div>

        <div className="timeline__cards">
          {timelineItems.map((item, index) => (
            <article
              key={item.title}
              className="timeline-card"
            >
              <div className="timeline-card__meta">
                <span>{item.kicker}</span>
                <strong>{item.year}</strong>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="timeline-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>

        <div
          className="timeline__aside"
          aria-hidden="true"
        >
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
