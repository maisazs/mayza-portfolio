type PhotoPlaceholderProps = {
  label?: string;
  className?: string;
  orientation?: "portrait" | "landscape";
};

export function PhotoPlaceholder({
  label = "ADICIONAR FOTO DA MAYZA",
  className = "",
  orientation = "portrait",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`photo-placeholder photo-placeholder--${orientation} ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="photo-placeholder__cross" aria-hidden="true" />
      <span className="photo-placeholder__label">{label}</span>
      <span className="photo-placeholder__hint">public/images/</span>
    </div>
  );
}
