import SearchBar from "components/SearchBar";
import "./style.css";

export default function JokeBible() {
  return (
    <div
      style={{ backgroundImage: "url(/assets/HW1/bitmap@3x.png)" }}
      className="joke-bible"
    >
      <div className="joke-bible-title">The Joke Bible</div>
      <div className="joke-bible-subtitle">Daily laughs for you and yours</div>
      <SearchBar endpoint={"https://api.chucknorris.io/jokes/search?query="} />
    </div>
  );
}
