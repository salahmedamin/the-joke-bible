import { useHover } from "hooks/useHover";
import "./style.css";
export default function Card({ onClick, style, children, hover, className }) {
  const [ref, ih] = useHover();
  return (
    <div
      ref={ref}
      style={{
        cursor: hover ? "grab" : "pointer",
        ...style,
      }}
      className={`card ${hover && ih ? "shadow-xl" : "shadow"}${
        className ? ` ${className}` : ""
      }`} //if hovered and using hover, shadow-xl as classname, else shadow
      onClick={onClick}
    >
      {children}
    </div>
  );
}
