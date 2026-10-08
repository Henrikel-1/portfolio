import { profile } from "../../data/profile";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{"// olá, eu sou"}</p>

        <h1 id="hero-title" className={styles.title}>
          {profile.name}
        </h1>

        <p className={styles.role}>{profile.role}</p>

        <ul className={styles.techList} aria-label="Tecnologias principais">
          {profile.technologies.map((tech) => (
            <li key={tech} className={styles.tech}>
              {tech}
            </li>
          ))}
        </ul>

        <p className={styles.intro}>{profile.intro}</p>

        <div className={styles.actions}>
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-secondary">
            Entrar em contato
          </a>
          <a
            href={profile.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (abre em nova aba)"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href={profile.linkedin}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (abre em nova aba)"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;