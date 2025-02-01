import "./App.css";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Header title={"Поиск"} />
      <Description descr={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."} />
      <Button text={"Искать"} />
    </>
  );
}

export default App;
