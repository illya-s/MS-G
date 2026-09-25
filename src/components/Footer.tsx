import { profile } from "@/config/profile";

export default function Footer() {
  return <footer className="container footer">
    <span>© {new Date().getFullYear()} {profile.name}</span>
    <span className="mono">Спроектировано. Написано. Запущено.</span>
    <a href="#home">Наверх ↑</a>
  </footer>;
}
