import { DecorativeStar } from "@/components/ui/DecorativeStar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { withBasePath } from "@/lib/paths";

export function About() {
  return (
    <section id="sobre" className="about paper-texture section-shell">
      <div className="about__visual">
        <div className="about__photo about__photo--one">
          <img src={withBasePath("/images/image-3.jpeg")} alt="Computer" draggable={false} />
        </div>
        <div className="about__photo about__photo--two">
          <img src={withBasePath("/images/image-2.png")} alt="Mayza Ester" draggable={false} />
        </div>
        <div className="about__tape" aria-hidden="true" />
        <DecorativeStar className="about__star" size={110} draggable={false} />
      </div>

      <div className="about__content">
        <SectionHeading
          title="Eu, além do código." />

        <div className="about__copy">
          <p>
            Sou <strong>Mayza Ester</strong>, engenheira de software formada pela Unileste no primeiro semestre de 2026 e desenvolvedora front-end.
          </p>
          <p>
            Atualmente, atuo como freelancer no desenvolvimento de sites únicos, funcionais e responsivos. Crio projetos que fogem do comum e traduzem a identidade de cada cliente, ajudando empresas e profissionais a tirar ideias do papel ou renovar sua presença digital. É nessa área que concentro minha carreira e busco construir novas parcerias.
          </p>
        </div>

        <div className="about__facts">
          <div>
            <strong>2026</strong>
            <span>ENGENHARIA DE SOFTWARE</span>
          </div>
          <div>
            <strong>FREELANCER</strong>
            <span>PROJETOS E PARCERIAS</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>FOCO EM FRONT-END</span>
          </div>
        </div>
      </div>
    </section>
  );
}
