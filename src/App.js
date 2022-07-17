import Container from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import JokeBible from "components/JokeBible";
import { MainPage } from "components/MainPage";
import SingleJoke from "components/SingleJoke";
import { Route, Routes } from "react-router";
import "./colors.css";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <JokeBible />
        <Routes>
          {["/", "/category/:cat"].map((path, i) => (
            <Route key={i} path={path} element={<MainPage />} />
          ))}
          <Route path="/joke/:id" element={<SingleJoke />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
