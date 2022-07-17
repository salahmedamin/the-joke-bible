import Card from "components/Card";
import { useNavigate } from "react-router";

export const JokeCardStat = ({
  likes,
  title,
  value,
  id,
  custom = false,
  text,
}) => {
  const type = likes < 51 ? "POPULAR" : likes < 101 ? "TRENDING" : "EPIC";
  const navigate = useNavigate();
  return (
    <Card
      style={{
        padding: 20,
        flexGrow: 0,
        flexBasis: "28%",
        display: "flex",
        flexDirection: "column",
      }}
      hover={true}
      onClick={() => (custom ? undefined : navigate(`/joke/${id}`))}
    >
      <div
        style={{
          display: "flex",
          justifyContent: custom ? "center" : "flex-start",
          alignItems: custom ? "center" : undefined,
          fontFamily: "montserrat-semibold",
          fontWeight: 600,
          fontSize: 18,
          width: custom ? "100%" : undefined,
          height: custom ? "100%" : undefined,
        }}
      >
        {custom ? null : (
          <img
            src={`/assets/HW2/${
              type === "POPULAR"
                ? "blue-light@3x"
                : type === "TRENDING"
                ? "green-light@3x"
                : "red-light@3x"
            }.png`}
            style={{ width: 12, height: 22, marginRight: 10 }}
            alt="Bolt"
          />
        )}
        {custom ? text : title || "THE JOKE BIBLE"}
      </div>
      {custom ? null : (
        <div
          style={{
            flexGrow: 1,
            fontFamily: "montserrat",
            marginTop: 20,
            // textOverflow: "ellipsis",
            // overflow: "hidden",
            // whiteSpace: "nowrap",
          }}
        >
          {value}
        </div>
      )}
      {custom ? null : (
        <div
          style={{
            color: "#cfb995",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <span style={{ fontFamily: "montserrat-semibold", marginRight: 10 }}>
            SEE STATS
          </span>
          <img
            src="/assets/HW1/path@3x.png"
            style={{
              width: 23,
              height: 16,
            }}
            alt="arrow"
          />
        </div>
      )}
    </Card>
  );
};
