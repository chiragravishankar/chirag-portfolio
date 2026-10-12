import { useEffect, useState } from "react";
import { useInView, prefersReducedMotion } from "../hooks";

/* Counts up the numeric part of values like "600K+" once scrolled into view. */
export default function Stat({ value }) {
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const prefix = value.match(/^[^0-9]*/)[0];
  const suffix = value.replace(/^[^0-9]*[0-9]+/, "");
  const [ref, inView] = useInView(0.3);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(target)) return;
    if (prefersReducedMotion()) {
      setCurrent(target);
      return;
    }
    let start;
    let raf;
    const step = (ts) => {
      start ??= ts;
      const p = Math.min((ts - start) / 1200, 1);
      setCurrent(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  if (isNaN(target)) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
