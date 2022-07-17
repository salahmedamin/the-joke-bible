import axios from "axios";
import Container from "components/Container";
import { MiddleContainer } from "components/Container/MiddleContainer";
import { randomInt } from "helper/randomInt";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArrowBack from "./ArrowBack";
import { JokeCard } from "./JokeCard";
import { JokeFooter } from "./JokeFooter";
import "./style.css";
import { TopJokes } from "./TopJokes";

export default function SingleJoke() {
  const { id } = useParams();
  const [joke, setjoke] = useState({});
  const [loadedJokes, setloadedJokes] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const getJoke = useCallback(
    async ({ _id, isRandom = false }) => {
      try {
        const isFound = loadedJokes.find((e) => e.id === _id);
        if (isFound) {
          setjoke(isFound);
        } else {
          setloading(true);
          const { data } = await axios.get(
            `https://api.chucknorris.io/jokes/${isRandom ? "random" : _id}`
          );
          if (isRandom) {
            navigate(`/joke/${data.id}`);
          } else {
            const _joke = {
              ...data,
              likes: randomInt(0, 1500),
              dislikes: randomInt(0, 100),
            };
            setjoke(_joke);
            setloadedJokes((prev) => [...prev, _joke]);
            setloading(false);
          }
        }
      } catch (e) {
        navigate("/");
      }
    },
    [loadedJokes, navigate]
  );
  useEffect(() => {
    (async () => await getJoke({ _id: id }))();
  }, [id, getJoke]);
  return (
    <MiddleContainer style={{ paddingBottom: 40, paddingTop: 20 }}>
      <div className="single-joke">
        <ArrowBack />
        <Container //holds single joke and top 10
          style={{
            marginTop: 0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Container //holds single joke
            style={{
              marginTop: 0,
              width: "70%",
            }}
          >
            <JokeCard loading={loading} joke={joke} />
            <JokeFooter
              getJoke={getJoke}
              setjoke={setjoke}
              loadedJokes={loadedJokes}
              currentJokeIndex={loadedJokes.findIndex((e) => e.id === joke?.id)}
              {...joke}
            />
          </Container>
          <TopJokes />
        </Container>
      </div>
    </MiddleContainer>
  );
}
