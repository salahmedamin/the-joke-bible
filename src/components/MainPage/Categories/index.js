import Card from "components/Card";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";

export const Categories = ({ cats, colors }) => {
  const navigate = useNavigate();
  const [expand, setexpand] = useState(false);
  return (
    <div className="cats-holder">
      {cats
        .filter((_, i) => (expand ? true : i < 7))
        .map((e, i) => (
          <Card
            onClick={() => navigate(`/category/${e}`)}
            style={{
              backgroundColor:
                i < 7 ? colors[i] : colors[i - Math.floor(i / 7) * 7],
              color: "white",
            }}
            key={e}
          >
            {e.toUpperCase()} JOKES
          </Card>
        ))}
      <Card
        className={"viewall"}
        style={{
          backgroundColor: "transparent",
          color: "#cfb995",
          border: "1px solid #cfb995",
          backgroundImage: !expand
            ? "url(/assets/HW1/path-copy-7@3x.png)"
            : undefined,
          boxShadow: "none",
        }}
        onClick={() => setexpand(!expand)}
      >
        {expand ? "HIDE" : "VIEW ALL"}
      </Card>
    </div>
  );
};
