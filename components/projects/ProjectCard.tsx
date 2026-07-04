import type { Project } from "@/data/projects";

type ProjectCardProps = {
    project: Project;
    index: number;
};

function ProjectVisual({
    name,
    category,
    image,
}: {
    name: string;
    category: string;
    image?: string;
}) {
    return (
        <div className="project-visual">
            <div
                className="project-visual__browser"
                aria-hidden="true"
            >
                <span />
                <span />
                <span />
            </div>

            <div className="project-visual__content">
                {image ? (
                    <img
                        className="project-visual__image"
                        src={image}
                        alt={`Capa do projeto ${name}`}
                        loading="lazy"
                        draggable={false}
                    />
                ) : (
                    <div className="project-visual__placeholder">
                        <span>CAPA EM BREVE</span>

                        <strong>{name}</strong>

                        <small>{category}</small>
                    </div>
                )}
            </div>
        </div>
    );
}

export function ProjectCard({
    project,
    index,
}: ProjectCardProps) {
    return (
        <article
            className={`project-card project-card--${project.tone} ${project.featured
                    ? "project-card--featured"
                    : ""
                }`}
        >
            <a
                className="project-card__visual-link"
                href={project.link}
                aria-label={`Abrir projeto ${project.name}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <ProjectVisual
                    name={project.name}
                    category={project.category}
                    image={project.image}
                />
            </a>

            <div className="project-card__content">
                <div className="project-card__index">
                    <span>
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{project.category}</span>
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-card__tags">
                    {project.technologies.map(
                        (technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ),
                    )}
                </div>

                <details className="project-card__details">
                    <summary>Contexto do projeto</summary>

                    <div>
                        <p>
                            <strong>Desafio:</strong>{" "}
                            {project.challenge}
                        </p>

                        <p>
                            <strong>Solução:</strong>{" "}
                            {project.solution}
                        </p>
                    </div>
                </details>

                <div className="project-card__links">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver projeto{" "}
                        <span aria-hidden="true">↗</span>
                    </a>

                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    );
}
