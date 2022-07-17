import "./style.css";

export default function Snippet({
  showDot = true,
  text,
  background,
  color,
  cssVar = true,
}) {
  return (
    <div
      className="snippet"
      style={{
        background: background
          ? cssVar
            ? `var(${background})`
            : background
          : undefined,
      }}
    >
      <div
        className="dot"
        style={{
          fontSize: 50,
          color: !showDot
            ? "transparent"
            : background
            ? "white"
            : cssVar
            ? `var(${color})`
            : color,
        }}
      >
        &#8226;
      </div>
      <div
        style={{
          fontWeight: "bold",
          color: background ? "white" : cssVar ? `var(${color})` : color,
        }}
      >
        {text}
      </div>
    </div>
  );
}
