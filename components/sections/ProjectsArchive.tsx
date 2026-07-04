"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { gsap } from "@/lib/gsap";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsArchive() {
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

            const mm = gsap.matchMedia();

            mm.add(
                "(prefers-reduced-motion: no-preference)",
                () => {
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
                            autoAlpha: 0,
                            duration: 0.9,
                            delay: index * 0.035,
                            ease: "power3.out",

                            scrollTrigger: {
                                trigger: card,
                                start: "top 86%",
                                once: true,
                            },
                        });
                    });
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
            className="projects-archive section-shell"
            aria-labelledby="projects-archive-title"
        >
            <div className="projects-archive__grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
