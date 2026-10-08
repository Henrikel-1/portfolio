import SectionHeading from "../SectionHeading/SectionHeading";
import TagList from "../TagList/TagList";
import { experiences } from "../../data/experience";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section
      id="experiencia"
      className={styles.experience}
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="// experiência"
          title="Formação e experiência"
        />

        <ol className={styles.timeline}>
          {experiences.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.place}>{item.place}</p>
                <p className={styles.period}>{item.period}</p>
              </div>

              <p className={styles.description}>{item.description}</p>

              {item.note && <p className={styles.note}>{item.note}</p>}

              <TagList items={item.tags} label="Temas e tecnologias" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;