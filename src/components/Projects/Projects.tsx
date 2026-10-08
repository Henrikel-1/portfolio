import SectionHeading from "../SectionHeading/SectionHeading";
import TagList from "../TagList/TagList";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section
      id="projetos"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="// projetos"
          title="Projetos"
        />

        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.title} className={styles.card}>
              {project.image && (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className={styles.image}
                  width={1000}
                  height={1054}
                  loading="lazy"
                />
              )}

              <div className={styles.content}>
                <p className={styles.kind}>{project.kind}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p>{project.description}</p>

                {project.role && (
                  <p className={styles.role}>
                    <strong>Meu papel:</strong> {project.role}
                  </p>
                )}

                <ul className={styles.features}>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <TagList
                  items={project.technologies}
                  label={`Tecnologias de ${project.title}`}
                />

                <a
                  href={project.github}
                  className={`btn btn-secondary ${styles.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${project.title} no GitHub (abre em nova aba)`}
                >
                  Ver no GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;