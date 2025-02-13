import Rating from '../Rating/Rating';
import './Card.css'
import like from '/src/assets/like.svg'; 
import TitleCard from '../TitleCard/TitleCard';
import CardImage from '../CardImage/CardImage';


function Card ({title, rating, image, favorite}) {
	return (
		<>
			<div className="card">
				<CardImage src={image} />
					<Rating number={rating}/>
				<div className='card__content'>
					<TitleCard text={title} />
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