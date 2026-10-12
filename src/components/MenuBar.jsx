import { PROFILE, images } from "../data";
import { SunIcon, MoonIcon } from "../icons";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Speaking", href: "#speaking" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export default function MenuBar({ theme, onToggleTheme }) {
  return (
    <nav className="nav" aria-label="Main">
      <a href="#top" className="nav__brand">
        <img src={images.avatar} alt="" />
        {PROFILE.firstName}
      </a>
      <span className="nav__links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="nav__link">
            {l.label}
          </a>
        ))}
      </span>
      <button
        type="button"
        className="nav__theme"
        onClick={onToggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </button>
    </nav>
  );
}
