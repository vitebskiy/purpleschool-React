import "./App.css";
import "./index.css";
import Search from "./layouts/Search/Search";
import Button from "./components/Button/Button";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="row">
        <Search title={"Поиск"} className={"input-icon"} descr={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное"} placeholder={"Введите название"} />
      </div>
    </>
  );
}

export default App;
