import { Project } from "@/data/projects";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="group rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-6 shadow-lg transition-all duration-300 hover:border-[#5f6d82] hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1 backdrop-blur">
			{/* Project Header with Icon */}
			<div className="mb-4 flex items-start justify-between">
				<div className="flex-1">
					<h3 className="text-xl font-bold text-[#F0E9E6] group-hover:text-[#8ecfdf] transition-colors">
						{project.title}
					</h3>
					<p className="mt-2 text-sm text-[#c7c1ba]">{project.description}</p>
				</div>
				{project.icon && (
					<img
						src={project.icon}
						alt={project.title}
						width={40}
						height={40}
						className="ml-3 h-10 w-10 rounded-lg bg-[#232a35] p-1 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
					/>
				)}
			</div>

			{/* Long Description */}
			<p className="mb-4 text-[#b9b2ab] text-sm leading-relaxed">
				{project.longDescription}
			</p>

			{/* Tech Stack */}
			<div className="mb-5 flex flex-wrap gap-2">
				{project.stack.map((tech) => (
					<span
						key={tech}
						className="inline-block rounded-full bg-[#282F3D] px-3 py-1 text-xs font-medium text-[#8ecfdf] ring-1 ring-[#3d4751]"
					>
						{tech}
					</span>
				))}
			</div>

			{/* Links */}
			<div className="flex gap-3">
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 rounded-lg bg-[#282F3D] px-4 py-2 text-sm text-[#8ecfdf] hover:bg-[#3d4751] transition-colors group/link"
				>
					<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 '.405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.004 12.004 0 0024 12c0-6.63-5.37-12-12-12z" />
					</svg>
					GitHub
				</a>
				{project.demo && (
					<a
						href={project.demo}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 rounded-lg bg-[#232a35] px-4 py-2 text-sm text-[#d1c8c2] hover:bg-[#282F3D] transition-colors"
					>
						<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
						Demo
					</a>
				)}
			</div>
		</div>
	);
}
