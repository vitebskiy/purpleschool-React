import star from '/src/assets/star.svg'; 
import styles from './Rating.module.css'


function Rating({rating}) {
  return (
    <>
      <div className={styles["rating"]}>
        <img className={styles["rating__icon"]} src={star} alt="star" />
        {rating}
      </div>
    </>
  );
}

export default Rating;
