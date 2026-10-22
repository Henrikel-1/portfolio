import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;
type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialData: FormData = { name: "", email: "", subject: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// URL que recebe os dados do formulário (ex.: Formspree ou um backend próprio).
// Fica em .env.local, que não vai para o Git. Sem ela, o envio não é feito.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Informe seu nome (mínimo de 2 caracteres).";
  }

  if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Informe um e-mail válido, como nome@exemplo.com.";
  }

  if (data.subject.trim().length > 120) {
    errors.subject = "O assunto pode ter até 120 caracteres.";
  }

  const messageLength = data.message.trim().length;
  if (messageLength < 10) {
    errors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
  } else if (messageLength > 2000) {
    errors.message = "A mensagem pode ter até 2000 caracteres.";
  }

  return errors;
}

function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    const field = name as keyof FormData;

    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const found = validate(data);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    if (!CONTACT_ENDPOINT) {
      setErrorMessage(
        "O envio ainda não está configurado. Enquanto isso, use o e-mail ao lado.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          subject: data.subject.trim(),
          message: data.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Resposta inesperada: ${response.status}`);
      }

      setData(initialData);
      setErrors({});
      setStatus("success");
    } catch {
      setErrorMessage(
        "Não foi possível enviar sua mensagem agora. Tente novamente ou use o e-mail ao lado.",
      );
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.legend}>Campos marcados com * são obrigatórios.</p>

      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Seu nome <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Como posso te chamar?"
          maxLength={100}
          required
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          value={data.name}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.name && (
          <p id="contact-name-error" className={styles.error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Seu e-mail <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="seuemail@exemplo.com"
          maxLength={254}
          required
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          value={data.email}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.email && (
          <p id="contact-email-error" className={styles.error}>
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject" className={styles.label}>
          Assunto
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="Oportunidade, projeto ou dúvida"
          maxLength={120}
          aria-invalid={errors.subject ? "true" : undefined}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          value={data.subject}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.subject && (
          <p id="contact-subject-error" className={styles.error}>
            {errors.subject}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Mensagem <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Escreva aqui a sua mensagem..."
          rows={6}
          maxLength={2000}
          required
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          value={data.message}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea}`}
        />
        {errors.message && (
          <p id="contact-message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className={`btn btn-primary ${styles.submit}`}
        disabled={isSending}
      >
        {isSending ? "Enviando..." : "Enviar mensagem"}
      </button>

      <div className={styles.feedback}>
        {status === "success" && (
          <p role="status" className={styles.success}>
            Mensagem enviada! Obrigado pelo contato, respondo em breve.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className={styles.failure}>
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
