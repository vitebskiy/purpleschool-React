import "./App.css";
import "./index.css";
import Search from "./layouts/Search/Search";
import Header from "./layouts/Header/Header";
import FilmList from "./components/ListFilm/ListFilm";
import films from "./data/films";



function App() {

  const handleSearch = () => {
    alert('Поиск');
  };

  return (
    <>
      <Header />
      <div className="row">
        <Search onClick={handleSearch} title={"Поиск"} className={"input-icon"} descr={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное"} placeholder={"Введите название"} />
      </div>
      <FilmList  films={films}/>
    </>
  );
}

export default App;
