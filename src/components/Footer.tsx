export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-[#3d4751] bg-[#1d232b]/70 py-8 px-6 sm:px-10 backdrop-blur">
			<div className="mx-auto max-w-5xl">
				<div className="grid gap-6 md:grid-cols-3 mb-8">
					{/* About */}
					<div>
						<h3 className="mb-3 font-semibold text-[#F0E9E6]">Full-Stack Developer</h3>
						<p className="text-sm text-[#b9b2ab] leading-relaxed">
							Специализируюсь на создании полнофункциональных веб-приложений с Django и Next.js.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-3 font-semibold text-[#F0E9E6]">Быстрые ссылки</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#about" className="text-[#8ecfdf] hover:text-[#F0E9E6] transition-colors">
									Обо мне
								</a>
							</li>
							<li>
								<a href="#projects" className="text-[#8ecfdf] hover:text-[#F0E9E6] transition-colors">
									Проекты
								</a>
							</li>
							<li>
								<a href="#contact" className="text-[#8ecfdf] hover:text-[#F0E9E6] transition-colors">
									Контакты
								</a>
							</li>
						</ul>
					</div>

					{/* Social */}
					<div>
						<h3 className="mb-3 font-semibold text-[#F0E9E6]">Соцсети</h3>
						<div className="flex gap-3">
							<a
								href="https://github.com/illya-s"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#282F3D] text-[#8ecfdf] hover:bg-[#3d4751] hover:text-[#F0E9E6] transition-all"
							>
								<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z" />
								</svg>
							</a>
							<a
								href="mailto:ilya@example.com"
								className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#282F3D] text-[#8ecfdf] hover:bg-[#3d4751] hover:text-[#F0E9E6] transition-all"
							>
								<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="border-t border-[#3d4751] pt-6 text-center text-sm text-[#a5a09c]">
					<p>© {currentYear} Меланин Илья. Все права защищены.</p>
					<p className="mt-2">Разработано с Next.js, TypeScript и Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
}
