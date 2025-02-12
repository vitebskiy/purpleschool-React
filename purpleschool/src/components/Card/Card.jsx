import './Card.css'
import star from '/src/assets/star.svg'; 
import like from '/src/assets/like.svg'; 


function Card ({title, rating, image, favorite}) {
	return (
		<>
			<div className="card">
				<img className='card__img' src={image} alt="Постер" />
					<span className='card__rating'>
						<img className='card__icon' src={star} alt="star" />
						{rating}</span>
				<div className='card__content'>
					<h2 className='card__title'>{title}</h2>
					<button className='card__favorite'>
					<img className='card__icon' src={like} alt="like" />
					{favorite}
					</button>
				</div>
			</div>
		</>
	)
}

export default Card