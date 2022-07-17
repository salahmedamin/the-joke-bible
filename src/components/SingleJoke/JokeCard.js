import Card from "components/Card";
import Snippet from "components/Snippet";
import { firstUpCase } from "helper/firstUpCase";

export const JokeCard = ({
  loading,
  joke: { likes, value, categories = [] },
}) => {
  const type = likes < 51 ? "POPULAR" : likes < 101 ? "TRENDING" : "EPIC";
  return (
    <Card
      hover={true}
      style={{
        width: "100%",
        height: 350,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 50,
            height: 50,
            backgroundImage: "url(/assets/chucky.gif)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Snippet
              background={"--weird-green"}
              text={`${
                categories.length === 0
                  ? "Uncategorized"
                  : firstUpCase(categories[0])
              } Jokes`}
            />
            <Snippet
              color={`${
                type === "POPULAR"
                  ? "--popular-blue"
                  : type === "TRENDING"
                  ? "--pastel-orange"
                  : "--epic-red"
              }`}
              text={type}
            />
          </div>
          <div
            className="joke-bible-title"
            style={{ fontWeight: "600", marginTop: 25, marginBottom: 20 }}
          >
            The Granny Joke
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 18,
              fontFamily: "montserrat",
            }}
          >
            {value}
          </div>
        </>
      )}
    </Card>
  );
};
