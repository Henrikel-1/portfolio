import { useEffect, useRef, useState } from "react";
import { navLinks } from "../../data/navLinks";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./Header.module.css";

const sectionIds = navLinks.map((link) => link.href.slice(1));

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand}>
          keldson
          <span className={styles.brandAccent} aria-hidden="true">
            _
          </span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  aria-current={
                    activeId === link.href.slice(1) ? "location" : undefined
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;