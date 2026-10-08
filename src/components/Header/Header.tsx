import { useState } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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