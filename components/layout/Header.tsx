"use client";

import {
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import {
  navItems,
  projectsArchiveNavItem,
  siteConfig,
} from "@/config/site";

export function Header() {
  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const normalizedPathname =
    pathname.replace(/\/+$/, "") || "/";

  const isProjectsArchive =
    normalizedPathname.endsWith(
      "/projetos",
    );

  const specialLink = isProjectsArchive
    ? {
      label: "Home",
      href: siteConfig.homeUrl,
      icon: "↖",
      ariaLabel:
        "Voltar para a página inicial",
    }
    : {
      label:
        projectsArchiveNavItem.label,
      href:
        projectsArchiveNavItem.href,
      icon: "↗",
      ariaLabel:
        "Abrir o arquivo completo de projetos",
    };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll,
      );
    };
  }, []);

  return (
    <header
      className={`site-header ${scrolled
          ? "site-header--scrolled"
          : ""
        }`}
    >
      <a
        className="site-logo"
        href={siteConfig.homeUrl}
        aria-label="Voltar ao início"
      >
        Mayza<span>✦</span>Ester
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() =>
          setOpen((current) => !current)
        }
      >
        <span>
          {open ? "Fechar" : "Menu"}
        </span>

        <span
          className="menu-button__icon"
          aria-hidden="true"
        >
          <i />
          <i />
        </span>
      </button>

      <nav
        id="main-navigation"
        className={`main-navigation ${open
            ? "main-navigation--open"
            : ""
          }`}
        aria-label="Navegação principal"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() =>
              setOpen(false)
            }
          >
            {item.label}
          </a>
        ))}

        <a
          className="nav-archive-link"
          href={specialLink.href}
          aria-label={specialLink.ariaLabel}
          onClick={() =>
            setOpen(false)
          }
        >
          <span>
            {specialLink.label}
          </span>

          <span aria-hidden="true">
            {specialLink.icon}
          </span>
        </a>

        <a
          className="nav-cta"
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            setOpen(false)
          }
        >
          Vamos conversar
        </a>
      </nav>
    </header>
  );
}
