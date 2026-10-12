import { useEffect, useState } from "react";
import { PROFILE, images } from "../data";
import { useClock } from "../hooks";
import { MailIcon, LinkedInIcon, XIcon, SunIcon, MoonIcon } from "../icons";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Speaking", href: "#speaking" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export default function MenuBar({ theme, onToggleTheme }) {
  const now = useClock();
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const limit = hero ? hero.offsetHeight * 0.55 : 400;
      setOverHero(window.scrollY < limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const time = now.toLocaleString("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" });

  return (
    <div className={`menubar ${overHero ? "menubar--hero" : ""}`}>
      <div className="menubar__left">
        <a href="#top" className="menubar__brand">
          <img src={images.avatar} alt="" />
          {PROFILE.firstName}
        </a>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="menubar__link">
            {l.label}
          </a>
        ))}
      </div>
      <div className="menubar__right">
        <button
          type="button"
          className="menubar__icon"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
        </button>
        <a className="menubar__icon hide-sm" href={`mailto:${PROFILE.email}`} aria-label="Email">
          <MailIcon size={16} />
        </a>
        <a className="menubar__icon hide-sm" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon size={15} />
        </a>
        <a className="menubar__icon hide-sm" href={PROFILE.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X">
          <XIcon size={14} />
        </a>
        <span className="menubar__clock">{time}</span>
      </div>
    </div>
  );
}
