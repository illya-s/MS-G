import Image from "next/image";
import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SEO from "@/components/SEO";
import { profile } from "@/config/profile";
import { projects } from "@/data/projects";
import portrait from "@/imgs/photo1.jpg";

const skills = [
  { number: "01", name: "Backend", subtitle: "Надёжная основа", items: ["Python", "Django", "REST Framework", "PostgreSQL"] },
  { number: "02", name: "Frontend", subtitle: "Продуманный интерфейс", items: ["React", "Next.js", "TypeScript", "JavaScript", "CSS"] },
  { number: "03", name: "Infrastructure", subtitle: "Всё работает вместе", items: ["Docker", "GitHub Actions", "Git", "CI/CD"] },
  { number: "04", name: "Integrations", subtitle: "Данные в движении", items: ["Celery", "Redis", "ETL", "API", "Telegram Bots"] },
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    if (!preference.matches) elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    });
    const showAll = () => {
      if (preference.matches) { observer.disconnect(); elements.forEach(el => el.classList.remove("reveal-pending")); }
    };
    preference.addEventListener("change", showAll);
    return () => { observer.disconnect(); preference.removeEventListener("change", showAll); elements.forEach(el => el.classList.remove("reveal-pending")); };
  }, []);

  return <>
    <SEO />
    <a className="skip-link" href="#main">Перейти к содержимому</a>
    <Navbar />
    <main id="main">
      <section id="home" className="container hero">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="status-dot" />{profile.role}<span className="edition">PORTFOLIO / 2026</span></div>
          <h1>Сложные задачи.<br /><span className="accent">Чистые</span><br />решения<span className="accent">.</span></h1>
          <p className="hero-intro">Привет, я <strong>{profile.name}.</strong><br />Проектирую системы и создаю интерфейсы.<br />От первой идеи — до работающего продукта.</p>
          <div className="hero-actions"><a href="#projects" className="button button-primary">Смотреть проекты <span aria-hidden="true">↗</span></a><a href="#contact" className="text-link">Давайте знакомиться <span aria-hidden="true">↗</span></a></div>
          <div className="hero-stack mono"><span>PYTHON / DJANGO</span><span>REACT / NEXT.JS</span></div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-outline" aria-hidden="true" />
          <figure className="portrait-frame">
            <Image src={portrait} alt={profile.name} fill sizes="(max-width: 700px) 90vw, 42vw" unoptimized loading="eager" fetchPriority="high" placeholder="blur" />
            <div className="portrait-shade" />
            <span className="portrait-label mono">THE HUMAN BEHIND THE CODE</span>
            <figcaption><span>{profile.name}</span><span className="mono">{profile.location} ↗</span></figcaption>
          </figure>
          <div className="code-sticker mono"><span className="code-comment">{"// подход к работе"}</span><br /><span className="accent">while</span> (idea) &#123;<br /><span className="code-indent">build. <span className="accent">ship.</span> improve.</span><br />&#125;<span className="cursor">▌</span></div>
          <span className="portrait-coordinate mono" aria-hidden="true">&lt;developer /&gt;</span>
        </div>
        <div className="hero-bottom mono"><span>АРХИТЕКТУРА × КОД × ДЕТАЛИ</span><a href="#about">Листайте дальше ↓</a></div>
      </section>
      <div className="expertise-strip" aria-hidden="true"><div className="container"><span>BACKEND</span><i>✳</i><span>FRONTEND</span><i>✳</i><span>ARCHITECTURE</span><i>✳</i><span>API & DATA</span></div></div>
      <section id="about" className="container section about-section" data-reveal>
        <div className="section-caption"><span className="eyebrow">01 / ОБО МНЕ</span><span className="mono">ЧУТЬ БОЛЬШЕ КОНТЕКСТА</span></div>
        <div className="about-layout"><h2>Вижу систему.<br /><span className="muted">Думаю о деталях.</span></h2><div className="about-copy"><p>Мне интересно, как всё устроено — и как сделать это лучше. Создаю веб-приложения, в которых продуманная архитектура встречается с удобным интерфейсом.</p><p>Мой фокус — Django, производительный фронтенд на Next.js и работа с данными. Предпочитаю ясный код, простую структуру и контроль каждого компонента системы.</p><a className="text-link" href="#technologies">Инструменты, которым доверяю ↘</a></div></div>
        <div className="principles">{[["{ }", "Архитектура", "Простая структура. Система, которую легко развивать."], ["↗", "Производительность", "Быстрые интерфейсы, точные запросы и фоновые задачи."], ["⌘", "Внимание к деталям", "От API и обработки ошибок до последнего состояния кнопки."]].map(([icon, title, text]) => <article key={title}><span className="principle-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section id="technologies" className="stack-section section">
        <div className="container"><div className="section-caption" data-reveal><span className="eyebrow">02 / ТЕХНОЛОГИИ</span><span className="mono">MY TOOLKIT</span></div><div className="section-heading" data-reveal><h2>Правильные инструменты.<br /><span className="muted">Для конкретной задачи.</span></h2><p>Полный цикл разработки:<br />от базы данных до деплоя.</p></div><div className="skills-grid">{skills.map(skill => <article className="skill-card" key={skill.number} data-reveal><div className="skill-top"><span className="mono">/{skill.number}</span><span aria-hidden="true">↗</span></div><h3>{skill.name}</h3><p>{skill.subtitle}</p><ul className="tags">{skill.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
      </section>
      <section id="projects" className="container section">
        <div className="section-caption" data-reveal><span className="eyebrow">03 / ПРОЕКТЫ</span><span className="mono">SELECTED WORK</span></div><div className="section-heading" data-reveal><h2>Меньше слов.<br /><span className="muted">Больше кода.</span></h2>{profile.github && <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Мой GitHub ↗</a>}</div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      </section>
      <section id="contact" className="contact-section section">
        <div className="container"><div className="section-caption" data-reveal><span className="eyebrow">04 / КОНТАКТЫ</span><span className="mono">LET’S BUILD SOMETHING</span></div><div className="contact-layout" data-reveal><div><h2>Есть идея?<br />Давайте <span className="accent">создадим<span className="contact-arrow" aria-hidden="true">↗</span></span></h2><p className="contact-intro">Расскажите о своей задаче.<br />Обсудим, как превратить её в работающий продукт.</p><div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}><span className="mono">EMAIL</span><span>{profile.email} ↗</span></a>}{profile.phone && <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}><span className="mono">ТЕЛЕФОН</span><span>{profile.phone} ↗</span></a>}{profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer"><span className="mono">GITHUB</span><span>{profile.github.replace(/^https?:\/\//, "")} ↗</span></a>}</div></div><ContactForm /></div></div>
      </section>
    </main>
    <Footer />
  </>;
}
