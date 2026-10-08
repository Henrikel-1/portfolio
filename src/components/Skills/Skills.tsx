import SectionHeading from "../SectionHeading/SectionHeading";
import TagList from "../TagList/TagList";
import { skillCategories } from "../../data/skills";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
    >
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="// skills"
          title="Habilidades"
        />

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.card}>
              <h3 className={styles.title}>{category.title}</h3>
              <TagList
                items={category.skills}
                learningItems={category.learning}
                label={`Habilidades de ${category.title}`}
              />
            </div>
          ))}
        </div>

        <p className={styles.legend}>
          Os itens marcados com "estudando" são tecnologias que estou
          aprendendo e começando a usar.
        </p>
      </div>
    </section>
  );
}

export default Skills;