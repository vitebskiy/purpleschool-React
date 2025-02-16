import "./ListFilm.css";
import Card from "../Card/Card";

function FilmList({ films }) {
  return (
    <ul className="list-film">
      {films.map((film) => (
        <li className="list-film__item" key={film.id}>
					<Card title={film.title} rating={film.rating} image={film.image} favorite={film.favorite} />
				</li>
      ))}
    </ul>
  );
}

export default FilmList;
