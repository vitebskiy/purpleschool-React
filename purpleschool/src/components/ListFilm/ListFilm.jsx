import styles from "./ListFilm.module.css";
import Card from "../Card/Card";

function FilmList({ films }) {
  return (
    <ul className={styles["list-film"]}>
      {films.map((film) => (
        <li className={styles["list-film__item"]} key={film.id}>
					<Card title={film.title} rating={film.rating} image={film.image} favorite={film.favorite} />
				</li>
      ))}
    </ul>
  );
}

export default FilmList;
