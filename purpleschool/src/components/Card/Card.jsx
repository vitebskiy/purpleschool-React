import Rating from '../Rating/Rating';
import styles from './Card.module.css'
import like from '/src/assets/like.svg'; 
import TitleCard from '../TitleCard/TitleCard';
import CardImage from '../CardImage/CardImage';


function Card ({title, rating, image, favorite}) {
	return (
		<>
			<div className={styles["card"]}>
				<CardImage src={image} />
					<Rating rating={rating}/>
				<div className={styles['card__content']}>
					<TitleCard text={title} />
					<button className={styles['card__favorite']}>
					<img className={styles['card__icon']} src={like} alt="like" />
					{favorite}
					</button>
				</div>
			</div>
		</>
	)
}

export default Card