import "./App.css";
import "./index.css";
import Search from "./layouts/Search/Search";
import Header from "./layouts/Header/Header";
import FilmList from "./components/ListFilm/ListFilm";


function App() {

  const films = [{
    id: 1,
    title: 'Black Widow',
    image: '/src/assets/images/card1.png',
    rating: 324,
    favorite: 'В избранное'
  }, {
    id: 2,
    title: 'Shang Chi',
    image: '/src/assets/images/card2.png',
    rating: 124,
    favorite: 'В избранное'
  },
  {
    id: 3,
    title: 'Loki',
    image: '/src/assets/images/card3.png',
    rating: 235,
    favorite: 'В избранное'
  },
  {
    id: 4,
    title: 'How I Met Your Mother',
    image: '/src/assets/images/card4.png',
    rating: 123,
    favorite: 'В избранное'
  }
]

  return (
    <>
      <Header />
      <div className="row">
        <Search title={"Поиск"} className={"input-icon"} descr={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное"} placeholder={"Введите название"} />
      </div>
      <FilmList films={films}/>
    </>
  );
}

export default App;
