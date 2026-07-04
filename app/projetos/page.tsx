import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsArchive } from "@/components/sections/ProjectsArchive";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: "Projetos | Mayza Ester",
    description:
        "Conheça os projetos de desenvolvimento front-end, sites institucionais e interfaces digitais de Mayza Ester.",
};

export default function ProjectsPage() {
    return (
        <>
            <a
                className="skip-link"
                href="#conteudo"
            >
                Pular para o conteúdo
            </a>

            <Header />

            <main
                id="conteudo"
                className="projects-page paper-texture"
            >
                <section className="projects-page__hero section-shell">
                    <div className="projects-page__hero-copy">
                        <h1 className="projects-page__title">
                            Sites, interfaces e experiências que
                            ganharam forma.
                        </h1>

                        <p className="projects-page__description">
                            Uma seleção completa dos projetos que
                            desenvolvi, reunindo estratégia visual,
                            estrutura, responsividade e atenção aos
                            detalhes.
                        </p>

                        <div className="projects-page__actions">
                            <a
                                className="button button--dark"
                                href={siteConfig.homeUrl}
                            >
                                Voltar para a home
                                <span aria-hidden="true">
                                    ↖
                                </span>
                            </a>

                            <a
                                className="button button--ghost"
                                href={siteConfig.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Conversar sobre um projeto
                                <span aria-hidden="true">
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>

                    <div
                        className="projects-page__stamp"
                        aria-hidden="true"
                    >
                        <span>SELECTED</span>
                        <strong>WORK</strong>
                        <small>
                            FRONT-END · WEB · UI
                        </small>
                    </div>

                    <span
                        className="projects-page__tape"
                        aria-hidden="true"
                    />

                    <span
                        className="projects-page__spark"
                        aria-hidden="true"
                    >
                        ✦
                    </span>
                </section>

                <ProjectsArchive />
            </main>

            <Footer />
        </>
    );
}
