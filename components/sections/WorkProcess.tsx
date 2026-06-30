import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    index: "01",
    title: "Entendimento",
    description: "Compreendo contexto, objetivo, público e restrições antes de abrir o editor.",
  },
  {
    index: "02",
    title: "Estruturação",
    description: "Organizo conteúdo, componentes, comportamento e hierarquia da experiência.",
  },
  {
    index: "03",
    title: "Desenvolvimento",
    description: "Transformo a proposta em uma interface responsiva, funcional e bem construída.",
  },
  {
    index: "04",
    title: "Refinamento",
    description: "Reviso detalhes, acessibilidade, performance e comportamento em diferentes telas.",
  },
];

export function WorkProcess() {
  return (
    <section className="process section-shell">
      <SectionHeading
        eyebrow="Como trabalho / 06"
        title="Um processo leve, organizado e próximo."
        description="Boa execução começa com clareza. Cada etapa reduz ruído e aumenta a qualidade da entrega."
      />

      <div className="process__notes">
        {steps.map((step, index) => (
          <article key={step.index} className={`process-note process-note--${index + 1}`}>
            <span>{step.index}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <i aria-hidden="true">✦</i>
          </article>
        ))}
      </div>
    </section>
  );
}
