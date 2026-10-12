import { useRef, useState } from "react";

let topZ = 10;

/* A desktop object the visitor can pick up and move around the hero. */
export default function Draggable({ className = "", label, delay = 0, children }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [z, setZ] = useState(undefined);
  const drag = useRef(null);

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { px: e.clientX, py: e.clientY, x: offset.x, y: offset.y, moved: false };
    setDragging(true);
    setZ(++topZ);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.px;
    const dy = e.clientY - d.py;
    if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
    setOffset({ x: d.x + dx, y: d.y + dy });
  };

  const onPointerUp = () => {
    setDragging(false);
    // keep `moved` around for the click that follows pointerup
    setTimeout(() => (drag.current = null), 0);
  };

  const onClickCapture = (e) => {
    if (drag.current?.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`drag ${dragging ? "is-dragging" : ""} ${className}`}
      style={{ "--dx": `${offset.x}px`, "--dy": `${offset.y}px`, "--delay": `${delay}s`, zIndex: z }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClickCapture={onClickCapture}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      <div className="drag__inner">{children}</div>
    </div>
  );
}
