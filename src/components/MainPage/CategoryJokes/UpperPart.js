import { Separator } from "components/Separator";
import Snippet from "components/Snippet";
import { useSelector } from "react-redux";

export const UpperPart = ({ cat, colors, loading }) => {
  const { categories } = useSelector((s) => s);
  const i = categories.findIndex((e) => e === cat);
  const color = i < 7 ? colors[i] : colors[i - Math.floor(i / 7) * 7];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Snippet
        background={loading ? "green" : color}
        text={loading ? "LOADING YOUR JOKES" : `${cat.toUpperCase()} JOKES`}
        cssVar={false}
        style={{
          flexGrow: loading ? 1 : undefined,
        }}
        showDot={loading}
      />
      <Separator
        style={{
          flexGrow: 1,
          alignSelf: "flex-start",
        }}
      />
    </div>
  );
};
