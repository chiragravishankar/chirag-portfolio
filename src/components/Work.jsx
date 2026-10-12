import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import Stat from "./Stat";
import { EXPERIENCE, SKILLS } from "../data";
import { ArrowUpRight } from "../icons";

function WorkWindow({ exp, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="window" role="dialog" aria-modal="true" aria-labelledby="window-title" style={{ "--accent": exp.accent }}>
        <div className="window__bar">
          <button ref={closeRef} className="dot dot--red dot--btn" onClick={onClose} aria-label="Close" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="window__name">{exp.company.toLowerCase().replace(/\W+/g, "-")}.md</span>
        </div>
        <div className="window__body">
          <div className="window__head">
            <span className="logo-tile"><img src={exp.logo} alt="" /></span>
            <div>
              <h3 id="window-title">{exp.company}</h3>
              <div className="window__role">{exp.role}</div>
              <div className="mono muted">{exp.location} · {exp.period}</div>
            </div>
          </div>
          <span className="pill">{exp.category}</span>
          <ul className="highlights">
            {exp.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="metrics">
            {exp.metrics.map((m) => (
              <div key={m.label}>
                <strong><Stat value={m.value} /></strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          <a className="button" href={exp.url} target="_blank" rel="noopener noreferrer">
            Visit {exp.company} <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [open, setOpen] = useState(null);
  const exp = EXPERIENCE.find((e) => e.id === open);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="section work" id="work">
      <div className="wrap">
        <Reveal className="section__head">
          <div className="label">Dive into my work</div>
          <h2>Where I've made impact</h2>
          <p className="lede">
            From scaling Web3 communities to leading cross-functional marketing teams. Open a card for the full story.
          </p>
        </Reveal>

        <div className="cards">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <button type="button" className="card" style={{ "--accent": e.accent }} onClick={() => setOpen(e.id)}>
                <span className="card__top">
                  <span className="logo-tile"><img src={e.logo} alt="" /></span>
                  <span className="card__open" aria-hidden="true"><ArrowUpRight /></span>
                </span>
                <span className="card__company">{e.company}</span>
                <span className="card__text">{e.headline}</span>
                <span className="card__foot">
                  <span className="mono">{e.period}</span>
                  <span className="card__role">{e.role}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="marquee" aria-label="Expertise">
        <div className="marquee__track">
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span key={i} className="marquee__item" aria-hidden={i >= SKILLS.length}>
              {s}
              <span className="marquee__star" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

      {exp && <WorkWindow exp={exp} onClose={close} />}
    </section>
  );
}
