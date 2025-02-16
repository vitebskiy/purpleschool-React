import styles from "./Search.module.css";
import Button from "../../components/Button/Button";

function Search({ title, descr, placeholder, className, onClick }) {
  const cl = `${styles["search__input"]}` + (className ? " " + className : "");

  return (
    <>
      <div className={styles["search"]}>
        <h2 className={styles["search__title"]}>{title}</h2>
        {descr ? <p className={styles["search__descr"]}>{descr}</p> : null}
        <div className={styles["search__row"]}>
          <input type="text" className={cl} placeholder={placeholder} />  
          <Button onClick={onClick} text={"Искать"} />
        </div>
      </div>
    </>
  );
}

export default Search;
