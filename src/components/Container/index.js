import "./style.css";
export default function Container({ children, style = {} }) {
  return (
    <div style={style} className="container">
      {children}
    </div>
  );
}
