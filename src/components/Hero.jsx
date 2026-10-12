import Draggable from "./Draggable";
import Terminal from "./Terminal";
import { PROFILE, images } from "../data";
import {
  MailIcon,
  LinkedInIcon,
  XIcon,
  TelegramIcon,
  InstagramIcon,
  FolderIcon,
  MegaphoneIcon,
  UsersIcon,
  PaperclipIcon,
} from "../icons";

const DOCK = [
  { label: "Mail", href: `mailto:${PROFILE.email}`, icon: <MailIcon size={26} />, cls: "app--mail" },
  { label: "LinkedIn", href: PROFILE.socials.linkedin, icon: <LinkedInIcon size={26} />, cls: "app--linkedin" },
  { label: "X", href: PROFILE.socials.x, icon: <XIcon size={24} />, cls: "app--x" },
  { label: "Telegram", href: PROFILE.socials.telegram, icon: <TelegramIcon size={28} />, cls: "app--telegram" },
  { label: "Instagram", href: PROFILE.socials.instagram, icon: <InstagramIcon size={26} />, cls: "app--instagram" },
  { divider: true },
  { label: "My Work", href: "#work", icon: <FolderIcon size={26} />, cls: "app--folder", internal: true },
];

function Dock() {
  return (
    <nav className="dock" aria-label="Quick links">
      {DOCK.map((app, i) =>
        app.divider ? (
          <span key={i} className="dock__divider" aria-hidden="true" />
        ) : (
          <a
            key={app.label}
            href={app.href}
            className={`app ${app.cls}`}
            target={app.internal || app.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            {app.icon}
            <span className="app__tip">{app.label}</span>
          </a>
        )
      )}
    </nav>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__sky" aria-hidden="true">
        <span className="cloud cloud--1" />
        <span className="cloud cloud--2" />
        <span className="cloud cloud--3" />
        <span className="stars" />
      </div>

      {/* Center title */}
      <div className="hero__title">
        <div className="hello">
          Hi, I am
          <svg viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 7 C 30 2, 70 2, 118 6" />
          </svg>
        </div>
        <div className="selection">
          <h1 className="name">
            <span>Chirag</span> <span>Ravishankar</span>
          </h1>
          <span className="selection__handle selection__handle--tr" aria-hidden="true" />
          <span className="selection__handle selection__handle--bl" aria-hidden="true" />

          <span className="tag tag--top">
            <span className="tag__badge tag__badge--purple">
              <MegaphoneIcon size={16} />
            </span>
            <span className="tag__clip"><PaperclipIcon size={14} /></span>
            {PROFILE.roles[0]}
          </span>
          <span className="tag tag--bottom">
            <span className="tag__badge tag__badge--green">
              <UsersIcon size={16} />
            </span>
            <span className="tag__clip"><PaperclipIcon size={14} /></span>
            {PROFILE.roles[1]}
          </span>
        </div>
        <p className="hero__tagline">{PROFILE.tagline}</p>
      </div>

      {/* Desktop objects */}
      <Draggable className="item item--polaroid" label="Photo of Chirag at the Golden Gate Bridge" delay={0.2}>
        <figure className="polaroid">
          <img src={images.headshot} alt="" draggable="false" />
          <figcaption>Golden Gate, SF</figcaption>
        </figure>
      </Draggable>

      <Draggable className="item item--glider" label="Paraglider" delay={0.35}>
        <div className="glider">
          <span className="emoji">🪂</span>
          <span className="glider__label">P3 pilot</span>
        </div>
      </Draggable>

      <Draggable className="item item--pass" delay={0.5}>
        <div className="pass">
          <div className="pass__main">
            <div className="pass__kicker">Boarding pass · Nomad class</div>
            <div className="pass__route">
              <div>
                <strong>DPS</strong>
                <span>Bali</span>
              </div>
              <span className="pass__plane">✈</span>
              <div>
                <strong>DXB</strong>
                <span>Dubai</span>
              </div>
              <span className="pass__plane">✈</span>
              <div>
                <strong>SFO</strong>
                <span>San Francisco</span>
              </div>
            </div>
            <div className="pass__meta">
              <div><span>Passenger</span>C. RAVISHANKAR</div>
              <div><span>Countries</span>20+</div>
            </div>
          </div>
          <div className="pass__stub" aria-hidden="true">
            <div className="pass__barcode" />
          </div>
        </div>
      </Draggable>

      <Draggable className="item item--terminal" delay={0.65}>
        <Terminal />
      </Draggable>

      <Draggable className="item item--note" delay={0.8}>
        <div className="note">
          <strong>600K+</strong>
          community members grown organically
          <span className="note__tape" aria-hidden="true" />
        </div>
      </Draggable>

      <Draggable className="item item--rome" label="Rome Protocol sticker" delay={0.9}>
        <div className="sticker"><img src={images.romeLogo} alt="" draggable="false" /></div>
      </Draggable>
      <Draggable className="item item--polygon" label="Polygon sticker" delay={1}>
        <div className="sticker"><img src={images.polygonLogo} alt="" draggable="false" /></div>
      </Draggable>
      <Draggable className="item item--shardeum" label="Shardeum sticker" delay={1.1}>
        <div className="sticker"><img src={images.shardeumLogo} alt="" draggable="false" /></div>
      </Draggable>

      <Draggable className="item item--surf" label="Surfer" delay={1.2}>
        <div className="glider glider--surf">
          <span className="emoji">🏄</span>
          <span className="glider__label">surf's up</span>
        </div>
      </Draggable>

      <p className="hero__hint" aria-hidden="true">psst — everything here is draggable</p>
      <Dock />
    </header>
  );
}
