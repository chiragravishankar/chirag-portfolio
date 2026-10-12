import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../hooks";

const LINES = [
  "CHIRAG/OS 1.0",
  "> boot growth-engine",
  "community: 600K+ online",
  "scheduling posts via AI... done",
  "events booked: 400+ / 15 countries",
  "> ship the next campaign",
];

export default function Terminal() {
  const [text, setText] = useState("");
  const full = LINES.join("\n");

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(full);
      return;
    }
    let i = 0;
    let timer;
    const tick = () => {
      i += 1;
      setText(full.slice(0, i));
      if (i < full.length) timer = setTimeout(tick, full[i - 1] === "\n" ? 260 : 32);
    };
    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [full]);

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="dot dot--red" />
        <span className="dot dot--yellow" />
        <span className="dot dot--green" />
        <span className="terminal__title">chirag — zsh</span>
      </div>
      <pre className="terminal__body">
        {text}
        <span className="terminal__cursor">▍</span>
      </pre>
    </div>
  );
}
