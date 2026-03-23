"use client";

import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ label: "Обо мне", href: "#about" },
		{ label: "Технологии", href: "#technologies" },
		{ label: "Проекты", href: "#projects" },
		{ label: "Контакты", href: "#contact" },
	];

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-[#3d4751] bg-[#191F25]/95 backdrop-blur-md shadow-lg">
			<div className="mx-auto max-w-5xl px-6 py-4 sm:px-10">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a href="#" className="text-1xl font-bold text-[#F0E9E6] hover:text-[#8ecfdf] transition-colors">
						МИ
					</a>

					{/* Desktop Navigation */}
					<div className="hidden gap-8 md:flex">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-sm font-medium text-[#c7c1ba] hover:text-[#F0E9E6] transition-colors relative group"
							>
								{link.label}
								<span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#8ecfdf] to-[#5f6d82] transition-all group-hover:w-full" />
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg bg-[#282F3D] text-[#F0E9E6] hover:bg-[#3d4751] transition-colors"
					>
						<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							{isOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="mt-4 space-y-2 md:hidden">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="block px-4 py-2 rounded-lg bg-[#282F3D] text-[#c7c1ba] hover:bg-[#3d4751] hover:text-[#F0E9E6] transition-colors text-sm font-medium"
							>
								{link.label}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
