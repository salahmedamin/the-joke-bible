/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Overflow from "components/Overflow";
import { firstUpCase } from "helper/firstUpCase";
import { paginate } from "helper/paginate";
import { randomInt } from "helper/randomInt";
import { useOnClickOutside } from "hooks/useOnclickOutside";
import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

export default function SearchBar({ endpoint }) {
  const [results, setresults] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [hasError, sethasError] = useState(false);
  const [hasSubmit, sethasSubmit] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [showOverflow, setshowOverflow] = useState(false);
  const search = useCallback(
    async (query) => {
      try {
        setisLoading(true);
        const { data } = await axios.get(endpoint + query);
        if (!Array.isArray(data.result)) throw new Error();
        console.log(data.result);
        setresults(
          paginate(
            data.result.map((e, i) => ({
              ...e,
              likes: randomInt(0, 1100),
              dislikes: randomInt(0, 100),
              noSeparator: i === 3,
            })),
            0,
            4
          )
        );
        setisLoading(false);
      } catch (error) {
        sethasError(true);
      }
    },
    [endpoint]
  );
  const ref = useRef();
  useOnClickOutside(ref, () => setshowOverflow(false));
  useEffect(() => {
    if (hasSubmit) {
      (async () => await search(searchQuery))();
    }
  }, [hasSubmit]);
  return (
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        sethasSubmit(true);
      }}
      style={{
        backgroundImage: isLoading
          ? "url(/assets/chucky.gif)"
          : `url(/assets/${!hasSubmit ? "HW1" : "HW2"}/search-copy@2x.png)`,
        backgroundColor: hasSubmit ? "white" : undefined,
      }}
      className="search-bar"
    >
      <input
        value={searchQuery || ""}
        onChange={(e) => {
          setsearchQuery(e.target.value);
          if (hasError) sethasError(false);
          if (hasSubmit) sethasSubmit(false);
        }}
        type="text"
        style={{ color: hasSubmit ? "black" : undefined }}
        placeholder="How can we make you laugh today?"
        onClick={() => setshowOverflow(true)}
      />
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: 70,
          top: 0,
          right: 0,
          cursor: "pointer",
        }}
        onClick={() => sethasSubmit(true)}
      />
      <Overflow
        searchResPath={"/joke/"}
        isSearch={true}
        arrowPos="left"
        showOverflow={hasSubmit && showOverflow}
        items={isLoading || results.length === 0 ? [""] : results}
        format={(item, i) => {
          const category =
            Array.isArray(item?.categories) && item?.categories?.length > 0
              ? item.categories.at(0)
              : "Uncategorized";
          const type =
            item.likes < 51
              ? "POPULAR"
              : item.likes < 101
              ? "TRENDING"
              : "EPIC";
          return isLoading ? (
            "Looking up your search..."
          ) : results.length === 0 ? (
            "No results match your search"
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: i === 3 ? undefined : 15,
                }}
              >
                <img
                  src={`/assets/HW2/${
                    type === "POPULAR"
                      ? "blue-light@3x"
                      : type === "TRENDING"
                      ? "green-light@3x"
                      : "red-light@3x"
                  }.png`}
                  style={{ width: 12, height: 22, marginRight: 13 }}
                  alt="Bolt"
                />
                <span>
                  {firstUpCase(category)} Joke: {item.value.substring(0, 30)}...
                </span>
              </div>
            </>
          );
        }}
        onItemClick={() => setshowOverflow(false)}
      />
    </form>
  );
}
