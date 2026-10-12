import { Fragment, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import Stat from "./Stat";
import { PROFILE, FOCUS, STATS, images } from "../data";
import { prefersReducedMotion } from "../hooks";

/* The statement is a list of words plus inline "stickers", lit up as you scroll. */
const STATEMENT = [
  "I'm", "Chirag", { sticker: "avatar" }, ",", "a", "marketing", "leader", "who", "scales",
  "communities", { sticker: "polygon" }, ",", "builds", "brands", { sticker: "rome" }, ",", "and",
  "drives", "growth", "for", "technology", "companies", { sticker: "shardeum" }, ".",
];

const STICKERS = {
  avatar: { src: images.avatar, cls: "inline-sticker--round", rot: -6 },
  polygon: { src: images.polygonLogo, cls: "", rot: 8 },
  rome: { src: images.romeLogo, cls: "", rot: -4 },
  shardeum: { src: images.shardeumLogo, cls: "", rot: 6 },
};

function Statement() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top hits 85% of the viewport, 1 when its bottom reaches 45%
      const p = (vh * 0.85 - r.top) / (r.height + vh * 0.4);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const lit = Math.round(progress * STATEMENT.length);

  return (
    <p className="statement" ref={ref}>
      {STATEMENT.map((t, i) => {
        const on = i < lit ? "is-lit" : "";
        if (typeof t === "string") {
          const glue = t === "," || t === ".";
          return (
            <Fragment key={i}>
              {i > 0 && !glue && " "}
              <span className={`statement__word ${on}`}>{t}</span>
            </Fragment>
          );
        }
        const s = STICKERS[t.sticker];
        return (
          <Fragment key={i}>
          {" "}
          <span
            className={`inline-sticker ${s.cls} ${on}`}
            style={{ "--rot": `${s.rot}deg` }}
            aria-hidden="true"
          >
            <img src={s.src} alt="" />
          </span>
          </Fragment>
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <Statement />

        <Reveal className="chips">
          {FOCUS.map((f, i) => (
            <span key={f} className={`chip chip--${i}`}>
              {f}
            </span>
          ))}
        </Reveal>

        <div className="bio">
          <Reveal className="bio__text">
            <div className="label">Main bio</div>
            {PROFILE.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <dl className="facts">
              <div>
                <dt>Education</dt>
                <dd>{PROFILE.education}</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{PROFILE.languages}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="bio__side" delay={0.15}>
            <figure className="polaroid polaroid--large">
              <img src={images.headshot} alt="Chirag Ravishankar at the Golden Gate Bridge" />
              <figcaption>it's me ✌️</figcaption>
            </figure>
            <div className="widget">
              {STATS.map((s) => (
                <div key={s.label} className="widget__stat">
                  <strong>
                    <Stat value={s.value} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
