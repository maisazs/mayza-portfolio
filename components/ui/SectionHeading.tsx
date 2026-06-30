type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{eyebrow}</p>
      <h2 className={`section-title ${light ? "section-title--light" : ""}`}>{title}</h2>
      {description ? (
        <p className={`section-description ${light ? "section-description--light" : ""}`}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
