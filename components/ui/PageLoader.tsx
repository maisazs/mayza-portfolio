"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function PageLoader() {
    const root = useRef<HTMLDivElement>(null);
    const counter = useRef<HTMLSpanElement>(null);
    const [finished, setFinished] = useState(false);

    useGSAP(
        () => {
            const loader = root.current;

            if (!loader) {
                return;
            }

            const finishLoading = () => {
                document.body.classList.remove("is-loading");
                document.documentElement.dataset.portfolioReady = "true";

                window.dispatchEvent(new Event("portfolio:ready"));

                setFinished(true);
            };

            document.body.classList.add("is-loading");
            window.scrollTo(0, 0);

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (prefersReducedMotion) {
                finishLoading();
                return;
            }

            const progress = {
                value: 0,
            };

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
                onComplete: finishLoading,
            });

            timeline
                .from(
                    ".page-loader__arch",
                    {
                        scaleY: 0.7,
                        yPercent: 18,
                        duration: 1.1,
                        ease: "power4.out",
                    },
                    0,
                )
                .from(
                    ".page-loader__title span",
                    {
                        yPercent: 115,
                        rotate: 2,
                        duration: 0.9,
                    },
                    0.08,
                )
                .from(
                    ".page-loader__pill",
                    {
                        y: 30,
                        scale: 0.85,
                        opacity: 0,
                        duration: 0.7,
                    },
                    0.32,
                )
                .from(
                    ".page-loader__arrow-line",
                    {
                        scaleX: 0,
                        transformOrigin: "left center",
                        duration: 0.8,
                    },
                    0.4,
                )
                .from(
                    ".page-loader__meta",
                    {
                        y: -12,
                        opacity: 0,
                        duration: 0.5,
                    },
                    0.48,
                )
                .from(
                    ".page-loader__progress",
                    {
                        y: 14,
                        opacity: 0,
                        duration: 0.5,
                    },
                    0.58,
                )
                .to(
                    progress,
                    {
                        value: 100,
                        duration: 1.65,
                        ease: "power2.inOut",
                        onUpdate: () => {
                            if (!counter.current) {
                                return;
                            }

                            const currentValue = Math.round(progress.value);

                            counter.current.textContent = `${String(currentValue).padStart(
                                2,
                                "0",
                            )}%`;
                        },
                    },
                    0.12,
                )
                .to(
                    ".page-loader__content",
                    {
                        y: -30,
                        opacity: 0,
                        duration: 0.45,
                        ease: "power2.in",
                    },
                    1.7,
                )
                .to(
                    loader,
                    {
                        clipPath: "inset(0 0 100% 0)",
                        duration: 0.95,
                        ease: "power4.inOut",
                    },
                    1.76,
                );

            return () => {
                document.body.classList.remove("is-loading");
            };
        },
        {
            scope: root,
        },
    );

    if (finished) {
        return null;
    }

    return (
        <div
            ref={root}
            className="page-loader"
            role="status"
            aria-label="Carregando portfólio"
        >
            <div className="page-loader__arch" aria-hidden="true" />

            <div className="page-loader__content">
                <div className="page-loader__meta">
                    <span>MAYZA ESTER</span>
                    <span>FRONT-END DEVELOPER</span>
                </div>

                <div className="page-loader__center">
                    <h1 className="page-loader__title">
                        <span>PORTFÓLIO</span>
                    </h1>

                    <div className="page-loader__route" aria-hidden="true">
                        <span className="page-loader__arrow-line" />

                        <strong className="page-loader__pill">
                            MAYZA / 2026
                        </strong>
                    </div>
                </div>

                <div className="page-loader__progress">
                    <span>CARREGANDO EXPERIÊNCIA</span>

                    <span ref={counter} aria-hidden="true">
                        00%
                    </span>
                </div>
            </div>
        </div>
    );
}