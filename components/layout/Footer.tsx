import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <p className="site-footer__name">Mayza Ester</p>
          <p className="site-footer__role">Front-end Developer</p>
        </div>

        <nav className="site-footer__nav" aria-label="Links do rodapé">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__social">
          <a href={siteConfig.githubUrl}>GitHub</a>
          <a href={siteConfig.linkedinUrl}>LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`}>E-mail</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>Projetado e desenvolvido por Mayza Ester.</p>
        <p>© {new Date().getFullYear()} · keep learning, keep building ✦</p>
      </div>
    </footer>
  );
}
