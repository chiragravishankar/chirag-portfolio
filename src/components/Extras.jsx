import { useState } from "react";
import Reveal from "./Reveal";
import { PROFILE, SPEAKING, BEYOND } from "../data";
import { InstagramIcon, CopyIcon, CheckIcon, XIcon, TelegramIcon, LinkedInIcon, ArrowUpRight } from "../icons";

export function Speaking() {
  return (
    <section className="section" id="speaking">
      <div className="wrap">
        <Reveal className="section__head">
          <div className="label">On stage & advising</div>
          <h2>Speaking & advisory</h2>
        </Reveal>
        <div className="stickers">
          {SPEAKING.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="sticker-card" style={{ "--tint": s.tint, "--tilt": `${[-1.5, 1, -0.8][i]}deg` }}>
              <span className="sticker-card__emoji" aria-hidden="true">{s.emoji}</span>
              <span className="mono muted">{s.kicker}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Beyond() {
  return (
    <section className="section beyond" id="beyond">
      <div className="wrap">
        <Reveal className="section__head">
          <div className="label">Life outside the screen</div>
          <h2>
            When I'm not building brands, I'm <span className="scribble">chasing horizons.</span>
          </h2>
        </Reveal>
        <div className="beyond__grid">
          {BEYOND.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="beyond__card">
              <span className="beyond__emoji" aria-hidden="true">{b.emoji}</span>
              <div>
                <div className="beyond__title">
                  <h3>{b.title}</h3>
                  <span className="pill">{b.tag}</span>
                </div>
                <p>{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a className="button button--ghost" href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={16} /> Follow the adventures @chirag_ravishankar
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState(
    "Hi Chirag,\n\nI'd love to chat about growing our community and brand. Are you free for a call this week?\n\n"
  );
  const subject = "Let's work together";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal className="section__head section__head--center">
          <div className="label">Let's work together</div>
          <h2>Got a community to grow?</h2>
        </Reveal>

        <Reveal className="mail">
          <div className="window__bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="window__name">New Message</span>
          </div>
          <div className="mail__row">
            <span className="mail__key">To:</span>
            <span className="mail__to">{PROFILE.email}</span>
            <button type="button" className="mail__copy" onClick={copy} aria-label="Copy email address">
              {copied ? <CheckIcon /> : <CopyIcon />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <div className="mail__row">
            <span className="mail__key">Subject:</span>
            <span>{subject}</span>
          </div>
          <label className="sr-only" htmlFor="mail-body">Message</label>
          <textarea id="mail-body" className="mail__body" value={message} onChange={(e) => setMessage(e.target.value)} rows={6} />
          <div className="mail__actions">
            <div className="mail__socials">
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
              <a href={PROFILE.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon size={17} /></a>
              <a href={PROFILE.socials.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram"><TelegramIcon size={18} /></a>
              <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
            </div>
            <a className="button" href={href}>
              Send <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Chirag Ravishankar</span>
      <a href="#top">Back to desktop ↑</a>
    </footer>
  );
}
