import { useNavigate } from "react-router";
import "./arrow.css";
export default function ArrowBack() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      style={{
        width: 80,
        height: 80,
        backgroundImage: "url(/assets/back.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        cursor: "pointer",
        transform: "translateX(-12px)",
        marginBottom: 30,
      }}
    ></div>
  );
}
