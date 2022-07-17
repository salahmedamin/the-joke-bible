import { JokeCardStat } from "./JokeCardStat";

export const CatJokesList = ({
  cat,
  loading,
  sethasMore,
  index,
  setindex,
  jokes,
  search,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 48,
        alignItems: "center",
        justifyContent: jokes.length === 0 ? "center" : "flex-start",
        flexWrap: "wrap",
        marginTop: 25,
      }}
    >
      {jokes.length === 0 && !loading ? (
        <JokeCardStat key={0} custom={true} text={"NO JOKES FOUND"} />
      ) : (
        <>
          {jokes.map((e, i) => (
            <JokeCardStat key={i} {...e} />
          ))}
          {loading ? (
            <JokeCardStat key={1} custom={true} text={"LOADING..."} />
          ) : null}
        </>
      )}
    </div>
  );
};
