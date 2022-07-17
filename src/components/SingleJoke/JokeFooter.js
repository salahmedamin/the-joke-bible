import { useNavigate } from "react-router";
import { Like } from "./JokeFooter/Like";
import { PrevNext } from "./JokeFooter/PrevNext";

export const JokeFooter = ({
  likes,
  dislikes,
  getJoke,
  setjoke,
  loadedJokes,
  currentJokeIndex,
}) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
        padding: "0px 20px 0px 20px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", gap: 10, marginLeft: 10 }}>
        {" "}
        {/** HOLDS LIKE AND DISLIKE */}
        <Like
          onClick={() =>
            setjoke({
              ...loadedJokes[currentJokeIndex],
              likes: loadedJokes[currentJokeIndex].likes + 1,
            })
          }
          isLike={true}
          count={likes}
        />
        <Like
          onClick={() =>
            setjoke({
              ...loadedJokes[currentJokeIndex],
              dislikes: loadedJokes[currentJokeIndex].dislikes + 1,
            })
          }
          isLike={false}
          count={dislikes}
        />
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {" "}
        {/** HOLDS NEXT AND PREVIOUS */}
        {!currentJokeIndex || !loadedJokes.length ? null : (
          <PrevNext
            onClick={() =>
              navigate(`/joke/${loadedJokes[currentJokeIndex - 1].id}`)
            }
            isNext={false}
          />
        )}
        <PrevNext
          onClick={async () =>
            currentJokeIndex < loadedJokes.length - 1
              ? navigate(`/joke/${loadedJokes[currentJokeIndex + 1].id}`)
              : await getJoke({ isRandom: true })
          }
          isNext={true}
        />
      </div>
    </div>
  );
};
