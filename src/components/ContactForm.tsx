import { useState, type FormEvent } from "react";
import { profile } from "@/config/profile";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!profile.email) return;
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Новый проект — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")}\nEmail: ${data.get("email")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setPrepared(true);
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-heading"><span className="mono">NEW MESSAGE</span><span aria-hidden="true">↗</span></div>
    <div className="form-row">
      <label htmlFor="name">Как вас зовут<input id="name" name="name" autoComplete="name" placeholder="Ваше имя" required maxLength={100} /></label>
      <label htmlFor="email">Ваша почта<input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={200} /></label>
    </div>
    <label htmlFor="message">Что хотите создать?<textarea id="message" name="message" placeholder="Расскажите об идее, задачах и сроках…" rows={4} required maxLength={3000} /></label>
    <button className="button button-primary" type="submit" disabled={!profile.email}>Подготовить письмо <span aria-hidden="true">↗</span></button>
    <p className="form-note" role="status">{prepared ? "Письмо подготовлено. Отправьте его в почтовом приложении. Если оно не открылось, напишите по адресу рядом." : profile.email ? "Откроется ваше почтовое приложение — останется отправить письмо." : "Почта пока не указана. Воспользуйтесь другими контактами."}</p>
  </form>;
}
