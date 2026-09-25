import { profile, projectLinks } from "@/config/profile";

export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	stack: string[];
	github: string;
	demo?: string;
	image?: string;
	icon?: string;
}

export const projects: Project[] = [
	{
		id: "media-platform",
		title: "Медиа-платформа (Дорамы/Сериалы)",
		description: "Полнофункциональная платформа для трансляции видеоконтента с системой пользователей, личным кабинетом и плеером.",
		longDescription: "Платформа с архитектурой Django REST + React/Next.js. Включает модели сезонов, эпизодов, актёров, кастомный видеоплеер с проксированием медиа. Фоновые задачи на Celery для импорта и обновления данных из API.",
		stack: ["Django", "PostgreSQL", "Celery", "React", "Next.js", "Docker"],
		github: projectLinks.media,
		demo: projectLinks.mediaDemo,
	},
	{
		id: "api-integration",
		title: "API Integration & ETL System",
		description: "Система синхронизации данных с внешними API с обработкой, нормализацией и хранением в PostgreSQL.",
		longDescription: "Сложная ETL система на Django с Celery для фоновых задач. Интегрирует множество источников API, нормализует данные, индексирует в БД. Включает обработку ошибок, retry логику и логирование.",
		stack: ["Python", "Django", "PostgreSQL", "Celery", "Redis"],
		github: projectLinks.etl,
	},
	{
		id: "portfolio-site",
		title: "Portfolio & Resume Website",
		description: "Этот сайт портфолио. Next.js + CSS, статический экспорт, GitHub Pages deployment.",
		longDescription: "Собственное портфолио с адаптивным дизайном, тёмной темой, компонентами проектов и контактов. Использует Next.js для оптимизации, нативный CSS для стилей, GitHub Actions для автоматического деплоя на Pages.",
		stack: ["Next.js", "TypeScript", "CSS", "GitHub Actions"],
		github: projectLinks.portfolio,
		demo: profile.siteUrl,
	},
];
