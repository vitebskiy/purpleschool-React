import star from '/src/assets/star.svg'; 
import './Rating.css'


function Rating({rating}) {
  return (
    <>
      <div className="rating">
        <img className="rating__icon" src={star} alt="star" />
        {rating}
      </div>
    </>
  );
}

export default Rating;
