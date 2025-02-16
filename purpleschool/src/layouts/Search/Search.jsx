import "./Search.css";
import Button from "../../components/Button/Button";

function Search({ title, descr, placeholder, className, onClick }) {
  const cl = "search__input" + (className ? " " + className : "");

  return (
    <>
      <div className="search">
        <h2 className="search__title">{title}</h2>
        {descr ? <p className="search__descr">{descr}</p> : null}
        <div className="row">
          <input type="text" className={cl} placeholder={placeholder} />  
          <Button onClick={onClick} text={"Искать"} />
        </div>
      </div>
    </>
  );
}

export default Search;
