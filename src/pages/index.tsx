import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const technologies = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/django.svg" },
  { name: "Django REST Framework", icon: null },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg" },
  { name: "оптимизация запросов, индексы", icon: null },
  { name: "Celery", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/celery.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redis.svg" },
  { name: "асинхронные задачи, ETL", icon: null },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" },
  { name: "CI/CD", icon: null },
  { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg" },
  { name: "API интеграции", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swagger.svg" },
  { name: "проксирование медиа", icon: null },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg" },
  { name: "Telegram боты", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <SEO />
      <div
        className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#191F25] text-[#F0E9E6]`}
      >
        <Navbar />

        {/* Main Content with padding for fixed navbar */}
        <main className="pt-20">
          <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 lg:px-12">
            {/* Header Section */}
            <header
              className={`mb-12 rounded-2xl border border-[#3d4751] bg-[#1d232b]/70 p-8 shadow-xl shadow-black/30 backdrop-blur transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <div className="mb-4 flex items-center gap-4">
                <img
                  src="https://avatars.githubusercontent.com/u/illya-s?v=4&s=200"
                  alt="avatar"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-[#5f6d82] bg-[#222a38] p-2 object-contain"
                />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-[#F0E9E6] sm:text-5xl">
                    Меланин Илья
                  </h1>
                  <p className="text-sm text-[#8eb0cb]">
                    Full-Stack Developer (Django + React / Next.js), Media Platform Engineer
                  </p>
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

            {/* About & Skills Section */}
            <section
              id="about"
              className={`mb-10 grid gap-6 md:grid-cols-3 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              <article className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-5 hover:border-[#5f6d82] transition-colors">
                <h2 className="mb-3 text-xl font-semibold text-[#F0E9E6]">Обо мне</h2>
                <p className="text-[#c7c1ba] leading-relaxed">
                  Системный инженер с опытом проектирования архитектуры, создания высоконагруженных Django-приложений и производительного фронтенда на Next.js. Предпочитаю простую структуру, ясный код и контроль всех компонентов системы.
                </p>
              </article>
              <article className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-5 hover:border-[#5f6d82] transition-colors md:col-span-2">
                <h2 className="mb-3 text-xl font-semibold text-[#F0E9E6]">Ключевые компетенции</h2>
                <ul className="grid gap-2 text-[#c7c1ba] md:grid-cols-2">
                  <li className="rounded-md bg-[#232a35] px-3 py-2">Django, REST Framework</li>
                  <li className="rounded-md bg-[#232a35] px-3 py-2">PostgreSQL, оптимизация</li>
                  <li className="rounded-md bg-[#232a35] px-3 py-2">Celery, Redis, асинхронность</li>
                  <li className="rounded-md bg-[#232a35] px-3 py-2">Next.js, React, TypeScript</li>
                </ul>
              </article>
            </section>

            {/* Technologies Section */}
            <section
              id="technologies"
              className={`mb-10 rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#F0E9E6]">Технологии</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-md bg-[#232a35] px-3 py-2 hover:bg-[#2a3345] transition-all hover:scale-105"
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
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className={`mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h2 className="mb-6 text-2xl font-semibold text-[#F0E9E6]">Проекты</h2>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                {projects.map((project) => (
                  <div key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className={`mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <ContactForm />
                <div className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-6 backdrop-blur">
                  <h3 className="mb-6 text-2xl font-bold text-[#F0E9E6]">Найдите меня</h3>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/illya-s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg bg-[#232a35] p-4 hover:bg-[#282F3D] transition-colors group"
                    >
                      <img
                        src="/GitHub_Invertocat_Black.png"
                        alt="GitHub"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <div>
                        <p className="font-medium text-[#F0E9E6] group-hover:text-[#8ecfdf]">GitHub</p>
                        <p className="text-sm text-[#b9b2ab]">illya-s</p>
                      </div>
                    </a>
                    <a
                      href="mailto:ilya@example.com"
                      className="flex items-center gap-4 rounded-lg bg-[#232a35] p-4 hover:bg-[#282F3D] transition-colors group"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8ecfdf]/20">
                        <svg className="h-5 w-5 text-[#8ecfdf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#F0E9E6] group-hover:text-[#8ecfdf]">Email</p>
                        <p className="text-sm text-[#b9b2ab]">ilya@example.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
