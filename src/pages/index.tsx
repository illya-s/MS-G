import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const skills = [
  "Django, REST Framework",
  "PostgreSQL, SQL optimization",
  "Celery, Redis, queueing",
  "JWT, email-auth, OAuth",
  "Next.js, React, TypeScript",
  "SSR, SSG, static export",
  "Tailwind CSS, Styled UI",
];

const technologies = [
  { name: "Python", icon: "/python.png" },
  { name: "Django", icon: "/django-logo-negative.png" },
  { name: "Django REST Framework", icon: null },
  { name: "PostgreSQL", icon: "/postgre.png" },
  { name: "оптимизация запросов, индексы", icon: null },
  { name: "Celery", icon: "/celery_512.webp" },
  { name: "Redis", icon: "/9SY62Ld3kFV94aTLGnGj.webp" },
  { name: "асинхронные задачи, ETL", icon: null },
  { name: "Next.js", icon: "/icons8-next.js-480.png" },
  { name: "React", icon: "/React-icon.svg.png" },
  { name: "TypeScript", icon: "/ts-logo-512.png" },
  { name: "TailwindCSS", icon: "/tailwindcss-mark.96ee6a5a.svg" },
  { name: "Docker", icon: "/free-docker-logo_svgstack_com_50121774281626.png" },
  { name: "GitHub Actions", icon: "/GitHub_Invertocat_Black.png" },
  { name: "CI/CD", icon: null },
  { name: "Git", icon: "/social.png" },
  { name: "API интеграции", icon: "/api.png" },
  { name: "проксирование медиа", icon: null },
  { name: "JavaScript", icon: "/JavaScript-logo.png" },
  { name: "Telegram боты", icon: "/telegram.png" },
];

const experience = [
  {
    role: "Пока нет",
    company: "",
    period: "",
    details: "",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Илья - Full-Stack Developer (Django + Next.js)</title>
        <meta
          name="description"
          content="Портфолио Full-Stack Developer: Django, PostgreSQL, React, Next.js, API, Celery. CV с Github Actions deploy."
        />
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#191F25] text-[#F0E9E6]`}
      >
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 lg:px-12">
          <header className="mb-12 rounded-2xl border border-[#3d4751] bg-[#1d232b]/70 p-8 shadow-xl shadow-black/30 backdrop-blur">
            <div className="mb-4 flex items-center gap-4">
              <img
                src="/logo-dark.png"
                alt="avatar"
                width={80}
                height={80}
                className="rounded-full border-2 border-[#5f6d82] bg-[#222a38] p-2 object-contain"
              />
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-[#F0E9E6] sm:text-5xl">
                  Меланин Илья
                </h1>
                <p className="text-sm text-[#8eb0cb]">Full-Stack Developer (Django + React / Next.js), Media Platform Engineer</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#d1c8c2]">
              <span className="rounded-md bg-[#282F3D] px-3 py-1">Украина</span>
              <span className="rounded-md bg-[#282F3D] px-3 py-1">+380676955953</span>
              <span className="rounded-md bg-[#282F3D] px-3 py-1">ilya@example.com</span>
              <a
                href="https://github.com/illya-s"
                className="rounded-md bg-[#282F3D] px-3 py-1 text-[#8ecfdf] hover:text-[#aee0eb]"
              >
                github.com/illya-s
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[#9fb4c6]">
              <span className="rounded-md bg-[#232a35] px-3 py-1">🚀 Продуктовая архитектура</span>
              <span className="rounded-md bg-[#232a35] px-3 py-1">🔒 Безопасность</span>
              <span className="rounded-md bg-[#232a35] px-3 py-1">⚡ Производительность</span>
            </div>
          </header>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-5">
              <h2 className="mb-3 text-xl font-semibold text-[#F0E9E6]">Обо мне</h2>
              <p className="text-[#c7c1ba] leading-relaxed">
                Системный инженер с опытом проектирования архитектуры, создания
                высоконагруженных Django-приложений и производительного
                фронтенда на Next.js. Предпочитаю простую структуру, ясный
                код и контроль всех компонентов системы.
              </p>
            </article>
            <article className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-5 md:col-span-2">
              <h2 className="mb-3 text-xl font-semibold text-[#F0E9E6]">Ключевые компетенции</h2>
              <ul className="grid gap-2 text-[#c7c1ba] md:grid-cols-2">
                {skills.map((skill) => (
                  <li key={skill} className="rounded-md bg-[#232a35] px-3 py-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mb-10 rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-[#F0E9E6]">Опыт</h2>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.role}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#f8f4f1]">{item.role}</h3>
                    <span className="text-sm text-[#a5a09c]">{item.period}</span>
                  </div>
                  <p className="text-[#c7c1ba]">{item.company}</p>
                  <p className="mt-1 text-[#c7c1ba]">{item.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-6">
              <h2 className="mb-3 text-xl font-semibold text-[#F0E9E6]">Технологии</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-md bg-[#232a35] px-3 py-2 hover:bg-[#2a3345] transition"
                    title={tech.name}
                  >
                    {tech.icon && (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                      />
                    )}
                    <span className="text-sm text-[#c7c1ba]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-6">
              <h2 className="mb-3 text-xl font-semibold text-[#F0E9E6]">Системный профиль</h2>
              <p className="text-[#c7c1ba] leading-relaxed">
                Архитектура с учётом масштабируемости, отказоустойчивости и
                поддержки. Минимизирую зависимость от тяжёлых библиотек, делаю
                безопасные собственные решения и держу процесс под контролем.
              </p>
            </article>
          </section>

          <footer className="mt-12 rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-6 text-center text-[#b9b2ab]">
            <p className="mb-2">Нужен полноценный продукт? Я готов взять проект от базы данных до UI.</p>
            <p>GitHub Actions deploy настроен, стандартный стек + статический экспорт.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
