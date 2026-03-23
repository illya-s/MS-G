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
		github: "https://github.com/illya-s/media-platform",
		demo: "https://example.com/media",
		icon: "/icons8-next.js-480.png",
	},
	{
		id: "api-integration",
		title: "API Integration & ETL System",
		description: "Система синхронизации данных с внешними API с обработкой, нормализацией и хранением в PostgreSQL.",
		longDescription: "Сложная ETL система на Django с Celery для фоновых задач. Интегрирует множество источников API, нормализует данные, индексирует в БД. Включает обработку ошибок, retry логику и логирование.",
		stack: ["Python", "Django", "PostgreSQL", "Celery", "Redis"],
		github: "https://github.com/illya-s/api-etl",
		icon: "/api.png",
	},
	{
		id: "portfolio-site",
		title: "Portfolio & Resume Website",
		description: "Этот сайт портфолио. Next.js + Tailwind CSS, статический экспорт, GitHub Pages deployment.",
		longDescription: "Собственное портфолио с адаптивным дизайном, тёмной темой, компонентами проектов и контактов. Использует Next.js для оптимизации, Tailwind для стилей, GitHub Actions для автоматического деплоя на Pages.",
		stack: ["Next.js", "TypeScript", "TailwindCSS", "GitHub Actions"],
		github: "https://github.com/illya-s/MS-G",
		demo: "https://illya-s.github.io/MS-G/",
		icon: "/icons8-next.js-480.png",
	},
];
