import axios from "axios";
import Card from "components/Card";
import { paginate } from "helper/paginate";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { topJokesSlice } from "redux/reducers/topJokes";

export const TopJokes = () => {
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const search = useCallback(async () => {
    setisLoading(true);
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    dispatch(
      topJokesSlice.actions.setTopJokes({ jokes: paginate(data.result, 0, 10) })
    );
    setisLoading(false);
  }, []);
  const { topJokes } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    if (topJokes.length === 0) {
      (async () => await search())();
    }
  }, []);
  return (
    <Card
      style={{
        width: "25%",
        marginLeft: "5%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 25,
        height: "auto",
      }}
    >
      <div
        style={{
          fontFamily: "montserrat-semibold",
          fontSize: 14,
        }}
      >
        THE TOP 10 JOKES THIS WEEK
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
        {isLoading
          ? "Loading..."
          : topJokes.map((e, i) => (
              <div
                onClick={() => navigate(`/joke/${e.id}`)}
                style={{
                  textDecoration: "underline",
                  fontFamily: "montserrat",
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  marginTop: 15,
                }}
                key={e.id}
              >
                {e.value}
              </div>
            ))}
      </div>
    </Card>
  );
};
