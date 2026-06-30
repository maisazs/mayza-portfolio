const words = [
  "interfaces responsivas",
  "experiências humanas",
  "código organizado",
  "evolução constante",
  "detalhes que importam",
];

export function Manifesto() {
  return (
    <section className="manifesto" aria-label="Manifesto profissional">
      <div className="manifesto__track">
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>
            {word} <i aria-hidden="true">✦</i>
          </span>
        ))}
      </div>
    </section>
  );
}
