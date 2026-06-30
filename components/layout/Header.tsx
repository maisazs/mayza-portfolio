"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <a className="site-logo" href="#inicio" aria-label="Voltar ao início">
        Mayza<span>✦</span>Ester
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Fechar" : "Menu"}</span>
        <span className="menu-button__icon" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>

      <nav
        id="main-navigation"
        className={`main-navigation ${open ? "main-navigation--open" : ""}`}
        aria-label="Navegação principal"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>
          Vamos conversar
        </a>
      </nav>
    </header>
  );
}
