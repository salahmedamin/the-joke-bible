import { Separator } from "components/Separator";
import { useNavigate } from "react-router";
import "./style.css";
export default function Overflow({
  showOverflow,
  items,
  arrowPos = "left",
  isSearch = false,
  format = undefined,
  searchResPath = "",
  onItemClick = () => undefined,
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`overflow ${showOverflow ? "show" : "hide"} ${
        isSearch ? " search" : ""
      }`}
    >
      <div
        style={{ position: "absolute", [arrowPos]: 20, bottom: "100%" }}
        className="arrow-up"
      />
      {items.map((e, i) => (
        <div
          onClick={async () => {
            if (isSearch) navigate(`${searchResPath}${e.id}`);
            await onItemClick();
          }}
          className={e.className ? e.className : `overflow-item`}
          key={i}
        >
          {format ? format(e, i) : e.value ? e.value : e}
          {e.noSeparator ? null : (
            <Separator
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "95%",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
