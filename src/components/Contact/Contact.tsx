import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { profile } from "../../data/profile";
import styles from "./Contact.module.css";

type CopyStatus = "idle" | "copied" | "error";

const messages: Record<CopyStatus, string> = {
  idle: "",
  copied: "E-mail copiado!",
  error: "Não foi possível copiar. Copie manualmente.",
};

const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

function cleanUrl(url: string) {
  return url.replace("https://", "").replace(/\/$/, "");
}

function Contact() {
  const [status, setStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (status === "idle") return;

    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contato"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="// contato"
          title="Vamos conversar?"
        />

        <p className={styles.text}>
          Estou em busca de um estágio em desenvolvimento (Java/Spring Boot ou
          Full Stack). Se tiver uma oportunidade ou quiser trocar uma ideia, é
          só me chamar.
        </p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.label}>E-mail</p>
            <a href={`mailto:${profile.email}`} className={styles.value}>
              {profile.email}
            </a>
            <div className={styles.actions}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCopy}
              >
                Copiar e-mail
              </button>
              <p role="status" className={styles.feedback}>
                {messages[status]}
              </p>
            </div>
          </li>

          {socialLinks.map((link) => (
            <li key={link.label} className={styles.item}>
              <p className={styles.label}>{link.label}</p>
              <a
                href={link.href}
                className={styles.value}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label}: ${cleanUrl(link.href)} (abre em nova aba)`}
              >
                {cleanUrl(link.href)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;