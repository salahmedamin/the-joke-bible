import HeaderItem from "./HeaderItem";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <HeaderItem text={"SO FUNKTIONERT'S"} />
      <HeaderItem text={"SONDERANGEBOTE"} />
      <HeaderItem text={"MEIN BEREICH"} isBereich={true} />
    </div>
  );
};
