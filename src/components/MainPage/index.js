import axios from "axios";
import { MiddleContainer } from "components/Container/MiddleContainer";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { categoriesSlice } from "redux/reducers/categories";
import { Categories } from "./Categories";
import { CategoryJokes } from "./CategoryJokes";
import "./style.css";
const colors = [
  "#ff5b5b",
  "#ff915b",
  "#ffbe5b",
  "#ffdf5b",
  "#8fe360",
  "#57e690",
  "#57dbe6",
];
export const MainPage = () => {
  const { cat } = useParams();
  const navigate = useNavigate();
  const categories = useSelector((s) => s.categories);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const getCats = useCallback(async () => {
    setloading(true);
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    dispatch(
      categoriesSlice.actions.setCats({ cats: [...data, "uncategorized"] })
    );
    setloading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!categories?.length) (async () => await getCats())();
    if (categories.length && cat && !categories.includes(cat)) navigate("/");
  }, [cat, categories, getCats, navigate]);
  return (
    <MiddleContainer style={{ paddingBottom: 50, paddingTop: 25 }}>
      <div className="single-joke" style={{ width: "90%" }}>
        {!loading ? (
          <Categories colors={colors} cats={categories} />
        ) : (
          <div style={{ fontFamily: "montserrat-extrabold", fontSize: 20 }}>
            LOADING...
          </div>
        )}
        {cat && !loading ? (
          <CategoryJokes colors={colors} cat={cat || "simple"} />
        ) : null}
      </div>
    </MiddleContainer>
  );
};
