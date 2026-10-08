import SectionHeading from "../SectionHeading/SectionHeading";
import { about } from "../../data/about";
import styles from "./About.module.css";

function About() {
  return (
    <section id="sobre" className={styles.about} aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="// sobre"
          title="Um pouco sobre mim"
        />

        <div className={styles.grid}>
          <div className={styles.text}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className={styles.details}>
            {about.details.map((item) => (
              <div key={item.label} className={styles.detail}>
                <dt className={styles.label}>{item.label}</dt>
                <dd className={styles.value}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;