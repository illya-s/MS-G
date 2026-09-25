import { useState } from "react";
import { profile } from "@/config/profile";

const links = [
  ["Обо мне", "#about"], ["Стек", "#technologies"],
  ["Проекты", "#projects"], ["Контакты", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Основная навигация" onKeyDown={(event) => {
        if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); }
      }}>
        <a className="brand" href="#home" aria-label="На главную">{profile.initials}<span>.</span><span className="brand-code">/ dev</span></a>
        <button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? "Закрыть −" : "Меню +"}</button>
        <div id="navigation-links" className={`nav-links${open ? " is-open" : ""}`}>
          {links.map(([label, href], i) => <a href={href} key={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</a>)}
        </div>
        <a className="nav-contact" href="#contact">Обсудим проект <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
