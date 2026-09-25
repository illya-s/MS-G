import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card project-${project.id}`} data-reveal>
    <div className="project-visual" aria-hidden="true">
      <div className="visual-topline"><span>EXPERIMENT / 0{index + 1}</span><span>↗</span></div>
      {index === 0 ? <div className="media-art"><div className="film-frame"><span className="play-icon">▶</span><span>STREAM / PLAY / REPEAT</span></div><div className="film-line" /></div>
        : index === 1 ? <div className="pipeline-art"><span>API</span><i /><span className="pipeline-core">ETL</span><i /><span>DB</span></div>
        : <div className="code-art"><span>&lt;portfolio&gt;</span><strong>hello<span>_</span>world.</strong><span>&lt;/portfolio&gt;</span></div>}
      <div className="visual-bottomline"><span>{index === 0 ? "MEDIA ENGINEERING" : index === 1 ? "DATA ARCHITECTURE" : "DESIGN + DEVELOPMENT"}</span><span>0{index + 1} / 03</span></div>
    </div>
    <div className="project-info">
      <span className="eyebrow">ПРОЕКТ / 0{index + 1}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <details><summary>Что внутри <span aria-hidden="true">+</span></summary><p>{project.longDescription}</p></details>
      <ul className="tags" aria-label="Технологии проекта">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <div className="project-links">
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Исходный код ↗</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Открыть сайт ↗</a>}
      </div>
    </div>
  </article>;
}
