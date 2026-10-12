import { useInView } from "../hooks";

export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ ...style, "--delay": `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
