import axios from "axios";
import Card from "components/Card";
import { randomInt } from "helper/randomInt";
import { useCallback, useEffect, useState } from "react";
import { CatJokesList } from "./CatJokesList";
import "./style.css";
import { UpperPart } from "./UpperPart";
const extract = ({ arr, cat, index = 0, size = 10 }) => {
  let res = [],
    i = index;
  const toFetch = arr.slice(index);
  while (res.length < size && i < arr.length) {
    // console.log("hey");
    if (
      toFetch[i].categories.includes(cat) ||
      (cat === "uncategorized" && toFetch[i].categories.length === 0)
    )
      res.push(toFetch[i]);
    i++; //increment counter at each time to know where u stopped
  }
  return [res, i];
};
export const CategoryJokes = ({ cat, colors }) => {
  const [loading, setloading] = useState(false);
  const [hasMore, sethasMore] = useState(true);
  const [index, setindex] = useState(0);
  const [jokes, setjokes] = useState([]);
  const search = useCallback(async (_cat, _index) => {
    setloading(true);
    const {
      data: { result },
    } = await axios.get(`https://api.chucknorris.io/jokes/search?query=all`);
    const [toSet, newIndex] = extract({
      arr: result,
      cat: _cat,
      index: _index,
      size: 10,
    });
    setjokes(
      toSet.map((e) => ({
        ...e,
        likes: randomInt(0, 1001),
        dislikes: randomInt(0, 100),
      }))
    );
    setindex(newIndex);
    sethasMore(toSet.length === 10);
    setloading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cat) (async () => await search(cat, index))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setindex(0);
    sethasMore(true);
    (async () => await search(cat, 0))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, search, sethasMore]);
  return (
    <div style={{ marginTop: 20 }}>
      <UpperPart cat={cat} colors={colors} loading={loading} />
      <CatJokesList
        sethasMore={sethasMore}
        loading={loading}
        setloading={setloading}
        cat={cat}
        index={index}
        jokes={jokes}
        search={search}
        setindex={setindex}
        setjokes={setjokes}
      />

      {hasMore && !loading ? (
        <div className="cats-holder" style={{ justifyContent: "center" }}>
          <Card
            className="viewall"
            style={{
              backgroundColor: "transparent",
              color: "#cfb995",
              border: "1px solid #cfb995",
              backgroundImage: "url(/assets/HW1/path-copy-7@3x.png)",
              boxShadow: "none",
            }}
            onClick={async () => await search(cat, index)}
          >
            VIEW MORE
          </Card>
        </div>
      ) : null}
    </div>
  );
};
