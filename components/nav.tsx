"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme-provider";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/",            label: "Inicio" },
    { href: "/ia",          label: "IA" },
    { href: "/modulos",     label: "Módulos" },
    { href: "/comparativa", label: "Comparativa" },
    { href: "/precios",     label: "Precios" },
    { href: "/contacto",    label: "Contacto" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="nav" style={{ borderBottomColor: scrolled ? "var(--border)" : "transparent" }}>
        <div className="shell nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <Image src="/nexo-logo.png" alt="Nexo AI" width={34} height={34} style={{ borderRadius: 8 }} />
            <span>Nexo<span style={{ color: "var(--accent)" }}>AI</span></span>
            <span className="dot" />
          </Link>

          {/* Center links */}
          <div className="nav-links">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={isActive(href) ? "nav-active" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button
              onClick={toggle}
              aria-label="Cambiar tema"
              className="nav-theme-btn"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
                </svg>
              )}
            </button>
            <a href="https://app.nexoai.mx/sign-in" className="btn btn-ghost nav-signin" style={{ height: 38, padding: "0 16px", fontSize: 13 }}>
              Iniciar sesión
            </a>
            <Link href="/contacto" className="btn btn-primary" style={{ height: 38, padding: "0 18px", fontSize: 13 }}>
              Pedir demo
            </Link>
            {/* Hamburger */}
            <button
              className="nav-hamburger"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? "nav-active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="nav-mobile-actions">
            <a href="https://app.nexoai.mx/sign-in" className="btn btn-ghost" style={{ justifyContent: "center" }}>
              Iniciar sesión
            </a>
            <Link href="/contacto" className="btn btn-primary" style={{ justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
              Pedir demo
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
