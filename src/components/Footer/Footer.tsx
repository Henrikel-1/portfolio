import { profile } from "../../data/profile";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.info}>
          <p className={styles.copy}>
            © {year} {profile.name}
          </p>
          <p className={styles.built}>Feito com React, TypeScript e Vite</p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className={styles.links}>
            <li>
              <a
                href={profile.github}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (abre em nova aba)"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (abre em nova aba)"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#inicio" className={styles.link}>
                Voltar ao topo <span aria-hidden="true">↑</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;