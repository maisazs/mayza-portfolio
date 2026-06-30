import { DecorativeStar } from "@/components/ui/DecorativeStar";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="about paper-texture section-shell">
      <div className="about__visual">
        <div className="about__photo about__photo--one">
          <PhotoPlaceholder label="ADICIONAR FOTO 02" />
        </div>
        <div className="about__photo about__photo--two">
          <PhotoPlaceholder label="ADICIONAR FOTO 03" />
        </div>
        <div className="about__tape" aria-hidden="true" />
        <div className="about__scribble" aria-hidden="true">
          curiosidade → prática → evolução
        </div>
        <DecorativeStar className="about__star" size={110} />
      </div>

      <div className="about__content">
        <SectionHeading
          eyebrow="Sobre mim / 02"
          title="Por trás do código, existe intenção."
        />

        <div className="about__copy">
          <p>
            Sou <strong>Mayza Ester</strong>, engenheira de software e desenvolvedora front-end. Atuei de fevereiro de 2025 a fevereiro de 2026 como estagiária de desenvolvimento front-end na Tunni, período em que participei da construção e evolução de experiências digitais.
          </p>
          <p>
            Atualmente trabalho como freelancer, desenvolvendo projetos front-end e aprofundando meus conhecimentos em tecnologias modernas. Meu objetivo é construir interfaces bonitas, funcionais, responsivas e agradáveis de usar.
          </p>
          <p>
            Enxergo cada projeto como uma oportunidade de unir raciocínio técnico, atenção aos detalhes e sensibilidade visual.
          </p>
        </div>

        <div className="about__facts">
          <div>
            <strong>01 ano</strong>
            <span>na Tunni</span>
          </div>
          <div>
            <strong>7+ skills</strong>
            <span>em evolução</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>foco em front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
}
